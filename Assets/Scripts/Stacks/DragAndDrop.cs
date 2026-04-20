using UnityEngine;
using System.Collections.Generic;

public class DragAndDrop : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private AnimationCurve smoothLiftCurve;
    [SerializeField] private float clampMinY = 0.5f;
    [SerializeField] private float clampMaxY = 1.25f;
    [SerializeField] private float liftSpeed = 5f;

    private Vector3 offset;
    private bool isDragging = false;
    private Stack stackComponent;
    private List<Renderer> draggedRenderers = new List<Renderer>();
    private List<int> originalRenderQueues = new List<int>();
    private const int DragRenderQueue = 3000;

    private void Awake()
    {
        if (mainCamera == null) mainCamera = Camera.main;
        stackComponent = GetComponent<Stack>();
        if (smoothLiftCurve == null || smoothLiftCurve.length == 0)
            smoothLiftCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    }

    private void OnMouseDown()
    {
        isDragging = true;
        CacheAndOverrideRenderQueues();

        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
        Plane plane = new Plane(mainCamera.transform.forward, transform.position);
        float distance;
        if (plane.Raycast(ray, out distance))
        {
            Vector3 hitPoint = ray.GetPoint(distance);
            offset = transform.position - hitPoint;
        }
    }

    private void OnMouseUp()
    {
        isDragging = false;
        RestoreRenderQueues();
        stackComponent.Drop();
    }

    private void Update()
    {
        if (!isDragging) return;

        Vector3 mousePos = Input.mousePosition;
        Ray ray = mainCamera.ScreenPointToRay(mousePos);
        Plane plane = new Plane(mainCamera.transform.forward, transform.position);

        float distance;
        if (plane.Raycast(ray, out distance))
        {
            Vector3 hitPoint = ray.GetPoint(distance);
            Vector3 targetPos = hitPoint + offset;

            float currentY = transform.position.y;
            float targetY = targetPos.y;

            if (targetY < clampMinY)
            {
                float newY = Mathf.Lerp(currentY, clampMinY, liftSpeed * Time.deltaTime);
                transform.position = new Vector3(targetPos.x, newY, targetPos.z);
            }
            else
            {
                float clampedY = Mathf.Clamp(targetY, clampMinY, clampMaxY);
                transform.position = new Vector3(targetPos.x, clampedY, targetPos.z);
            }
        }
    }

    private void CacheAndOverrideRenderQueues()
    {
        draggedRenderers.Clear();
        originalRenderQueues.Clear();

        foreach (Renderer r in GetComponentsInChildren<Renderer>(true))
        {
            if (r.sharedMaterial != null)
            {
                draggedRenderers.Add(r);
                originalRenderQueues.Add(r.material.renderQueue);
                r.material.renderQueue = DragRenderQueue;
            }
        }
    }

    private void RestoreRenderQueues()
    {
        for (int i = 0; i < draggedRenderers.Count; i++)
        {
            if (draggedRenderers[i] != null)
            {
                draggedRenderers[i].material.renderQueue = originalRenderQueues[i];
            }
        }
        draggedRenderers.Clear();
        originalRenderQueues.Clear();
    }
}