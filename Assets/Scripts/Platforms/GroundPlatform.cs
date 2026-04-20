using UnityEngine;
using System.Collections.Generic;
using System.Collections;
using System;

public class GroundPlatform : MonoBehaviour
{
    public GameObject Container;

    [SerializeField] private Material glowMaterial;
    [SerializeField] private Renderer platformRenderer;
    [SerializeField] private GroundPlatform[] neighborPlatforms;

    private HashSet<GroundPlatform> activeNeighbors = new HashSet<GroundPlatform>();

    private Material originalMaterial;
    private const int MatchCountThreshold = 10;
    private const float HeightStep = 0.075f;

    private bool isProcessingChain = false;

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

    public void OnStackDropped()
    {
        if (!isProcessingChain)
        {
            StartCoroutine(ProcessChainReaction());
        }
    }

    private IEnumerator ProcessChainReaction()
    {
        if (isProcessingChain) yield break;
        isProcessingChain = true;

        bool globalStateChanged = true;
        int safetyCounter = 0;
        const int maxIterations = 100;

        int stepCount = 0;

        HashSet<GroundPlatform> touchedPlatforms = new HashSet<GroundPlatform>();
        touchedPlatforms.Add(this);

        while (globalStateChanged && safetyCounter < maxIterations)
        {
            safetyCounter++;
            globalStateChanged = false;

            // --- ФАЗА 1: ПОЛНЫЙ ПРОХОД ПЕРЕМЕЩЕНИЙ ---

            Queue<GroundPlatform> platformsToCheck = new Queue<GroundPlatform>(touchedPlatforms);
            HashSet<GroundPlatform> visitedInThisPhase = new HashSet<GroundPlatform>();

            bool movedSomething = false;

            foreach (var p in touchedPlatforms)
            {
                if (p != null) InitializeColorsInContainer(p.Container);
            }

            while (platformsToCheck.Count > 0)
            {
                GroundPlatform current = platformsToCheck.Dequeue();

                if (current == null) continue;
                if (visitedInThisPhase.Contains(current)) continue;
                visitedInThisPhase.Add(current);

                Hexagon currentTop = current.GetTopHexagon(current.Container);
                if (currentTop == null) continue;

                Hexagon.HexagonColor color = currentTop.GetColor();

                GroundPlatform target = null;
                List<Hexagon> blocksToMove = null;

                foreach (GroundPlatform neighbor in current.activeNeighbors)
                {
                    if (neighbor == null) continue;

                    Hexagon neighborTop = neighbor.GetTopHexagon(neighbor.Container);

                    if (neighborTop != null && neighborTop.GetColor() == color)
                    {
                        List<Hexagon> candidates = current.GetBlocksToTransfer(current.Container, color);
                        if (candidates.Count > 0)
                        {
                            target = neighbor;
                            blocksToMove = candidates;
                            break;
                        }
                    }
                }

                if (target != null && blocksToMove != null && blocksToMove.Count > 0)
                {
                    movedSomething = true;
                    globalStateChanged = true;

                    stepCount++;
                    stepCount = Mathf.Min(stepCount, 3); // ограничитель скорости
                    float speedMultiplier = Mathf.Pow(1.3f, stepCount - 1);

                    Debug.Log($"Перемещаем {blocksToMove.Count} блоков цвета {color} с {current.name} на {target.name}. Шаг: {stepCount}, Скорость x{speedMultiplier:F2}");

                    bool animDone = false;
                    current.StartTransferAnimation(target, blocksToMove, () => { animDone = true; }, speedMultiplier);

                    yield return new WaitUntil(() => animDone);

                    Debug.Log("Анимация перемещения завершена.");

                    touchedPlatforms.Add(current);
                    touchedPlatforms.Add(target);

                    foreach (var n in target.activeNeighbors)
                        if (n != null) touchedPlatforms.Add(n);

                    foreach (var n in current.activeNeighbors)
                        if (n != null) touchedPlatforms.Add(n);

                    if (!visitedInThisPhase.Contains(target)) platformsToCheck.Enqueue(target);
                    if (!visitedInThisPhase.Contains(current)) platformsToCheck.Enqueue(current);
                }
            }

            if (!movedSomething)
            {
                // --- ФАЗА 2: ПРОВЕРКА НА УДАЛЕНИЕ ---

                bool destroyedSomething = false;
                List<GroundPlatform> platformsToCheckForDestruction = new List<GroundPlatform>(touchedPlatforms);

                foreach (GroundPlatform platform in platformsToCheckForDestruction)
                {
                    if (platform != null)
                    {
                        InitializeColorsInContainer(platform.Container);
                        if (platform.CheckAndClearMatch())
                        {
                            destroyedSomething = true;
                            Debug.Log($"Удаление на платформе {platform.name}");
                        }
                    }
                }

                if (destroyedSomething)
                {
                    globalStateChanged = true;
                    Debug.Log("Обнаружено удаление. Ожидание завершения анимаций...");
                    yield return new WaitForSeconds(1f);

                    Debug.Log("Анимации удаления завершены. Принудительная синхронизация всего поля.");

                    GroundPlatform[] allPlatformsForSync = FindObjectsOfType<GroundPlatform>();

                    foreach (var p in allPlatformsForSync)
                    {
                        if (p != null) p.InitializeColorsInContainer(p.Container);
                    }

                    touchedPlatforms.Clear();
                    foreach (var p in allPlatformsForSync)
                    {
                        if (p != null) touchedPlatforms.Add(p);
                    }

                    stepCount = 0;
                }
            }
        }

        if (safetyCounter >= maxIterations)
        {
            Debug.LogError("Достигнут лимит итераций! Возможна бесконечная цепная реакция.");
        }

        DebugLogBoardState();

        Debug.Log("Цепная реакция завершена.");
        isProcessingChain = false;
    }

    private void StartTransferAnimation(GroundPlatform targetPlatform, List<Hexagon> blocksToMove, Action onComplete, float speedMultiplier = 1.0f)
    {
        float baseHeight = 0f;
        Hexagon topHex = GetTopHexagon(targetPlatform.Container);
        if (topHex != null)
        {
            baseHeight = topHex.transform.localPosition.y + HeightStep;
        }

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
                if (completedCount == blocksToMove.Count)
                {
                    onComplete?.Invoke();
                }
            }
            else
            {
                hex.transform.SetParent(targetPlatform.Container.transform, true);

                StartCoroutine(PlaySequentialJump(hex, worldTargetPos, localTargetPos, i * 0.1f, () =>
                {
                    completedCount++;
                    if (completedCount == blocksToMove.Count)
                    {
                        onComplete?.Invoke();
                    }
                }, speedMultiplier));
            }
        }
    }

    private IEnumerator PlaySequentialJump(Hexagon hex, Vector3 worldTargetPos, Vector3 localTargetPos, float delay, Action onJumpFinished, float speedMultiplier = 1.0f)
    {
        yield return new WaitForSeconds(delay);

        if (hex == null)
        {
            onJumpFinished?.Invoke();
            yield break;
        }

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


    [ContextMenu("Debug Board State")]
    public void DebugLogBoardState()
    {
        Debug.Log("=== ДИАГНОСТИКА СОСТОЯНИЯ ДОСКИ (РУЧНАЯ/АВТО) ===");
        GroundPlatform[] allPlatforms = FindObjectsOfType<GroundPlatform>();

        Array.Sort(allPlatforms, (a, b) => a.name.CompareTo(b.name));

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
            foreach (var kvp in colorCounts)
            {
                countsStr += $"{kvp.Key}:{kvp.Value} ";
            }

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

    private List<Hexagon> GetBlocksToTransfer(GameObject container, Hexagon.HexagonColor targetColor)
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

    private bool CheckAndClearMatch()
    {
        Hexagon topHex = GetTopHexagon(Container);
        if (topHex == null) return false;

        Hexagon.HexagonColor colorToCheck = topHex.GetColor();
        List<Hexagon> matchingHexes = GetBlocksToTransfer(Container, colorToCheck);

        if (matchingHexes.Count >= MatchCountThreshold)
        {
            Debug.Log("Удаление группы!");
            ClearHexagonsSequentially(matchingHexes);
            return true;
        }

        return false;
    }

    private void ClearHexagonsSequentially(List<Hexagon> hexesToRemove)
    {
        for (int i = 0; i < hexesToRemove.Count; i++)
        {
            Hexagon hex = hexesToRemove[i];
            StartCoroutine(PlayRemoveAnimation(hex, i * 0.05f));
        }
    }

    private IEnumerator PlayRemoveAnimation(Hexagon hex, float delay)
    {
        yield return new WaitForSeconds(delay);

        if (hex != null)
        {
            hex.PlayRemoveAnimation();
        }
    }

    private Hexagon GetTopHexagon(GameObject container)
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

    private void InitializeColorsInContainer(GameObject container)
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

    public void SetGlow()
    {
        if (platformRenderer == null || glowMaterial == null) return;
        platformRenderer.material = glowMaterial;
    }

    public void RemoveGlow()
    {
        if (platformRenderer == null || originalMaterial == null) return;
        platformRenderer.material = originalMaterial;
    }

    public bool IsAvailable()
    {
        if (Container == null) return false;
        return Container.transform.childCount == 0;
    }
}