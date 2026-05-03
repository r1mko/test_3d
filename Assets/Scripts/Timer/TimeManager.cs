using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class TimeManager : MonoBehaviour
{
    public static TimeManager Instance { get; private set; }

    [SerializeField] private float gameDuration = 20f;
    [SerializeField] private Slider timeSlider;
    [SerializeField] private Image sliderFillImage;
    [SerializeField] private RectTransform arrowParentRectTransform;

    [SerializeField] private Image timerBorderImage;
    [SerializeField] private Image sliderBorderImage;
    [SerializeField] private Image arrowImage;

    [SerializeField] private Color startColor;
    [SerializeField] private Color midColor;
    [SerializeField] private Color endColor;
    [SerializeField] private Color pulseColor;

    [Header("Pulse Settings")]
    [SerializeField] private float pulseThreshold = 0.25f;
    [SerializeField] private float pulseDuration = 0.2f;
    [SerializeField] private float pauseDuration = 0.8f;
    [SerializeField] private float maxScaleMultiplier = 1.15f;

    private Coroutine _timerCoroutine;
    private Coroutine _pulseCoroutine;
    private bool _isRunning;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
    }

    [ContextMenu("StartTimer")]
    public void StartGame()
    {
        if (_isRunning)
        {
            StopGame();
        }

        _isRunning = true;

        if (timeSlider != null)
        {
            timeSlider.value = 1f;
        }

        if (arrowParentRectTransform != null)
        {
            arrowParentRectTransform.localEulerAngles = Vector3.zero;
        }

        if (sliderFillImage != null)
        {
            sliderFillImage.color = startColor;
        }

        ResetBorders();

        if (_timerCoroutine != null)
        {
            StopCoroutine(_timerCoroutine);
        }

        _timerCoroutine = StartCoroutine(RunTimer());
    }

    public void StopGame()
    {
        _isRunning = false;

        if (_timerCoroutine != null)
        {
            StopCoroutine(_timerCoroutine);
            _timerCoroutine = null;
        }

        if (_pulseCoroutine != null)
        {
            StopCoroutine(_pulseCoroutine);
            _pulseCoroutine = null;
        }

        ResetBorders();
    }

    private void ResetBorders()
    {
        if (timerBorderImage != null)
        {
            timerBorderImage.color = Color.white;
            timerBorderImage.rectTransform.localScale = Vector3.one;
        }
        if (sliderBorderImage != null)
        {
            sliderBorderImage.color = Color.white;
        }
        if (arrowImage != null)
        {
            arrowImage.color = Color.white;
            arrowImage.rectTransform.localScale = Vector3.one;
        }
    }

    private IEnumerator RunTimer()
    {
        float elapsedTime = 0f;
        bool pulseStarted = false;

        while (elapsedTime < gameDuration && _isRunning)
        {
            elapsedTime += Time.deltaTime;
            float progress = elapsedTime / gameDuration;
            float normalizedTime = 1f - progress;

            if (timeSlider != null)
            {
                timeSlider.value = normalizedTime;
            }

            if (arrowParentRectTransform != null)
            {
                float angle = progress * 360f;
                arrowParentRectTransform.localEulerAngles = new Vector3(0, 0, angle);
            }

            if (sliderFillImage != null)
            {
                if (progress <= 0.5f)
                {
                    sliderFillImage.color = Color.Lerp(startColor, midColor, progress * 2f);
                }
                else
                {
                    sliderFillImage.color = Color.Lerp(midColor, endColor, (progress - 0.5f) * 2f);
                }
            }

            if (normalizedTime <= pulseThreshold && !pulseStarted)
            {
                pulseStarted = true;
                _pulseCoroutine = StartCoroutine(PulseLoop());
            }

            yield return null;
        }

        if (_isRunning)
        {
            OnTimerFinished();
        }
    }

    private IEnumerator PulseLoop()
    {
        while (_isRunning)
        {
            yield return StartCoroutine(DoPulse());
            yield return new WaitForSeconds(pauseDuration);
        }
    }

    private IEnumerator DoPulse()
    {
        float elapsed = 0f;

        Color startBorderColor = sliderBorderImage != null ? sliderBorderImage.color : Color.white;
        Color startTimerBorderColor = timerBorderImage != null ? timerBorderImage.color : Color.white;
        Color startArrowColor = arrowImage != null ? arrowImage.color : Color.white;

        Vector3 startTimerScale = timerBorderImage != null ? timerBorderImage.rectTransform.localScale : Vector3.one;
        Vector3 startArrowScale = arrowImage != null ? arrowImage.rectTransform.localScale : Vector3.one;

        while (elapsed < pulseDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / pulseDuration);

            Color currentColor = Color.Lerp(startBorderColor, pulseColor, t);

            if (sliderBorderImage != null)
            {
                sliderBorderImage.color = currentColor;
            }

            if (timerBorderImage != null)
            {
                timerBorderImage.color = currentColor;
                float scale = Mathf.Lerp(1f, maxScaleMultiplier, t);
                timerBorderImage.rectTransform.localScale = new Vector3(scale, scale, 1f);
            }

            if (arrowImage != null)
            {
                arrowImage.color = currentColor;
                float scale = Mathf.Lerp(1f, maxScaleMultiplier, t);
                arrowImage.rectTransform.localScale = new Vector3(scale, scale, 1f);
            }

            yield return null;
        }

        elapsed = 0f;
        Color endColorBorder = pulseColor;
        Vector3 endTimerScale = new Vector3(maxScaleMultiplier, maxScaleMultiplier, 1f);
        Vector3 endArrowScale = new Vector3(maxScaleMultiplier, maxScaleMultiplier, 1f);

        while (elapsed < pulseDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / pulseDuration);

            Color currentColor = Color.Lerp(endColorBorder, startBorderColor, t);

            if (sliderBorderImage != null)
            {
                sliderBorderImage.color = currentColor;
            }

            if (timerBorderImage != null)
            {
                timerBorderImage.color = currentColor;
                float scale = Mathf.Lerp(maxScaleMultiplier, 1f, t);
                timerBorderImage.rectTransform.localScale = new Vector3(scale, scale, 1f);
            }

            if (arrowImage != null)
            {
                arrowImage.color = currentColor;
                float scale = Mathf.Lerp(maxScaleMultiplier, 1f, t);
                arrowImage.rectTransform.localScale = new Vector3(scale, scale, 1f);
            }

            yield return null;
        }

        if (sliderBorderImage != null) sliderBorderImage.color = startBorderColor;

        if (timerBorderImage != null)
        {
            timerBorderImage.color = startTimerBorderColor;
            timerBorderImage.rectTransform.localScale = startTimerScale;
        }

        if (arrowImage != null)
        {
            arrowImage.color = startArrowColor;
            arrowImage.rectTransform.localScale = startArrowScale;
        }
    }

    private void OnTimerFinished()
    {
        _isRunning = false;
        if (timeSlider != null)
        {
            timeSlider.value = 0f;
        }
        if (arrowParentRectTransform != null)
        {
            arrowParentRectTransform.localEulerAngles = Vector3.zero;
        }
        if (sliderFillImage != null)
        {
            sliderFillImage.color = endColor;
        }

        ResetBorders();
    }
}