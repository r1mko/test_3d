using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TutorialManager : MonoBehaviour
{
    public static TutorialManager Instance { get; private set; }

    [Header("References")]
    [SerializeField] private GameObject[] tutorialPoints;
    [SerializeField] private Material backgroundPlaneMaterial;
    [SerializeField] private SpriteRenderer backgroundSpriteRenderer;
    [SerializeField] private Image backgroundTimerImage;
    [SerializeField] private Material[] glowMaterials;
    [SerializeField] private RawImage tutorialCursorImage;

    [Header("Settings")]
    [SerializeField] private float totalDuration = 2f;
    [SerializeField] private float pauseDuration = 1f;

    [Header("Cursor Settings")]
    [SerializeField] private Vector2 cursorOffset = new Vector2(60f, -20f);
    [SerializeField] private float cursorMoveSpeed = 5f;

    [Header("Fade Settings")]
    [SerializeField] private float backgroundFadeDuration = 1f;
    [SerializeField] private float glowFadeDuration = 0.5f;
    [SerializeField] private float targetAlpha = 200f / 255f;

    [Header("Logic Timings")]
    [SerializeField] private float globalCooldownDuration = 5f;
    [SerializeField] private float releaseCheckDelay = 0.5f;

    public bool IsInputBlocked { get; private set; } = true;
    public bool HasPlacedSuccessfully { get; private set; } = false;

    private Color originalSpriteColor;
    private Color[] originalGlowColors;
    private Coroutine mainLoopCoroutine;
    private Coroutine cursorLoopCoroutine;

    private void Awake()
    {
        Instance = this;
        InitializeMaterials();
        InitializePoints();

        if (tutorialCursorImage != null)
        {
            tutorialCursorImage.gameObject.SetActive(false);
        }
    }

    private void Start()
    {
        mainLoopCoroutine = StartCoroutine(StartTutorialWithDelay());
    }

    private IEnumerator StartTutorialWithDelay()
    {
        IsInputBlocked = true;
        //CursorFollower.SetTutorialActive(true);
        yield return new WaitForSeconds(1f);
        yield return StartCoroutine(TutorialMainLoop());
    }

    private IEnumerator TutorialMainLoop()
    {
        while (!HasPlacedSuccessfully)
        {
            IsInputBlocked = true;

            cursorLoopCoroutine = StartCoroutine(AnimateTutorialCursor());
            yield return StartCoroutine(AnimatePointsSequence());

            if (HasPlacedSuccessfully) break;

            IsInputBlocked = false;

            yield return StartCoroutine(WaitForGlobalCooldown());

            if (HasPlacedSuccessfully) break;

            yield return StartCoroutine(WaitForIdleState());
        }

        IsInputBlocked = false;
        //CursorFollower.SetTutorialActive(false);
        if (tutorialCursorImage != null)
            tutorialCursorImage.gameObject.SetActive(false);

        if (cursorLoopCoroutine != null)
            StopCoroutine(cursorLoopCoroutine);
    }

    private IEnumerator WaitForGlobalCooldown()
    {
        float timer = 0f;
        while (timer < globalCooldownDuration)
        {
            if (HasPlacedSuccessfully) yield break;
            timer += Time.deltaTime;
            yield return null;
        }
    }

    private IEnumerator WaitForIdleState()
    {
        float idleTimer = 0f;

        while (idleTimer < releaseCheckDelay)
        {
            if (HasPlacedSuccessfully) yield break;

            if (DragAndDrop.IsDraggingAny)
            {
                idleTimer = 0f;
            }
            else
            {
                idleTimer += Time.deltaTime;
            }

            yield return null;
        }
    }

    public void OnHexagonPlacedSuccessfully()
    {
        if (!HasPlacedSuccessfully)
            TimeManager.Instance.StartGame();
        else
            return;

        HasPlacedSuccessfully = true;
        IsInputBlocked = false;
        //CursorFollower.SetTutorialActive(false);

        if (mainLoopCoroutine != null)
        {
            StopCoroutine(mainLoopCoroutine);
            mainLoopCoroutine = null;
        }

        if (cursorLoopCoroutine != null)
        {
            StopCoroutine(cursorLoopCoroutine);
            cursorLoopCoroutine = null;
        }

        ResetVisualsToZero();
        if (tutorialCursorImage != null)
            tutorialCursorImage.gameObject.SetActive(false);
    }

    private void InitializeMaterials()
    {
        if (backgroundPlaneMaterial != null)
        {
            SetMaterialAlpha(backgroundPlaneMaterial, "_TintColor", 0f);
        }

        if (backgroundSpriteRenderer != null)
        {
            originalSpriteColor = backgroundSpriteRenderer.color;
            Color c = originalSpriteColor;
            c.a = 0f;
            backgroundSpriteRenderer.color = c;
        }

        if (backgroundTimerImage != null)
        {
            Color c = backgroundTimerImage.color;
            c.a = 0f;
            backgroundTimerImage.color = c;
        }

        if (glowMaterials != null && glowMaterials.Length > 0)
        {
            originalGlowColors = new Color[glowMaterials.Length];
            for (int i = 0; i < glowMaterials.Length; i++)
            {
                if (glowMaterials[i] != null)
                {
                    originalGlowColors[i] = glowMaterials[i].color;
                    Color c = originalGlowColors[i];
                    c.a = 0f;
                    glowMaterials[i].color = c;
                }
            }
        }
    }

    private void ResetVisualsToZero()
    {
        if (backgroundPlaneMaterial != null) SetMaterialAlpha(backgroundPlaneMaterial, "_TintColor", 0f);

        if (backgroundSpriteRenderer != null)
        {
            Color c = backgroundSpriteRenderer.color;
            c.a = 0f;
            backgroundSpriteRenderer.color = c;
        }

        if (backgroundTimerImage != null)
        {
            Color c = backgroundTimerImage.color;
            c.a = 0f;
            backgroundTimerImage.color = c;
        }

        if (glowMaterials != null)
        {
            foreach (var m in glowMaterials)
            {
                if (m != null)
                {
                    Color c = m.color;
                    c.a = 0f;
                    m.color = c;
                }
            }
        }

        if (tutorialPoints != null)
        {
            foreach (var p in tutorialPoints) if (p != null) p.SetActive(false);
        }
    }

    private void InitializePoints()
    {
        if (tutorialPoints == null) return;
        foreach (var point in tutorialPoints) if (point != null) point.SetActive(false);
    }

    [ContextMenu("StartAnim")]
    public void StartTutorialAnimation() { StartCoroutine(AnimatePointsSequence()); }

    private IEnumerator AnimateTutorialCursor()
    {
        if (tutorialPoints == null || tutorialPoints.Length == 0 || tutorialCursorImage == null) yield break;

        int cycles = 0;
        while (cycles < 2 && !HasPlacedSuccessfully)
        {
            List<Vector2> path = new List<Vector2>();
            foreach (var point in tutorialPoints)
            {
                if (point != null)
                {
                    RectTransform rect = point.GetComponent<RectTransform>();
                    if (rect != null)
                    {
                        path.Add(rect.anchoredPosition + cursorOffset);
                    }
                }
            }

            if (path.Count == 0) yield break;

            yield return new WaitUntil(() => (tutorialPoints[0] != null && tutorialPoints[0].activeSelf) || HasPlacedSuccessfully);

            if (HasPlacedSuccessfully) yield break;

            tutorialCursorImage.gameObject.SetActive(true);
            tutorialCursorImage.rectTransform.anchoredPosition = path[0];

            Vector2 startPos = path[0];

            for (int i = 1; i < path.Count; i++)
            {
                Vector2 targetPos = path[i];

                float journeyLength = Vector2.Distance(startPos, targetPos);
                float startTime = Time.time;

                float segmentDuration = journeyLength / cursorMoveSpeed;

                if (segmentDuration > 0.001f)
                {
                    while (Time.time - startTime < segmentDuration && !HasPlacedSuccessfully)
                    {
                        float t = (Time.time - startTime) / segmentDuration;
                        tutorialCursorImage.rectTransform.anchoredPosition = Vector2.Lerp(startPos, targetPos, t);
                        yield return null;
                    }
                }

                tutorialCursorImage.rectTransform.anchoredPosition = targetPos;
                startPos = targetPos;

                if (HasPlacedSuccessfully) yield break;
            }

            if (HasPlacedSuccessfully) yield break;

            yield return new WaitUntil(() => (tutorialPoints[0] != null && !tutorialPoints[0].activeSelf) || HasPlacedSuccessfully);

            if (!HasPlacedSuccessfully)
            {
                tutorialCursorImage.gameObject.SetActive(false);
            }

            cycles++;
        }

        tutorialCursorImage.gameObject.SetActive(false);
    }

    private IEnumerator AnimatePointsSequence()
    {
        if (tutorialPoints == null || tutorialPoints.Length == 0) yield break;

        yield return StartCoroutine(FadeBackgrounds(true));
        yield return StartCoroutine(FadeGlows(true));

        float delayPerItem = totalDuration / tutorialPoints.Length;
        int cycles = 0;

        while (cycles < 2 && !HasPlacedSuccessfully)
        {
            for (int i = 0; i < tutorialPoints.Length; i++)
            {
                if (tutorialPoints[i] != null) tutorialPoints[i].SetActive(true);

                yield return new WaitForSeconds(delayPerItem);

                if (HasPlacedSuccessfully) yield break;
            }

            if (HasPlacedSuccessfully) yield break;

            yield return new WaitForSeconds(pauseDuration);

            foreach (var item in tutorialPoints) if (item != null) item.SetActive(false);

            yield return new WaitForSeconds(0.1f);
            cycles++;
        }

        if (!HasPlacedSuccessfully)
        {
            yield return StartCoroutine(FadeGlows(false));
            yield return StartCoroutine(FadeBackgrounds(false));
        }
    }

    private IEnumerator FadeBackgrounds(bool fadeIn)
    {
        float elapsed = 0f;

        Color startPlaneColor = backgroundPlaneMaterial != null ? backgroundPlaneMaterial.GetColor("_TintColor") : Color.clear;
        Color targetPlaneColor = startPlaneColor;
        targetPlaneColor.a = fadeIn ? targetAlpha : 0f;

        Color startSpriteColor = backgroundSpriteRenderer != null ? backgroundSpriteRenderer.color : Color.clear;
        Color targetSpriteColor = startSpriteColor;
        targetSpriteColor.a = fadeIn ? targetAlpha : 0f;

        Color startTimerColor = backgroundTimerImage != null ? backgroundTimerImage.color : Color.clear;
        Color targetTimerColor = startTimerColor;
        targetTimerColor.a = fadeIn ? targetAlpha : 0f;

        while (elapsed < backgroundFadeDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / backgroundFadeDuration);

            if (backgroundPlaneMaterial != null)
                backgroundPlaneMaterial.SetColor("_TintColor", Color.Lerp(startPlaneColor, targetPlaneColor, t));

            if (backgroundSpriteRenderer != null)
                backgroundSpriteRenderer.color = Color.Lerp(startSpriteColor, targetSpriteColor, t);

            if (backgroundTimerImage != null)
                backgroundTimerImage.color = Color.Lerp(startTimerColor, targetTimerColor, t);

            yield return null;
        }

        if (backgroundPlaneMaterial != null)
            backgroundPlaneMaterial.SetColor("_TintColor", targetPlaneColor);

        if (backgroundSpriteRenderer != null)
            backgroundSpriteRenderer.color = targetSpriteColor;

        if (backgroundTimerImage != null)
            backgroundTimerImage.color = targetTimerColor;
    }

    private IEnumerator FadeGlows(bool fadeIn)
    {
        if (glowMaterials == null || glowMaterials.Length == 0) yield break;

        float elapsed = 0f;
        Color[] startColors = new Color[glowMaterials.Length];
        Color[] targetColors = new Color[glowMaterials.Length];

        for (int i = 0; i < glowMaterials.Length; i++)
        {
            if (glowMaterials[i] != null) { startColors[i] = glowMaterials[i].color; targetColors[i] = startColors[i]; targetColors[i].a = fadeIn ? targetAlpha : 0f; }
        }

        while (elapsed < glowFadeDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / glowFadeDuration);
            for (int i = 0; i < glowMaterials.Length; i++) if (glowMaterials[i] != null) glowMaterials[i].color = Color.Lerp(startColors[i], targetColors[i], t);
            yield return null;
        }

        for (int i = 0; i < glowMaterials.Length; i++) if (glowMaterials[i] != null) glowMaterials[i].color = targetColors[i];
    }

    private void SetMaterialAlpha(Material mat, string propName, float alpha)
    {
        if (mat == null) return;
        Color c = mat.GetColor(propName); c.a = alpha; mat.SetColor(propName, c);
    }
}