using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static Hexagon;

public class FillStack : MonoBehaviour
{
    // Шаг по высоте для каждого следующего блока
    private const float HeightStep = 0.075f;

    [SerializeField] private GameObject hexagonPrefab;

    public void GenerateBlocks()
    {
        while (transform.childCount > 0)
        {
            DestroyImmediate(transform.GetChild(0).gameObject);
        }

        int count = Random.Range(4, 10);

        // 1. Выбираем первый цвет с учетом существующих на поле
        HexagonColor color1 = GetSmartRandomColor();

        HexagonColor? color2 = null;

        // Шанс появления второго цвета (25%)
        if (Random.value < 0.25f)
        {
            color2 = GetRandomColorExcept(color1);
        }

        int splitIndex = count;
        if (color2.HasValue)
        {
            splitIndex = count / 2;
        }

        for (int i = 0; i < count; i++)
        {
            GameObject newBlock = Instantiate(hexagonPrefab, transform);

            Vector3 localPos = new Vector3(0f, i * HeightStep, 0f);
            newBlock.transform.localPosition = localPos;
            newBlock.transform.localRotation = Quaternion.identity;
            newBlock.transform.localScale = Vector3.one;

            Hexagon hexComponent = newBlock.GetComponent<Hexagon>();
            if (hexComponent != null)
            {
                HexagonColor chosenColor = (i < splitIndex) ? color1 : (color2.HasValue ? color2.Value : color1);
                hexComponent.Init(chosenColor);
            }
        }
    }

    private HexagonColor GetSmartRandomColor()
    {
        // 80% шанс использовать существующие цвета
        if (Random.value < 0.80f)
        {
            List<HexagonColor> existingColors = GetExistingColorsFromField();

            if (existingColors.Count > 0)
            {
                return existingColors[Random.Range(0, existingColors.Count)];
            }
        }

        return GetRandomColor();
    }

    private List<HexagonColor> GetExistingColorsFromField()
    {
        List<HexagonColor> uniqueColors = new List<HexagonColor>();

        if (PlatformManager.Instance == null || PlatformManager.Instance.GroundPlatforms == null)
        {
            return uniqueColors;
        }

        foreach (GroundPlatform platform in PlatformManager.Instance.GroundPlatforms)
        {
            if (platform == null || platform.Container == null) continue;

            foreach (Transform child in platform.Container.transform)
            {
                if (!child.gameObject.activeSelf) continue;

                Hexagon hex = child.GetComponent<Hexagon>();
                if (hex != null)
                {
                    HexagonColor color = hex.GetColor();

                    if (!uniqueColors.Contains(color))
                    {
                        uniqueColors.Add(color);
                    }
                }
            }
        }

        return uniqueColors;
    }

    private HexagonColor GetRandomColor()
    {
        var values = System.Enum.GetValues(typeof(HexagonColor));
        return (HexagonColor)values.GetValue(Random.Range(0, values.Length));
    }

    private HexagonColor GetRandomColorExcept(HexagonColor exclude)
    {
        var values = System.Enum.GetValues(typeof(HexagonColor));
        List<HexagonColor> availableColors = new List<HexagonColor>();

        foreach (HexagonColor c in values)
        {
            if (c != exclude)
            {
                availableColors.Add(c);
            }
        }

        if (availableColors.Count > 0)
        {
            return availableColors[Random.Range(0, availableColors.Count)];
        }

        return exclude;
    }
}