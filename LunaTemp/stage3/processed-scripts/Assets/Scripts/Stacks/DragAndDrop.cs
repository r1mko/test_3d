using UnityEngine;

public class DragAndDrop : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private float clampMinY = 0f;
    [SerializeField] private float clampMaxY = 1.25f;

    private Vector3 originalPosition;
    private bool isDragging = false;
    private Stack stackComponent;

    private void Awake()
    {
        if (mainCamera == null)
            mainCamera = Camera.main;

        originalPosition = transform.position;
        stackComponent = GetComponent<Stack>();
    }

    private void OnMouseDown()
    {
        isDragging = true;
        originalPosition = transform.position;
    }

    private void OnMouseUp()
    {
        isDragging = false;
        stackComponent.Drop();
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
            Vector3 rayPoint = ray.GetPoint(distance);
            Vector3 clampedPos = new Vector3(rayPoint.x, Mathf.Clamp(rayPoint.y, clampMinY, clampMaxY), rayPoint.z);
            transform.position = clampedPos;
        }
    }
}