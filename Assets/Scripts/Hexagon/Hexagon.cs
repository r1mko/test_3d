using System;
using UnityEngine;

public class Hexagon : MonoBehaviour
{
    public enum HexagonColor
    {
        Black,
        Blue,
        Green,
        Purple,
        Red,
        Yellow
    }

    [Serializable]
    public struct ColorMaterialPair
    {
        public HexagonColor color;
        public Material material;
    }

    [SerializeField] private ColorMaterialPair[] colorMaterials;
    [SerializeField] private Renderer hexRenderer;

    private HexagonColor currentColor;

    private void Awake()
    {
        if (hexRenderer == null)
            hexRenderer = GetComponentInChildren<Renderer>();

    }

    public void Init(HexagonColor color)
    {
        currentColor = color;

        // Находим соответствующий материал
        foreach (var pair in colorMaterials)
        {
            if (pair.color == color)
            {
                if (hexRenderer != null)
                {
                    hexRenderer.material = pair.material;
                }
                return;
            }
        }

        Debug.LogWarning($"Material for color {color} not found in Hexagon script.");
    }

    public HexagonColor GetColor()
    {
        return currentColor;
    }
}