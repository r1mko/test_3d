using UnityEngine;

public class CursorFollower : MonoBehaviour
{
    private RectTransform _rectTransform;

    private void Awake()
    {
        _rectTransform = GetComponent<RectTransform>();

        if (_rectTransform == null)
        {
            Debug.LogError($"[CursorFollower] RectTransform not found on {gameObject.name}");
        }
    }

    private void Update()
    {
        if (_rectTransform == null) return;

        _rectTransform.position = Input.mousePosition;
    }
}