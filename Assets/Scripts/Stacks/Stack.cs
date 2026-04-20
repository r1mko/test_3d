using UnityEngine;
using System.Collections;

public class Stack : MonoBehaviour
{
    [SerializeField] private AnimationCurve moveCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    [SerializeField] private float moveDuration = 0.25f;
    [SerializeField] private float rayLength = 10f;
    [SerializeField] private StackManager stackManager;

    private const float PlatformOffsetY = 0.1f;
    private bool disabled;
    private Vector3 originalPosition;
    private GroundPlatform currentHoveredPlatform;
    private Coroutine moveCoroutine;

    private void Awake()
    {
        originalPosition = transform.position;

        if (stackManager == null)
        {
            stackManager = StackManager.Instance;
        }
    }

    private void Update()
    {
        CheckHover();
        DebugRaycast();
    }

    private void CheckHover()
    {
        if (Physics.Raycast(transform.position, Vector3.down, out RaycastHit hit, rayLength))
        {
            GroundPlatform platform = hit.collider.GetComponent<GroundPlatform>();

            if (platform != null && platform.IsAvailable() && !disabled)
            {
                if (currentHoveredPlatform != platform)
                {
                    if (currentHoveredPlatform != null)
                    {
                        currentHoveredPlatform.RemoveGlow();
                    }

                    currentHoveredPlatform = platform;
                    currentHoveredPlatform.SetGlow();
                }
                return;
            }
        }

        if (currentHoveredPlatform != null)
        {
            currentHoveredPlatform.RemoveGlow();
            currentHoveredPlatform = null;
        }
    }

    private void DebugRaycast()
    {
        Color rayColor = Color.red;
        if (currentHoveredPlatform != null)
        {
            rayColor = Color.green;
        }

        Debug.DrawRay(transform.position, Vector3.down * rayLength, rayColor);
    }

    public void Drop()
    {
        if (moveCoroutine != null)
        {
            StopCoroutine(moveCoroutine);
        }

        if (currentHoveredPlatform != null && currentHoveredPlatform.Container != null)
        {
            GroundPlatform targetPlatform = currentHoveredPlatform;
            moveCoroutine = StartCoroutine(MoveToContainerAndTransfer(targetPlatform, targetPlatform.Container));
        }
        else
        {
            moveCoroutine = StartCoroutine(SmoothReturnToOriginal());
        }
    }

    private IEnumerator SmoothReturnToOriginal()
    {
        Vector3 startPos = transform.position;
        Vector3 endPos = originalPosition;
        float elapsed = 0f;

        while (elapsed < moveDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / moveDuration);
            float curveT = moveCurve.Evaluate(t);

            transform.position = Vector3.Lerp(startPos, endPos, curveT);
            yield return null;
        }

        transform.position = endPos;

        if (currentHoveredPlatform != null)
        {
            currentHoveredPlatform.RemoveGlow();
            currentHoveredPlatform = null;
        }

        NotifyManagerIfEmpty();
    }

    private IEnumerator MoveToContainerAndTransfer(GroundPlatform targetPlatform, GameObject targetContainer)
    {
        disabled = true;

        Vector3 startPos = transform.position;
        Vector3 endPos = new Vector3(targetContainer.transform.position.x, targetContainer.transform.position.y + PlatformOffsetY, targetContainer.transform.position.z);
        float elapsed = 0f;

        while (elapsed < moveDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / moveDuration);
            float curveT = moveCurve.Evaluate(t);

            transform.position = Vector3.Lerp(startPos, endPos, curveT);
            yield return null;
        }

        transform.position = endPos;

        MoveChildrenToContainer(targetContainer);

        if (targetPlatform != null)
        {
            targetPlatform.RemoveGlow();
            if (currentHoveredPlatform == targetPlatform)
            {
                currentHoveredPlatform = null;
            }

            PlatformManager.Instance.StartChainReaction(targetPlatform);
        }

        yield return StartCoroutine(ReturnAndRefill());
    }

    private IEnumerator ReturnAndRefill()
    {
        Vector3 startPos = transform.position;
        Vector3 endPos = originalPosition;
        float elapsed = 0f;

        while (elapsed < moveDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / moveDuration);
            float curveT = moveCurve.Evaluate(t);

            transform.position = Vector3.Lerp(startPos, endPos, curveT);
            yield return null;
        }

        transform.position = endPos;

        NotifyManagerIfEmpty();

        disabled = false;
    }

    private void MoveChildrenToContainer(GameObject targetContainer)
    {
        while (transform.childCount > 0)
        {
            Transform child = transform.GetChild(0);
            child.SetParent(targetContainer.transform, true);
        }
    }

    private void NotifyManagerIfEmpty()
    {
        if (stackManager != null)
        {
            stackManager.OnStackEmptied();
        }
    }
}