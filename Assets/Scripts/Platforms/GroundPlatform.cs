using UnityEngine;
using System.Collections.Generic;
using System.Linq;

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
                MoveAllChildren(Container, neighbor.Container);
                RealignStack(neighbor.Container);
                return;
            }
        }
    }

    private void MoveAllChildren(GameObject fromContainer, GameObject toContainer)
    {
        List<Transform> children = new List<Transform>();
        foreach (Transform child in fromContainer.transform)
        {
            children.Add(child);
        }

        foreach (Transform child in children)
        {
            child.SetParent(toContainer.transform, true);
        }
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

    private void RealignStack(GameObject container)
    {
        if (container == null) return;

        List<Transform> hexObjects = new List<Transform>();

        foreach (Transform child in container.transform)
        {
            if (child.GetComponent<Hexagon>() != null)
            {
                hexObjects.Add(child);
            }
        }

        hexObjects.Sort((a, b) => a.localPosition.y.CompareTo(b.localPosition.y));

        int index = 0;
        foreach (Transform hexObj in hexObjects)
        {
            hexObj.localPosition = new Vector3(0f, index * HeightStep, 0f);
            index++;
        }
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