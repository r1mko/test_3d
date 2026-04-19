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

        GroundPlatform currentPlatform = this;
        
        bool movedSomething = true;

        while (movedSomething)
        {
            movedSomething = false;
            
            InitializeColorsInContainer(currentPlatform.Container);

            Hexagon myTopHex = currentPlatform.GetTopHexagon(currentPlatform.Container);
            if (myTopHex == null)
            {
                Debug.Log("Цепная реакция остановлена: нет блоков на активной платформе.");
                break;
            }

            Hexagon.HexagonColor myColor = myTopHex.GetColor();
            GroundPlatform bestTarget = null;
            List<Hexagon> blocksToMove = null;

            foreach (GroundPlatform neighbor in currentPlatform.activeNeighbors)
            {
                if (neighbor == null) continue;

                InitializeColorsInContainer(neighbor.Container);

                Hexagon neighborTopHex = currentPlatform.GetTopHexagon(neighbor.Container);
                if (neighborTopHex == null) continue;

                if (neighborTopHex.GetColor() == myColor)
                {
                    List<Hexagon> candidateBlocks = currentPlatform.GetBlocksToTransfer(currentPlatform.Container, myColor);
                    
                    if (candidateBlocks.Count > 0)
                    {
                        bestTarget = neighbor;
                        blocksToMove = candidateBlocks;
                        break; 
                    }
                }
            }

            if (bestTarget != null && blocksToMove != null && blocksToMove.Count > 0)
            {
                Debug.Log($"Перемещаем {blocksToMove.Count} блоков с {currentPlatform.name} на {bestTarget.name}");
                movedSomething = true;
                
                bool animationFinished = false;
                
                currentPlatform.StartTransferAnimation(bestTarget, blocksToMove, () =>
                {
                    animationFinished = true;
                });

                yield return new WaitUntil(() => animationFinished);
                
                Debug.Log("Анимация завершена. Следующая активная платформа: " + bestTarget.name);
                currentPlatform = bestTarget;
            }
            else
            {
                Debug.Log("Подходящих соседей для перемещения не найдено. Проверка на удаление на платформе: " + currentPlatform.name);
                currentPlatform.CheckAndClearMatch();
                break;
            }
        }

        isProcessingChain = false;
    }

    private List<Hexagon> GetBlocksToTransfer(GameObject container, Hexagon.HexagonColor targetColor)
    {
        List<Hexagon> allHexes = new List<Hexagon>();

        foreach (Transform child in container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null)
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

    private void StartTransferAnimation(GroundPlatform targetPlatform, List<Hexagon> blocksToMove, Action onComplete)
    {
        float baseHeight = 0f;
        Hexagon topHex = GetTopHexagon(targetPlatform.Container);
        if (topHex != null)
        {
            baseHeight = topHex.transform.localPosition.y + HeightStep;
        }

        int lastBlockIndex = blocksToMove.Count - 1;
        int completedCount = 0;

        // Важно: если список пуст, сразу возвращаем
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
                }));
            }
        }
    }

    private void CheckAndClearMatch()
    {
        Hexagon topHex = GetTopHexagon(Container);
        if (topHex == null)
        {
            Debug.Log("CheckAndClearMatch: Нет верхнего гекса для проверки.");
            return;
        }

        Hexagon.HexagonColor colorToCheck = topHex.GetColor();
        List<Hexagon> matchingHexes = GetBlocksToTransfer(Container, colorToCheck);

        Debug.Log($"CheckAndClearMatch: Цвет {colorToCheck}, Найдено совпадений: {matchingHexes.Count}, Порог: {MatchCountThreshold}");

        if (matchingHexes.Count >= MatchCountThreshold)
        {
            Debug.Log("Удаление группы!");
            ClearHexagonsSequentially(matchingHexes);
        }
        else
        {
            Debug.Log("Группа слишком мала для удаления.");
        }
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

    private IEnumerator PlaySequentialJump(Hexagon hex, Vector3 worldTargetPos, Vector3 localTargetPos, float delay, Action onJumpFinished)
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
        });
    }

    private Hexagon GetTopHexagon(GameObject container)
    {
        if (container == null) return null;

        Hexagon topHex = null;
        float maxY = -9999f;

        foreach (Transform childTransform in container.transform)
        {
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
            if (hex != null && !hex.IsInitialized())
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