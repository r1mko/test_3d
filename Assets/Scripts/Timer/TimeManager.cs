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

    [Header("Alarm Settings")]
    [SerializeField] private float alarmDuration = 3f;
    [SerializeField] private float shakeAmount = 10f;
    [SerializeField] private float shakeSpeed = 20f;
    [SerializeField] private float shakeRotationAmount = 3f;

    private Coroutine _timerCoroutine;
    private Coroutine _pulseCoroutine;
    private Coroutine _alarmCoroutine;
    private bool _isRunning;

    private Vector3 _origTimerPos;
    private Vector3 _origTimerScale;
    private Vector3 _origTimerRot;

    private Vector3 _origArrowPos;
    private Vector3 _origArrowScale;
    private Vector3 _origArrowRot;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;

        if (timerBorderImage)
        {
            _origTimerPos = timerBorderImage.rectTransform.localPosition;
            _origTimerScale = timerBorderImage.rectTransform.localScale;
            _origTimerRot = timerBorderImage.rectTransform.localEulerAngles;
        }
        if (arrowImage)
        {
            _origArrowPos = arrowImage.rectTransform.localPosition;
            _origArrowScale = arrowImage.rectTransform.localScale;
            _origArrowRot = arrowImage.rectTransform.localEulerAngles;
        }
    }

    [ContextMenu("StartTimer")]
    public void StartGame()
    {
        if (_isRunning) StopGame();
        _isRunning = true;

        if (timeSlider != null) timeSlider.value = 1f;
        if (arrowParentRectTransform != null) arrowParentRectTransform.localEulerAngles = Vector3.zero;
        if (sliderFillImage != null) sliderFillImage.color = startColor;

        ResetBorders();

        if (_timerCoroutine != null) StopCoroutine(_timerCoroutine);
        _timerCoroutine = StartCoroutine(RunTimer());
    }

    public void StopGame()
    {
        _isRunning = false;

        if (_timerCoroutine != null) { StopCoroutine(_timerCoroutine); _timerCoroutine = null; }
        if (_pulseCoroutine != null) { StopCoroutine(_pulseCoroutine); _pulseCoroutine = null; }
        if (_alarmCoroutine != null) { StopCoroutine(_alarmCoroutine); _alarmCoroutine = null; }

        ResetBorders();
    }

    private void ResetBorders()
    {
        if (timerBorderImage != null)
        {
            timerBorderImage.color = Color.white;
            timerBorderImage.rectTransform.localScale = _origTimerScale;
            timerBorderImage.rectTransform.localPosition = _origTimerPos;
            timerBorderImage.rectTransform.localEulerAngles = _origTimerRot;
        }
        if (sliderBorderImage != null)
        {
            sliderBorderImage.color = Color.white;
        }
        if (arrowImage != null)
        {
            arrowImage.color = Color.white;
            arrowImage.rectTransform.localScale = _origArrowScale;
            arrowImage.rectTransform.localPosition = _origArrowPos;
            arrowImage.rectTransform.localEulerAngles = _origArrowRot;
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

            if (timeSlider != null) timeSlider.value = normalizedTime;
            if (arrowParentRectTransform != null)
            {
                float angle = progress * 360f;
                arrowParentRectTransform.localEulerAngles = new Vector3(0, 0, angle);
            }
            if (sliderFillImage != null)
            {
                sliderFillImage.color = progress <= 0.5f
                    ? Color.Lerp(startColor, midColor, progress * 2f)
                    : Color.Lerp(midColor, endColor, (progress - 0.5f) * 2f);
            }

            if (normalizedTime <= pulseThreshold && !pulseStarted)
            {
                pulseStarted = true;
                _pulseCoroutine = StartCoroutine(PulseLoop());
            }

            yield return null;
        }

        if (_isRunning) OnTimerFinished();
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
        Color startBorderColor = sliderBorderImage ? sliderBorderImage.color : Color.white;
        Color startTimerBorderColor = timerBorderImage ? timerBorderImage.color : Color.white;
        Color startArrowColor = arrowImage ? arrowImage.color : Color.white;

        Vector3 startTimerScale = timerBorderImage ? timerBorderImage.rectTransform.localScale : Vector3.one;
        Vector3 startArrowScale = arrowImage ? arrowImage.rectTransform.localScale : Vector3.one;

        while (elapsed < pulseDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / pulseDuration);
            Color currentColor = Color.Lerp(startBorderColor, pulseColor, t);

            if (sliderBorderImage) sliderBorderImage.color = currentColor;
            if (timerBorderImage) { timerBorderImage.color = currentColor; timerBorderImage.rectTransform.localScale = Vector3.Lerp(startTimerScale, Vector3.one * maxScaleMultiplier, t); }
            if (arrowImage) { arrowImage.color = currentColor; arrowImage.rectTransform.localScale = Vector3.Lerp(startArrowScale, Vector3.one * maxScaleMultiplier, t); }

            yield return null;
        }

        elapsed = 0f;
        while (elapsed < pulseDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / pulseDuration);
            Color currentColor = Color.Lerp(pulseColor, startBorderColor, t);

            if (sliderBorderImage) sliderBorderImage.color = currentColor;
            if (timerBorderImage) { timerBorderImage.color = currentColor; timerBorderImage.rectTransform.localScale = Vector3.Lerp(Vector3.one * maxScaleMultiplier, startTimerScale, t); }
            if (arrowImage) { arrowImage.color = currentColor; arrowImage.rectTransform.localScale = Vector3.Lerp(Vector3.one * maxScaleMultiplier, startArrowScale, t); }

            yield return null;
        }

        if (sliderBorderImage) sliderBorderImage.color = startBorderColor;
        if (timerBorderImage) { timerBorderImage.color = startTimerBorderColor; timerBorderImage.rectTransform.localScale = startTimerScale; }
        if (arrowImage) { arrowImage.color = startArrowColor; arrowImage.rectTransform.localScale = startArrowScale; }
    }

    private void OnTimerFinished()
    {
        _isRunning = false;
        if (timeSlider != null) timeSlider.value = 0f;
        if (arrowParentRectTransform != null) arrowParentRectTransform.localEulerAngles = Vector3.zero;
        if (sliderFillImage != null) sliderFillImage.color = endColor;

        if (_pulseCoroutine != null) { StopCoroutine(_pulseCoroutine); _pulseCoroutine = null; }

        if (_alarmCoroutine != null) StopCoroutine(_alarmCoroutine);
        _alarmCoroutine = StartCoroutine(PlayAlarmAnimation());
    }

    /// <summary>
    /// 3 фазы: 1. Увеличение + цвет. 2. Тряска позиции/вращения (только часы) + цвет всем. 3. Плавный возврат.
    /// </summary>
    private IEnumerator PlayAlarmAnimation()
    {
        Color origTimerColor = timerBorderImage ? timerBorderImage.color : Color.white;
        Color origArrowColor = arrowImage ? arrowImage.color : Color.white;
        Color origSliderColor = sliderBorderImage ? sliderBorderImage.color : Color.white;

        float scaleUpDuration = 0.2f;
        float elapsed = 0f;
        while (elapsed < scaleUpDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / scaleUpDuration);

            if (timerBorderImage)
            {
                timerBorderImage.rectTransform.localScale = Vector3.Lerp(_origTimerScale, _origTimerScale * maxScaleMultiplier, t);
                timerBorderImage.color = Color.Lerp(origTimerColor, pulseColor, t);
            }
            if (arrowImage) arrowImage.color = Color.Lerp(origArrowColor, pulseColor, t);
            if (sliderBorderImage) sliderBorderImage.color = Color.Lerp(origSliderColor, pulseColor, t);

            yield return null;
        }

        elapsed = 0f;
        while (elapsed < alarmDuration)
        {
            elapsed += Time.deltaTime;

            float shakeX = Mathf.Sin(elapsed * shakeSpeed) * shakeAmount;
            float shakeY = Mathf.Cos(elapsed * shakeSpeed * 0.85f) * (shakeAmount * 0.5f);

            float shakeRotZ = Mathf.Sin(elapsed * shakeSpeed * 1.2f) * shakeRotationAmount;

            if (timerBorderImage)
            {
                timerBorderImage.rectTransform.localPosition = _origTimerPos + new Vector3(shakeX, shakeY, 0f);
                timerBorderImage.rectTransform.localEulerAngles = new Vector3(_origTimerRot.x, _origTimerRot.y, _origTimerRot.z + shakeRotZ);
                timerBorderImage.rectTransform.localScale = _origTimerScale * maxScaleMultiplier;
                timerBorderImage.color = pulseColor;
            }

            if (arrowImage) arrowImage.color = pulseColor;
            if (sliderBorderImage) sliderBorderImage.color = pulseColor;

            yield return null;
        }

        Vector3 timerEndPos = timerBorderImage ? timerBorderImage.rectTransform.localPosition : _origTimerPos;
        Vector3 timerEndRot = timerBorderImage ? timerBorderImage.rectTransform.localEulerAngles : _origTimerRot;
        Vector3 timerEndScale = timerBorderImage ? timerBorderImage.rectTransform.localScale : _origTimerScale;
        Color timerEndColor = timerBorderImage ? timerBorderImage.color : origTimerColor;
        Color arrowEndColor = arrowImage ? arrowImage.color : origArrowColor;
        Color sliderEndColor = sliderBorderImage ? sliderBorderImage.color : origSliderColor;

        elapsed = 0f;
        float restoreDuration = 0.2f;
        while (elapsed < restoreDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / restoreDuration);

            if (timerBorderImage)
            {
                timerBorderImage.rectTransform.localPosition = Vector3.Lerp(timerEndPos, _origTimerPos, t);
                timerBorderImage.rectTransform.localEulerAngles = Vector3.Lerp(timerEndRot, _origTimerRot, t);
                timerBorderImage.rectTransform.localScale = Vector3.Lerp(timerEndScale, _origTimerScale, t);
                timerBorderImage.color = Color.Lerp(timerEndColor, origTimerColor, t);
            }
            if (arrowImage) arrowImage.color = Color.Lerp(arrowEndColor, origArrowColor, t);
            if (sliderBorderImage) sliderBorderImage.color = Color.Lerp(sliderEndColor, origSliderColor, t);

            yield return null;
        }

        _alarmCoroutine = null;
    }
}