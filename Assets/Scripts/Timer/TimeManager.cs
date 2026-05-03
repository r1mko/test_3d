using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class TimeManager : MonoBehaviour
{
    public static TimeManager Instance { get; private set; }

    [SerializeField] private float gameDuration = 20f;
    [SerializeField] private Slider timeSlider;
    [SerializeField] private RectTransform arrowParentRectTransform;

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
            float normalizedTime = 1f - (elapsedTime / gameDuration);

            if (timeSlider != null)
            {
                timeSlider.value = normalizedTime;
            }

            if (arrowParentRectTransform != null)
            {
                float angle = normalizedTime * 360f;
                arrowParentRectTransform.localEulerAngles = new Vector3(0, 0, -angle);
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
    }
}