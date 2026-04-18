using UnityEngine;
using System.Collections.Generic;
using System.Linq;
using System.Collections;

public class GroundPlatform : MonoBehaviour
{
    public GameObject Container;

    [SerializeField] private Material glowMaterial;
    [SerializeField] private Renderer platformRenderer;
    [SerializeField] private GroundPlatform[] neighborPlatforms;

    private HashSet<GroundPlatform> activeNeighbors = new HashSet<GroundPlatform>();
    private Material originalMaterial;
    private const float HeightStep = 0.075f;

    private void Awake()
    {
        if (platformRenderer != null)
        {
            originalMaterial = platformRenderer.material;
        }
    }

    private void Start()
    {
        InitializeColorsInContainer(Container);
        ScanForNeighborsAtStart();
    }

    private void ScanForNeighborsAtStart()
    {
        if (neighborPlatforms == null) return;
        foreach (GroundPlatform neighbor in neighborPlatforms)
        {
            if (neighbor != null && neighbor != this)
            {
                activeNeighbors.Add(neighbor);
            }
        }
    }

    public void OnStackDropped()
    {
        InitializeColorsInContainer(Container);

        Hexagon myTopHex = GetTopHexagon(Container);
        if (myTopHex == null)
        {
            return;
        }

        Hexagon.HexagonColor myColor = myTopHex.GetColor();

        foreach (GroundPlatform neighbor in activeNeighbors)
        {
            InitializeColorsInContainer(neighbor.Container);

            Hexagon neighborTopHex = GetTopHexagon(neighbor.Container);
            if (neighborTopHex == null) continue;

            Hexagon.HexagonColor neighborColor = neighborTopHex.GetColor();

            if (myColor == neighborColor)
            {
                StartTransferAnimation(neighbor);
                return;
            }
        }
    }

    private void StartTransferAnimation(GroundPlatform targetPlatform)
    {
        // Собираем все блоки из текущего контейнера
        List<Hexagon> blocksToMove = new List<Hexagon>();
        foreach (Transform child in Container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null)
            {
                blocksToMove.Add(hex);
            }
        }

        // Сортируем их по высоте (снизу вверх или сверху вниз - зависит от желаемого эффекта "перекладывания")
        // Обычно перекладывают сверху вниз, чтобы верхний упал первым, но визуально красивее снизу вверх (как башня переезжает)
        // Давайте сортировать по Y, чтобы двигать снизу вверх (индекс 0 - самый нижний)
        blocksToMove.Sort((a, b) => a.transform.localPosition.y.CompareTo(b.transform.localPosition.y));

        // Рассчитываем новые позиции в целевом контейнере
        int startIndex = targetPlatform.Container.transform.childCount;

        for (int i = 0; i < blocksToMove.Count; i++)
        {
            Hexagon hex = blocksToMove[i];
            int finalIndex = startIndex + i;

            // Целевая локальная позиция в новом контейнере
            Vector3 localTargetPos = new Vector3(0f, finalIndex * HeightStep, 0f);
            // Конвертируем в мировую позицию для анимации
            Vector3 worldTargetPos = targetPlatform.Container.transform.TransformPoint(localTargetPos);

            // Целевое вращение (совпадает с вращением контейнера/платформы)
            Quaternion targetRot = targetPlatform.Container.transform.rotation;

            // Запускаем анимацию с задержкой, чтобы они летели по очереди
            // Можно использовать корутину для последовательного запуска, но проще добавить delay в саму анимацию или здесь
            StartCoroutine(PlaySequentialJump(hex, worldTargetPos, targetRot, targetPlatform.Container.transform, localTargetPos, i * 0.1f));
        }

        // Очищаем текущий контейнер визуально сразу, но логически он очистится, когда объекты улетят
        // Важно: объекты теперь дети targetPlatform, но летят из старой позиции.
        // Чтобы упростить, мы меняем родителя ПЕРЕД анимацией, но сохраняем старую мировую позицию.

        foreach (Hexagon hex in blocksToMove)
        {
            hex.transform.SetParent(targetPlatform.Container.transform, true);
        }
    }

    private IEnumerator PlaySequentialJump(Hexagon hex, Vector3 worldTargetPos, Quaternion targetRot, Transform newParent, Vector3 localTargetPos, float delay)
    {
        yield return new WaitForSeconds(delay);

        // Перед началом прыжка убеждаемся, что объект стоит в старой позиции (мировой)
        // Так как мы сменили родителя, позиция могла скакнуть. Возвращаем мировую позицию.
        hex.transform.position = hex.transform.position;

        // Запускаем анимацию в Hexagon
        hex.PlayJumpAnimation(worldTargetPos, targetRot, () =>
        {
            // После анимации устанавливаем локальную позицию точно в цель, чтобы избежать рассинхрона
            hex.transform.localPosition = localTargetPos;
            hex.transform.localRotation = Quaternion.identity; // Или как требуется вашей системе координат
        });
    }

    private void MoveAllChildren(GameObject fromContainer, GameObject toContainer)
    {
        List<Transform> children = new List<Transform>();
        foreach (Transform child in fromContainer.transform)
        {
            children.Add(child);
        }

        foreach (Transform child in children)
        {
            child.SetParent(toContainer.transform, true);
        }
    }

    private Hexagon GetTopHexagon(GameObject container)
    {
        if (container == null) return null;

        Hexagon topHex = null;
        float maxY = -9999f;

        foreach (Transform childTransform in container.transform)
        {
            Hexagon hex = childTransform.GetComponent<Hexagon>();
            if (hex == null) continue;

            if (childTransform.localPosition.y > maxY)
            {
                maxY = childTransform.localPosition.y;
                topHex = hex;
            }
        }

        return topHex;
    }

    private void RealignStack(GameObject container)
    {
        if (container == null) return;

        List<Transform> hexObjects = new List<Transform>();

        foreach (Transform child in container.transform)
        {
            if (child.GetComponent<Hexagon>() != null)
            {
                hexObjects.Add(child);
            }
        }

        hexObjects.Sort((a, b) => a.localPosition.y.CompareTo(b.localPosition.y));

        int index = 0;
        foreach (Transform hexObj in hexObjects)
        {
            hexObj.localPosition = new Vector3(0f, index * HeightStep, 0f);
            index++;
        }
    }

    private void InitializeColorsInContainer(GameObject container)
    {
        if (container == null) return;

        foreach (Transform child in container.transform)
        {
            Hexagon hex = child.GetComponent<Hexagon>();
            if (hex != null && !hex.IsInitialized())
            {
                hex.IdentifyColorByMaterial();
            }
        }
    }

    public void SetGlow()
    {
        if (platformRenderer == null || glowMaterial == null) return;
        platformRenderer.material = glowMaterial;
    }

    public void RemoveGlow()
    {
        if (platformRenderer == null || originalMaterial == null) return;
        platformRenderer.material = originalMaterial;
    }

    public bool IsAvailable()
    {
        if (Container == null) return false;
        return Container.transform.childCount == 0;
    }
}