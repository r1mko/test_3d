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
    [SerializeField] private float weightNeighborChainPotential = 60f;
    [SerializeField] private float weightFutureMatchPotential = 70f;

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

    public struct MoveDecision
    {
        public GroundPlatform Source;
        public GroundPlatform Target;
        public List<Hexagon> BlocksToMove;
        public float Score;
        public bool IsValid;
    }

    public MoveDecision AnalyzeBestMove(GroundPlatform currentPlatform, Hexagon.HexagonColor color, GroundPlatform previousSource = null)
    {
        MoveDecision bestMove = new MoveDecision { IsValid = false, Score = -99999f };

        List<Hexagon> currentBlocks = currentPlatform.GetBlocksToTransfer(currentPlatform.Container, color);
        List<GroundPlatform> neighbors = currentPlatform.GetActiveNeighbors().ToList();

        if (currentBlocks.Count > 0)
        {
            foreach (var neighbor in neighbors)
            {
                if (neighbor == null || neighbor == currentPlatform) continue;
                if (previousSource != null && neighbor == previousSource) continue;

                float score = EvaluateMove(currentPlatform, neighbor, color, currentBlocks.Count);

                if (score > bestMove.Score)
                {
                    bestMove.Source = currentPlatform;
                    bestMove.Target = neighbor;
                    bestMove.BlocksToMove = currentBlocks;
                    bestMove.Score = score;
                    bestMove.IsValid = true;
                }
            }
        }

        foreach (var neighbor in neighbors)
        {
            if (neighbor == null || neighbor == currentPlatform) continue;
            if (neighbor == previousSource) continue;

            List<Hexagon> neighborBlocks = neighbor.GetBlocksToTransfer(neighbor.Container, color);

            if (neighborBlocks.Count > 0)
            {
                float score = EvaluateMove(neighbor, currentPlatform, color, neighborBlocks.Count);

                if (score > bestMove.Score)
                {
                    bestMove.Source = neighbor;
                    bestMove.Target = currentPlatform;
                    bestMove.BlocksToMove = neighborBlocks;
                    bestMove.Score = score;
                    bestMove.IsValid = true;
                }
            }
        }

        return bestMove;
    }

    private float EvaluateMove(GroundPlatform source, GroundPlatform target, Hexagon.HexagonColor color, int blocksCount)
    {
        float score = 0f;

        Hexagon targetTopHex = target.GetTopHexagon(target.Container);

        if (targetTopHex == null)
        {
            return -99999f;
        }

        if (targetTopHex.GetColor() != color)
        {
            return -99999f;
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

        score += EvaluateNeighborChainPotential(target, color, source);

        score += EvaluateFutureMatchPotential(source, target, color, blocksCount);

        return score;
    }

    private float EvaluateNeighborChainPotential(GroundPlatform platform, Hexagon.HexagonColor movedColor, GroundPlatform excludePlatform)
    {
        float score = 0f;

        Hexagon platformTop = platform.GetTopHexagon(platform.Container);
        if (platformTop == null) return score;

        foreach (var neighbor in platform.GetActiveNeighbors())
        {
            if (neighbor == null || neighbor == excludePlatform) continue;

            Hexagon neighborTop = neighbor.GetTopHexagon(neighbor.Container);
            if (neighborTop != null && neighborTop.GetColor() == platformTop.GetColor())
            {
                score += weightNeighborChainPotential;

                List<Hexagon> neighborBlocks = neighbor.GetTopContinuousBlocks(neighborTop.GetColor());
                List<Hexagon> platformBlocks = platform.GetTopContinuousBlocks(platformTop.GetColor());

                if (neighborBlocks.Count + platformBlocks.Count >= 10)
                {
                    score += weightFutureMatchPotential * 0.5f;
                }
            }
        }

        return score;
    }

    private float EvaluateFutureMatchPotential(GroundPlatform source, GroundPlatform target, Hexagon.HexagonColor movedColor, int blocksCount)
    {
        float score = 0f;

        Hexagon sourceNext = GetNextHexagonAfterTransfer(source, movedColor, blocksCount);
        if (sourceNext != null)
        {
            Hexagon.HexagonColor nextColor = sourceNext.GetColor();

            foreach (var neighbor in source.GetActiveNeighbors())
            {
                if (neighbor == null) continue;
                Hexagon neighborTop = neighbor.GetTopHexagon(neighbor.Container);
                if (neighborTop != null && neighborTop.GetColor() == nextColor)
                {
                    List<Hexagon> sourceNextBlocks = source.GetTopContinuousBlocks(nextColor);
                    List<Hexagon> neighborBlocks = neighbor.GetTopContinuousBlocks(nextColor);

                    if (sourceNextBlocks.Count + neighborBlocks.Count >= 10)
                    {
                        score += weightFutureMatchPotential;
                    }
                    else
                    {
                        score += weightChainContinuation * 0.5f;
                    }
                }
            }
        }

        Hexagon targetNewTop = target.GetTopHexagon(target.Container);
        if (targetNewTop != null)
        {
            Hexagon.HexagonColor newTopColor = targetNewTop.GetColor();

            foreach (var neighbor in target.GetActiveNeighbors())
            {
                if (neighbor == null) continue;
                Hexagon neighborTop = neighbor.GetTopHexagon(neighbor.Container);
                if (neighborTop != null && neighborTop.GetColor() == newTopColor)
                {
                    List<Hexagon> targetBlocks = target.GetTopContinuousBlocks(newTopColor);
                    List<Hexagon> neighborBlocks = neighbor.GetTopContinuousBlocks(newTopColor);

                    if (targetBlocks.Count + neighborBlocks.Count >= 10)
                    {
                        score += weightFutureMatchPotential;
                    }
                    else
                    {
                        score += weightChainContinuation * 0.5f;
                    }
                }
            }
        }

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