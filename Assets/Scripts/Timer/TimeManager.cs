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

    [SerializeField] private Color startColor = Color.green;
    [SerializeField] private Color midColor = Color.yellow;
    [SerializeField] private Color endColor = Color.red;

    private Coroutine _timerCoroutine;
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
    }

    private IEnumerator RunTimer()
    {
        float elapsedTime = 0f;

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

            yield return null;
        }

        if (_isRunning)
        {
            OnTimerFinished();
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
    }
}