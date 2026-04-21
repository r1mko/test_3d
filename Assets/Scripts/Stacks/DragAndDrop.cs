using UnityEngine;
using System.Collections;

public class DragAndDrop : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private AnimationCurve smoothLiftCurve;
    [SerializeField] private float clampMinY = 0.5f;
    [SerializeField] private float clampMaxY = 1.25f;
    [SerializeField] private float liftSpeed = 5f;

    [Header("Unavailable Animation")]
    [SerializeField] private float shakeAmount = 0.1f;
    [SerializeField] private float shakeDuration = 0.3f;
    [SerializeField] private int shakeSteps = 6;

    [Header("Cursor")]
    [SerializeField] private CursorFollower cursorFollower;

    private Vector3 offset;
    private bool isDragging = false;
    private Stack stackComponent;
    private bool isAnimating = false;

    private void Awake()
    {
        if (mainCamera == null) mainCamera = Camera.main;
        stackComponent = GetComponent<Stack>();

        if (smoothLiftCurve == null || smoothLiftCurve.length == 0)
            smoothLiftCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    }

    private void OnMouseDown()
    {
        if (isAnimating) return;

        if (stackComponent.IsDisabled)
            return;

        if (PlatformManager.Instance != null && PlatformManager.Instance.IsBusy)
        {
            isAnimating = true;
            StartCoroutine(PlayUnavailableAnimation());
            return;
        }

        isDragging = true;

        if (cursorFollower != null)
        {
            cursorFollower.PlayGrabAnimation();
        }

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
        if (isAnimating) return;

        isDragging = false;
        stackComponent.Drop();

        if (cursorFollower != null)
        {
            cursorFollower.PlayReleaseAnimation();
        }
    }

    private void Update()
    {
        if (!isDragging || isAnimating) return;

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

    private IEnumerator PlayUnavailableAnimation()
    {
        Vector3 startPos = transform.position;
        float liftHeight = 0.2f;
        Vector3 liftedPos = new Vector3(startPos.x, startPos.y + liftHeight, startPos.z);

        float elapsed = 0f;
        float liftTime = 0.1f;

        while (elapsed < liftTime)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / liftTime;
            transform.position = Vector3.Lerp(startPos, liftedPos, t);
            yield return null;
        }
        transform.position = liftedPos;

        elapsed = 0f;
        for (int i = 0; i < shakeSteps; i++)
        {
            float direction = (i % 2 == 0) ? 1f : -1f;
            Vector3 targetShake = new Vector3(startPos.x + (shakeAmount * direction), liftedPos.y, startPos.z);

            float stepTime = shakeDuration / shakeSteps;
            float stepElapsed = 0f;

            while (stepElapsed < stepTime)
            {
                stepElapsed += Time.deltaTime;
                float t = stepElapsed / stepTime;
                transform.position = Vector3.Lerp(transform.position, targetShake, t);
                yield return null;
            }
        }

        transform.position = liftedPos;

        elapsed = 0f;
        while (elapsed < liftTime)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / liftTime;
            transform.position = Vector3.Lerp(liftedPos, startPos, t);
            yield return null;
        }
        transform.position = startPos;

        isAnimating = false;
    }
}