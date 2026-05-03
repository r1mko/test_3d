using UnityEngine;
using UnityEngine.UI;

public class EndGame : MonoBehaviour
{
    public static EndGame Instance { get; private set; }
    public bool GameEnded { get; private set; } = false;

    [SerializeField] private Animator animator;
    [SerializeField] private Button[] urlButtons;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
        GameEnded = false;
    }

    private void Start()
    {
        foreach (var button in urlButtons)
        {
            button.onClick.AddListener(RefButton);
        }
    }

    private void OnDestroy()
    {
        foreach (var button in urlButtons)
        {
            if (button != null)
            {
                button.onClick.RemoveAllListeners();
            }
        }
    }

    public void TriggerEndGame()
    {
        if (GameEnded)
            return;

        if (animator != null)
        {
            GameEnded = true;
            animator.Play("EndGameBackground");
        }
    }

    public void TriggerPackshot()
    {
        if (animator != null)
        {
            GameEnded = true;
            animator.Play("Packshot");
        }
    }

    public void FinalEndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }

    private void RefButton()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

}