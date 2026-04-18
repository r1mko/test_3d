using UnityEngine;
using System.Collections;

public class Stack : MonoBehaviour
{
    [SerializeField] private AnimationCurve moveCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    [SerializeField] private float moveDuration = 0.25f;
    [SerializeField] private float rayLength = 10f;

    [SerializeField] private FillStack fillStack;

    private bool disabled;
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
            // Сохраняем ссылку на платформу локально, чтобы не потерять её, 
            // так как currentHoveredPlatform обнулится в CheckHover или вручную
            GroundPlatform targetPlatform = currentHoveredPlatform;
            moveCoroutine = StartCoroutine(MoveToContainerAndTransfer(targetPlatform, targetPlatform.Container));
        }
        else
        {
            ReturnToOriginal();
        }
    }

    private IEnumerator MoveToContainerAndTransfer(GroundPlatform targetPlatform, GameObject targetContainer)
    {
        disabled = true;

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

        // 1. Сначала переносим детей
        MoveChildrenToContainer(targetContainer);

        // 2. Убираем свечение и сбрасываем ссылку
        if (targetPlatform != null)
        {
            targetPlatform.RemoveGlow();
            // Важно: сбрасываем currentHoveredPlatform только если это та же платформа
            if (currentHoveredPlatform == targetPlatform)
            {
                currentHoveredPlatform = null;
            }

            // 3. Только теперь уведомляем платформу о дропе (запуск проверки слияний)
            targetPlatform.OnStackDropped();
        }

        // 4. Возвращаем стек на место и заполняем
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

        if (fillStack != null)
        {
            fillStack.GenerateBlocks();
        }

        disabled = false;
    }

    private void ReturnToOriginal()
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