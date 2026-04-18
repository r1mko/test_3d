using UnityEngine;
using System.Collections.Generic;
using System.Linq;
using System.Collections;

public class GroundPlatform : MonoBehaviour
{
    public GameObject Container;

    [SerializeField] private Material glowMaterial;
    [SerializeField] private Renderer platformRenderer;
    [SerializeField] private GroundPlatform[] neighborPlatforms;

    private HashSet<GroundPlatform> activeNeighbors = new HashSet<GroundPlatform>();
    private Material originalMaterial;
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

        Hexagon.HexagonColor myColor = myTopHex.GetColor();

        foreach (GroundPlatform neighbor in activeNeighbors)
        {
            InitializeColorsInContainer(neighbor.Container);

            Hexagon neighborTopHex = GetTopHexagon(neighbor.Container);
            if (neighborTopHex == null) continue;

            Hexagon.HexagonColor neighborColor = neighborTopHex.GetColor();

            if (myColor == neighborColor)
            {
                StartTransferAnimation(neighbor);
                return;
            }
        }
    }

    private void StartTransferAnimation(GroundPlatform targetPlatform)
    {
        List<Hexagon> blocksToMove = new List<Hexagon>();

        foreach (Transform child in Container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null)
            {
                blocksToMove.Add(hex);
            }
        }

        blocksToMove.Sort((a, b) => b.transform.position.y.CompareTo(a.transform.position.y));

        float baseHeight = 0f;
        Hexagon topHex = GetTopHexagon(targetPlatform.Container);
        if (topHex != null)
        {
            baseHeight = topHex.transform.localPosition.y + HeightStep;
        }

        for (int i = 0; i < blocksToMove.Count; i++)
        {
            Hexagon hex = blocksToMove[i];
            float targetY = baseHeight + (i * HeightStep);

            Vector3 localTargetPos = new Vector3(0f, targetY, 0f);
            Vector3 worldTargetPos = targetPlatform.Container.transform.TransformPoint(localTargetPos);

            hex.transform.SetParent(targetPlatform.Container.transform, true);

            StartCoroutine(PlaySequentialJump(hex, worldTargetPos, localTargetPos, i * 0.1f));
        }
    }

    private IEnumerator PlaySequentialJump(Hexagon hex, Vector3 worldTargetPos, Vector3 localTargetPos, float delay)
    {
        yield return new WaitForSeconds(delay);

        Vector3 currentPos = hex.transform.position;

        hex.PlayJumpAnimation(worldTargetPos, hex.transform.rotation, () =>
        {
            hex.transform.localPosition = localTargetPos;
            hex.transform.localRotation = Quaternion.identity;
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