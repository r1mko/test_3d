using UnityEngine;
using System;

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

    // Флаг, чтобы знать, был ли объект уже инициализирован явно
    private bool isInitialized = false;

    private void Awake()
    {
        if (hexRenderer == null)
            hexRenderer = GetComponentInChildren<Renderer>();
    }

    public void Init(HexagonColor color)
    {
        currentColor = color;
        isInitialized = true;

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

    public void IdentifyColorByMaterial()
    {
        if (hexRenderer == null || hexRenderer.sharedMaterial == null) return;

        foreach (var pair in colorMaterials)
        {
            if (pair.material != null && hexRenderer.sharedMaterial.name.Contains(pair.material.name))
            {
                currentColor = pair.color;
                isInitialized = true;
                return;
            }
        }

        Debug.LogWarning($"Could not identify color for material: {hexRenderer.sharedMaterial.name}");
    }

    public HexagonColor GetColor()
    {
        return currentColor;
    }

    public bool IsInitialized()
    {
        return isInitialized;
    }
}