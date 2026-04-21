using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StackManager : MonoBehaviour
{
    public static StackManager Instance { get; private set; }

    [SerializeField] private List<Stack> stacks = new List<Stack>();

    private bool isRefilling = false;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
    }

    public void OnStackEmptied(Stack stack)
    {
        stack.SetDisabled(true);

        if (isRefilling) return;

        if (AreAllStacksEmpty())
        {
            HandleRefill();
        }
    }

    private void HandleRefill()
    {
        if (PlatformManager.Instance != null && PlatformManager.Instance.IsBusy)
        {
            StartCoroutine(WaitForChainReactionAndRefill());
        }
        else
        {
            RefillAllStacks();
        }
    }

    private IEnumerator WaitForChainReactionAndRefill()
    {
        yield return new WaitUntil(() => PlatformManager.Instance == null || !PlatformManager.Instance.IsBusy);
        RefillAllStacks();
    }

    private bool AreAllStacksEmpty()
    {
        foreach (var stack in stacks)
        {
            if (stack.transform.childCount > 0)
            {
                return false;
            }
        }
        return true;
    }

    private void RefillAllStacks()
    {
        isRefilling = true;

        foreach (var stack in stacks)
        {
            FillStack fillStack = stack.GetComponent<FillStack>();
            if (fillStack != null)
            {
                fillStack.GenerateBlocks();
            }
            stack.SetDisabled(false);
        }

        isRefilling = false;
    }
}