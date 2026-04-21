using UnityEngine;

public class CursorFollower : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    private Animator animator;

    private void Awake()
    {
        mainCamera = Camera.main;
        animator = GetComponent<Animator>();

        if (mainCamera == null)
        {
            Debug.LogError("[CursorFollower] Main Camera not found!");
        }
    }

    private void Update()
    {
        if (mainCamera == null) return;

        Vector3 mousePos = Input.mousePosition;

        if (mousePos.x < 0 || mousePos.y < 0 ||
            mousePos.x > Screen.width || mousePos.y > Screen.height)
            return;

        mousePos.z = -10;

        Vector3 worldPos = mainCamera.ScreenToWorldPoint(mousePos);
        transform.position = worldPos;
    }

    public void PlayGrabAnimation()
    {
        if (animator != null)
        {
            animator.Play("CursorGrab");
        }
    }

    public void PlayReleaseAnimation()
    {
        if (animator != null)
        {
            animator.Play("CursorRelease");
        }
    }
}