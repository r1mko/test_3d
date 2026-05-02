using UnityEngine;
using System.Collections;

public class CursorFollower : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private float fadeDuration = 0.2f;
    [SerializeField] private SpriteRenderer spriteRenderer;
    [SerializeField] private SpriteRenderer shadowRenderer;
    [SerializeField] private Animator animator;

    private Coroutine fadeCoroutine;
    private bool isVisible = false;

    private const float SHADOW_MAX_ALPHA = 0.63f; // 160/255

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

        transform.position = worldPos;
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
        if (spriteRenderer == null) yield break;

        float startAlphaMain = spriteRenderer.color.a;
        float startAlphaShadow = shadowRenderer != null ? shadowRenderer.color.a : 0f;

        float targetAlphaMain = targetVisible ? 1f : 0f;
        float targetAlphaShadow = targetVisible ? SHADOW_MAX_ALPHA : 0f;

        float elapsed = 0f;

        while (elapsed < fadeDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / fadeDuration;

            float currentAlphaMain = Mathf.Lerp(startAlphaMain, targetAlphaMain, t);
            SetAlpha(spriteRenderer, currentAlphaMain);

            if (shadowRenderer != null)
            {
                float currentAlphaShadow = Mathf.Lerp(startAlphaShadow, targetAlphaShadow, t);
                SetAlpha(shadowRenderer, currentAlphaShadow);
            }

            yield return null;
        }

        SetAlpha(spriteRenderer, targetAlphaMain);
        if (shadowRenderer != null)
        {
            SetAlpha(shadowRenderer, targetAlphaShadow);
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