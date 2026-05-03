using System.Collections;
using UnityEngine;

public class TutorialManager : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private GameObject[] tutorialPoints;

    [Header("Settings")]
    [SerializeField] private float totalDuration = 2f;
    [SerializeField] private float pauseDuration = 1f;

    private void Awake()
    {
        InitializePoints();
    }

    private void InitializePoints()
    {
        if (tutorialPoints == null) return;

        foreach (var point in tutorialPoints)
        {
            if (point != null)
            {
                point.SetActive(false);
            }
        }
    }

    [ContextMenu("StartAnim")]
    public void StartTutorialAnimation()
    {
        StartCoroutine(AnimatePointsSequence());
    }

    private IEnumerator AnimatePointsSequence()
    {
        if (tutorialPoints == null || tutorialPoints.Length == 0) yield break;

        float delayPerItem = totalDuration / tutorialPoints.Length;
        float cycles = 0;

        while (cycles < 2)
        {
            for (int i = 0; i < tutorialPoints.Length; i++)
            {
                if (tutorialPoints[i] != null)
                {
                    tutorialPoints[i].SetActive(true);
                }

                yield return new WaitForSeconds(delayPerItem);
            }

            yield return new WaitForSeconds(pauseDuration);

            foreach (var item in tutorialPoints)
            {
                if (item != null) item.SetActive(false);
            }

            yield return new WaitForSeconds(0.1f);

            cycles++;
        }
    }
}