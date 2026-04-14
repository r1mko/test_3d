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

        int count = Random.Range(4, 8);

        HexagonColor color1 = GetRandomColor();
        HexagonColor? color2 = null;

        if (Random.value < 0.3f)
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
                HexagonColor chosenColor = (i < splitIndex) ? color1 : color2.Value;
                hexComponent.Init(chosenColor);
            }
        }
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