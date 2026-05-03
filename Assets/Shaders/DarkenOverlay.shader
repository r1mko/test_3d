Shader "Custom/DarkenOverlay"
{
    Properties
    {
        _TintColor ("Tint Color", Color) = (0,0,0,0.75) // Черный цвет с прозрачностью
    }
    SubShader
    {
        // Queue = Geometry+100 (2100). 
        // Рисуется после обычной геометрии (2000), но до прозрачной (3000) и наших светлых объектов.
        Tags { "Queue"="Geometry+100" "RenderType"="Transparent" "IgnoreProjector"="True" }
        
        LOD 100

        Pass
        {
            ZWrite Off      // Не пишем в глубину, чтобы не ломать сортировку следующих объектов
            ZTest Always    // Рисуем поверх всего, что уже есть в буфере цвета
            Cull Off        // Рисуем с обеих сторон плоскости
            Blend SrcAlpha OneMinusSrcAlpha // Смешиваем прозрачность

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            fixed4 _TintColor;

            struct appdata
            {
                float4 vertex : POSITION;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
            };

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                return _TintColor;
            }
            ENDCG
        }
    }
}