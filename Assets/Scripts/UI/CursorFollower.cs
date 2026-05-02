using UnityEngine;
using System.Collections;

public class CursorFollower : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private float fadeDuration = 0.2f;
    [SerializeField] private SpriteRenderer[] mainRenderers;
    [SerializeField] private SpriteRenderer[] shadowRenderers;
    [SerializeField] private Animator animator;

    [Header("Pivot Settings")]
    [SerializeField] private float pivotOffsetX;
    [SerializeField] private float pivotOffsetY;

    private Coroutine fadeCoroutine;
    private bool isVisible = false;

    private const float SHADOW_MAX_ALPHA = 0.63f;

    private void Awake()
    {
        if (mainCamera == null)
            mainCamera = Camera.main;

        if (animator == null)
            animator = GetComponent<Animator>();

        if (mainCamera == null)
            Debug.LogError("[CursorFollower] Main Camera not found!");
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

        transform.position = new Vector3(worldPos.x + pivotOffsetX, worldPos.y + pivotOffsetY, worldPos.z);
    }

    public void PlayGrabAnimation()
    {
        SetVisibility(true);
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

    public void TriggerChainReactionFade()
    {
        SetVisibility(false);
    }

    public void SetVisibility(bool visible)
    {
        if (isVisible == visible) return;
        isVisible = visible;

        if (fadeCoroutine != null) StopCoroutine(fadeCoroutine);
        fadeCoroutine = StartCoroutine(FadeCoroutine(visible));
    }

    private IEnumerator FadeCoroutine(bool targetVisible)
    {
        if (mainRenderers == null || mainRenderers.Length == 0) yield break;

        float[] startAlphaMain = new float[mainRenderers.Length];
        float[] startAlphaShadow = new float[shadowRenderers != null ? shadowRenderers.Length : 0];

        for (int i = 0; i < mainRenderers.Length; i++)
        {
            if (mainRenderers[i] != null)
                startAlphaMain[i] = mainRenderers[i].color.a;
        }

        if (shadowRenderers != null)
        {
            for (int i = 0; i < shadowRenderers.Length; i++)
            {
                if (shadowRenderers[i] != null)
                    startAlphaShadow[i] = shadowRenderers[i].color.a;
            }
        }

        float targetAlphaMain = targetVisible ? 1f : 0f;
        float targetAlphaShadow = targetVisible ? SHADOW_MAX_ALPHA : 0f;

        float elapsed = 0f;

        while (elapsed < fadeDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / fadeDuration;

            for (int i = 0; i < mainRenderers.Length; i++)
            {
                if (mainRenderers[i] != null)
                {
                    float currentAlphaMain = Mathf.Lerp(startAlphaMain[i], targetAlphaMain, t);
                    SetAlpha(mainRenderers[i], currentAlphaMain);
                }
            }

            if (shadowRenderers != null)
            {
                for (int i = 0; i < shadowRenderers.Length; i++)
                {
                    if (shadowRenderers[i] != null)
                    {
                        float currentAlphaShadow = Mathf.Lerp(startAlphaShadow[i], targetAlphaShadow, t);
                        SetAlpha(shadowRenderers[i], currentAlphaShadow);
                    }
                }
            }

            yield return null;
        }

        for (int i = 0; i < mainRenderers.Length; i++)
        {
            if (mainRenderers[i] != null)
                SetAlpha(mainRenderers[i], targetAlphaMain);
        }

        if (shadowRenderers != null)
        {
            for (int i = 0; i < shadowRenderers.Length; i++)
            {
                if (shadowRenderers[i] != null)
                    SetAlpha(shadowRenderers[i], targetAlphaShadow);
            }
        }
    }

    private void SetAlpha(SpriteRenderer renderer, float alpha)
    {
        if (renderer != null)
        {
            Color c = renderer.color;
            c.a = alpha;
            renderer.color = c;
        }
    }
}