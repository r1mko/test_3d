using UnityEngine;

public class FillStack : MonoBehaviour
{
    private const float HeightStep = 0.075f;

    [SerializeField] private GameObject hexagonPrefab;

    public void GenerateBlocks()
    {
        while (transform.childCount > 0)
        {
            DestroyImmediate(transform.GetChild(0).gameObject);
        }

        int count = Random.Range(4, 8);

        for (int i = 0; i < count; i++)
        {
            GameObject newBlock = Instantiate(hexagonPrefab, transform);
            Vector3 localPos = new Vector3(0f, i * HeightStep, 0f);
            newBlock.transform.localPosition = localPos;

            newBlock.transform.localRotation = Quaternion.identity;
            newBlock.transform.localScale = Vector3.one;
        }
    }
}