using UnityEngine;
using System.Collections.Generic;
using System.Collections;
using System;

public class GroundPlatform : MonoBehaviour
{
    public GameObject Container;
    public ParticleSystem removeParticle;

    [SerializeField] private Material glowMaterial;
    [SerializeField] private Renderer platformRenderer;
    [SerializeField] private GroundPlatform[] neighborPlatforms;

    private const float HeightStep = 0.075f;
    private int pendingRemovalsOnThisPlatform = 0;
    private HashSet<GroundPlatform> activeNeighbors = new HashSet<GroundPlatform>();
    private Material originalMaterial;

    private void Awake()
    {
        if (platformRenderer != null)
        {
            originalMaterial = platformRenderer.material;
        }
    }

    private void Start()
    {
        InitializeColorsInContainer(Container);
        ScanForNeighborsAtStart();
    }

    private void ScanForNeighborsAtStart()
    {
        if (neighborPlatforms == null) return;
        foreach (GroundPlatform neighbor in neighborPlatforms)
        {
            if (neighbor != null && neighbor != this)
            {
                activeNeighbors.Add(neighbor);
            }
        }
    }

    public void InitializeColorsInContainer(GameObject container)
    {
        if (container == null) return;
        foreach (Transform child in container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null && child.gameObject.activeSelf && !hex.IsInitialized())
            {
                hex.IdentifyColorByMaterial();
            }
        }
    }

    public void ForceInitializeColorsInContainer(GameObject container)
    {
        if (container == null) return;
        foreach (Transform child in container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null && child.gameObject.activeSelf)
            {
                hex.IdentifyColorByMaterial();
            }
        }
    }

    public Hexagon GetTopHexagon(GameObject container)
    {
        if (container == null) return null;
        Hexagon topHex = null;
        float maxY = -9999f;
        foreach (Transform childTransform in container.transform)
        {
            if (!childTransform.gameObject.activeSelf) continue;
            Hexagon hex = childTransform.GetComponent<Hexagon>();
            if (hex == null) continue;
            if (childTransform.localPosition.y > maxY)
            {
                maxY = childTransform.localPosition.y;
                topHex = hex;
            }
        }
        return topHex;
    }

    public List<Hexagon> GetBlocksToTransfer(GameObject container, Hexagon.HexagonColor targetColor)
    {
        List<Hexagon> allHexes = new List<Hexagon>();
        foreach (Transform child in container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null && child.gameObject.activeSelf)
            {
                allHexes.Add(hex);
            }
        }
        allHexes.Sort((a, b) => b.transform.localPosition.y.CompareTo(a.transform.localPosition.y));
        List<Hexagon> result = new List<Hexagon>();
        foreach (Hexagon hex in allHexes)
        {
            if (hex.GetColor() == targetColor)
            {
                result.Add(hex);
            }
            else
            {
                break;
            }
        }
        return result;
    }

    public int GetColorCount(Hexagon.HexagonColor color)
    {
        return GetBlocksToTransfer(Container, color).Count;
    }

    public List<Hexagon> GetTopContinuousBlocks(Hexagon.HexagonColor color)
    {
        return GetBlocksToTransfer(Container, color);
    }

    public int GetBlockCount()
    {
        return Container == null ? 0 : Container.transform.childCount;
    }

    public bool CheckAndClearMatch(int matchThreshold)
    {
        Hexagon topHex = GetTopHexagon(Container);
        if (topHex == null) return false;

        Hexagon.HexagonColor colorToCheck = topHex.GetColor();
        List<Hexagon> matchingHexes = GetBlocksToTransfer(Container, colorToCheck);

        if (matchingHexes.Count >= matchThreshold)
        {
            // Увеличиваем локальный счетчик
            pendingRemovalsOnThisPlatform += matchingHexes.Count;

            // Увеличиваем глобальный счетчик
            PlatformManager.Instance.IncrementPendingRemovals(matchingHexes.Count);

            ClearHexagonsSequentially(matchingHexes);
            return true;
        }
        return false;
    }

    private void ClearHexagonsSequentially(List<Hexagon> hexesToRemove)
    {
        for (int i = 0; i < hexesToRemove.Count; i++)
        {
            StartCoroutine(PlayRemoveAnimation(hexesToRemove[i], i * 0.05f));
        }
    }

    private IEnumerator PlayRemoveAnimation(Hexagon hex, float delay)
    {
        yield return new WaitForSeconds(delay);

        if (hex != null)
        {
            hex.PlayRemoveAnimation(() =>
            {
                if (PlatformManager.Instance != null)
                {
                    PlatformManager.Instance.DecrementPendingRemovals();
                }

                // Уменьшаем локальный счетчик для партикла
                pendingRemovalsOnThisPlatform--;
                if (pendingRemovalsOnThisPlatform <= 0 && removeParticle != null)
                {
                    pendingRemovalsOnThisPlatform = 0;
                    StartCoroutine(PlayFinalRemoveEffect(hex));
                }
            });
        }
    }

    private IEnumerator PlayFinalRemoveEffect(Hexagon sourceHex)
    {
        if (removeParticle == null || sourceHex == null) yield break;

        Hexagon.HexagonColor color = sourceHex.GetColor();
        Gradient targetGradient = null;

        foreach (var pair in sourceHex.colorMaterials)
        {
            if (pair.color == color)
            {
                targetGradient = pair.particleGradient;
                break;
            }
        }

        if (targetGradient != null)
        {
            var colorModule = removeParticle.colorOverLifetime;
            colorModule.color = new ParticleSystem.MinMaxGradient(targetGradient);
        }

        float timeout = 2f;
        float elapsed = 0f;

        while (Container != null && Container.transform.childCount > 0 && elapsed < timeout)
        {
            yield return null;
            elapsed += Time.deltaTime;
        }

        if (Container == null || Container.transform.childCount == 0)
        {
            removeParticle.Stop();
            removeParticle.Play();
        }
    }

    public void StartTransferAnimation(GroundPlatform targetPlatform, List<Hexagon> blocksToMove, Action onComplete, float speedMultiplier = 1.0f)
    {
        float baseHeight = 0f;
        Hexagon topHex = GetTopHexagon(targetPlatform.Container);
        if (topHex != null) baseHeight = topHex.transform.localPosition.y + HeightStep;

        int completedCount = 0;
        if (blocksToMove.Count == 0)
        {
            onComplete?.Invoke();
            return;
        }

        for (int i = 0; i < blocksToMove.Count; i++)
        {
            Hexagon hex = blocksToMove[i];
            float targetY = baseHeight + (i * HeightStep);
            Vector3 localTargetPos = new Vector3(0f, targetY, 0f);
            Vector3 worldTargetPos = targetPlatform.Container.transform.TransformPoint(localTargetPos);
            bool isAlreadyOnTarget = hex.transform.parent == targetPlatform.Container.transform;

            if (isAlreadyOnTarget)
            {
                hex.transform.localPosition = localTargetPos;
                hex.transform.localRotation = Quaternion.identity;
                completedCount++;
                if (completedCount == blocksToMove.Count) onComplete?.Invoke();
            }
            else
            {
                hex.transform.SetParent(targetPlatform.Container.transform, true);
                StartCoroutine(PlaySequentialJump(hex, worldTargetPos, localTargetPos, i * 0.1f, () =>
                {
                    completedCount++;
                    if (completedCount == blocksToMove.Count) onComplete?.Invoke();
                }, speedMultiplier));
            }
        }
    }

    private IEnumerator PlaySequentialJump(Hexagon hex, Vector3 worldTargetPos, Vector3 localTargetPos, float delay, Action onJumpFinished, float speedMultiplier = 1.0f)
    {
        yield return new WaitForSeconds(delay);
        if (hex == null) { onJumpFinished?.Invoke(); yield break; }
        hex.PlayJumpAnimation(worldTargetPos, hex.transform.rotation, () =>
        {
            if (hex != null)
            {
                hex.transform.localPosition = localTargetPos;
                hex.transform.localRotation = Quaternion.identity;
            }
            onJumpFinished?.Invoke();
        }, speedMultiplier);
    }

    public IEnumerable<GroundPlatform> GetActiveNeighbors() => activeNeighbors;

    public void SetGlow()
    {
        if (platformRenderer != null && glowMaterial != null) platformRenderer.material = glowMaterial;
    }

    public void RemoveGlow()
    {
        if (platformRenderer != null && originalMaterial != null) platformRenderer.material = originalMaterial;
    }

    public bool IsAvailable() => Container != null && Container.transform.childCount == 0;

    [ContextMenu("Debug Board State")]
    public void DebugLogBoardState()
    {
        Debug.Log("=== ДИАГНОСТИКА СОСТОЯНИЯ ДОСКИ ===");
        GroundPlatform[] allPlatforms = PlatformManager.Instance.GroundPlatforms;
        System.Array.Sort(allPlatforms, (a, b) => a.name.CompareTo(b.name));
        foreach (GroundPlatform p in allPlatforms)
        {
            if (p == null) continue;
            p.InitializeColorsInContainer(p.Container);
            Hexagon top = p.GetTopHexagon(p.Container);
            string topColor = top != null ? top.GetColor().ToString() : "EMPTY";
            Dictionary<Hexagon.HexagonColor, int> colorCounts = new Dictionary<Hexagon.HexagonColor, int>();
            foreach (Transform child in p.Container.transform)
            {
                if (!child.gameObject.activeSelf) continue;
                Hexagon h = child.GetComponent<Hexagon>();
                if (h != null)
                {
                    Hexagon.HexagonColor c = h.GetColor();
                    if (colorCounts.ContainsKey(c)) colorCounts[c]++;
                    else colorCounts[c] = 1;
                }
            }
            string countsStr = "";
            foreach (var kvp in colorCounts) countsStr += $"{kvp.Key}:{kvp.Value} ";
            string neighborsInfo = "";
            foreach (var n in p.activeNeighbors)
            {
                if (n != null)
                {
                    Hexagon nTop = n.GetTopHexagon(n.Container);
                    string nColor = nTop != null ? nTop.GetColor().ToString() : "EMPTY";
                    neighborsInfo += $"[{n.name}: {nColor}] ";
                }
            }
            Debug.Log($"Платформа {p.name}: Верхний = {topColor}. Состав: [{countsStr.Trim()}]. Соседи: {neighborsInfo}");
        }
        Debug.Log("=== КОНЕЦ ДИАГНОСТИКИ ===");
    }
}