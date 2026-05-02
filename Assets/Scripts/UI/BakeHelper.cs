using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BakeHelper : MonoBehaviour
{
    [System.Serializable]
    public class TransformData
    {
        public Transform target;
        public Vector3 position;
        public Quaternion rotation;
        public Vector3 scale;
    }

    public List<TransformData> startGroup = new List<TransformData>();
    public List<TransformData> endGroup = new List<TransformData>();

    [ContextMenu("Bake Start Group")]
    public void BakeStartGroup()
    {
        List<TransformData> newData = new List<TransformData>();
        foreach (var data in startGroup)
        {
            if (data.target != null)
            {
                TransformData newDataItem = new TransformData();
                newDataItem.target = data.target;
                newDataItem.position = data.target.localPosition;
                newDataItem.rotation = data.target.localRotation;
                newDataItem.scale = data.target.localScale;
                newData.Add(newDataItem);
            }
        }
        startGroup = newData;
        Debug.Log($"Start group baked: {startGroup.Count} transforms");
    }

    [ContextMenu("Bake End Group")]
    public void BakeEndGroup()
    {
        List<TransformData> newData = new List<TransformData>();
        foreach (var data in endGroup)
        {
            if (data.target != null)
            {
                TransformData newDataItem = new TransformData();
                newDataItem.target = data.target;
                newDataItem.position = data.target.localPosition;
                newDataItem.rotation = data.target.localRotation;
                newDataItem.scale = data.target.localScale;
                newData.Add(newDataItem);
            }
        }
        endGroup = newData;
        Debug.Log($"End group baked: {endGroup.Count} transforms");
    }

    [ContextMenu("Apply Start Group")]
    public void ApplyStartGroup()
    {
        foreach (var data in startGroup)
        {
            if (data.target != null)
            {
                data.target.localPosition = data.position;
                data.target.localRotation = data.rotation;
                data.target.localScale = data.scale;
            }
        }
        Debug.Log($"Start group applied: {startGroup.Count} transforms");
    }

    [ContextMenu("Apply End Group")]
    public void ApplyEndGroup()
    {
        foreach (var data in endGroup)
        {
            if (data.target != null)
            {
                data.target.localPosition = data.position;
                data.target.localRotation = data.rotation;
                data.target.localScale = data.scale;
            }
        }
        Debug.Log($"End group applied: {endGroup.Count} transforms");
    }
}