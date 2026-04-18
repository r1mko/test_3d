using UnityEngine;
using System;
using System.Collections;

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
    [SerializeField] private AnimationCurve jumpCurve;
    [SerializeField] private float jumpHeight = 0.5f;
    [SerializeField] private float jumpDuration = 0.3f;

    private HexagonColor currentColor;
    private bool isInitialized = false;

    private void Awake()
    {
        if (hexRenderer == null)
            hexRenderer = GetComponentInChildren<Renderer>();

        if (jumpCurve == null || jumpCurve.length == 0)
        {
            jumpCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
        }
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

    public void PlayJumpAnimation(Vector3 targetPosition, Quaternion targetRotation, Action onComplete = null)
    {
        StartCoroutine(JumpCoroutine(targetPosition, targetRotation, onComplete));
    }

    private IEnumerator JumpCoroutine(Vector3 targetPosition, Quaternion targetRotation, Action onComplete)
    {
        Vector3 startPos = transform.position;
        Quaternion startRot = transform.rotation;

        // Вычисляем промежуточную точку для дуги
        Vector3 midPos = new Vector3((startPos.x + targetPosition.x) / 2f,
                                     Mathf.Max(startPos.y, targetPosition.y) + jumpHeight,
                                     (startPos.z + targetPosition.z) / 2f);

        // Определяем целевое вращение с учетом переворота на 180 градусов по оси Z
        // Если нужно вращать по другой оси, замените Vector3.forward на Vector3.up или Vector3.right
        Quaternion endRot = startRot * Quaternion.Euler(0f, 0f, 180f);

        float elapsedTime = 0f;

        while (elapsedTime < jumpDuration)
        {
            elapsedTime += Time.deltaTime;
            float t = Mathf.Clamp01(elapsedTime / jumpDuration);
            float curveValue = jumpCurve.Evaluate(t);

            // Квадратичная кривая Безье для позиции
            Vector3 currentPos = Vector3.Lerp(Vector3.Lerp(startPos, midPos, curveValue),
                                              Vector3.Lerp(midPos, targetPosition, curveValue),
                                              curveValue);

            // Плавный поворот от startRot до endRot (переворот на 180)
            Quaternion currentRot = Quaternion.Slerp(startRot, endRot, curveValue);

            transform.position = currentPos;
            transform.rotation = currentRot;

            yield return null;
        }

        // Фиксация конечной позиции и вращения
        transform.position = targetPosition;
        transform.rotation = endRot;

        onComplete?.Invoke();
    }
}