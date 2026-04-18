using UnityEngine;
using System;
using System.Collections;

public class Hexagon : MonoBehaviour
{
    public enum HexagonColor
    {
        Black, Blue, Green, Purple, Red, Yellow
    }

    [Serializable]
    public struct ColorMaterialPair
    {
        public HexagonColor color;
        public Material material;
    }

    [SerializeField] private ColorMaterialPair[] colorMaterials;
    [SerializeField] private Renderer hexRenderer;
    [SerializeField] private Transform[] anchors;
    [SerializeField] private AnimationCurve jumpCurve;
    [SerializeField] private float jumpHeight = 0.3f;
    [SerializeField] private float jumpDuration = 0.4f;

    private HexagonColor currentColor;
    private bool isInitialized = false;

    private void Awake()
    {
        if (hexRenderer == null)
            hexRenderer = GetComponentInChildren<Renderer>();

        if (jumpCurve == null || jumpCurve.length == 0)
            jumpCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);

        if (anchors == null || anchors.Length != 6)
        {
            Debug.LogWarning("Hexagon: Anchors array is not set or has wrong size.");
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
                if (hexRenderer != null) hexRenderer.material = pair.material;
                return;
            }
        }
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
    }

    public HexagonColor GetColor() { return currentColor; }
    public bool IsInitialized() { return isInitialized; }

    public void PlayJumpAnimation(Vector3 targetPosition, Quaternion targetRotation, Action onComplete = null)
    {
        StartCoroutine(JumpCoroutine(targetPosition, targetRotation, onComplete));
    }

    private IEnumerator JumpCoroutine(Vector3 targetPosition, Quaternion targetRotation, Action onComplete)
    {
        Vector3 startPos = transform.position;
        Quaternion startRot = transform.rotation;

        Vector3 directionXZ = targetPosition - startPos;
        directionXZ.y = 0;

        if (directionXZ.sqrMagnitude < 0.001f)
        {
            transform.position = targetPosition;
            transform.rotation = targetRotation;
            onComplete?.Invoke();
            yield break;
        }

        Transform pivotAnchor = null;
        float minDist = float.MaxValue;

        foreach (Transform anchor in anchors)
        {
            if (anchor == null) continue;

            Vector3 anchorPos = anchor.position;
            anchorPos.y = 0;

            Vector3 targetPosFlat = targetPosition;
            targetPosFlat.y = 0;

            float dist = Vector3.Distance(anchorPos, targetPosFlat);

            if (dist < minDist)
            {
                minDist = dist;
                pivotAnchor = anchor;
            }
        }

        if (pivotAnchor == null)
        {
            Debug.LogError("Hexagon: No valid anchor found!");
            onComplete?.Invoke();
            yield break;
        }

        Debug.Log($"Pivot: {pivotAnchor.name} | Target: {targetPosition}");

        Vector3 pivotPoint = pivotAnchor.position;

        Vector3 rotationAxis = Vector3.Cross(directionXZ, Vector3.up).normalized;

        float angle = 180f;
        Vector3 fallDirection = Vector3.Cross(rotationAxis, Vector3.up).normalized;

        if (Vector3.Dot(fallDirection, directionXZ.normalized) < 0)
        {
            angle = -180f;
        }

        float elapsedTime = 0f;

        while (elapsedTime < jumpDuration)
        {
            elapsedTime += Time.deltaTime;
            float t = Mathf.Clamp01(elapsedTime / jumpDuration);
            float curveValue = jumpCurve.Evaluate(t);

            float currentAngle = angle * curveValue;

            Quaternion rotOffset = Quaternion.AngleAxis(currentAngle, rotationAxis);

            Vector3 relativePos = startPos - pivotPoint;
            Vector3 rotatedRelativePos = rotOffset * relativePos;

            Vector3 calculatedPos = pivotPoint + rotatedRelativePos;

            float heightOffset = jumpHeight * Mathf.Sin(curveValue * Mathf.PI);
            calculatedPos.y += heightOffset;

            Quaternion currentRot = rotOffset * startRot;

            transform.position = calculatedPos;
            transform.rotation = currentRot;

            yield return null;
        }

        transform.position = targetPosition;
        transform.rotation = targetRotation;

        onComplete?.Invoke();
    }
}