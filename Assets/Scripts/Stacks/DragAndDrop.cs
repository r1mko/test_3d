using UnityEngine;

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

    private void Awake()
    {
        if (mainCamera == null)
            mainCamera = Camera.main;

        stackComponent = GetComponent<Stack>();

        if (smoothLiftCurve == null || smoothLiftCurve.length == 0)
        {
            smoothLiftCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
        }
    }

    private void OnMouseDown()
    {
        isDragging = true;

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
}