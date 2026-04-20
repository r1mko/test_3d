using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class PlatformManager : MonoBehaviour
{
    public static PlatformManager Instance { get; private set; }

    public GroundPlatform[] GroundPlatforms;

    [Header("AI Weights")]
    [SerializeField] private float weightMatchCreation = 100f;
    [SerializeField] private float weightChainContinuation = 50f;
    [SerializeField] private float weightUnderColorMatch = 80f;
    [SerializeField] private float penaltyReturnMove = -1000f;
    [SerializeField] private float penaltyInvalidColor = -99999f;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }

    private void OnDestroy()
    {
        if (Instance == this) Instance = null;
    }

    public GroundPlatform GetBestTargetPlatform(GroundPlatform sourcePlatform, Hexagon.HexagonColor movingColor, int blocksCount, GroundPlatform previousSource = null)
    {
        if (sourcePlatform == null) return null;

        List<GroundPlatform> validNeighbors = new List<GroundPlatform>();
        foreach (var neighbor in sourcePlatform.GetActiveNeighbors())
        {
            if (neighbor != null && neighbor != sourcePlatform)
            {
                validNeighbors.Add(neighbor);
            }
        }

        if (validNeighbors.Count == 0) return null;

        GroundPlatform bestTarget = null;
        float bestScore = -99999f;

        foreach (var target in validNeighbors)
        {
            float score = EvaluateMove(sourcePlatform, target, movingColor, blocksCount, previousSource);

            if (score > bestScore)
            {
                bestScore = score;
                bestTarget = target;
            }
        }

        if (bestScore < 0f) return null;

        return bestTarget;
    }

    private float EvaluateMove(GroundPlatform source, GroundPlatform target, Hexagon.HexagonColor color, int blocksCount, GroundPlatform previousSource)
    {
        float score = 0f;

        if (target == previousSource)
        {
            return penaltyReturnMove;
        }

        Hexagon targetTopHex = target.GetTopHexagon(target.Container);

        if (targetTopHex == null)
        {
            return penaltyInvalidColor;
        }

        if (targetTopHex.GetColor() != color)
        {
            return penaltyInvalidColor;
        }

        List<Hexagon> targetTopMatching = target.GetTopContinuousBlocks(color);
        int potentialTotal = targetTopMatching.Count + blocksCount;
        const int matchThreshold = 10;

        bool willCreateMatch = potentialTotal >= matchThreshold;

        if (willCreateMatch)
        {
            score += weightMatchCreation;
            score += (potentialTotal - matchThreshold) * 1f;
        }
        else
        {
            score += weightChainContinuation;
        }

        Hexagon sourceNextHex = GetNextHexagonAfterTransfer(source, color, blocksCount);
        Hexagon targetUnderHex = GetUnderHexagon(target);

        if (sourceNextHex != null && targetUnderHex != null)
        {
            if (sourceNextHex.GetColor() == targetUnderHex.GetColor())
            {
                score += weightUnderColorMatch;
            }
        }

        int targetChildCount = target.GetBlockCount();
        score -= targetChildCount * 0.1f;

        return score;
    }

    private Hexagon GetNextHexagonAfterTransfer(GroundPlatform platform, Hexagon.HexagonColor removedColor, int count)
    {
        List<Hexagon> allHexes = new List<Hexagon>();
        foreach (Transform child in platform.Container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null && child.gameObject.activeSelf)
            {
                allHexes.Add(hex);
            }
        }

        allHexes.Sort((a, b) => b.transform.localPosition.y.CompareTo(a.transform.localPosition.y));

        if (allHexes.Count <= count)
        {
            return null;
        }

        return allHexes[count];
    }

    private Hexagon GetUnderHexagon(GroundPlatform platform)
    {
        List<Hexagon> allHexes = new List<Hexagon>();
        foreach (Transform child in platform.Container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null && child.gameObject.activeSelf)
            {
                allHexes.Add(hex);
            }
        }

        allHexes.Sort((a, b) => b.transform.localPosition.y.CompareTo(a.transform.localPosition.y));

        if (allHexes.Count < 2)
        {
            return null;
        }

        return allHexes[1];
    }
}