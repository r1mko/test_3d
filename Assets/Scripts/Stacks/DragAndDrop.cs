using UnityEngine;

public class DragAndDrop : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;

    private Vector3 originalPosition;
    private bool isDragging = false;

    private void Awake()
    {
        if (mainCamera == null)
            mainCamera = Camera.main;

        originalPosition = transform.position;
    }

    private void OnMouseDown()
    {
        isDragging = true;
        originalPosition = transform.position;
    }

    private void OnMouseUp()
    {
        isDragging = false;
        transform.position = originalPosition;
    }

    private void Update()
    {
        if (!isDragging) return;

        Vector3 mousePos = Input.mousePosition;

        Ray ray = mainCamera.ScreenPointToRay(mousePos);

        Plane plane = new Plane(mainCamera.transform.forward, originalPosition);

        float distance;
        if (plane.Raycast(ray, out distance))
        {
            transform.position = ray.GetPoint(distance);
        }
    }
}