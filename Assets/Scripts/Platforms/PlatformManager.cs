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
    [SerializeField] private float weightNeighborChainPotential = 60f;
    [SerializeField] private float weightFutureMatchPotential = 70f;
    [SerializeField] private float weightGlobalOpportunity = 40f;

    [Header("Settings")]
    [SerializeField] private int matchCountThreshold = 10;
    [SerializeField] private float animationWaitTime = 1.5f;

    private const int MaxIterations = 100;

    private void Awake()
    {
        if (Instance != null && Instance != this) { Destroy(gameObject); return; }
        Instance = this;
    }

    private void OnDestroy() { if (Instance == this) Instance = null; }

    public struct MoveDecision
    {
        public GroundPlatform Source;
        public GroundPlatform Target;
        public List<Hexagon> BlocksToMove;
        public Hexagon.HexagonColor Color;
        public float Score;
        public bool IsValid;
    }

    public void StartChainReaction(GroundPlatform starter)
    {
        if (starter == null) return;
        StartCoroutine(ProcessChainReactionGlobal(starter));
    }

    private IEnumerator ProcessChainReactionGlobal(GroundPlatform starter)
    {
        bool globalStateChanged = true;
        int safetyCounter = 0;
        int stepCount = 0;
        HashSet<GroundPlatform> recentlyMoved = new HashSet<GroundPlatform>();
        GroundPlatform priorityPlatform = starter;

        while (globalStateChanged && safetyCounter < MaxIterations)
        {
            safetyCounter++;
            globalStateChanged = false;

            SyncAllPlatformsColors();

            MoveDecision bestMove = FindBestGlobalMove(recentlyMoved, priorityPlatform);

            if (bestMove.IsValid)
            {
                globalStateChanged = true;
                stepCount = Mathf.Min(stepCount + 1, 4);
                float speedMultiplier = Mathf.Pow(1.3f, stepCount - 1);

                recentlyMoved.Add(bestMove.Source);
                recentlyMoved.Add(bestMove.Target);

                priorityPlatform = bestMove.Target;

                bool animDone = false;
                bestMove.Source.StartTransferAnimation(bestMove.Target, bestMove.BlocksToMove, () => { animDone = true; }, speedMultiplier);
                yield return new WaitUntil(() => animDone);

                yield return new WaitForEndOfFrame();
            }
            else
            {
                SyncAllPlatformsColors();

                bool destroyedSomething = false;
                foreach (var platform in GroundPlatforms)
                {
                    if (platform != null && platform.CheckAndClearMatch(matchCountThreshold))
                    {
                        destroyedSomething = true;
                    }
                }

                if (destroyedSomething)
                {
                    globalStateChanged = true;
                    yield return new WaitForSeconds(animationWaitTime);

                    foreach (var p in GroundPlatforms)
                    {
                        if (p != null) p.ForceInitializeColorsInContainer(p.Container);
                    }

                    recentlyMoved.Clear();
                    stepCount = 0;
                    priorityPlatform = null;
                }
            }
        }

        if (safetyCounter >= MaxIterations) Debug.LogError("Достигнут лимит итераций!");
        starter.DebugLogBoardState();
    }

    private MoveDecision FindBestGlobalMove(HashSet<GroundPlatform> recentlyMoved, GroundPlatform priorityPlatform)
    {
        MoveDecision bestMove = new MoveDecision { IsValid = false, Score = -99999f };

        foreach (var platform in GroundPlatforms)
        {
            if (platform == null) continue;

            Hexagon topHex = platform.GetTopHexagon(platform.Container);
            if (topHex == null) continue;

            Hexagon.HexagonColor color = topHex.GetColor();
            List<Hexagon> blocks = platform.GetBlocksToTransfer(platform.Container, color);
            if (blocks.Count == 0) continue;

            foreach (var neighbor in platform.GetActiveNeighbors())
            {
                if (neighbor == null || neighbor == platform) continue;

                float score = EvaluateMoveGlobal(platform, neighbor, color, blocks.Count, recentlyMoved, priorityPlatform);

                if (score > bestMove.Score)
                {
                    bestMove.Source = platform;
                    bestMove.Target = neighbor;
                    bestMove.BlocksToMove = blocks;
                    bestMove.Color = color;
                    bestMove.Score = score;
                    bestMove.IsValid = true;
                }
            }
        }

        return bestMove;
    }

    private float EvaluateMoveGlobal(GroundPlatform source, GroundPlatform target, Hexagon.HexagonColor color, int blocksCount, HashSet<GroundPlatform> recentlyMoved, GroundPlatform priorityPlatform)
    {
        float score = 0f;

        Hexagon targetTop = target.GetTopHexagon(target.Container);
        if (targetTop == null || targetTop.GetColor() != color) return -99999f;

        List<Hexagon> targetMatching = target.GetTopContinuousBlocks(color);
        int potentialTotal = targetMatching.Count + blocksCount;

        bool willCreateMatch = potentialTotal >= matchCountThreshold;

        if (willCreateMatch)
        {
            score += weightMatchCreation;
            score += (potentialTotal - matchCountThreshold) * 1f;
        }
        else
        {
            score += weightChainContinuation;
        }

        if (priorityPlatform != null)
        {
            if (source == priorityPlatform || target == priorityPlatform)
            {
                score += 200f;
            }

            if (priorityPlatform.GetActiveNeighbors().Contains(source) ||
                priorityPlatform.GetActiveNeighbors().Contains(target))
            {
                score += 100f;
            }
        }

        Hexagon sourceNext = GetNextHexagonAfterTransfer(source, color, blocksCount);
        Hexagon targetUnder = GetUnderHexagon(target);
        if (sourceNext != null && targetUnder != null && sourceNext.GetColor() == targetUnder.GetColor())
        {
            score += weightUnderColorMatch;
        }

        score += EvaluateNeighborChainPotential(target, color, source);
        score += EvaluateFutureMatchPotential(source, target, color, blocksCount);

        if (!recentlyMoved.Contains(source) && !recentlyMoved.Contains(target))
        {
            score += weightGlobalOpportunity;
        }

        score -= target.GetBlockCount() * 0.1f;

        return score;
    }

    private void SyncAllPlatformsColors()
    {
        foreach (var p in GroundPlatforms)
        {
            if (p != null) p.InitializeColorsInContainer(p.Container);
        }
    }

    private MoveDecision FindBestGlobalMove(HashSet<GroundPlatform> recentlyMoved)
    {
        MoveDecision bestMove = new MoveDecision { IsValid = false, Score = -99999f };

        foreach (var platform in GroundPlatforms)
        {
            if (platform == null) continue;

            Hexagon topHex = platform.GetTopHexagon(platform.Container);
            if (topHex == null) continue;

            Hexagon.HexagonColor color = topHex.GetColor();
            List<Hexagon> blocks = platform.GetBlocksToTransfer(platform.Container, color);
            if (blocks.Count == 0) continue;

            foreach (var neighbor in platform.GetActiveNeighbors())
            {
                if (neighbor == null || neighbor == platform) continue;

                float score = EvaluateMoveGlobal(platform, neighbor, color, blocks.Count, recentlyMoved);

                if (score > bestMove.Score)
                {
                    bestMove.Source = platform;
                    bestMove.Target = neighbor;
                    bestMove.BlocksToMove = blocks;
                    bestMove.Color = color;
                    bestMove.Score = score;
                    bestMove.IsValid = true;
                }
            }
        }

        return bestMove;
    }

    private float EvaluateMoveGlobal(GroundPlatform source, GroundPlatform target, Hexagon.HexagonColor color, int blocksCount, HashSet<GroundPlatform> recentlyMoved)
    {
        float score = 0f;

        Hexagon targetTop = target.GetTopHexagon(target.Container);
        if (targetTop == null || targetTop.GetColor() != color) return -99999f;

        List<Hexagon> targetMatching = target.GetTopContinuousBlocks(color);
        int potentialTotal = targetMatching.Count + blocksCount;

        bool willCreateMatch = potentialTotal >= matchCountThreshold;

        if (willCreateMatch)
        {
            score += weightMatchCreation;
            score += (potentialTotal - matchCountThreshold) * 1f;
        }
        else
        {
            score += weightChainContinuation;
        }

        Hexagon sourceNext = GetNextHexagonAfterTransfer(source, color, blocksCount);
        Hexagon targetUnder = GetUnderHexagon(target);
        if (sourceNext != null && targetUnder != null && sourceNext.GetColor() == targetUnder.GetColor())
        {
            score += weightUnderColorMatch;
        }

        score += EvaluateNeighborChainPotential(target, color, source);
        score += EvaluateFutureMatchPotential(source, target, color, blocksCount);

        if (!recentlyMoved.Contains(source) && !recentlyMoved.Contains(target))
        {
            score += weightGlobalOpportunity;
        }

        score -= target.GetBlockCount() * 0.1f;

        return score;
    }

    private float EvaluateNeighborChainPotential(GroundPlatform platform, Hexagon.HexagonColor movedColor, GroundPlatform exclude)
    {
        float score = 0f;
        Hexagon platformTop = platform.GetTopHexagon(platform.Container);
        if (platformTop == null) return score;

        foreach (var neighbor in platform.GetActiveNeighbors())
        {
            if (neighbor == null || neighbor == exclude) continue;
            Hexagon neighborTop = neighbor.GetTopHexagon(neighbor.Container);
            if (neighborTop != null && neighborTop.GetColor() == platformTop.GetColor())
            {
                score += weightNeighborChainPotential;
                List<Hexagon> nBlocks = neighbor.GetTopContinuousBlocks(neighborTop.GetColor());
                List<Hexagon> pBlocks = platform.GetTopContinuousBlocks(platformTop.GetColor());
                if (nBlocks.Count + pBlocks.Count >= matchCountThreshold)
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
                Hexagon nTop = neighbor.GetTopHexagon(neighbor.Container);
                if (nTop != null && nTop.GetColor() == nextColor)
                {
                    List<Hexagon> sBlocks = source.GetTopContinuousBlocks(nextColor);
                    List<Hexagon> nBlocks = neighbor.GetTopContinuousBlocks(nextColor);
                    if (sBlocks.Count + nBlocks.Count >= matchCountThreshold)
                        score += weightFutureMatchPotential;
                    else
                        score += weightChainContinuation * 0.5f;
                }
            }
        }

        Hexagon targetNewTop = target.GetTopHexagon(target.Container);
        if (targetNewTop != null)
        {
            Hexagon.HexagonColor newColor = targetNewTop.GetColor();
            foreach (var neighbor in target.GetActiveNeighbors())
            {
                if (neighbor == null) continue;
                Hexagon nTop = neighbor.GetTopHexagon(neighbor.Container);
                if (nTop != null && nTop.GetColor() == newColor)
                {
                    List<Hexagon> tBlocks = target.GetTopContinuousBlocks(newColor);
                    List<Hexagon> nBlocks = neighbor.GetTopContinuousBlocks(newColor);
                    if (tBlocks.Count + nBlocks.Count >= matchCountThreshold)
                        score += weightFutureMatchPotential;
                    else
                        score += weightChainContinuation * 0.5f;
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
            if (hex != null && child.gameObject.activeSelf) allHexes.Add(hex);
        }
        allHexes.Sort((a, b) => b.transform.localPosition.y.CompareTo(a.transform.localPosition.y));
        return allHexes.Count <= count ? null : allHexes[count];
    }

    private Hexagon GetUnderHexagon(GroundPlatform platform)
    {
        List<Hexagon> allHexes = new List<Hexagon>();
        foreach (Transform child in platform.Container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null && child.gameObject.activeSelf) allHexes.Add(hex);
        }
        allHexes.Sort((a, b) => b.transform.localPosition.y.CompareTo(a.transform.localPosition.y));
        return allHexes.Count < 2 ? null : allHexes[1];
    }
}