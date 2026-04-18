using UnityEngine;
using System.Collections;

public class Stack : MonoBehaviour
{
    [SerializeField] private AnimationCurve moveCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    [SerializeField] private float moveDuration = 0.25f;
    [SerializeField] private float rayLength = 10f;

    // Ссылка на компонент, отвечающий за наполнение стека
    [SerializeField] private FillStack fillStack;

    private Vector3 originalPosition;
    private GroundPlatform currentHoveredPlatform;
    private Coroutine moveCoroutine;

    private void Awake()
    {
        originalPosition = transform.position;

        if (fillStack == null)
        {
            fillStack = GetComponent<FillStack>();
        }
    }

    private void Start()
    {
        if (fillStack != null && transform.childCount == 0)
        {
            fillStack.GenerateBlocks();
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

            if (platform != null && platform.IsAvailable())
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
            moveCoroutine = StartCoroutine(MoveToContainerAndTransfer(currentHoveredPlatform.Container));
        }
        else
        {
            ReturnToOriginal();
        }
    }

    private IEnumerator MoveToContainerAndTransfer(GameObject targetContainer)
    {
        Vector3 startPos = transform.position;
        Vector3 endPos = targetContainer.transform.position;
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

        if (currentHoveredPlatform != null)
        {
            currentHoveredPlatform.RemoveGlow();
            currentHoveredPlatform = null;
        }

        ReturnAndRefill();
    }

    private void ReturnAndRefill()
    {
        transform.position = originalPosition;
        if (fillStack != null)
        {
            fillStack.GenerateBlocks();
        }
    }

    private void ReturnToOriginal() //to do smooth movement
    {
        transform.position = originalPosition;

        if (currentHoveredPlatform != null)
        {
            currentHoveredPlatform.RemoveGlow();
            currentHoveredPlatform = null;
        }
    }

    private void MoveChildrenToContainer(GameObject targetContainer)
    {
        while (transform.childCount > 0)
        {
            Transform child = transform.GetChild(0);
            child.SetParent(targetContainer.transform, true);
        }
    }
}