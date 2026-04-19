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
        InitializeColorsInContainer(Container);

        Hexagon myTopHex = GetTopHexagon(Container);
        if (myTopHex == null)
        {
            return;
        }

        foreach (GroundPlatform neighbor in activeNeighbors)
        {
            InitializeColorsInContainer(neighbor.Container);

            Hexagon neighborTopHex = GetTopHexagon(neighbor.Container);
            if (neighborTopHex == null) continue;

            Hexagon.HexagonColor neighborColor = neighborTopHex.GetColor();
            Hexagon.HexagonColor myColor = myTopHex.GetColor();

            if (myColor == neighborColor)
            {
                List<Hexagon> blocksToMove = GetBlocksToTransfer(Container, neighborColor);

                if (blocksToMove.Count > 0)
                {
                    StartTransferAnimation(neighbor, blocksToMove);
                    return;
                }
            }
        }
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

    private void StartTransferAnimation(GroundPlatform targetPlatform, List<Hexagon> blocksToMove)
    {
        float baseHeight = 0f;
        Hexagon topHex = GetTopHexagon(targetPlatform.Container);
        if (topHex != null)
        {
            baseHeight = topHex.transform.localPosition.y + HeightStep;
        }

        int lastBlockIndex = blocksToMove.Count - 1;

        for (int i = 0; i < blocksToMove.Count; i++)
        {
            Hexagon hex = blocksToMove[i];
            float targetY = baseHeight + (i * HeightStep);

            Vector3 localTargetPos = new Vector3(0f, targetY, 0f);
            Vector3 worldTargetPos = targetPlatform.Container.transform.TransformPoint(localTargetPos);

            hex.transform.SetParent(targetPlatform.Container.transform, true);

            bool isLastBlock = (i == lastBlockIndex);

            StartCoroutine(PlaySequentialJump(hex, worldTargetPos, localTargetPos, i * 0.1f, () =>
            {
                if (isLastBlock)
                {
                    targetPlatform.CheckAndClearMatch();
                }
            }));
        }
    }

    private void CheckAndClearMatch()
    {
        Debug.Log("Вызвали метод CheckAndClearMatch");

        Hexagon topHex = GetTopHexagon(Container);
        if (topHex == null) return;

        Hexagon.HexagonColor colorToCheck = topHex.GetColor();
        List<Hexagon> matchingHexes = GetBlocksToTransfer(Container, colorToCheck);

        if (matchingHexes.Count >= MatchCountThreshold)
        {
            ClearHexagonsSequentially(matchingHexes);
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

        hex.PlayJumpAnimation(worldTargetPos, hex.transform.rotation, () =>
        {
            hex.transform.localPosition = localTargetPos;
            hex.transform.localRotation = Quaternion.identity;

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