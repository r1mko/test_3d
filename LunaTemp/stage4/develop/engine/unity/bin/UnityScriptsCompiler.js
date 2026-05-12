if ( TRACE ) { TRACE( JSON.parse( '["BakeHelper#init","BakeHelper#BakeStartGroup","BakeHelper#BakeEndGroup","BakeHelper#ApplyStartGroup","BakeHelper#ApplyEndGroup","BakeHelper.TransformData#init","CursorFollower#init","CursorFollower#init","CursorFollower#Awake","CursorFollower#HideInstantlyCursor","CursorFollower#Update","CursorFollower#PlayGrabAnimation","CursorFollower#PlayReleaseAnimation","CursorFollower#TriggerChainReactionFade","CursorFollower#SetTutorialActive","CursorFollower#SetVisibility","CursorFollower#FadeCoroutine","CursorFollower#SetAlpha","DragAndDrop#init","DragAndDrop#init","DragAndDrop#Awake","DragAndDrop#OnMouseDown","DragAndDrop#OnMouseUp","DragAndDrop#Update","DragAndDrop#PlayUnavailableAnimation","EndGame#init","EndGame#Awake","EndGame#Start","EndGame#OnDestroy","EndGame#TriggerEndGame","EndGame#TriggerPackshot","EndGame#FinalEndGame","EndGame#RefButton","FillStack#init","FillStack#GenerateBlocks","FillStack#GetSmartRandomColor","FillStack#GetExistingColorsFromField","FillStack#GetRandomColor","GroundPlatform#init","GroundPlatform#init","GroundPlatform#Awake","GroundPlatform#Start","GroundPlatform#ScanForNeighborsAtStart","GroundPlatform#InitializeColorsInContainer","GroundPlatform#ForceInitializeColorsInContainer","GroundPlatform#GetTopHexagon","GroundPlatform#GetBlocksToTransfer","GroundPlatform#GetColorCount","GroundPlatform#GetTopContinuousBlocks","GroundPlatform#GetBlockCount","GroundPlatform#CheckAndClearMatch","GroundPlatform#ClearHexagonsSequentially","GroundPlatform#PlayRemoveAnimation","GroundPlatform#PlayFinalRemoveEffect","GroundPlatform#StartTransferAnimation","GroundPlatform#PlaySequentialJump","GroundPlatform#GetActiveNeighbors","GroundPlatform#SetGlow","GroundPlatform#RemoveGlow","GroundPlatform#AnimateScale","GroundPlatform#IsAvailable","GroundPlatform#DebugLogBoardState","Hexagon#init","Hexagon#Awake","Hexagon#Init","Hexagon#IdentifyColorByMaterial","Hexagon#GetColor","Hexagon#IsInitialized","Hexagon#PlayJumpAnimation","Hexagon#JumpCoroutine","Hexagon#PlayRemoveAnimation","Hexagon#RemoveCoroutine","Hexagon.ColorMaterialPair#getDefaultValue","Hexagon.ColorMaterialPair#ctor","Hexagon.ColorMaterialPair#getHashCode","Hexagon.ColorMaterialPair#equals","Hexagon.ColorMaterialPair#$clone","PlatformManager#init","PlatformManager#IsBusy#get","PlatformManager#init","PlatformManager#Awake","PlatformManager#OnDestroy","PlatformManager#IncrementPendingRemovals","PlatformManager#DecrementPendingRemovals","PlatformManager#StartChainReaction","PlatformManager#ProcessChainReactionGlobal","PlatformManager#SyncAllPlatformsColors","PlatformManager#FindBestGlobalMove","PlatformManager#EvaluateMoveGlobal","PlatformManager#EvaluateNeighborChainPotential","PlatformManager#EvaluateFutureMatchPotential","PlatformManager#GetNextHexagonAfterTransfer","PlatformManager#GetUnderHexagon","PlatformManager.MoveDecision#getDefaultValue","PlatformManager.MoveDecision#ctor","PlatformManager.MoveDecision#getHashCode","PlatformManager.MoveDecision#equals","PlatformManager.MoveDecision#$clone","Stack#init","Stack#IsDisabled#get","Stack#init","Stack#Awake","Stack#Update","Stack#CheckHover","Stack#DebugRaycast","Stack#Drop","Stack#SetDisabled","Stack#SmoothReturnToOriginal","Stack#MoveToContainerAndTransfer","Stack#ReturnAndRefill","Stack#MoveChildrenToContainer","Stack#NotifyManagerIfEmpty","StackManager#init","StackManager#Awake","StackManager#OnStackEmptied","StackManager#HandleRefill","StackManager#WaitForChainReactionAndRefill","StackManager#AreAllStacksEmpty","StackManager#RefillAllStacks","TimeManager#init","TimeManager#Awake","TimeManager#StartGame","TimeManager#StopGame","TimeManager#ResetBorders","TimeManager#RunTimer","TimeManager#PulseLoop","TimeManager#DoPulse","TimeManager#OnTimerFinished","TimeManager#PlayAlarmAnimation","TutorialManager#init","TutorialManager#Awake","TutorialManager#Start","TutorialManager#StartTutorialWithDelay","TutorialManager#TutorialMainLoop","TutorialManager#WaitForGlobalCooldown","TutorialManager#WaitForIdleState","TutorialManager#OnHexagonPlacedSuccessfully","TutorialManager#InitializeMaterials","TutorialManager#ResetVisualsToZero","TutorialManager#InitializePoints","TutorialManager#StartTutorialAnimation","TutorialManager#AnimateTutorialCursor","TutorialManager#AnimatePointsSequence","TutorialManager#FadeBackgrounds","TutorialManager#FadeGlows","TutorialManager#SetMaterialAlpha"]' ) ); }
/**
 * @version 1.0.9620.3652
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BakeHelper start.*/
    Bridge.define("BakeHelper", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            startGroup: null,
            endGroup: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BakeHelper#init", this ); }

                this.startGroup = new (System.Collections.Generic.List$1(BakeHelper.TransformData)).ctor();
                this.endGroup = new (System.Collections.Generic.List$1(BakeHelper.TransformData)).ctor();
            }
        },
        methods: {
            /*BakeHelper.BakeStartGroup start.*/
            BakeStartGroup: function () {
if ( TRACE ) { TRACE( "BakeHelper#BakeStartGroup", this ); }

                var $t;
                var newData = new (System.Collections.Generic.List$1(BakeHelper.TransformData)).ctor();
                $t = Bridge.getEnumerator(this.startGroup);
                try {
                    while ($t.moveNext()) {
                        var data = $t.Current;
                        if (UnityEngine.Component.op_Inequality(data.target, null)) {
                            var newDataItem = new BakeHelper.TransformData();
                            newDataItem.target = data.target;
                            newDataItem.position = data.target.localPosition.$clone();
                            newDataItem.rotation = data.target.localRotation.$clone();
                            newDataItem.scale = data.target.localScale.$clone();
                            newData.add(newDataItem);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.startGroup = newData;
                UnityEngine.Debug.Log$1(System.String.format("Start group baked: {0} transforms", [Bridge.box(this.startGroup.Count, System.Int32)]));
            },
            /*BakeHelper.BakeStartGroup end.*/

            /*BakeHelper.BakeEndGroup start.*/
            BakeEndGroup: function () {
if ( TRACE ) { TRACE( "BakeHelper#BakeEndGroup", this ); }

                var $t;
                var newData = new (System.Collections.Generic.List$1(BakeHelper.TransformData)).ctor();
                $t = Bridge.getEnumerator(this.endGroup);
                try {
                    while ($t.moveNext()) {
                        var data = $t.Current;
                        if (UnityEngine.Component.op_Inequality(data.target, null)) {
                            var newDataItem = new BakeHelper.TransformData();
                            newDataItem.target = data.target;
                            newDataItem.position = data.target.localPosition.$clone();
                            newDataItem.rotation = data.target.localRotation.$clone();
                            newDataItem.scale = data.target.localScale.$clone();
                            newData.add(newDataItem);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.endGroup = newData;
                UnityEngine.Debug.Log$1(System.String.format("End group baked: {0} transforms", [Bridge.box(this.endGroup.Count, System.Int32)]));
            },
            /*BakeHelper.BakeEndGroup end.*/

            /*BakeHelper.ApplyStartGroup start.*/
            ApplyStartGroup: function () {
if ( TRACE ) { TRACE( "BakeHelper#ApplyStartGroup", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.startGroup);
                try {
                    while ($t.moveNext()) {
                        var data = $t.Current;
                        if (UnityEngine.Component.op_Inequality(data.target, null)) {
                            data.target.localPosition = data.position.$clone();
                            data.target.localRotation = data.rotation.$clone();
                            data.target.localScale = data.scale.$clone();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                UnityEngine.Debug.Log$1(System.String.format("Start group applied: {0} transforms", [Bridge.box(this.startGroup.Count, System.Int32)]));
            },
            /*BakeHelper.ApplyStartGroup end.*/

            /*BakeHelper.ApplyEndGroup start.*/
            ApplyEndGroup: function () {
if ( TRACE ) { TRACE( "BakeHelper#ApplyEndGroup", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.endGroup);
                try {
                    while ($t.moveNext()) {
                        var data = $t.Current;
                        if (UnityEngine.Component.op_Inequality(data.target, null)) {
                            data.target.localPosition = data.position.$clone();
                            data.target.localRotation = data.rotation.$clone();
                            data.target.localScale = data.scale.$clone();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                UnityEngine.Debug.Log$1(System.String.format("End group applied: {0} transforms", [Bridge.box(this.endGroup.Count, System.Int32)]));
            },
            /*BakeHelper.ApplyEndGroup end.*/


        }
    });
    /*BakeHelper end.*/

    /*BakeHelper+TransformData start.*/
    Bridge.define("BakeHelper.TransformData", {
        $kind: 1002,
        fields: {
            target: null,
            position: null,
            rotation: null,
            scale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BakeHelper.TransformData#init", this ); }

                this.position = new UnityEngine.Vector3();
                this.rotation = new UnityEngine.Quaternion();
                this.scale = new UnityEngine.Vector3();
            }
        }
    });
    /*BakeHelper+TransformData end.*/

    /*CursorFollower start.*/
    Bridge.define("CursorFollower", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                SHADOW_MAX_ALPHA: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CursorFollower#init", this ); }

                    this.SHADOW_MAX_ALPHA = 0.63;
                }
            }
        },
        fields: {
            mainCamera: null,
            fadeDuration: 0,
            mainRenderers: null,
            shadowRenderers: null,
            animator: null,
            pivotOffsetX: 0,
            pivotOffsetY: 0,
            fadeCoroutine: null,
            isVisible: false,
            isTutorialActive: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CursorFollower#init", this ); }

                this.fadeDuration = 0.2;
                this.isVisible = false;
                this.isTutorialActive = false;
            }
        },
        methods: {
            /*CursorFollower.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CursorFollower#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    this.mainCamera = UnityEngine.Camera.main;
                }

                if (UnityEngine.Component.op_Equality(this.animator, null)) {
                    this.animator = this.GetComponent(UnityEngine.Animator);
                }

                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    UnityEngine.Debug.LogError$2("[CursorFollower] Main Camera not found!");
                }

                this.HideInstantlyCursor();
            },
            /*CursorFollower.Awake end.*/

            /*CursorFollower.HideInstantlyCursor start.*/
            HideInstantlyCursor: function () {
if ( TRACE ) { TRACE( "CursorFollower#HideInstantlyCursor", this ); }

                var $t, $t1;
                $t = Bridge.getEnumerator(this.mainRenderers);
                try {
                    while ($t.moveNext()) {
                        var main = $t.Current;
                        this.SetAlpha(main, 0);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                $t1 = Bridge.getEnumerator(this.shadowRenderers);
                try {
                    while ($t1.moveNext()) {
                        var shadow = $t1.Current;
                        this.SetAlpha(shadow, 0);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*CursorFollower.HideInstantlyCursor end.*/

            /*CursorFollower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CursorFollower#Update", this ); }

                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    return;
                }

                var mousePos = UnityEngine.Input.mousePosition.$clone();

                if (mousePos.x < 0 || mousePos.y < 0 || mousePos.x > UnityEngine.Screen.width || mousePos.y > UnityEngine.Screen.height) {
                    return;
                }

                if (!this.isTutorialActive) {
                    mousePos.z = -10;
                    var worldPos = this.mainCamera.ScreenToWorldPoint(mousePos);
                    this.transform.position = new pc.Vec3( worldPos.x + this.pivotOffsetX, worldPos.y + this.pivotOffsetY, worldPos.z );
                }
            },
            /*CursorFollower.Update end.*/

            /*CursorFollower.PlayGrabAnimation start.*/
            PlayGrabAnimation: function () {
if ( TRACE ) { TRACE( "CursorFollower#PlayGrabAnimation", this ); }

                if (this.isTutorialActive) {
                    return;
                }

                this.SetVisibility(true);
                if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                    this.animator.Play$2("CursorGrab");
                }
            },
            /*CursorFollower.PlayGrabAnimation end.*/

            /*CursorFollower.PlayReleaseAnimation start.*/
            PlayReleaseAnimation: function () {
if ( TRACE ) { TRACE( "CursorFollower#PlayReleaseAnimation", this ); }

                if (this.isTutorialActive) {
                    return;
                }

                if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                    this.animator.Play$2("CursorRelease");
                }
            },
            /*CursorFollower.PlayReleaseAnimation end.*/

            /*CursorFollower.TriggerChainReactionFade start.*/
            TriggerChainReactionFade: function () {
if ( TRACE ) { TRACE( "CursorFollower#TriggerChainReactionFade", this ); }

                this.SetVisibility(false);
            },
            /*CursorFollower.TriggerChainReactionFade end.*/

            /*CursorFollower.SetTutorialActive start.*/
            SetTutorialActive: function (active) {
if ( TRACE ) { TRACE( "CursorFollower#SetTutorialActive", this ); }

                this.isTutorialActive = active;

                if (active) {
                    this.SetVisibility(false);
                }
            },
            /*CursorFollower.SetTutorialActive end.*/

            /*CursorFollower.SetVisibility start.*/
            SetVisibility: function (visible) {
if ( TRACE ) { TRACE( "CursorFollower#SetVisibility", this ); }

                if (this.isVisible === visible) {
                    return;
                }
                this.isVisible = visible;

                if (this.fadeCoroutine != null) {
                    this.StopCoroutine$2(this.fadeCoroutine);
                }
                this.fadeCoroutine = this.StartCoroutine$1(this.FadeCoroutine(visible));
            },
            /*CursorFollower.SetVisibility end.*/

            /*CursorFollower.FadeCoroutine start.*/
            FadeCoroutine: function (targetVisible) {
if ( TRACE ) { TRACE( "CursorFollower#FadeCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startAlphaMain,
                    startAlphaShadow,
                    targetAlphaMain,
                    targetAlphaShadow,
                    elapsed,
                    t,
                    currentAlphaMain,
                    currentAlphaShadow,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.mainRenderers == null || this.mainRenderers.length === 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    startAlphaMain = System.Array.init(this.mainRenderers.length, 0, System.Single);
                                        startAlphaShadow = System.Array.init(this.shadowRenderers != null ? this.shadowRenderers.length : 0, 0, System.Single);

                                        for (var i = 0; i < this.mainRenderers.length; i = (i + 1) | 0) {
                                            if (UnityEngine.Component.op_Inequality(this.mainRenderers[i], null)) {
                                                startAlphaMain[i] = this.mainRenderers[i].color.a;
                                            }
                                        }

                                        if (this.shadowRenderers != null) {
                                            for (var i1 = 0; i1 < this.shadowRenderers.length; i1 = (i1 + 1) | 0) {
                                                if (UnityEngine.Component.op_Inequality(this.shadowRenderers[i1], null)) {
                                                    startAlphaShadow[i1] = this.shadowRenderers[i1].color.a;
                                                }
                                            }
                                        }

                                        targetAlphaMain = targetVisible ? 1.0 : 0.0;
                                        targetAlphaShadow = targetVisible ? CursorFollower.SHADOW_MAX_ALPHA : 0.0;

                                        elapsed = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < this.fadeDuration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / this.fadeDuration;

                                        for (var i2 = 0; i2 < this.mainRenderers.length; i2 = (i2 + 1) | 0) {
                                            if (UnityEngine.Component.op_Inequality(this.mainRenderers[i2], null)) {
                                                currentAlphaMain = pc.math.lerp(startAlphaMain[i2], targetAlphaMain, t);
                                                this.SetAlpha(this.mainRenderers[i2], currentAlphaMain);
                                            }
                                        }

                                        if (this.shadowRenderers != null) {
                                            for (var i3 = 0; i3 < this.shadowRenderers.length; i3 = (i3 + 1) | 0) {
                                                if (UnityEngine.Component.op_Inequality(this.shadowRenderers[i3], null)) {
                                                    currentAlphaShadow = pc.math.lerp(startAlphaShadow[i3], targetAlphaShadow, t);
                                                    this.SetAlpha(this.shadowRenderers[i3], currentAlphaShadow);
                                                }
                                            }
                                        }

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    for (var i4 = 0; i4 < this.mainRenderers.length; i4 = (i4 + 1) | 0) {
                                            if (UnityEngine.Component.op_Inequality(this.mainRenderers[i4], null)) {
                                                this.SetAlpha(this.mainRenderers[i4], targetAlphaMain);
                                            }
                                        }

                                        if (this.shadowRenderers != null) {
                                            for (var i5 = 0; i5 < this.shadowRenderers.length; i5 = (i5 + 1) | 0) {
                                                if (UnityEngine.Component.op_Inequality(this.shadowRenderers[i5], null)) {
                                                    this.SetAlpha(this.shadowRenderers[i5], targetAlphaShadow);
                                                }
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CursorFollower.FadeCoroutine end.*/

            /*CursorFollower.SetAlpha start.*/
            SetAlpha: function (renderer, alpha) {
if ( TRACE ) { TRACE( "CursorFollower#SetAlpha", this ); }

                if (UnityEngine.Component.op_Inequality(renderer, null)) {
                    var c = renderer.color.$clone();
                    c.a = alpha;
                    renderer.color = c.$clone();
                }
            },
            /*CursorFollower.SetAlpha end.*/


        }
    });
    /*CursorFollower end.*/

    /*DragAndDrop start.*/
    Bridge.define("DragAndDrop", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                IsDraggingAny: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "DragAndDrop#init", this ); }

                    this.IsDraggingAny = false;
                }
            }
        },
        fields: {
            mainCamera: null,
            smoothLiftCurve: null,
            clampMinY: 0,
            clampMaxY: 0,
            liftSpeed: 0,
            shakeAmount: 0,
            shakeDuration: 0,
            shakeSteps: 0,
            cursorFollower: null,
            offset: null,
            isDragging: false,
            stackComponent: null,
            isAnimating: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragAndDrop#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.clampMinY = 0.5;
                this.clampMaxY = 1.25;
                this.liftSpeed = 5.0;
                this.shakeAmount = 0.1;
                this.shakeDuration = 0.3;
                this.shakeSteps = 6;
                this.isDragging = false;
                this.isAnimating = false;
            }
        },
        methods: {
            /*DragAndDrop.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DragAndDrop#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    this.mainCamera = UnityEngine.Camera.main;
                }
                this.stackComponent = this.GetComponent(Stack);

                if (this.smoothLiftCurve == null || this.smoothLiftCurve.keys.length === 0) {
                    this.smoothLiftCurve = pc.AnimationCurve.createEaseInOut(0, 0, 1, 1);
                }
            },
            /*DragAndDrop.Awake end.*/

            /*DragAndDrop.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "DragAndDrop#OnMouseDown", this ); }

                // Блокировка со стороны Туториала
                if (UnityEngine.MonoBehaviour.op_Inequality(TutorialManager.Instance, null) && TutorialManager.Instance.IsInputBlocked) {
                    return;
                }

                if (this.isAnimating) {
                    return;
                }

                if (this.stackComponent.IsDisabled) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(PlatformManager.Instance, null) && PlatformManager.Instance.IsBusy) {
                    this.isAnimating = true;
                    this.StartCoroutine$1(this.PlayUnavailableAnimation());
                    return;
                }

                this.isDragging = true;
                DragAndDrop.IsDraggingAny = true; // Обновляем глобальный статус

                if (UnityEngine.MonoBehaviour.op_Inequality(this.cursorFollower, null)) {
                    this.cursorFollower.PlayGrabAnimation();
                }

                var ray = this.mainCamera.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var plane = new UnityEngine.Plane.$ctor2(this.mainCamera.transform.forward, this.transform.position);
                var distance = { };
                if (plane.Raycast(ray, distance)) {
                    var hitPoint = ray.GetPoint(distance.v);
                    this.offset = this.transform.position.$clone().sub( hitPoint );
                }
            },
            /*DragAndDrop.OnMouseDown end.*/

            /*DragAndDrop.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "DragAndDrop#OnMouseUp", this ); }

                if (this.isAnimating) {
                    return;
                }

                this.isDragging = false;
                DragAndDrop.IsDraggingAny = false; // Обновляем глобальный статус

                this.stackComponent.Drop();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.cursorFollower, null)) {
                    this.cursorFollower.PlayReleaseAnimation();
                }
            },
            /*DragAndDrop.OnMouseUp end.*/

            /*DragAndDrop.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DragAndDrop#Update", this ); }

                if (!this.isDragging || this.isAnimating) {
                    return;
                }

                var mousePos = UnityEngine.Input.mousePosition.$clone();
                var ray = this.mainCamera.ScreenPointToRay(mousePos);
                var plane = new UnityEngine.Plane.$ctor2(this.mainCamera.transform.forward, this.transform.position);

                var distance = { };
                if (plane.Raycast(ray, distance)) {
                    var hitPoint = ray.GetPoint(distance.v);
                    var targetPos = hitPoint.$clone().add( this.offset );

                    var currentY = this.transform.position.y;
                    var targetY = targetPos.y;

                    if (targetY < this.clampMinY) {
                        var newY = pc.math.lerp(currentY, this.clampMinY, this.liftSpeed * UnityEngine.Time.deltaTime);
                        this.transform.position = new pc.Vec3( targetPos.x, newY, targetPos.z );
                    } else {
                        var clampedY = Math.max(this.clampMinY, Math.min(targetY, this.clampMaxY));
                        this.transform.position = new pc.Vec3( targetPos.x, clampedY, targetPos.z );
                    }
                }
            },
            /*DragAndDrop.Update end.*/

            /*DragAndDrop.PlayUnavailableAnimation start.*/
            PlayUnavailableAnimation: function () {
if ( TRACE ) { TRACE( "DragAndDrop#PlayUnavailableAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    liftHeight,
                    liftedPos,
                    elapsed,
                    liftTime,
                    t,
                    i,
                    direction,
                    targetShake,
                    stepTime,
                    stepElapsed,
                    t1,
                    t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.transform.position.$clone();
                                        liftHeight = 0.2;
                                        liftedPos = new pc.Vec3( startPos.x, startPos.y + liftHeight, startPos.z );

                                        elapsed = 0.0;
                                        liftTime = 0.1;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < liftTime ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / liftTime;
                                        this.transform.position = new pc.Vec3().lerp( startPos, liftedPos, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = liftedPos.$clone();

                                        elapsed = 0.0;
                                        i = 0;
                                        $step = 5;
                                        continue;
                                }
                                case 5: {
                                    if ( i < this.shakeSteps ) {
                                            $step = 6;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 6: {
                                    direction = (i % 2 === 0) ? 1.0 : -1.0;
                                        targetShake = new pc.Vec3( startPos.x + (this.shakeAmount * direction), liftedPos.y, startPos.z );

                                        stepTime = this.shakeDuration / this.shakeSteps;
                                        stepElapsed = 0.0;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    if ( stepElapsed < stepTime ) {
                                            $step = 8;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 8: {
                                    stepElapsed += UnityEngine.Time.deltaTime;
                                        t1 = stepElapsed / stepTime;
                                        this.transform.position = new pc.Vec3().lerp( this.transform.position, targetShake, t1 );
                                        $enumerator.current = null;
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    
                                        $step = 7;
                                        continue;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    i = (i + 1) | 0;
                                    $step = 5;
                                    continue;
                                }
                                case 12: {
                                    this.transform.position = liftedPos.$clone();

                                        elapsed = 0.0;
                                    $step = 13;
                                    continue;
                                }
                                case 13: {
                                    if ( elapsed < liftTime ) {
                                            $step = 14;
                                            continue;
                                        } 
                                        $step = 16;
                                        continue;
                                }
                                case 14: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t2 = elapsed / liftTime;
                                        this.transform.position = new pc.Vec3().lerp( liftedPos, startPos, t2 );
                                        $enumerator.current = null;
                                        $step = 15;
                                        return true;
                                }
                                case 15: {
                                    
                                        $step = 13;
                                        continue;
                                }
                                case 16: {
                                    this.transform.position = startPos.$clone();

                                        this.isAnimating = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DragAndDrop.PlayUnavailableAnimation end.*/


        }
    });
    /*DragAndDrop end.*/

    /*EndGame start.*/
    Bridge.define("EndGame", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            GameEnded: false,
            animator: null,
            urlButtons: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EndGame#init", this ); }

                this.GameEnded = false;
            }
        },
        methods: {
            /*EndGame.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "EndGame#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(EndGame.Instance, null)) {
                    EndGame.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
                this.GameEnded = false;
            },
            /*EndGame.Awake end.*/

            /*EndGame.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EndGame#Start", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.urlButtons);
                try {
                    while ($t.moveNext()) {
                        var button = $t.Current;
                        button.onClick.AddListener(Bridge.fn.cacheBind(this, this.RefButton));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*EndGame.Start end.*/

            /*EndGame.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "EndGame#OnDestroy", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.urlButtons);
                try {
                    while ($t.moveNext()) {
                        var button = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(button, null)) {
                            button.onClick.RemoveAllListeners();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*EndGame.OnDestroy end.*/

            /*EndGame.TriggerEndGame start.*/
            TriggerEndGame: function () {
if ( TRACE ) { TRACE( "EndGame#TriggerEndGame", this ); }

                if (this.GameEnded) {
                    return;
                }

                if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                    this.GameEnded = true;
                    this.animator.Play$2("EndGameBackground");
                }
            },
            /*EndGame.TriggerEndGame end.*/

            /*EndGame.TriggerPackshot start.*/
            TriggerPackshot: function () {
if ( TRACE ) { TRACE( "EndGame#TriggerPackshot", this ); }

                if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                    this.GameEnded = true;
                    this.animator.Play$2("Packshot");
                }
            },
            /*EndGame.TriggerPackshot end.*/

            /*EndGame.FinalEndGame start.*/
            FinalEndGame: function () {
if ( TRACE ) { TRACE( "EndGame#FinalEndGame", this ); }

                Luna.Unity.LifeCycle.GameEnded();
            },
            /*EndGame.FinalEndGame end.*/

            /*EndGame.RefButton start.*/
            RefButton: function () {
if ( TRACE ) { TRACE( "EndGame#RefButton", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*EndGame.RefButton end.*/


        }
    });
    /*EndGame end.*/

    /*FillStack start.*/
    Bridge.define("FillStack", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                HeightStep: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "FillStack#init", this ); }

                    this.HeightStep = 0.075;
                }
            }
        },
        fields: {
            hexagonPrefab: null
        },
        methods: {
            /*FillStack.GenerateBlocks start.*/
            GenerateBlocks: function () {
if ( TRACE ) { TRACE( "FillStack#GenerateBlocks", this ); }

                while (this.transform.childCount > 0) {
                    UnityEngine.Object.DestroyImmediate(this.transform.GetChild(0).gameObject);
                }

                var count = UnityEngine.Random.Range(6, 10);

                // 1. Выбираем первый цвет с учетом существующих на поле
                var color1 = this.GetSmartRandomColor();

                var color2 = null;

                // Шанс появления второго цвета (25%)
                if (UnityEngine.Random.value < 0.25) {
                    color2 = this.GetSmartRandomColor();
                }

                var splitIndex = count;
                if (System.Nullable.hasValue(color2)) {
                    splitIndex = (Bridge.Int.div(count, 2)) | 0;
                }

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var newBlock = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.hexagonPrefab, this.transform);

                    var localPos = new pc.Vec3( 0.0, i * FillStack.HeightStep, 0.0 );
                    newBlock.transform.localPosition = localPos.$clone();
                    newBlock.transform.localRotation = pc.Quat.IDENTITY.clone();
                    newBlock.transform.localScale = new pc.Vec3( 1, 1, 1 );

                    var hexComponent = newBlock.GetComponent(Hexagon);
                    if (UnityEngine.MonoBehaviour.op_Inequality(hexComponent, null)) {
                        var chosenColor = (i < splitIndex) ? color1 : (System.Nullable.hasValue(color2) ? System.Nullable.getValue(color2) : color1);
                        hexComponent.Init(chosenColor);
                    }
                }
            },
            /*FillStack.GenerateBlocks end.*/

            /*FillStack.GetSmartRandomColor start.*/
            GetSmartRandomColor: function () {
if ( TRACE ) { TRACE( "FillStack#GetSmartRandomColor", this ); }

                // 80% шанс использовать существующие цвета
                if (UnityEngine.Random.value < 0.8) {
                    var existingColors = this.GetExistingColorsFromField();

                    if (existingColors.Count > 0) {
                        return existingColors.getItem(UnityEngine.Random.Range(0, existingColors.Count));
                    }
                }

                return this.GetRandomColor();
            },
            /*FillStack.GetSmartRandomColor end.*/

            /*FillStack.GetExistingColorsFromField start.*/
            GetExistingColorsFromField: function () {
if ( TRACE ) { TRACE( "FillStack#GetExistingColorsFromField", this ); }

                var $t, $t1;
                var uniqueColors = new (System.Collections.Generic.List$1(Hexagon.HexagonColor)).ctor();

                if (UnityEngine.MonoBehaviour.op_Equality(PlatformManager.Instance, null) || PlatformManager.Instance.GroundPlatforms == null) {
                    return uniqueColors;
                }

                $t = Bridge.getEnumerator(PlatformManager.Instance.GroundPlatforms);
                try {
                    while ($t.moveNext()) {
                        var platform = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(platform, null) || UnityEngine.GameObject.op_Equality(platform.Container, null)) {
                            continue;
                        }

                        $t1 = Bridge.getEnumerator(platform.Container.transform);
                        try {
                            while ($t1.moveNext()) {
                                var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                if (!child.gameObject.activeSelf) {
                                    continue;
                                }

                                var hex = child.GetComponent(Hexagon);
                                if (UnityEngine.MonoBehaviour.op_Inequality(hex, null)) {
                                    var color = hex.GetColor();

                                    if (!uniqueColors.contains(color)) {
                                        uniqueColors.add(color);
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return uniqueColors;
            },
            /*FillStack.GetExistingColorsFromField end.*/

            /*FillStack.GetRandomColor start.*/
            GetRandomColor: function () {
if ( TRACE ) { TRACE( "FillStack#GetRandomColor", this ); }

                var values = System.Enum.getValues(Hexagon.HexagonColor);
                return System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Array.get(values, UnityEngine.Random.Range(0, values.length)), Hexagon.HexagonColor), System.Int32));
            },
            /*FillStack.GetRandomColor end.*/


        }
    });
    /*FillStack end.*/

    /*GroundPlatform start.*/
    Bridge.define("GroundPlatform", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                HeightStep: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GroundPlatform#init", this ); }

                    this.HeightStep = 0.075;
                }
            }
        },
        fields: {
            Container: null,
            removeParticle: null,
            glowMaterial: null,
            platformRenderer: null,
            neighborPlatforms: null,
            pendingRemovalsOnThisPlatform: 0,
            activeNeighbors: null,
            originalMaterial: null,
            scaleCoroutine: null,
            originalScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GroundPlatform#init", this ); }

                this.originalScale = new UnityEngine.Vector3();
                this.pendingRemovalsOnThisPlatform = 0;
                this.activeNeighbors = new (System.Collections.Generic.HashSet$1(GroundPlatform)).ctor();
            }
        },
        methods: {
            /*GroundPlatform.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GroundPlatform#Awake", this ); }

                if (UnityEngine.Component.op_Inequality(this.platformRenderer, null)) {
                    this.originalMaterial = this.platformRenderer.material;
                }
                this.originalScale = this.platformRenderer.transform.localScale.$clone();
            },
            /*GroundPlatform.Awake end.*/

            /*GroundPlatform.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GroundPlatform#Start", this ); }

                this.InitializeColorsInContainer(this.Container);
                this.ScanForNeighborsAtStart();
            },
            /*GroundPlatform.Start end.*/

            /*GroundPlatform.ScanForNeighborsAtStart start.*/
            ScanForNeighborsAtStart: function () {
if ( TRACE ) { TRACE( "GroundPlatform#ScanForNeighborsAtStart", this ); }

                var $t;
                if (this.neighborPlatforms == null) {
                    return;
                }
                $t = Bridge.getEnumerator(this.neighborPlatforms);
                try {
                    while ($t.moveNext()) {
                        var neighbor = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(neighbor, null) && UnityEngine.MonoBehaviour.op_Inequality(neighbor, this)) {
                            this.activeNeighbors.add(neighbor);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GroundPlatform.ScanForNeighborsAtStart end.*/

            /*GroundPlatform.InitializeColorsInContainer start.*/
            InitializeColorsInContainer: function (container) {
if ( TRACE ) { TRACE( "GroundPlatform#InitializeColorsInContainer", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(container, null)) {
                    return;
                }
                $t = Bridge.getEnumerator(container.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        var hex = child.GetComponent(Hexagon);
                        if (UnityEngine.MonoBehaviour.op_Inequality(hex, null) && child.gameObject.activeSelf && !hex.IsInitialized()) {
                            hex.IdentifyColorByMaterial();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GroundPlatform.InitializeColorsInContainer end.*/

            /*GroundPlatform.ForceInitializeColorsInContainer start.*/
            ForceInitializeColorsInContainer: function (container) {
if ( TRACE ) { TRACE( "GroundPlatform#ForceInitializeColorsInContainer", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(container, null)) {
                    return;
                }
                $t = Bridge.getEnumerator(container.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        var hex = child.GetComponent(Hexagon);
                        if (UnityEngine.MonoBehaviour.op_Inequality(hex, null) && child.gameObject.activeSelf) {
                            hex.IdentifyColorByMaterial();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GroundPlatform.ForceInitializeColorsInContainer end.*/

            /*GroundPlatform.GetTopHexagon start.*/
            GetTopHexagon: function (container) {
if ( TRACE ) { TRACE( "GroundPlatform#GetTopHexagon", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(container, null)) {
                    return null;
                }
                var topHex = null;
                var maxY = -9999.0;
                $t = Bridge.getEnumerator(container.transform);
                try {
                    while ($t.moveNext()) {
                        var childTransform = Bridge.cast($t.Current, UnityEngine.Transform);
                        if (!childTransform.gameObject.activeSelf) {
                            continue;
                        }
                        var hex = childTransform.GetComponent(Hexagon);
                        if (UnityEngine.MonoBehaviour.op_Equality(hex, null)) {
                            continue;
                        }
                        if (childTransform.localPosition.y > maxY) {
                            maxY = childTransform.localPosition.y;
                            topHex = hex;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return topHex;
            },
            /*GroundPlatform.GetTopHexagon end.*/

            /*GroundPlatform.GetBlocksToTransfer start.*/
            GetBlocksToTransfer: function (container, targetColor) {
if ( TRACE ) { TRACE( "GroundPlatform#GetBlocksToTransfer", this ); }

                var $t, $t1;
                var allHexes = new (System.Collections.Generic.List$1(Hexagon)).ctor();
                $t = Bridge.getEnumerator(container.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        var hex = child.GetComponent(Hexagon);
                        if (UnityEngine.MonoBehaviour.op_Inequality(hex, null) && child.gameObject.activeSelf) {
                            allHexes.add(hex);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                allHexes.Sort$2(function (a, b) {
                    return Bridge.compare(b.transform.localPosition.y, a.transform.localPosition.y);
                });
                var result = new (System.Collections.Generic.List$1(Hexagon)).ctor();
                $t1 = Bridge.getEnumerator(allHexes);
                try {
                    while ($t1.moveNext()) {
                        var hex1 = $t1.Current;
                        if (hex1.GetColor() === targetColor) {
                            result.add(hex1);
                        } else {
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*GroundPlatform.GetBlocksToTransfer end.*/

            /*GroundPlatform.GetColorCount start.*/
            GetColorCount: function (color) {
if ( TRACE ) { TRACE( "GroundPlatform#GetColorCount", this ); }

                return this.GetBlocksToTransfer(this.Container, color).Count;
            },
            /*GroundPlatform.GetColorCount end.*/

            /*GroundPlatform.GetTopContinuousBlocks start.*/
            GetTopContinuousBlocks: function (color) {
if ( TRACE ) { TRACE( "GroundPlatform#GetTopContinuousBlocks", this ); }

                return this.GetBlocksToTransfer(this.Container, color);
            },
            /*GroundPlatform.GetTopContinuousBlocks end.*/

            /*GroundPlatform.GetBlockCount start.*/
            GetBlockCount: function () {
if ( TRACE ) { TRACE( "GroundPlatform#GetBlockCount", this ); }

                return UnityEngine.GameObject.op_Equality(this.Container, null) ? 0 : this.Container.transform.childCount;
            },
            /*GroundPlatform.GetBlockCount end.*/

            /*GroundPlatform.CheckAndClearMatch start.*/
            CheckAndClearMatch: function (matchThreshold) {
if ( TRACE ) { TRACE( "GroundPlatform#CheckAndClearMatch", this ); }

                var topHex = this.GetTopHexagon(this.Container);
                if (UnityEngine.MonoBehaviour.op_Equality(topHex, null)) {
                    return false;
                }

                var colorToCheck = topHex.GetColor();
                var matchingHexes = this.GetBlocksToTransfer(this.Container, colorToCheck);

                if (matchingHexes.Count >= matchThreshold) {
                    this.pendingRemovalsOnThisPlatform = (this.pendingRemovalsOnThisPlatform + matchingHexes.Count) | 0;

                    PlatformManager.Instance.IncrementPendingRemovals(matchingHexes.Count);

                    this.ClearHexagonsSequentially(matchingHexes);
                    return true;
                }
                return false;
            },
            /*GroundPlatform.CheckAndClearMatch end.*/

            /*GroundPlatform.ClearHexagonsSequentially start.*/
            ClearHexagonsSequentially: function (hexesToRemove) {
if ( TRACE ) { TRACE( "GroundPlatform#ClearHexagonsSequentially", this ); }

                for (var i = 0; i < hexesToRemove.Count; i = (i + 1) | 0) {
                    this.StartCoroutine$1(this.PlayRemoveAnimation(hexesToRemove.getItem(i), i * 0.05));
                }
            },
            /*GroundPlatform.ClearHexagonsSequentially end.*/

            /*GroundPlatform.PlayRemoveAnimation start.*/
            PlayRemoveAnimation: function (hex, delay) {
if ( TRACE ) { TRACE( "GroundPlatform#PlayRemoveAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(hex, null)) {
                                            hex.PlayRemoveAnimation(Bridge.fn.bind(this, function () {
                                                if (UnityEngine.MonoBehaviour.op_Inequality(PlatformManager.Instance, null)) {
                                                    PlatformManager.Instance.DecrementPendingRemovals();
                                                }

                                                this.pendingRemovalsOnThisPlatform = (this.pendingRemovalsOnThisPlatform - 1) | 0;
                                                if (this.pendingRemovalsOnThisPlatform <= 0 && UnityEngine.Component.op_Inequality(this.removeParticle, null)) {
                                                    this.pendingRemovalsOnThisPlatform = 0;
                                                    this.StartCoroutine$1(this.PlayFinalRemoveEffect(hex));
                                                }
                                            }));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GroundPlatform.PlayRemoveAnimation end.*/

            /*GroundPlatform.PlayFinalRemoveEffect start.*/
            PlayFinalRemoveEffect: function (sourceHex) {
if ( TRACE ) { TRACE( "GroundPlatform#PlayFinalRemoveEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    color,
                    targetGradient,
                    $t,
                    pair,
                    colorModule,
                    timeout,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(this.removeParticle, null) || UnityEngine.MonoBehaviour.op_Equality(sourceHex, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    color = sourceHex.GetColor();
                                        targetGradient = null;

                                        $t = Bridge.getEnumerator(sourceHex.colorMaterials);
                                        try {
                                            while ($t.moveNext()) {
                                                pair = $t.Current.$clone();
                                                if (pair.color === color) {
                                                    targetGradient = pair.particleGradient;
                                                    break;
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        if (targetGradient != null) {
                                            colorModule = this.removeParticle.colorOverLifetime;
                                            colorModule.color = new pc.MinMaxGradient(targetGradient);
                                        }

                                        timeout = 2.0;
                                        elapsed = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( UnityEngine.GameObject.op_Inequality(this.Container, null) && this.Container.transform.childCount > 0 && elapsed < timeout ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    elapsed += UnityEngine.Time.deltaTime;

                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    if (UnityEngine.GameObject.op_Equality(this.Container, null) || this.Container.transform.childCount === 0) {
                                            this.removeParticle.Stop();
                                            this.removeParticle.Play();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GroundPlatform.PlayFinalRemoveEffect end.*/

            /*GroundPlatform.StartTransferAnimation start.*/
            StartTransferAnimation: function (targetPlatform, blocksToMove, onComplete, speedMultiplier) {
if ( TRACE ) { TRACE( "GroundPlatform#StartTransferAnimation", this ); }

                if (speedMultiplier === void 0) { speedMultiplier = 1.0; }
                var baseHeight = 0.0;
                var topHex = this.GetTopHexagon(targetPlatform.Container);
                if (UnityEngine.MonoBehaviour.op_Inequality(topHex, null)) {
                    baseHeight = topHex.transform.localPosition.y + GroundPlatform.HeightStep;
                }

                var completedCount = 0;
                if (blocksToMove.Count === 0) {
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    return;
                }

                for (var i = 0; i < blocksToMove.Count; i = (i + 1) | 0) {
                    var hex = blocksToMove.getItem(i);
                    var targetY = baseHeight + (i * GroundPlatform.HeightStep);
                    var localTargetPos = new pc.Vec3( 0.0, targetY, 0.0 );
                    var worldTargetPos = targetPlatform.Container.transform.TransformPoint$1(localTargetPos);
                    var isAlreadyOnTarget = UnityEngine.Component.op_Equality(hex.transform.parent, targetPlatform.Container.transform);

                    if (isAlreadyOnTarget) {
                        hex.transform.localPosition = localTargetPos.$clone();
                        hex.transform.localRotation = pc.Quat.IDENTITY.clone();
                        completedCount = (completedCount + 1) | 0;
                        if (completedCount === blocksToMove.Count) {
                            !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                        }
                    } else {
                        hex.transform.SetParent(targetPlatform.Container.transform, true);
                        this.StartCoroutine$1(this.PlaySequentialJump(hex, worldTargetPos, localTargetPos, i * 0.1, function () {
                            completedCount = (completedCount + 1) | 0;
                            if (completedCount === blocksToMove.Count) {
                                !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                            }
                        }, speedMultiplier));
                    }
                }
            },
            /*GroundPlatform.StartTransferAnimation end.*/

            /*GroundPlatform.PlaySequentialJump start.*/
            PlaySequentialJump: function (hex, worldTargetPos, localTargetPos, delay, onJumpFinished, speedMultiplier) {
if ( TRACE ) { TRACE( "GroundPlatform#PlaySequentialJump", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (speedMultiplier === void 0) { speedMultiplier = 1.0; }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(hex, null)) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 2: {
                                    !Bridge.staticEquals(onJumpFinished, null) ? onJumpFinished() : null;
                                        return false;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    hex.PlayJumpAnimation(worldTargetPos, hex.transform.rotation, function () {
                                            if (UnityEngine.MonoBehaviour.op_Inequality(hex, null)) {
                                                hex.transform.localPosition = localTargetPos.$clone();
                                                hex.transform.localRotation = pc.Quat.IDENTITY.clone();
                                            }
                                            !Bridge.staticEquals(onJumpFinished, null) ? onJumpFinished() : null;
                                        }, speedMultiplier);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GroundPlatform.PlaySequentialJump end.*/

            /*GroundPlatform.GetActiveNeighbors start.*/
            GetActiveNeighbors: function () {
if ( TRACE ) { TRACE( "GroundPlatform#GetActiveNeighbors", this ); }

                return this.activeNeighbors;
            },
            /*GroundPlatform.GetActiveNeighbors end.*/

            /*GroundPlatform.SetGlow start.*/
            SetGlow: function () {
if ( TRACE ) { TRACE( "GroundPlatform#SetGlow", this ); }

                if (UnityEngine.Component.op_Inequality(this.platformRenderer, null) && this.glowMaterial != null) {
                    this.platformRenderer.material = this.glowMaterial;
                }

                if (this.scaleCoroutine != null) {
                    this.StopCoroutine$2(this.scaleCoroutine);
                }
                this.scaleCoroutine = this.StartCoroutine$1(this.AnimateScale(this.platformRenderer.transform.localScale.z, this.originalScale.z * 2.0));
            },
            /*GroundPlatform.SetGlow end.*/

            /*GroundPlatform.RemoveGlow start.*/
            RemoveGlow: function () {
if ( TRACE ) { TRACE( "GroundPlatform#RemoveGlow", this ); }

                if (UnityEngine.Component.op_Inequality(this.platformRenderer, null) && this.originalMaterial != null) {
                    this.platformRenderer.material = this.originalMaterial;
                }

                if (this.scaleCoroutine != null) {
                    this.StopCoroutine$2(this.scaleCoroutine);
                }
                this.scaleCoroutine = this.StartCoroutine$1(this.AnimateScale(this.platformRenderer.transform.localScale.z, this.originalScale.z));
            },
            /*GroundPlatform.RemoveGlow end.*/

            /*GroundPlatform.AnimateScale start.*/
            AnimateScale: function (fromZ, toZ) {
if ( TRACE ) { TRACE( "GroundPlatform#AnimateScale", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    elapsed,
                    t,
                    newZ,
                    newScale,
                    finalScale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    duration = 0.15;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        newZ = pc.math.lerp(fromZ, toZ, t);
                                        newScale = this.platformRenderer.transform.localScale.$clone();
                                        newScale.z = newZ;
                                        this.platformRenderer.transform.localScale = newScale.$clone();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    finalScale = this.platformRenderer.transform.localScale.$clone();
                                        finalScale.z = toZ;
                                        this.platformRenderer.transform.localScale = finalScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GroundPlatform.AnimateScale end.*/

            /*GroundPlatform.IsAvailable start.*/
            IsAvailable: function () {
if ( TRACE ) { TRACE( "GroundPlatform#IsAvailable", this ); }

                return UnityEngine.GameObject.op_Inequality(this.Container, null) && this.Container.transform.childCount === 0;
            },
            /*GroundPlatform.IsAvailable end.*/

            /*GroundPlatform.DebugLogBoardState start.*/
            DebugLogBoardState: function () {
if ( TRACE ) { TRACE( "GroundPlatform#DebugLogBoardState", this ); }

                var $t, $t1, $t2, $t3;
                UnityEngine.Debug.Log$1("=== \u0414\u0418\u0410\u0413\u041d\u041e\u0421\u0422\u0418\u041a\u0410 \u0421\u041e\u0421\u0422\u041e\u042f\u041d\u0418\u042f \u0414\u041e\u0421\u041a\u0418 ===");
                var allPlatforms = PlatformManager.Instance.GroundPlatforms;
                System.Array.sort(allPlatforms, function (a, b) {
                        return System.String.compare(a.name, b.name);
                    });
                $t = Bridge.getEnumerator(allPlatforms);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(p, null)) {
                            continue;
                        }
                        p.InitializeColorsInContainer(p.Container);
                        var top = p.GetTopHexagon(p.Container);
                        var topColor = UnityEngine.MonoBehaviour.op_Inequality(top, null) ? System.Enum.toString(Hexagon.HexagonColor, top.GetColor()) : "EMPTY";
                        var colorCounts = new (System.Collections.Generic.Dictionary$2(Hexagon.HexagonColor,System.Int32)).ctor();
                        $t1 = Bridge.getEnumerator(p.Container.transform);
                        try {
                            while ($t1.moveNext()) {
                                var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                if (!child.gameObject.activeSelf) {
                                    continue;
                                }
                                var h = child.GetComponent(Hexagon);
                                if (UnityEngine.MonoBehaviour.op_Inequality(h, null)) {
                                    var c = h.GetColor();
                                    if (colorCounts.containsKey(c)) {
                                        colorCounts.setItem(c, (colorCounts.getItem(c) + 1) | 0);
                                    } else {
                                        colorCounts.setItem(c, 1);
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                        var countsStr = "";
                        $t2 = Bridge.getEnumerator(colorCounts);
                        try {
                            while ($t2.moveNext()) {
                                var kvp = $t2.Current;
                                countsStr = (countsStr || "") + ((System.String.format("{0}:{1} ", Bridge.box(kvp.key, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor)), Bridge.box(kvp.value, System.Int32))) || "");
                            }
                        } finally {
                            if (Bridge.is($t2, System.IDisposable)) {
                                $t2.System$IDisposable$Dispose();
                            }
                        }
                        var neighborsInfo = "";
                        $t3 = Bridge.getEnumerator(p.activeNeighbors);
                        try {
                            while ($t3.moveNext()) {
                                var n = $t3.Current;
                                if (UnityEngine.MonoBehaviour.op_Inequality(n, null)) {
                                    var nTop = n.GetTopHexagon(n.Container);
                                    var nColor = UnityEngine.MonoBehaviour.op_Inequality(nTop, null) ? System.Enum.toString(Hexagon.HexagonColor, nTop.GetColor()) : "EMPTY";
                                    neighborsInfo = (neighborsInfo || "") + ((System.String.format("[{0}: {1}] ", n.name, nColor)) || "");
                                }
                            }
                        } finally {
                            if (Bridge.is($t3, System.IDisposable)) {
                                $t3.System$IDisposable$Dispose();
                            }
                        }
                        UnityEngine.Debug.Log$1(System.String.format("\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 {0}: \u0412\u0435\u0440\u0445\u043d\u0438\u0439 = {1}. \u0421\u043e\u0441\u0442\u0430\u0432: [{2}]. \u0421\u043e\u0441\u0435\u0434\u0438: {3}", p.name, topColor, countsStr.trim(), neighborsInfo));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                UnityEngine.Debug.Log$1("=== \u041a\u041e\u041d\u0415\u0426 \u0414\u0418\u0410\u0413\u041d\u041e\u0421\u0422\u0418\u041a\u0418 ===");
            },
            /*GroundPlatform.DebugLogBoardState end.*/


        }
    });
    /*GroundPlatform end.*/

    /*Hexagon start.*/
    Bridge.define("Hexagon", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            colorMaterials: null,
            hexRenderer: null,
            anchors: null,
            jumpCurve: null,
            removeCurve: null,
            jumpHeight: 0,
            jumpDuration: 0,
            removeScaleDuration: 0,
            currentColor: 0,
            isInitialized: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Hexagon#init", this ); }

                this.jumpHeight = 1.5;
                this.jumpDuration = 0.4;
                this.removeScaleDuration = 0.3;
                this.isInitialized = false;
            }
        },
        methods: {
            /*Hexagon.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Hexagon#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.hexRenderer, null)) {
                    this.hexRenderer = this.GetComponentInChildren(UnityEngine.Renderer);
                }

                if (this.jumpCurve == null || this.jumpCurve.keys.length === 0) {
                    this.jumpCurve = pc.AnimationCurve.createEaseInOut(0, 0, 1, 1);
                }

                if (this.removeCurve == null || this.removeCurve.keys.length === 0) {
                    this.removeCurve = pc.AnimationCurve.createEaseInOut(0, 1, 1, 0);
                }

                if (this.anchors == null || this.anchors.length !== 6) {
                    UnityEngine.Debug.LogWarning$1("Hexagon: Anchors array is not set or has wrong size.");
                }
            },
            /*Hexagon.Awake end.*/

            /*Hexagon.Init start.*/
            Init: function (color) {
if ( TRACE ) { TRACE( "Hexagon#Init", this ); }

                var $t;
                this.currentColor = color;
                this.isInitialized = true;
                $t = Bridge.getEnumerator(this.colorMaterials);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current.$clone();
                        if (pair.color === color) {
                            if (UnityEngine.Component.op_Inequality(this.hexRenderer, null)) {
                                this.hexRenderer.material = pair.material;
                            }
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Hexagon.Init end.*/

            /*Hexagon.IdentifyColorByMaterial start.*/
            IdentifyColorByMaterial: function () {
if ( TRACE ) { TRACE( "Hexagon#IdentifyColorByMaterial", this ); }

                var $t;
                if (UnityEngine.Component.op_Equality(this.hexRenderer, null) || this.hexRenderer.sharedMaterial == null) {
                    return;
                }
                $t = Bridge.getEnumerator(this.colorMaterials);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current.$clone();
                        if (pair.material != null && System.String.contains(this.hexRenderer.sharedMaterial.name,pair.material.name)) {
                            this.currentColor = pair.color;
                            this.isInitialized = true;
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Hexagon.IdentifyColorByMaterial end.*/

            /*Hexagon.GetColor start.*/
            GetColor: function () {
if ( TRACE ) { TRACE( "Hexagon#GetColor", this ); }

                return this.currentColor;
            },
            /*Hexagon.GetColor end.*/

            /*Hexagon.IsInitialized start.*/
            IsInitialized: function () {
if ( TRACE ) { TRACE( "Hexagon#IsInitialized", this ); }

                return this.isInitialized;
            },
            /*Hexagon.IsInitialized end.*/

            /*Hexagon.PlayJumpAnimation start.*/
            PlayJumpAnimation: function (targetPosition, targetRotation, onComplete, speedMultiplier) {
if ( TRACE ) { TRACE( "Hexagon#PlayJumpAnimation", this ); }

                if (onComplete === void 0) { onComplete = null; }
                if (speedMultiplier === void 0) { speedMultiplier = 1.0; }
                this.StartCoroutine$1(this.JumpCoroutine(targetPosition.$clone(), targetRotation, onComplete, speedMultiplier));
            },
            /*Hexagon.PlayJumpAnimation end.*/

            /*Hexagon.JumpCoroutine start.*/
            JumpCoroutine: function (targetPosition, targetRotation, onComplete, speedMultiplier) {
if ( TRACE ) { TRACE( "Hexagon#JumpCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    currentDuration,
                    startPos,
                    startRot,
                    directionXZ,
                    pivotAnchor,
                    minDist,
                    $t,
                    anchor,
                    anchorPos,
                    targetPosFlat,
                    dist,
                    rotationAxis,
                    angle,
                    fallDirection,
                    elapsedTime,
                    t,
                    curveValue,
                    rotOffset,
                    linearInterpPos,
                    arcHeight,
                    finalPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    currentDuration = this.jumpDuration / speedMultiplier;
                                        if (currentDuration <= 0.01) {
                                            currentDuration = 0.01;
                                        }

                                        startPos = this.transform.position.$clone();
                                        startRot = this.transform.rotation.$clone();
                                        directionXZ = targetPosition.$clone().sub( startPos );
                                        directionXZ.y = 0;

                                        if (directionXZ.lengthSq() < 0.001) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    this.transform.position = targetPosition.$clone();
                                        this.transform.rotation = targetRotation.$clone();
                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                                        return false;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    pivotAnchor = null;
                                        minDist = 3.40282347E+38;

                                        $t = Bridge.getEnumerator(this.anchors);
                                        try {
                                            while ($t.moveNext()) {
                                                anchor = $t.Current;
                                                if (UnityEngine.Component.op_Equality(anchor, null)) {
                                                    continue;
                                                }
                                                anchorPos = anchor.position.$clone();
                                                anchorPos.y = 0;
                                                targetPosFlat = targetPosition.$clone();
                                                targetPosFlat.y = 0;
                                                dist = pc.Vec3.distance( anchorPos, targetPosFlat );
                                                if (dist < minDist) {
                                                    minDist = dist;
                                                    pivotAnchor = anchor;
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        if (UnityEngine.Component.op_Equality(pivotAnchor, null)) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    UnityEngine.Debug.LogError$2("Hexagon: No valid anchor found!");
                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                                        return false;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    rotationAxis = new pc.Vec3().cross( directionXZ, pc.Vec3.UP.clone() ).clone().normalize().$clone();
                                        angle = 180.0;
                                        fallDirection = new pc.Vec3().cross( rotationAxis, pc.Vec3.UP.clone() ).clone().normalize().$clone();
                                        if (fallDirection.dot( directionXZ.clone().normalize() ) < 0) {
                                            angle = -180.0;
                                        }

                                        elapsedTime = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsedTime < currentDuration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsedTime += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsedTime / currentDuration));
                                        curveValue = this.jumpCurve.value(t);
                                        rotOffset = new pc.Quat().setFromAxisAngle( rotationAxis, angle * curveValue );
                                        linearInterpPos = new pc.Vec3().lerp( startPos, targetPosition, curveValue );
                                        arcHeight = this.jumpHeight * Math.sin(curveValue * UnityEngine.Mathf.PI);
                                        finalPos = linearInterpPos.$clone();
                                        finalPos.y += arcHeight;
                                        this.transform.position = finalPos.$clone();
                                        this.transform.rotation = rotOffset.clone().mul( startRot );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.transform.position = targetPosition.$clone();
                                        this.transform.rotation = targetRotation.$clone();
                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Hexagon.JumpCoroutine end.*/

            /*Hexagon.PlayRemoveAnimation start.*/
            PlayRemoveAnimation: function (onComplete) {
if ( TRACE ) { TRACE( "Hexagon#PlayRemoveAnimation", this ); }

                if (onComplete === void 0) { onComplete = null; }
                this.StartCoroutine$1(this.RemoveCoroutine(onComplete));
            },
            /*Hexagon.PlayRemoveAnimation end.*/

            /*Hexagon.RemoveCoroutine start.*/
            RemoveCoroutine: function (onComplete) {
if ( TRACE ) { TRACE( "Hexagon#RemoveCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startScale,
                    elapsedTime,
                    t,
                    scaleValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startScale = this.transform.localScale.$clone();
                                        elapsedTime = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsedTime < this.removeScaleDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsedTime += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsedTime / this.removeScaleDuration));
                                        scaleValue = this.removeCurve.value(t);
                                        this.transform.localScale = startScale.$clone().clone().scale( scaleValue );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.localScale = pc.Vec3.ZERO.clone();
                                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Hexagon.RemoveCoroutine end.*/


        }
    });
    /*Hexagon end.*/

    /*Hexagon+ColorMaterialPair start.*/
    Bridge.define("Hexagon.ColorMaterialPair", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Hexagon.ColorMaterialPair#getDefaultValue", this ); }
 return new Hexagon.ColorMaterialPair(); }
            }
        },
        fields: {
            color: 0,
            material: null,
            particleGradient: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "Hexagon.ColorMaterialPair#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Hexagon.ColorMaterialPair#getHashCode", this ); }

                var h = Bridge.addHash([7224197112, this.color, this.material, this.particleGradient]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Hexagon.ColorMaterialPair#equals", this ); }

                if (!Bridge.is(o, Hexagon.ColorMaterialPair)) {
                    return false;
                }
                return Bridge.equals(this.color, o.color) && Bridge.equals(this.material, o.material) && Bridge.equals(this.particleGradient, o.particleGradient);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Hexagon.ColorMaterialPair#$clone", this ); }

                var s = to || new Hexagon.ColorMaterialPair();
                s.color = this.color;
                s.material = this.material;
                s.particleGradient = this.particleGradient;
                return s;
            }
        }
    });
    /*Hexagon+ColorMaterialPair end.*/

    /*Hexagon+HexagonColor start.*/
    Bridge.define("Hexagon.HexagonColor", {
        $kind: 1006,
        statics: {
            fields: {
                White: 0,
                Blue: 1,
                Green: 2,
                Purple: 3,
                Red: 4,
                Yellow: 5,
                Cyan: 6
            }
        }
    });
    /*Hexagon+HexagonColor end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PlatformManager start.*/
    Bridge.define("PlatformManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                MaxIterations: 0,
                Instance: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PlatformManager#init", this ); }

                    this.MaxIterations = 100;
                }
            }
        },
        fields: {
            isChainReactionActive: false,
            GroundPlatforms: null,
            cursorFollower: null,
            weightMatchCreation: 0,
            weightChainContinuation: 0,
            weightUnderColorMatch: 0,
            weightNeighborChainPotential: 0,
            weightFutureMatchPotential: 0,
            weightGlobalOpportunity: 0,
            weightEmptyUnderneathPreference: 0,
            matchCountThreshold: 0,
            _pendingRemovals: 0
        },
        props: {
            IsBusy: {
                get: function () {
if ( TRACE ) { TRACE( "PlatformManager#IsBusy#get", this ); }

                    return this.isChainReactionActive;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlatformManager#init", this ); }

                this.isChainReactionActive = false;
                this.weightMatchCreation = 100.0;
                this.weightChainContinuation = 50.0;
                this.weightUnderColorMatch = 80.0;
                this.weightNeighborChainPotential = 60.0;
                this.weightFutureMatchPotential = 70.0;
                this.weightGlobalOpportunity = 40.0;
                this.weightEmptyUnderneathPreference = 5.0;
                this.matchCountThreshold = 10;
                this._pendingRemovals = 0;
            }
        },
        methods: {
            /*PlatformManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlatformManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(PlatformManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(PlatformManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                PlatformManager.Instance = this;
            },
            /*PlatformManager.Awake end.*/

            /*PlatformManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlatformManager#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(PlatformManager.Instance, this)) {
                    PlatformManager.Instance = null;
                }
            },
            /*PlatformManager.OnDestroy end.*/

            /*PlatformManager.IncrementPendingRemovals start.*/
            IncrementPendingRemovals: function (count) {
if ( TRACE ) { TRACE( "PlatformManager#IncrementPendingRemovals", this ); }

                this._pendingRemovals = (this._pendingRemovals + count) | 0;
            },
            /*PlatformManager.IncrementPendingRemovals end.*/

            /*PlatformManager.DecrementPendingRemovals start.*/
            DecrementPendingRemovals: function () {
if ( TRACE ) { TRACE( "PlatformManager#DecrementPendingRemovals", this ); }

                if (this._pendingRemovals > 0) {
                    this._pendingRemovals = (this._pendingRemovals - 1) | 0;
                }
            },
            /*PlatformManager.DecrementPendingRemovals end.*/

            /*PlatformManager.StartChainReaction start.*/
            StartChainReaction: function (starter) {
if ( TRACE ) { TRACE( "PlatformManager#StartChainReaction", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(starter, null)) {
                    return;
                }
                this.StartCoroutine$1(this.ProcessChainReactionGlobal(starter));
            },
            /*PlatformManager.StartChainReaction end.*/

            /*PlatformManager.ProcessChainReactionGlobal start.*/
            ProcessChainReactionGlobal: function (starter) {
if ( TRACE ) { TRACE( "PlatformManager#ProcessChainReactionGlobal", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    globalStateChanged,
                    safetyCounter,
                    stepCount,
                    recentlyMoved,
                    priorityPlatform,
                    bestMove,
                    speedMultiplier,
                    animDone,
                    destroyedSomething,
                    $t,
                    platform,
                    $t1,
                    p,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isChainReactionActive = true;
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.cursorFollower, null)) {
                                            this.cursorFollower.TriggerChainReactionFade();
                                        }

                                        globalStateChanged = true;
                                        safetyCounter = 0;
                                        stepCount = 0;
                                        recentlyMoved = new (System.Collections.Generic.HashSet$1(GroundPlatform)).ctor();
                                        priorityPlatform = starter;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( globalStateChanged && safetyCounter < PlatformManager.MaxIterations ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 2: {
                                    safetyCounter = (safetyCounter + 1) | 0;
                                        globalStateChanged = false;

                                        this.SyncAllPlatformsColors();

                                        bestMove = this.FindBestGlobalMove(recentlyMoved, priorityPlatform);

                                        if (bestMove.IsValid) {
                                            $step = 3;
                                            continue;
                                        } else  {
                                            $step = 6;
                                            continue;
                                        }
                                }
                                case 3: {
                                    globalStateChanged = true;
                                        stepCount = UnityEngine.Mathf.Min(((stepCount + 1) | 0), 4);
                                        speedMultiplier = Math.pow(1.3, ((stepCount - 1) | 0));

                                        recentlyMoved.add(bestMove.Source);
                                        recentlyMoved.add(bestMove.Target);
                                        priorityPlatform = bestMove.Target;

                                        animDone = { v : false };
                                        bestMove.Source.StartTransferAnimation(bestMove.Target, bestMove.BlocksToMove, (function ($me, animDone) {
                                            return function () {
                                                animDone.v = true;
                                            };
                                        })(this, animDone), speedMultiplier);
                                        $enumerator.current = new UnityEngine.WaitUntil((function ($me, animDone) {
                                            return function () {
                                                return animDone.v;
                                            };
                                        })(this, animDone));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 11;
                                    continue;
                                }
                                case 6: {
                                    this.SyncAllPlatformsColors();

                                        destroyedSomething = false;
                                        $t = Bridge.getEnumerator(this.GroundPlatforms);
                                        try {
                                            while ($t.moveNext()) {
                                                platform = $t.Current;
                                                if (UnityEngine.MonoBehaviour.op_Inequality(platform, null) && platform.CheckAndClearMatch(this.matchCountThreshold)) {
                                                    destroyedSomething = true;
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        if (destroyedSomething) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 7: {
                                    globalStateChanged = true;
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this._pendingRemovals === 0;
                                        }));
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    $t1 = Bridge.getEnumerator(this.GroundPlatforms);
                                        try {
                                            while ($t1.moveNext()) {
                                                p = $t1.Current;
                                                if (UnityEngine.MonoBehaviour.op_Inequality(p, null)) {
                                                    p.ForceInitializeColorsInContainer(p.Container);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t1, System.IDisposable)) {
                                                $t1.System$IDisposable$Dispose();
                                            }
                                        }

                                        recentlyMoved.clear();
                                        stepCount = 0;
                                        priorityPlatform = null;
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 12: {
                                    if (safetyCounter >= PlatformManager.MaxIterations) {
                                            UnityEngine.Debug.LogError$2("\u0414\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442 \u043b\u0438\u043c\u0438\u0442 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439!");
                                        }
                                        this._pendingRemovals = 0;
                                        //starter.DebugLogBoardState();

                                        this.isChainReactionActive = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlatformManager.ProcessChainReactionGlobal end.*/

            /*PlatformManager.SyncAllPlatformsColors start.*/
            SyncAllPlatformsColors: function () {
if ( TRACE ) { TRACE( "PlatformManager#SyncAllPlatformsColors", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.GroundPlatforms);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(p, null)) {
                            p.InitializeColorsInContainer(p.Container);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*PlatformManager.SyncAllPlatformsColors end.*/

            /*PlatformManager.FindBestGlobalMove start.*/
            FindBestGlobalMove: function (recentlyMoved, priorityPlatform) {
if ( TRACE ) { TRACE( "PlatformManager#FindBestGlobalMove", this ); }

                var $t, $t1;
                var bestMove = ($t = new PlatformManager.MoveDecision(), $t.IsValid = false, $t.Score = -99999.0, $t);

                $t = Bridge.getEnumerator(this.GroundPlatforms);
                try {
                    while ($t.moveNext()) {
                        var platform = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(platform, null)) {
                            continue;
                        }

                        var topHex = platform.GetTopHexagon(platform.Container);
                        if (UnityEngine.MonoBehaviour.op_Equality(topHex, null)) {
                            continue;
                        }

                        var color = topHex.GetColor();
                        var blocks = platform.GetBlocksToTransfer(platform.Container, color);
                        if (blocks.Count === 0) {
                            continue;
                        }

                        $t1 = Bridge.getEnumerator(platform.GetActiveNeighbors(), GroundPlatform);
                        try {
                            while ($t1.moveNext()) {
                                var neighbor = $t1.Current;
                                if (UnityEngine.MonoBehaviour.op_Equality(neighbor, null) || UnityEngine.MonoBehaviour.op_Equality(neighbor, platform)) {
                                    continue;
                                }

                                var score = this.EvaluateMoveGlobal(platform, neighbor, color, blocks.Count, recentlyMoved, priorityPlatform);

                                if (score > bestMove.Score) {
                                    bestMove.Source = platform;
                                    bestMove.Target = neighbor;
                                    bestMove.BlocksToMove = blocks;
                                    bestMove.Color = color;
                                    bestMove.Score = score;
                                    bestMove.IsValid = true;
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return bestMove.$clone();
            },
            /*PlatformManager.FindBestGlobalMove end.*/

            /*PlatformManager.EvaluateMoveGlobal start.*/
            EvaluateMoveGlobal: function (source, target, color, blocksCount, recentlyMoved, priorityPlatform) {
if ( TRACE ) { TRACE( "PlatformManager#EvaluateMoveGlobal", this ); }

                var $t;
                var score = 0.0;

                var targetTop = target.GetTopHexagon(target.Container);
                if (UnityEngine.MonoBehaviour.op_Equality(targetTop, null) || targetTop.GetColor() !== color) {
                    return -99999.0;
                }

                var targetMatching = target.GetTopContinuousBlocks(color);
                var potentialTotal = (targetMatching.Count + blocksCount) | 0;

                var willCreateMatch = potentialTotal >= this.matchCountThreshold;

                if (willCreateMatch) {
                    score += this.weightMatchCreation;
                    score += (((potentialTotal - this.matchCountThreshold) | 0)) * 1.0;
                } else {
                    score += this.weightChainContinuation;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(priorityPlatform, null)) {
                    if (UnityEngine.MonoBehaviour.op_Equality(source, priorityPlatform) || UnityEngine.MonoBehaviour.op_Equality(target, priorityPlatform)) {
                        score += 200.0;
                    }
                    if (System.Linq.Enumerable.from(priorityPlatform.GetActiveNeighbors(), GroundPlatform).contains(source) || System.Linq.Enumerable.from(priorityPlatform.GetActiveNeighbors(), GroundPlatform).contains(target)) {
                        score += 100.0;
                    }
                }

                var sourceNext = this.GetNextHexagonAfterTransfer(source, color, blocksCount);
                var targetUnder = this.GetUnderHexagon(target);

                if (UnityEngine.MonoBehaviour.op_Inequality(sourceNext, null) && UnityEngine.MonoBehaviour.op_Inequality(targetUnder, null) && sourceNext.GetColor() === targetUnder.GetColor()) {
                    score += this.weightUnderColorMatch;
                }

                if (!willCreateMatch) {
                    var allTargetHexes = new (System.Collections.Generic.List$1(Hexagon)).ctor();
                    $t = Bridge.getEnumerator(target.Container.transform);
                    try {
                        while ($t.moveNext()) {
                            var child = Bridge.cast($t.Current, UnityEngine.Transform);
                            var hex = child.GetComponent(Hexagon);
                            if (UnityEngine.MonoBehaviour.op_Inequality(hex, null) && child.gameObject.activeSelf) {
                                allTargetHexes.add(hex);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (allTargetHexes.Count <= 1) {
                        score += this.weightEmptyUnderneathPreference;
                    }
                }

                score += this.EvaluateNeighborChainPotential(target, color, source);
                score += this.EvaluateFutureMatchPotential(source, target, color, blocksCount);

                if (!recentlyMoved.contains(source) && !recentlyMoved.contains(target)) {
                    score += this.weightGlobalOpportunity;
                }

                score -= target.GetBlockCount() * 0.1;

                return score;
            },
            /*PlatformManager.EvaluateMoveGlobal end.*/

            /*PlatformManager.EvaluateNeighborChainPotential start.*/
            EvaluateNeighborChainPotential: function (platform, movedColor, exclude) {
if ( TRACE ) { TRACE( "PlatformManager#EvaluateNeighborChainPotential", this ); }

                var $t;
                var score = 0.0;
                var platformTop = platform.GetTopHexagon(platform.Container);
                if (UnityEngine.MonoBehaviour.op_Equality(platformTop, null)) {
                    return score;
                }

                $t = Bridge.getEnumerator(platform.GetActiveNeighbors(), GroundPlatform);
                try {
                    while ($t.moveNext()) {
                        var neighbor = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(neighbor, null) || UnityEngine.MonoBehaviour.op_Equality(neighbor, exclude)) {
                            continue;
                        }
                        var neighborTop = neighbor.GetTopHexagon(neighbor.Container);
                        if (UnityEngine.MonoBehaviour.op_Inequality(neighborTop, null) && neighborTop.GetColor() === platformTop.GetColor()) {
                            score += this.weightNeighborChainPotential;
                            var nBlocks = neighbor.GetTopContinuousBlocks(neighborTop.GetColor());
                            var pBlocks = platform.GetTopContinuousBlocks(platformTop.GetColor());
                            if (((nBlocks.Count + pBlocks.Count) | 0) >= this.matchCountThreshold) {
                                score += this.weightFutureMatchPotential * 0.5;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return score;
            },
            /*PlatformManager.EvaluateNeighborChainPotential end.*/

            /*PlatformManager.EvaluateFutureMatchPotential start.*/
            EvaluateFutureMatchPotential: function (source, target, movedColor, blocksCount) {
if ( TRACE ) { TRACE( "PlatformManager#EvaluateFutureMatchPotential", this ); }

                var $t, $t1;
                var score = 0.0;

                var sourceNext = this.GetNextHexagonAfterTransfer(source, movedColor, blocksCount);
                if (UnityEngine.MonoBehaviour.op_Inequality(sourceNext, null)) {
                    var nextColor = sourceNext.GetColor();
                    $t = Bridge.getEnumerator(source.GetActiveNeighbors(), GroundPlatform);
                    try {
                        while ($t.moveNext()) {
                            var neighbor = $t.Current;
                            if (UnityEngine.MonoBehaviour.op_Equality(neighbor, null)) {
                                continue;
                            }
                            var nTop = neighbor.GetTopHexagon(neighbor.Container);
                            if (UnityEngine.MonoBehaviour.op_Inequality(nTop, null) && nTop.GetColor() === nextColor) {
                                var sBlocks = source.GetTopContinuousBlocks(nextColor);
                                var nBlocks = neighbor.GetTopContinuousBlocks(nextColor);
                                if (((sBlocks.Count + nBlocks.Count) | 0) >= this.matchCountThreshold) {
                                    score += this.weightFutureMatchPotential;
                                } else {
                                    score += this.weightChainContinuation * 0.5;
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                var targetNewTop = target.GetTopHexagon(target.Container);
                if (UnityEngine.MonoBehaviour.op_Inequality(targetNewTop, null)) {
                    var newColor = targetNewTop.GetColor();
                    $t1 = Bridge.getEnumerator(target.GetActiveNeighbors(), GroundPlatform);
                    try {
                        while ($t1.moveNext()) {
                            var neighbor1 = $t1.Current;
                            if (UnityEngine.MonoBehaviour.op_Equality(neighbor1, null)) {
                                continue;
                            }
                            var nTop1 = neighbor1.GetTopHexagon(neighbor1.Container);
                            if (UnityEngine.MonoBehaviour.op_Inequality(nTop1, null) && nTop1.GetColor() === newColor) {
                                var tBlocks = target.GetTopContinuousBlocks(newColor);
                                var nBlocks1 = neighbor1.GetTopContinuousBlocks(newColor);
                                if (((tBlocks.Count + nBlocks1.Count) | 0) >= this.matchCountThreshold) {
                                    score += this.weightFutureMatchPotential;
                                } else {
                                    score += this.weightChainContinuation * 0.5;
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                }

                return score;
            },
            /*PlatformManager.EvaluateFutureMatchPotential end.*/

            /*PlatformManager.GetNextHexagonAfterTransfer start.*/
            GetNextHexagonAfterTransfer: function (platform, removedColor, count) {
if ( TRACE ) { TRACE( "PlatformManager#GetNextHexagonAfterTransfer", this ); }

                var $t;
                var allHexes = new (System.Collections.Generic.List$1(Hexagon)).ctor();
                $t = Bridge.getEnumerator(platform.Container.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        var hex = child.GetComponent(Hexagon);
                        if (UnityEngine.MonoBehaviour.op_Inequality(hex, null) && child.gameObject.activeSelf) {
                            allHexes.add(hex);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                allHexes.Sort$2(function (a, b) {
                    return Bridge.compare(b.transform.localPosition.y, a.transform.localPosition.y);
                });
                return allHexes.Count <= count ? null : allHexes.getItem(count);
            },
            /*PlatformManager.GetNextHexagonAfterTransfer end.*/

            /*PlatformManager.GetUnderHexagon start.*/
            GetUnderHexagon: function (platform) {
if ( TRACE ) { TRACE( "PlatformManager#GetUnderHexagon", this ); }

                var $t;
                var allHexes = new (System.Collections.Generic.List$1(Hexagon)).ctor();
                $t = Bridge.getEnumerator(platform.Container.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        var hex = child.GetComponent(Hexagon);
                        if (UnityEngine.MonoBehaviour.op_Inequality(hex, null) && child.gameObject.activeSelf) {
                            allHexes.add(hex);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                allHexes.Sort$2(function (a, b) {
                    return Bridge.compare(b.transform.localPosition.y, a.transform.localPosition.y);
                });
                return allHexes.Count < 2 ? null : allHexes.getItem(1);
            },
            /*PlatformManager.GetUnderHexagon end.*/


        }
    });
    /*PlatformManager end.*/

    /*PlatformManager+MoveDecision start.*/
    Bridge.define("PlatformManager.MoveDecision", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "PlatformManager.MoveDecision#getDefaultValue", this ); }
 return new PlatformManager.MoveDecision(); }
            }
        },
        fields: {
            Source: null,
            Target: null,
            BlocksToMove: null,
            Color: 0,
            Score: 0,
            IsValid: false
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "PlatformManager.MoveDecision#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "PlatformManager.MoveDecision#getHashCode", this ); }

                var h = Bridge.addHash([5323177476, this.Source, this.Target, this.BlocksToMove, this.Color, this.Score, this.IsValid]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "PlatformManager.MoveDecision#equals", this ); }

                if (!Bridge.is(o, PlatformManager.MoveDecision)) {
                    return false;
                }
                return Bridge.equals(this.Source, o.Source) && Bridge.equals(this.Target, o.Target) && Bridge.equals(this.BlocksToMove, o.BlocksToMove) && Bridge.equals(this.Color, o.Color) && Bridge.equals(this.Score, o.Score) && Bridge.equals(this.IsValid, o.IsValid);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "PlatformManager.MoveDecision#$clone", this ); }

                var s = to || new PlatformManager.MoveDecision();
                s.Source = this.Source;
                s.Target = this.Target;
                s.BlocksToMove = this.BlocksToMove;
                s.Color = this.Color;
                s.Score = this.Score;
                s.IsValid = this.IsValid;
                return s;
            }
        }
    });
    /*PlatformManager+MoveDecision end.*/

    /*Stack start.*/
    Bridge.define("Stack", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                PlatformOffsetY: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Stack#init", this ); }

                    this.PlatformOffsetY = 0.1;
                }
            }
        },
        fields: {
            moveCurve: null,
            moveDuration: 0,
            rayLength: 0,
            stackManager: null,
            disabled: false,
            originalPosition: null,
            currentHoveredPlatform: null,
            moveCoroutine: null
        },
        props: {
            IsDisabled: {
                get: function () {
if ( TRACE ) { TRACE( "Stack#IsDisabled#get", this ); }

                    return this.disabled;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Stack#init", this ); }

                this.originalPosition = new UnityEngine.Vector3();
                this.moveCurve = pc.AnimationCurve.createEaseInOut(0, 0, 1, 1);
                this.moveDuration = 0.25;
                this.rayLength = 10.0;
            }
        },
        methods: {
            /*Stack.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Stack#Awake", this ); }

                this.originalPosition = this.transform.position.$clone();

                if (UnityEngine.MonoBehaviour.op_Equality(this.stackManager, null)) {
                    this.stackManager = this.GetComponentInParent(StackManager);
                }
            },
            /*Stack.Awake end.*/

            /*Stack.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Stack#Update", this ); }

                if (this.disabled) {
                    return;
                }
                this.CheckHover();
                this.DebugRaycast();
            },
            /*Stack.Update end.*/

            /*Stack.CheckHover start.*/
            CheckHover: function () {
if ( TRACE ) { TRACE( "Stack#CheckHover", this ); }

                var hit = { v : new UnityEngine.RaycastHit() };
                if (UnityEngine.Physics.Raycast$3(this.transform.position, pc.Vec3.DOWN.clone(), hit, this.rayLength)) {
                    var platform = hit.v.collider.GetComponent(GroundPlatform);

                    if (UnityEngine.MonoBehaviour.op_Inequality(platform, null) && platform.IsAvailable() && !this.disabled) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, platform)) {
                            if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null)) {
                                this.currentHoveredPlatform.RemoveGlow();
                            }

                            this.currentHoveredPlatform = platform;
                            this.currentHoveredPlatform.SetGlow();
                        }
                        return;
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null)) {
                    this.currentHoveredPlatform.RemoveGlow();
                    this.currentHoveredPlatform = null;
                }
            },
            /*Stack.CheckHover end.*/

            /*Stack.DebugRaycast start.*/
            DebugRaycast: function () {
if ( TRACE ) { TRACE( "Stack#DebugRaycast", this ); }

                var rayColor = new pc.Color( 1, 0, 0, 1 );
                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null)) {
                    rayColor = new pc.Color( 0, 1, 0, 1 );
                }

                UnityEngine.Debug.DrawRay$1(this.transform.position, pc.Vec3.DOWN.clone().clone().scale( this.rayLength ), rayColor);
            },
            /*Stack.DebugRaycast end.*/

            /*Stack.Drop start.*/
            Drop: function () {
if ( TRACE ) { TRACE( "Stack#Drop", this ); }

                if (this.moveCoroutine != null) {
                    this.StopCoroutine$2(this.moveCoroutine);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null) && UnityEngine.GameObject.op_Inequality(this.currentHoveredPlatform.Container, null)) {
                    var targetPlatform = this.currentHoveredPlatform;
                    TutorialManager.Instance.OnHexagonPlacedSuccessfully();
                    this.moveCoroutine = this.StartCoroutine$1(this.MoveToContainerAndTransfer(targetPlatform, targetPlatform.Container));
                } else {
                    this.moveCoroutine = this.StartCoroutine$1(this.SmoothReturnToOriginal());
                }
            },
            /*Stack.Drop end.*/

            /*Stack.SetDisabled start.*/
            SetDisabled: function (value) {
if ( TRACE ) { TRACE( "Stack#SetDisabled", this ); }

                this.disabled = value;

                if (this.disabled && UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null)) {
                    this.currentHoveredPlatform.RemoveGlow();
                    this.currentHoveredPlatform = null;
                }
            },
            /*Stack.SetDisabled end.*/

            /*Stack.SmoothReturnToOriginal start.*/
            SmoothReturnToOriginal: function () {
if ( TRACE ) { TRACE( "Stack#SmoothReturnToOriginal", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    endPos,
                    elapsed,
                    t,
                    curveT,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.transform.position.$clone();
                                        endPos = this.originalPosition.$clone();
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.moveDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.moveDuration));
                                        curveT = this.moveCurve.value(t);

                                        this.transform.position = new pc.Vec3().lerp( startPos, endPos, curveT );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = endPos.$clone();

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null)) {
                                            this.currentHoveredPlatform.RemoveGlow();
                                            this.currentHoveredPlatform = null;
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Stack.SmoothReturnToOriginal end.*/

            /*Stack.MoveToContainerAndTransfer start.*/
            MoveToContainerAndTransfer: function (targetPlatform, targetContainer) {
if ( TRACE ) { TRACE( "Stack#MoveToContainerAndTransfer", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    endPos,
                    elapsed,
                    t,
                    curveT,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.disabled = true;

                                        startPos = this.transform.position.$clone();
                                        endPos = new pc.Vec3( targetContainer.transform.position.x, targetContainer.transform.position.y + Stack.PlatformOffsetY, targetContainer.transform.position.z );
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.moveDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.moveDuration));
                                        curveT = this.moveCurve.value(t);

                                        this.transform.position = new pc.Vec3().lerp( startPos, endPos, curveT );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = endPos.$clone();

                                        this.MoveChildrenToContainer(targetContainer);

                                        if (UnityEngine.MonoBehaviour.op_Inequality(targetPlatform, null)) {
                                            targetPlatform.RemoveGlow();
                                            if (UnityEngine.MonoBehaviour.op_Equality(this.currentHoveredPlatform, targetPlatform)) {
                                                this.currentHoveredPlatform = null;
                                            }

                                            PlatformManager.Instance.StartChainReaction(targetPlatform);
                                        }

                                        $enumerator.current = this.StartCoroutine$1(this.ReturnAndRefill());
                                        $step = 5;
                                        return true;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Stack.MoveToContainerAndTransfer end.*/

            /*Stack.ReturnAndRefill start.*/
            ReturnAndRefill: function () {
if ( TRACE ) { TRACE( "Stack#ReturnAndRefill", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    endPos,
                    elapsed,
                    t,
                    curveT,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.transform.position.$clone();
                                        endPos = this.originalPosition.$clone();
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.moveDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.moveDuration));
                                        curveT = this.moveCurve.value(t);

                                        this.transform.position = new pc.Vec3().lerp( startPos, endPos, curveT );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = endPos.$clone();

                                        this.NotifyManagerIfEmpty();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Stack.ReturnAndRefill end.*/

            /*Stack.MoveChildrenToContainer start.*/
            MoveChildrenToContainer: function (targetContainer) {
if ( TRACE ) { TRACE( "Stack#MoveChildrenToContainer", this ); }

                while (this.transform.childCount > 0) {
                    var child = this.transform.GetChild(0);
                    child.SetParent(targetContainer.transform, true);
                }
            },
            /*Stack.MoveChildrenToContainer end.*/

            /*Stack.NotifyManagerIfEmpty start.*/
            NotifyManagerIfEmpty: function () {
if ( TRACE ) { TRACE( "Stack#NotifyManagerIfEmpty", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.stackManager, null)) {
                    this.stackManager.OnStackEmptied(this);
                }
            },
            /*Stack.NotifyManagerIfEmpty end.*/


        }
    });
    /*Stack end.*/

    /*StackManager start.*/
    Bridge.define("StackManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            stacks: null,
            isRefilling: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "StackManager#init", this ); }

                this.stacks = new (System.Collections.Generic.List$1(Stack)).ctor();
                this.isRefilling = false;
            }
        },
        methods: {
            /*StackManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "StackManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(StackManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(StackManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                StackManager.Instance = this;
            },
            /*StackManager.Awake end.*/

            /*StackManager.OnStackEmptied start.*/
            OnStackEmptied: function (stack) {
if ( TRACE ) { TRACE( "StackManager#OnStackEmptied", this ); }

                stack.SetDisabled(true);

                if (this.isRefilling) {
                    return;
                }

                if (this.AreAllStacksEmpty()) {
                    this.HandleRefill();
                }
            },
            /*StackManager.OnStackEmptied end.*/

            /*StackManager.HandleRefill start.*/
            HandleRefill: function () {
if ( TRACE ) { TRACE( "StackManager#HandleRefill", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(PlatformManager.Instance, null) && PlatformManager.Instance.IsBusy) {
                    this.StartCoroutine$1(this.WaitForChainReactionAndRefill());
                } else {
                    this.RefillAllStacks();
                }
            },
            /*StackManager.HandleRefill end.*/

            /*StackManager.WaitForChainReactionAndRefill start.*/
            WaitForChainReactionAndRefill: function () {
if ( TRACE ) { TRACE( "StackManager#WaitForChainReactionAndRefill", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitUntil(function () {
                                            return UnityEngine.MonoBehaviour.op_Equality(PlatformManager.Instance, null) || !PlatformManager.Instance.IsBusy;
                                        });
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.RefillAllStacks();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*StackManager.WaitForChainReactionAndRefill end.*/

            /*StackManager.AreAllStacksEmpty start.*/
            AreAllStacksEmpty: function () {
if ( TRACE ) { TRACE( "StackManager#AreAllStacksEmpty", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.stacks);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (stack.transform.childCount > 0) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*StackManager.AreAllStacksEmpty end.*/

            /*StackManager.RefillAllStacks start.*/
            RefillAllStacks: function () {
if ( TRACE ) { TRACE( "StackManager#RefillAllStacks", this ); }

                var $t;
                this.isRefilling = true;

                $t = Bridge.getEnumerator(this.stacks);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        var fillStack = stack.GetComponent(FillStack);
                        if (UnityEngine.MonoBehaviour.op_Inequality(fillStack, null)) {
                            fillStack.GenerateBlocks();
                        }
                        stack.SetDisabled(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.isRefilling = false;
            },
            /*StackManager.RefillAllStacks end.*/


        }
    });
    /*StackManager end.*/

    /*TimeManager start.*/
    Bridge.define("TimeManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            gameDuration: 0,
            timeSlider: null,
            sliderFillImage: null,
            arrowParentRectTransform: null,
            timerBorderImage: null,
            sliderBorderImage: null,
            arrowImage: null,
            startColor: null,
            midColor: null,
            endColor: null,
            pulseColor: null,
            pulseThreshold: 0,
            pulseDuration: 0,
            pauseDuration: 0,
            maxScaleMultiplier: 0,
            alarmDuration: 0,
            shakeAmount: 0,
            shakeSpeed: 0,
            shakeRotationAmount: 0,
            _timerCoroutine: null,
            _pulseCoroutine: null,
            _alarmCoroutine: null,
            _isRunning: false,
            _origTimerPos: null,
            _origTimerScale: null,
            _origTimerRot: null,
            _origArrowPos: null,
            _origArrowScale: null,
            _origArrowRot: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TimeManager#init", this ); }

                this.startColor = new UnityEngine.Color();
                this.midColor = new UnityEngine.Color();
                this.endColor = new UnityEngine.Color();
                this.pulseColor = new UnityEngine.Color();
                this._origTimerPos = new UnityEngine.Vector3();
                this._origTimerScale = new UnityEngine.Vector3();
                this._origTimerRot = new UnityEngine.Vector3();
                this._origArrowPos = new UnityEngine.Vector3();
                this._origArrowScale = new UnityEngine.Vector3();
                this._origArrowRot = new UnityEngine.Vector3();
                this.gameDuration = 20.0;
                this.pulseThreshold = 0.25;
                this.pulseDuration = 0.2;
                this.pauseDuration = 0.8;
                this.maxScaleMultiplier = 1.15;
                this.alarmDuration = 3.0;
                this.shakeAmount = 10.0;
                this.shakeSpeed = 20.0;
                this.shakeRotationAmount = 3.0;
            }
        },
        methods: {
            /*TimeManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TimeManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(TimeManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(TimeManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                TimeManager.Instance = this;

                if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                    this._origTimerPos = this.timerBorderImage.rectTransform.localPosition.$clone();
                    this._origTimerScale = this.timerBorderImage.rectTransform.localScale.$clone();
                    this._origTimerRot = this.timerBorderImage.rectTransform.localEulerAngles.$clone();
                }
                if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                    this._origArrowPos = this.arrowImage.rectTransform.localPosition.$clone();
                    this._origArrowScale = this.arrowImage.rectTransform.localScale.$clone();
                    this._origArrowRot = this.arrowImage.rectTransform.localEulerAngles.$clone();
                }
            },
            /*TimeManager.Awake end.*/

            /*TimeManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "TimeManager#StartGame", this ); }

                if (this._isRunning) {
                    this.StopGame();
                }
                this._isRunning = true;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.timeSlider, null)) {
                    this.timeSlider.value = 1.0;
                }
                if (UnityEngine.Component.op_Inequality(this.arrowParentRectTransform, null)) {
                    this.arrowParentRectTransform.localEulerAngles = pc.Vec3.ZERO.clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.sliderFillImage, null)) {
                    this.sliderFillImage.color = this.startColor.$clone();
                }

                this.ResetBorders();

                if (this._timerCoroutine != null) {
                    this.StopCoroutine$2(this._timerCoroutine);
                }
                this._timerCoroutine = this.StartCoroutine$1(this.RunTimer());
            },
            /*TimeManager.StartGame end.*/

            /*TimeManager.StopGame start.*/
            StopGame: function () {
if ( TRACE ) { TRACE( "TimeManager#StopGame", this ); }

                this._isRunning = false;

                if (this._timerCoroutine != null) {
                    this.StopCoroutine$2(this._timerCoroutine);
                    this._timerCoroutine = null;
                }
                if (this._pulseCoroutine != null) {
                    this.StopCoroutine$2(this._pulseCoroutine);
                    this._pulseCoroutine = null;
                }
                if (this._alarmCoroutine != null) {
                    this.StopCoroutine$2(this._alarmCoroutine);
                    this._alarmCoroutine = null;
                }

                this.ResetBorders();
            },
            /*TimeManager.StopGame end.*/

            /*TimeManager.ResetBorders start.*/
            ResetBorders: function () {
if ( TRACE ) { TRACE( "TimeManager#ResetBorders", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.timerBorderImage, null)) {
                    this.timerBorderImage.color = new pc.Color( 1, 1, 1, 1 );
                    this.timerBorderImage.rectTransform.localScale = this._origTimerScale.$clone();
                    this.timerBorderImage.rectTransform.localPosition = this._origTimerPos.$clone();
                    this.timerBorderImage.rectTransform.localEulerAngles = this._origTimerRot.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.sliderBorderImage, null)) {
                    this.sliderBorderImage.color = new pc.Color( 1, 1, 1, 1 );
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.arrowImage, null)) {
                    this.arrowImage.color = new pc.Color( 1, 1, 1, 1 );
                    this.arrowImage.rectTransform.localScale = this._origArrowScale.$clone();
                    this.arrowImage.rectTransform.localPosition = this._origArrowPos.$clone();
                    this.arrowImage.rectTransform.localEulerAngles = this._origArrowRot.$clone();
                }
            },
            /*TimeManager.ResetBorders end.*/

            /*TimeManager.RunTimer start.*/
            RunTimer: function () {
if ( TRACE ) { TRACE( "TimeManager#RunTimer", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsedTime,
                    pulseStarted,
                    progress,
                    normalizedTime,
                    angle,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsedTime = 0.0;
                                        pulseStarted = false;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsedTime < this.gameDuration && this._isRunning ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsedTime += UnityEngine.Time.deltaTime;
                                        progress = elapsedTime / this.gameDuration;
                                        normalizedTime = 1.0 - progress;

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.timeSlider, null)) {
                                            this.timeSlider.value = normalizedTime;
                                        }
                                        if (UnityEngine.Component.op_Inequality(this.arrowParentRectTransform, null)) {
                                            angle = progress * 360.0;
                                            this.arrowParentRectTransform.localEulerAngles = new pc.Vec3( 0, 0, angle );
                                        }
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.sliderFillImage, null)) {
                                            this.sliderFillImage.color = progress <= 0.5 ? pc.Color.lerp( this.startColor, this.midColor, progress * 2.0 ) : pc.Color.lerp( this.midColor, this.endColor, (progress - 0.5) * 2.0 );
                                        }

                                        if (normalizedTime <= this.pulseThreshold && !pulseStarted) {
                                            pulseStarted = true;
                                            this._pulseCoroutine = this.StartCoroutine$1(this.PulseLoop());
                                        }

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (this._isRunning) {
                                            this.OnTimerFinished();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TimeManager.RunTimer end.*/

            /*TimeManager.PulseLoop start.*/
            PulseLoop: function () {
if ( TRACE ) { TRACE( "TimeManager#PulseLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._isRunning ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.DoPulse());
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseDuration);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TimeManager.PulseLoop end.*/

            /*TimeManager.DoPulse start.*/
            DoPulse: function () {
if ( TRACE ) { TRACE( "TimeManager#DoPulse", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    startBorderColor,
                    startTimerBorderColor,
                    startArrowColor,
                    startTimerScale,
                    startArrowScale,
                    t,
                    currentColor,
                    t1,
                    currentColor1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;
                                        startBorderColor = UnityEngine.Object.op_Implicit(this.sliderBorderImage) ? this.sliderBorderImage.color.$clone() : new pc.Color( 1, 1, 1, 1 );
                                        startTimerBorderColor = UnityEngine.Object.op_Implicit(this.timerBorderImage) ? this.timerBorderImage.color.$clone() : new pc.Color( 1, 1, 1, 1 );
                                        startArrowColor = UnityEngine.Object.op_Implicit(this.arrowImage) ? this.arrowImage.color.$clone() : new pc.Color( 1, 1, 1, 1 );

                                        startTimerScale = UnityEngine.Object.op_Implicit(this.timerBorderImage) ? this.timerBorderImage.rectTransform.localScale.$clone() : new pc.Vec3( 1, 1, 1 );
                                        startArrowScale = UnityEngine.Object.op_Implicit(this.arrowImage) ? this.arrowImage.rectTransform.localScale.$clone() : new pc.Vec3( 1, 1, 1 );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.pulseDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.pulseDuration));
                                        currentColor = pc.Color.lerp( startBorderColor, this.pulseColor, t );

                                        if (UnityEngine.Object.op_Implicit(this.sliderBorderImage)) {
                                            this.sliderBorderImage.color = currentColor.$clone();
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                                            this.timerBorderImage.color = currentColor.$clone();
                                            this.timerBorderImage.rectTransform.localScale = new pc.Vec3().lerp( startTimerScale, new pc.Vec3( 1, 1, 1 ).clone().scale( this.maxScaleMultiplier ), t );
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                                            this.arrowImage.color = currentColor.$clone();
                                            this.arrowImage.rectTransform.localScale = new pc.Vec3().lerp( startArrowScale, new pc.Vec3( 1, 1, 1 ).clone().scale( this.maxScaleMultiplier ), t );
                                        }

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    elapsed = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed < this.pulseDuration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t1 = Math.max(0, Math.min(1, elapsed / this.pulseDuration));
                                        currentColor1 = pc.Color.lerp( this.pulseColor, startBorderColor, t1 );

                                        if (UnityEngine.Object.op_Implicit(this.sliderBorderImage)) {
                                            this.sliderBorderImage.color = currentColor1.$clone();
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                                            this.timerBorderImage.color = currentColor1.$clone();
                                            this.timerBorderImage.rectTransform.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ).clone().scale( this.maxScaleMultiplier ), startTimerScale, t1 );
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                                            this.arrowImage.color = currentColor1.$clone();
                                            this.arrowImage.rectTransform.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ).clone().scale( this.maxScaleMultiplier ), startArrowScale, t1 );
                                        }

                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    if (UnityEngine.Object.op_Implicit(this.sliderBorderImage)) {
                                            this.sliderBorderImage.color = startBorderColor.$clone();
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                                            this.timerBorderImage.color = startTimerBorderColor.$clone();
                                            this.timerBorderImage.rectTransform.localScale = startTimerScale.$clone();
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                                            this.arrowImage.color = startArrowColor.$clone();
                                            this.arrowImage.rectTransform.localScale = startArrowScale.$clone();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TimeManager.DoPulse end.*/

            /*TimeManager.OnTimerFinished start.*/
            OnTimerFinished: function () {
if ( TRACE ) { TRACE( "TimeManager#OnTimerFinished", this ); }

                this._isRunning = false;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.timeSlider, null)) {
                    this.timeSlider.value = 0.0;
                }
                if (UnityEngine.Component.op_Inequality(this.arrowParentRectTransform, null)) {
                    this.arrowParentRectTransform.localEulerAngles = pc.Vec3.ZERO.clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.sliderFillImage, null)) {
                    this.sliderFillImage.color = this.endColor.$clone();
                }

                if (this._pulseCoroutine != null) {
                    this.StopCoroutine$2(this._pulseCoroutine);
                    this._pulseCoroutine = null;
                }

                if (this._alarmCoroutine != null) {
                    this.StopCoroutine$2(this._alarmCoroutine);
                }
                this._alarmCoroutine = this.StartCoroutine$1(this.PlayAlarmAnimation());
            },
            /*TimeManager.OnTimerFinished end.*/

            /*TimeManager.PlayAlarmAnimation start.*/
            PlayAlarmAnimation: function () {
if ( TRACE ) { TRACE( "TimeManager#PlayAlarmAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    origTimerColor,
                    origArrowColor,
                    origSliderColor,
                    scaleUpDuration,
                    elapsed,
                    t,
                    shakeX,
                    shakeY,
                    shakeRotZ,
                    actualCurrentPos,
                    actualCurrentRot,
                    alarmStartScale,
                    alarmStartColor,
                    restoreDuration,
                    t1,
                    smoothT,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    origTimerColor = UnityEngine.Object.op_Implicit(this.timerBorderImage) ? this.timerBorderImage.color.$clone() : new pc.Color( 1, 1, 1, 1 );
                                        origArrowColor = UnityEngine.Object.op_Implicit(this.arrowImage) ? this.arrowImage.color.$clone() : new pc.Color( 1, 1, 1, 1 );
                                        origSliderColor = UnityEngine.Object.op_Implicit(this.sliderBorderImage) ? this.sliderBorderImage.color.$clone() : new pc.Color( 1, 1, 1, 1 );

                                        scaleUpDuration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < scaleUpDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / scaleUpDuration));

                                        if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                                            this.timerBorderImage.rectTransform.localScale = new pc.Vec3().lerp( this._origTimerScale, this._origTimerScale.$clone().clone().scale( this.maxScaleMultiplier ), t );
                                            this.timerBorderImage.color = pc.Color.lerp( origTimerColor, this.pulseColor, t );
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                                            this.arrowImage.color = pc.Color.lerp( origArrowColor, this.pulseColor, t );
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.sliderBorderImage)) {
                                            this.sliderBorderImage.color = pc.Color.lerp( origSliderColor, this.pulseColor, t );
                                        }

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    elapsed = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed < this.alarmDuration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed += UnityEngine.Time.deltaTime;

                                        shakeX = Math.sin(elapsed * this.shakeSpeed) * this.shakeAmount;
                                        shakeY = Math.cos(elapsed * this.shakeSpeed * 0.85) * (this.shakeAmount * 0.5);

                                        shakeRotZ = Math.sin(elapsed * this.shakeSpeed * 1.2) * this.shakeRotationAmount;

                                        if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                                            this.timerBorderImage.rectTransform.localPosition = this._origTimerPos.$clone().add( new pc.Vec3( shakeX, shakeY, 0.0 ) );
                                            this.timerBorderImage.rectTransform.localEulerAngles = new pc.Vec3( this._origTimerRot.x, this._origTimerRot.y, this._origTimerRot.z + shakeRotZ );
                                            this.timerBorderImage.rectTransform.localScale = this._origTimerScale.$clone().clone().scale( this.maxScaleMultiplier );
                                            this.timerBorderImage.color = this.pulseColor.$clone();
                                        }

                                        if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                                            this.arrowImage.color = this.pulseColor.$clone();
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.sliderBorderImage)) {
                                            this.sliderBorderImage.color = this.pulseColor.$clone();
                                        }

                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(EndGame.Instance, null)) {
                                            EndGame.Instance.TriggerEndGame();

                                        }

                                        actualCurrentPos = UnityEngine.Object.op_Implicit(this.timerBorderImage) ? this.timerBorderImage.rectTransform.localPosition.$clone() : this._origTimerPos.$clone();
                                        actualCurrentRot = UnityEngine.Object.op_Implicit(this.timerBorderImage) ? this.timerBorderImage.rectTransform.localEulerAngles.$clone() : this._origTimerRot.$clone();
                                        alarmStartScale = this._origTimerScale.$clone().clone().scale( this.maxScaleMultiplier );
                                        alarmStartColor = this.pulseColor.$clone();

                                        elapsed = 0.0;
                                        restoreDuration = 0.2;
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    if ( elapsed < restoreDuration ) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t1 = Math.max(0, Math.min(1, elapsed / restoreDuration));
                                        smoothT = 1.0 - Math.pow(1.0 - t1, 3);

                                        if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                                            this.timerBorderImage.rectTransform.localPosition = new pc.Vec3().lerp( actualCurrentPos, this._origTimerPos, smoothT );
                                            this.timerBorderImage.rectTransform.localEulerAngles = new pc.Vec3().lerp( actualCurrentRot, this._origTimerRot, smoothT );
                                            this.timerBorderImage.rectTransform.localScale = new pc.Vec3().lerp( alarmStartScale, this._origTimerScale, smoothT );
                                            this.timerBorderImage.color = pc.Color.lerp( alarmStartColor, origTimerColor, smoothT );
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                                            this.arrowImage.color = pc.Color.lerp( alarmStartColor, origArrowColor, smoothT );
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.sliderBorderImage)) {
                                            this.sliderBorderImage.color = pc.Color.lerp( alarmStartColor, origSliderColor, smoothT );
                                        }

                                        $enumerator.current = null;
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    
                                        $step = 9;
                                        continue;
                                }
                                case 12: {
                                    if (UnityEngine.Object.op_Implicit(this.timerBorderImage)) {
                                            this.timerBorderImage.rectTransform.localPosition = this._origTimerPos.$clone();
                                            this.timerBorderImage.rectTransform.localEulerAngles = this._origTimerRot.$clone();
                                            this.timerBorderImage.rectTransform.localScale = this._origTimerScale.$clone();
                                            this.timerBorderImage.color = origTimerColor.$clone();
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.arrowImage)) {
                                            this.arrowImage.color = origArrowColor.$clone();
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.sliderBorderImage)) {
                                            this.sliderBorderImage.color = origSliderColor.$clone();
                                        }

                                        this._alarmCoroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TimeManager.PlayAlarmAnimation end.*/


        }
    });
    /*TimeManager end.*/

    /*TutorialManager start.*/
    Bridge.define("TutorialManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            cursorFollower: null,
            tutorialPoints: null,
            backgroundPlaneMaterial: null,
            backgroundSpriteRenderer: null,
            backgroundTimerImage: null,
            glowMaterials: null,
            tutorialCursorImage: null,
            totalDuration: 0,
            pauseDuration: 0,
            cursorOffset: null,
            cursorMoveSpeed: 0,
            backgroundFadeDuration: 0,
            glowFadeDuration: 0,
            targetAlpha: 0,
            globalCooldownDuration: 0,
            releaseCheckDelay: 0,
            IsInputBlocked: false,
            HasPlacedSuccessfully: false,
            originalSpriteColor: null,
            originalGlowColors: null,
            mainLoopCoroutine: null,
            cursorLoopCoroutine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialManager#init", this ); }

                this.cursorOffset = new UnityEngine.Vector2();
                this.originalSpriteColor = new UnityEngine.Color();
                this.totalDuration = 2.0;
                this.pauseDuration = 1.0;
                this.cursorOffset = new pc.Vec2( 60.0, -20.0 );
                this.cursorMoveSpeed = 5.0;
                this.backgroundFadeDuration = 1.0;
                this.glowFadeDuration = 0.5;
                this.targetAlpha = 0.784313738;
                this.globalCooldownDuration = 5.0;
                this.releaseCheckDelay = 0.5;
                this.IsInputBlocked = true;
                this.HasPlacedSuccessfully = false;
            }
        },
        methods: {
            /*TutorialManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TutorialManager#Awake", this ); }

                TutorialManager.Instance = this;
                this.InitializeMaterials();
                this.InitializePoints();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialCursorImage, null)) {
                    this.tutorialCursorImage.gameObject.SetActive(false);
                }
            },
            /*TutorialManager.Awake end.*/

            /*TutorialManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutorialManager#Start", this ); }

                this.mainLoopCoroutine = this.StartCoroutine$1(this.StartTutorialWithDelay());
            },
            /*TutorialManager.Start end.*/

            /*TutorialManager.StartTutorialWithDelay start.*/
            StartTutorialWithDelay: function () {
if ( TRACE ) { TRACE( "TutorialManager#StartTutorialWithDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.IsInputBlocked = true;
                                        this.cursorFollower.SetTutorialActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.TutorialMainLoop());
                                        $step = 2;
                                        return true;
                                }
                                case 2: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.StartTutorialWithDelay end.*/

            /*TutorialManager.TutorialMainLoop start.*/
            TutorialMainLoop: function () {
if ( TRACE ) { TRACE( "TutorialManager#TutorialMainLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( !this.HasPlacedSuccessfully ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 1: {
                                    this.IsInputBlocked = true;

                                        this.cursorLoopCoroutine = this.StartCoroutine$1(this.AnimateTutorialCursor());
                                        $enumerator.current = this.StartCoroutine$1(this.AnimatePointsSequence());
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.cursorFollower.SetTutorialActive(false);

                                        if (this.HasPlacedSuccessfully) {
                                            $step = 5;
                                            continue;
                                        }

                                        this.IsInputBlocked = false;

                                        $enumerator.current = this.StartCoroutine$1(this.WaitForGlobalCooldown());
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (this.HasPlacedSuccessfully) {
                                            $step = 5;
                                            continue;
                                        }

                                        $enumerator.current = this.StartCoroutine$1(this.WaitForIdleState());
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this.cursorFollower.SetTutorialActive(true);

                                        $step = 0;
                                        continue;
                                }
                                case 5: {
                                    this.IsInputBlocked = false;
                                        this.cursorFollower.SetTutorialActive(false);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialCursorImage, null)) {
                                            this.tutorialCursorImage.gameObject.SetActive(false);
                                        }

                                        if (this.cursorLoopCoroutine != null) {
                                            this.StopCoroutine$2(this.cursorLoopCoroutine);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.TutorialMainLoop end.*/

            /*TutorialManager.WaitForGlobalCooldown start.*/
            WaitForGlobalCooldown: function () {
if ( TRACE ) { TRACE( "TutorialManager#WaitForGlobalCooldown", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.globalCooldownDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 2: {
                                    if (this.HasPlacedSuccessfully) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    timer += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.WaitForGlobalCooldown end.*/

            /*TutorialManager.WaitForIdleState start.*/
            WaitForIdleState: function () {
if ( TRACE ) { TRACE( "TutorialManager#WaitForIdleState", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    idleTimer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    idleTimer = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( idleTimer < this.releaseCheckDelay ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 2: {
                                    if (this.HasPlacedSuccessfully) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    if (DragAndDrop.IsDraggingAny) {
                                            idleTimer = 0.0;
                                        } else {
                                            idleTimer += UnityEngine.Time.deltaTime;
                                        }

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.WaitForIdleState end.*/

            /*TutorialManager.OnHexagonPlacedSuccessfully start.*/
            OnHexagonPlacedSuccessfully: function () {
if ( TRACE ) { TRACE( "TutorialManager#OnHexagonPlacedSuccessfully", this ); }

                if (!this.HasPlacedSuccessfully) {
                    TimeManager.Instance.StartGame();
                } else {
                    return;
                }

                this.HasPlacedSuccessfully = true;
                this.IsInputBlocked = false;
                this.cursorFollower.SetTutorialActive(false);

                if (this.mainLoopCoroutine != null) {
                    this.StopCoroutine$2(this.mainLoopCoroutine);
                    this.mainLoopCoroutine = null;
                }

                if (this.cursorLoopCoroutine != null) {
                    this.StopCoroutine$2(this.cursorLoopCoroutine);
                    this.cursorLoopCoroutine = null;
                }

                this.ResetVisualsToZero();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.tutorialCursorImage, null)) {
                    this.tutorialCursorImage.gameObject.SetActive(false);
                }
            },
            /*TutorialManager.OnHexagonPlacedSuccessfully end.*/

            /*TutorialManager.InitializeMaterials start.*/
            InitializeMaterials: function () {
if ( TRACE ) { TRACE( "TutorialManager#InitializeMaterials", this ); }

                if (this.backgroundPlaneMaterial != null) {
                    this.SetMaterialAlpha(this.backgroundPlaneMaterial, "_TintColor", 0.0);
                }

                if (UnityEngine.Component.op_Inequality(this.backgroundSpriteRenderer, null)) {
                    this.originalSpriteColor = this.backgroundSpriteRenderer.color.$clone();
                    var c = this.originalSpriteColor.$clone();
                    c.a = 0.0;
                    this.backgroundSpriteRenderer.color = c.$clone();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.backgroundTimerImage, null)) {
                    var c1 = this.backgroundTimerImage.color.$clone();
                    c1.a = 0.0;
                    this.backgroundTimerImage.color = c1.$clone();
                }

                if (this.glowMaterials != null && this.glowMaterials.length > 0) {
                    this.originalGlowColors = System.Array.init(this.glowMaterials.length, function (){
                        return new UnityEngine.Color();
                    }, UnityEngine.Color);
                    for (var i = 0; i < this.glowMaterials.length; i = (i + 1) | 0) {
                        if (this.glowMaterials[i] != null) {
                            this.originalGlowColors[i] = this.glowMaterials[i].color.$clone();
                            var c2 = this.originalGlowColors[i].$clone();
                            c2.a = 0.0;
                            this.glowMaterials[i].color = c2.$clone();
                        }
                    }
                }
            },
            /*TutorialManager.InitializeMaterials end.*/

            /*TutorialManager.ResetVisualsToZero start.*/
            ResetVisualsToZero: function () {
if ( TRACE ) { TRACE( "TutorialManager#ResetVisualsToZero", this ); }

                var $t, $t1;
                if (this.backgroundPlaneMaterial != null) {
                    this.SetMaterialAlpha(this.backgroundPlaneMaterial, "_TintColor", 0.0);
                }

                if (UnityEngine.Component.op_Inequality(this.backgroundSpriteRenderer, null)) {
                    var c = this.backgroundSpriteRenderer.color.$clone();
                    c.a = 0.0;
                    this.backgroundSpriteRenderer.color = c.$clone();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.backgroundTimerImage, null)) {
                    var c1 = this.backgroundTimerImage.color.$clone();
                    c1.a = 0.0;
                    this.backgroundTimerImage.color = c1.$clone();
                }

                if (this.glowMaterials != null) {
                    $t = Bridge.getEnumerator(this.glowMaterials);
                    try {
                        while ($t.moveNext()) {
                            var m = $t.Current;
                            if (m != null) {
                                var c2 = m.color.$clone();
                                c2.a = 0.0;
                                m.color = c2.$clone();
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                if (this.tutorialPoints != null) {
                    $t1 = Bridge.getEnumerator(this.tutorialPoints);
                    try {
                        while ($t1.moveNext()) {
                            var p = $t1.Current;
                            if (UnityEngine.GameObject.op_Inequality(p, null)) {
                                p.SetActive(false);
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*TutorialManager.ResetVisualsToZero end.*/

            /*TutorialManager.InitializePoints start.*/
            InitializePoints: function () {
if ( TRACE ) { TRACE( "TutorialManager#InitializePoints", this ); }

                var $t;
                if (this.tutorialPoints == null) {
                    return;
                }
                $t = Bridge.getEnumerator(this.tutorialPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(point, null)) {
                            point.SetActive(false);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TutorialManager.InitializePoints end.*/

            /*TutorialManager.StartTutorialAnimation start.*/
            StartTutorialAnimation: function () {
if ( TRACE ) { TRACE( "TutorialManager#StartTutorialAnimation", this ); }

                this.StartCoroutine$1(this.AnimatePointsSequence());
            },
            /*TutorialManager.StartTutorialAnimation end.*/

            /*TutorialManager.AnimateTutorialCursor start.*/
            AnimateTutorialCursor: function () {
if ( TRACE ) { TRACE( "TutorialManager#AnimateTutorialCursor", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    cycles,
                    path,
                    $t,
                    point,
                    rect,
                    startPos,
                    i,
                    targetPos,
                    journeyLength,
                    startTime,
                    segmentDuration,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.tutorialPoints == null || this.tutorialPoints.length === 0 || UnityEngine.MonoBehaviour.op_Equality(this.tutorialCursorImage, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    cycles = 0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( cycles < 2 && !this.HasPlacedSuccessfully ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 24;
                                        continue;
                                }
                                case 4: {
                                    path = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                                        $t = Bridge.getEnumerator(this.tutorialPoints);
                                        try {
                                            while ($t.moveNext()) {
                                                point = $t.Current;
                                                if (UnityEngine.GameObject.op_Inequality(point, null)) {
                                                    rect = point.GetComponent(UnityEngine.RectTransform);
                                                    if (UnityEngine.Component.op_Inequality(rect, null)) {
                                                        path.add(rect.anchoredPosition.$clone().add( this.cursorOffset ));
                                                    }
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        if (path.Count === 0) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 5: {
                                    return false;
                                }
                                case 6: {
                                    $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return (UnityEngine.GameObject.op_Inequality(this.tutorialPoints[0], null) && this.tutorialPoints[0].activeSelf) || this.HasPlacedSuccessfully;
                                        }));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    if (this.HasPlacedSuccessfully) {
                                            $step = 8;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 8: {
                                    return false;
                                }
                                case 9: {
                                    this.tutorialCursorImage.gameObject.SetActive(true);
                                        this.tutorialCursorImage.rectTransform.anchoredPosition = path.getItem(0).$clone();

                                        startPos = path.getItem(0).$clone();

                                        i = 1;
                                        $step = 10;
                                        continue;
                                }
                                case 10: {
                                    if ( i < path.Count ) {
                                            $step = 11;
                                            continue;
                                        }
                                    $step = 20;
                                    continue;
                                }
                                case 11: {
                                    targetPos = path.getItem(i).$clone();

                                        journeyLength = startPos.$clone().sub( targetPos ).length();
                                        startTime = UnityEngine.Time.time;

                                        segmentDuration = journeyLength / this.cursorMoveSpeed;

                                        if (segmentDuration > 0.001) {
                                            $step = 12;
                                            continue;
                                        } 
                                        $step = 16;
                                        continue;
                                }
                                case 12: {
                                    if ( UnityEngine.Time.time - startTime < segmentDuration && !this.HasPlacedSuccessfully ) {
                                            $step = 13;
                                            continue;
                                        } 
                                        $step = 15;
                                        continue;
                                }
                                case 13: {
                                    t = (UnityEngine.Time.time - startTime) / segmentDuration;
                                        this.tutorialCursorImage.rectTransform.anchoredPosition = new pc.Vec2().lerp( startPos, targetPos, t );
                                        $enumerator.current = null;
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    
                                        $step = 12;
                                        continue;
                                }
                                case 15: {
                                    $step = 16;
                                    continue;
                                }
                                case 16: {
                                    this.tutorialCursorImage.rectTransform.anchoredPosition = targetPos.$clone();
                                        startPos = targetPos.$clone();

                                        if (this.HasPlacedSuccessfully) {
                                            $step = 17;
                                            continue;
                                        } 
                                        $step = 18;
                                        continue;
                                }
                                case 17: {
                                    return false;
                                }
                                case 18: {
                                    $step = 19;
                                    continue;
                                }
                                case 19: {
                                    i = (i + 1) | 0;
                                    $step = 10;
                                    continue;
                                }
                                case 20: {
                                    if (this.HasPlacedSuccessfully) {
                                            $step = 21;
                                            continue;
                                        } 
                                        $step = 22;
                                        continue;
                                }
                                case 21: {
                                    return false;
                                }
                                case 22: {
                                    $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return (UnityEngine.GameObject.op_Inequality(this.tutorialPoints[0], null) && !this.tutorialPoints[0].activeSelf) || this.HasPlacedSuccessfully;
                                        }));
                                        $step = 23;
                                        return true;
                                }
                                case 23: {
                                    if (!this.HasPlacedSuccessfully) {
                                            this.tutorialCursorImage.gameObject.SetActive(false);
                                        }

                                        cycles = (cycles + 1) | 0;

                                        $step = 3;
                                        continue;
                                }
                                case 24: {
                                    this.tutorialCursorImage.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.AnimateTutorialCursor end.*/

            /*TutorialManager.AnimatePointsSequence start.*/
            AnimatePointsSequence: function () {
if ( TRACE ) { TRACE( "TutorialManager#AnimatePointsSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    delayPerItem,
                    cycles,
                    i,
                    $t,
                    item,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.tutorialPoints == null || this.tutorialPoints.length === 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.FadeBackgrounds(true));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.FadeGlows(true));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    delayPerItem = this.totalDuration / this.tutorialPoints.length;
                                        cycles = 0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( cycles < 2 && !this.HasPlacedSuccessfully ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 18;
                                        continue;
                                }
                                case 6: {
                                    i = 0;
                                        $step = 7;
                                        continue;
                                }
                                case 7: {
                                    if ( i < this.tutorialPoints.length ) {
                                            $step = 8;
                                            continue;
                                        }
                                    $step = 13;
                                    continue;
                                }
                                case 8: {
                                    if (UnityEngine.GameObject.op_Inequality(this.tutorialPoints[i], null)) {
                                            this.tutorialPoints[i].SetActive(true);
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(delayPerItem);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    if (this.HasPlacedSuccessfully) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 10: {
                                    return false;
                                }
                                case 11: {
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
                                    i = (i + 1) | 0;
                                    $step = 7;
                                    continue;
                                }
                                case 13: {
                                    if (this.HasPlacedSuccessfully) {
                                            $step = 14;
                                            continue;
                                        } 
                                        $step = 15;
                                        continue;
                                }
                                case 14: {
                                    return false;
                                }
                                case 15: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseDuration);
                                        $step = 16;
                                        return true;
                                }
                                case 16: {
                                    $t = Bridge.getEnumerator(this.tutorialPoints);
                                        try {
                                            while ($t.moveNext()) {
                                                item = $t.Current;
                                                if (UnityEngine.GameObject.op_Inequality(item, null)) {
                                                    item.SetActive(false);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 17;
                                        return true;
                                }
                                case 17: {
                                    cycles = (cycles + 1) | 0;

                                        $step = 5;
                                        continue;
                                }
                                case 18: {
                                    if (!this.HasPlacedSuccessfully) {
                                            $step = 19;
                                            continue;
                                        } 
                                        $step = 22;
                                        continue;
                                }
                                case 19: {
                                    $enumerator.current = this.StartCoroutine$1(this.FadeGlows(false));
                                        $step = 20;
                                        return true;
                                }
                                case 20: {
                                    $enumerator.current = this.StartCoroutine$1(this.FadeBackgrounds(false));
                                        $step = 21;
                                        return true;
                                }
                                case 21: {
                                    $step = 22;
                                    continue;
                                }
                                case 22: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.AnimatePointsSequence end.*/

            /*TutorialManager.FadeBackgrounds start.*/
            FadeBackgrounds: function (fadeIn) {
if ( TRACE ) { TRACE( "TutorialManager#FadeBackgrounds", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    startPlaneColor,
                    targetPlaneColor,
                    startSpriteColor,
                    targetSpriteColor,
                    startTimerColor,
                    targetTimerColor,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;

                                        startPlaneColor = this.backgroundPlaneMaterial != null ? this.backgroundPlaneMaterial.GetColor$1("_TintColor") : new pc.Color( 0, 0, 0, 0 );
                                        targetPlaneColor = startPlaneColor.$clone();
                                        targetPlaneColor.a = fadeIn ? this.targetAlpha : 0.0;

                                        startSpriteColor = UnityEngine.Component.op_Inequality(this.backgroundSpriteRenderer, null) ? this.backgroundSpriteRenderer.color.$clone() : new pc.Color( 0, 0, 0, 0 );
                                        targetSpriteColor = startSpriteColor.$clone();
                                        targetSpriteColor.a = fadeIn ? this.targetAlpha : 0.0;

                                        startTimerColor = UnityEngine.MonoBehaviour.op_Inequality(this.backgroundTimerImage, null) ? this.backgroundTimerImage.color.$clone() : new pc.Color( 0, 0, 0, 0 );
                                        targetTimerColor = startTimerColor.$clone();
                                        targetTimerColor.a = fadeIn ? this.targetAlpha : 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.backgroundFadeDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.backgroundFadeDuration));

                                        if (this.backgroundPlaneMaterial != null) {
                                            this.backgroundPlaneMaterial.SetColor$1("_TintColor", pc.Color.lerp( startPlaneColor, targetPlaneColor, t ));
                                        }

                                        if (UnityEngine.Component.op_Inequality(this.backgroundSpriteRenderer, null)) {
                                            this.backgroundSpriteRenderer.color = pc.Color.lerp( startSpriteColor, targetSpriteColor, t );
                                        }

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.backgroundTimerImage, null)) {
                                            this.backgroundTimerImage.color = pc.Color.lerp( startTimerColor, targetTimerColor, t );
                                        }

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (this.backgroundPlaneMaterial != null) {
                                            this.backgroundPlaneMaterial.SetColor$1("_TintColor", targetPlaneColor);
                                        }

                                        if (UnityEngine.Component.op_Inequality(this.backgroundSpriteRenderer, null)) {
                                            this.backgroundSpriteRenderer.color = targetSpriteColor.$clone();
                                        }

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.backgroundTimerImage, null)) {
                                            this.backgroundTimerImage.color = targetTimerColor.$clone();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.FadeBackgrounds end.*/

            /*TutorialManager.FadeGlows start.*/
            FadeGlows: function (fadeIn) {
if ( TRACE ) { TRACE( "TutorialManager#FadeGlows", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    startColors,
                    targetColors,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.glowMaterials == null || this.glowMaterials.length === 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    elapsed = 0.0;
                                        startColors = System.Array.init(this.glowMaterials.length, function (){
                                            return new UnityEngine.Color();
                                        }, UnityEngine.Color);
                                        targetColors = System.Array.init(this.glowMaterials.length, function (){
                                            return new UnityEngine.Color();
                                        }, UnityEngine.Color);

                                        for (var i = 0; i < this.glowMaterials.length; i = (i + 1) | 0) {
                                            if (this.glowMaterials[i] != null) {
                                                startColors[i] = this.glowMaterials[i].color.$clone();
                                                targetColors[i] = startColors[i].$clone();
                                                targetColors[i].a = fadeIn ? this.targetAlpha : 0.0;
                                            }
                                        }
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsed < this.glowFadeDuration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.glowFadeDuration));
                                        for (var i1 = 0; i1 < this.glowMaterials.length; i1 = (i1 + 1) | 0) {
                                            if (this.glowMaterials[i1] != null) {
                                                this.glowMaterials[i1].color = pc.Color.lerp( startColors[i1], targetColors[i1], t );
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    for (var i2 = 0; i2 < this.glowMaterials.length; i2 = (i2 + 1) | 0) {
                                            if (this.glowMaterials[i2] != null) {
                                                this.glowMaterials[i2].color = targetColors[i2].$clone();
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.FadeGlows end.*/

            /*TutorialManager.SetMaterialAlpha start.*/
            SetMaterialAlpha: function (mat, propName, alpha) {
if ( TRACE ) { TRACE( "TutorialManager#SetMaterialAlpha", this ); }

                if (mat == null) {
                    return;
                }
                var c = mat.GetColor$1(propName);
                c.a = alpha;
                mat.SetColor$1(propName, c);
            },
            /*TutorialManager.SetMaterialAlpha end.*/


        }
    });
    /*TutorialManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","System.Collections.Generic","UnityEngine.UI"];

    /*Hexagon start.*/
    $m("Hexagon", function () { return {"nested":[Hexagon.HexagonColor,Hexagon.ColorMaterialPair],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetColor","t":8,"sn":"GetColor","rt":Hexagon.HexagonColor,"box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"IdentifyColorByMaterial","t":8,"sn":"IdentifyColorByMaterial","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"color","pt":Hexagon.HexagonColor,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Hexagon.HexagonColor]},{"a":2,"n":"IsInitialized","t":8,"sn":"IsInitialized","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"JumpCoroutine","t":8,"pi":[{"n":"targetPosition","pt":$n[1].Vector3,"ps":0},{"n":"targetRotation","pt":$n[1].Quaternion,"ps":1},{"n":"onComplete","pt":Function,"ps":2},{"n":"speedMultiplier","pt":$n[0].Single,"ps":3}],"sn":"JumpCoroutine","rt":$n[2].IEnumerator,"p":[$n[1].Vector3,$n[1].Quaternion,Function,$n[0].Single]},{"a":2,"n":"PlayJumpAnimation","t":8,"pi":[{"n":"targetPosition","pt":$n[1].Vector3,"ps":0},{"n":"targetRotation","pt":$n[1].Quaternion,"ps":1},{"n":"onComplete","dv":null,"o":true,"pt":Function,"ps":2},{"n":"speedMultiplier","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"PlayJumpAnimation","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Quaternion,Function,$n[0].Single]},{"a":2,"n":"PlayRemoveAnimation","t":8,"pi":[{"n":"onComplete","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"PlayRemoveAnimation","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"RemoveCoroutine","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"RemoveCoroutine","rt":$n[2].IEnumerator,"p":[Function]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"anchors","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"anchors"},{"a":2,"n":"colorMaterials","t":4,"rt":System.Array.type(Hexagon.ColorMaterialPair),"sn":"colorMaterials"},{"a":1,"n":"currentColor","t":4,"rt":Hexagon.HexagonColor,"sn":"currentColor","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexRenderer","t":4,"rt":$n[1].Renderer,"sn":"hexRenderer"},{"a":1,"n":"isInitialized","t":4,"rt":$n[0].Boolean,"sn":"isInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpCurve","t":4,"rt":pc.AnimationCurve,"sn":"jumpCurve"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpDuration","t":4,"rt":$n[0].Single,"sn":"jumpDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpHeight","t":4,"rt":$n[0].Single,"sn":"jumpHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"removeCurve","t":4,"rt":pc.AnimationCurve,"sn":"removeCurve"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"removeScaleDuration","t":4,"rt":$n[0].Single,"sn":"removeScaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Hexagon end.*/

    /*Hexagon+HexagonColor start.*/
    $m("Hexagon.HexagonColor", function () { return {"td":Hexagon,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Blue","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Cyan","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Cyan","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Green","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Green","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Purple","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Purple","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Red","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Red","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"White","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"White","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Yellow","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}}]}; }, $n);
    /*Hexagon+HexagonColor end.*/

    /*Hexagon+ColorMaterialPair start.*/
    $m("Hexagon.ColorMaterialPair", function () { return {"td":Hexagon,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":Hexagon.HexagonColor,"sn":"color","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"material","t":4,"rt":$n[1].Material,"sn":"material"},{"a":2,"n":"particleGradient","t":4,"rt":pc.ColorGradient,"sn":"particleGradient"}]}; }, $n);
    /*Hexagon+ColorMaterialPair end.*/

    /*GroundPlatform start.*/
    $m("GroundPlatform", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateScale","t":8,"pi":[{"n":"fromZ","pt":$n[0].Single,"ps":0},{"n":"toZ","pt":$n[0].Single,"ps":1}],"sn":"AnimateScale","rt":$n[2].IEnumerator,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CheckAndClearMatch","t":8,"pi":[{"n":"matchThreshold","pt":$n[0].Int32,"ps":0}],"sn":"CheckAndClearMatch","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ClearHexagonsSequentially","t":8,"pi":[{"n":"hexesToRemove","pt":$n[3].List$1(Hexagon),"ps":0}],"sn":"ClearHexagonsSequentially","rt":$n[0].Void,"p":[$n[3].List$1(Hexagon)]},{"at":[new UnityEngine.ContextMenu.ctor("Debug Board State")],"a":2,"n":"DebugLogBoardState","t":8,"sn":"DebugLogBoardState","rt":$n[0].Void},{"a":2,"n":"ForceInitializeColorsInContainer","t":8,"pi":[{"n":"container","pt":$n[1].GameObject,"ps":0}],"sn":"ForceInitializeColorsInContainer","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"GetActiveNeighbors","t":8,"sn":"GetActiveNeighbors","rt":$n[3].IEnumerable$1(GroundPlatform)},{"a":2,"n":"GetBlockCount","t":8,"sn":"GetBlockCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetBlocksToTransfer","t":8,"pi":[{"n":"container","pt":$n[1].GameObject,"ps":0},{"n":"targetColor","pt":Hexagon.HexagonColor,"ps":1}],"sn":"GetBlocksToTransfer","rt":$n[3].List$1(Hexagon),"p":[$n[1].GameObject,Hexagon.HexagonColor]},{"a":2,"n":"GetColorCount","t":8,"pi":[{"n":"color","pt":Hexagon.HexagonColor,"ps":0}],"sn":"GetColorCount","rt":$n[0].Int32,"p":[Hexagon.HexagonColor],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetTopContinuousBlocks","t":8,"pi":[{"n":"color","pt":Hexagon.HexagonColor,"ps":0}],"sn":"GetTopContinuousBlocks","rt":$n[3].List$1(Hexagon),"p":[Hexagon.HexagonColor]},{"a":2,"n":"GetTopHexagon","t":8,"pi":[{"n":"container","pt":$n[1].GameObject,"ps":0}],"sn":"GetTopHexagon","rt":Hexagon,"p":[$n[1].GameObject]},{"a":2,"n":"InitializeColorsInContainer","t":8,"pi":[{"n":"container","pt":$n[1].GameObject,"ps":0}],"sn":"InitializeColorsInContainer","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"IsAvailable","t":8,"sn":"IsAvailable","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"PlayFinalRemoveEffect","t":8,"pi":[{"n":"sourceHex","pt":Hexagon,"ps":0}],"sn":"PlayFinalRemoveEffect","rt":$n[2].IEnumerator,"p":[Hexagon]},{"a":1,"n":"PlayRemoveAnimation","t":8,"pi":[{"n":"hex","pt":Hexagon,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"PlayRemoveAnimation","rt":$n[2].IEnumerator,"p":[Hexagon,$n[0].Single]},{"a":1,"n":"PlaySequentialJump","t":8,"pi":[{"n":"hex","pt":Hexagon,"ps":0},{"n":"worldTargetPos","pt":$n[1].Vector3,"ps":1},{"n":"localTargetPos","pt":$n[1].Vector3,"ps":2},{"n":"delay","pt":$n[0].Single,"ps":3},{"n":"onJumpFinished","pt":Function,"ps":4},{"n":"speedMultiplier","dv":1.0,"o":true,"pt":$n[0].Single,"ps":5}],"sn":"PlaySequentialJump","rt":$n[2].IEnumerator,"p":[Hexagon,$n[1].Vector3,$n[1].Vector3,$n[0].Single,Function,$n[0].Single]},{"a":2,"n":"RemoveGlow","t":8,"sn":"RemoveGlow","rt":$n[0].Void},{"a":1,"n":"ScanForNeighborsAtStart","t":8,"sn":"ScanForNeighborsAtStart","rt":$n[0].Void},{"a":2,"n":"SetGlow","t":8,"sn":"SetGlow","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartTransferAnimation","t":8,"pi":[{"n":"targetPlatform","pt":GroundPlatform,"ps":0},{"n":"blocksToMove","pt":$n[3].List$1(Hexagon),"ps":1},{"n":"onComplete","pt":Function,"ps":2},{"n":"speedMultiplier","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"StartTransferAnimation","rt":$n[0].Void,"p":[GroundPlatform,$n[3].List$1(Hexagon),Function,$n[0].Single]},{"a":2,"n":"Container","t":4,"rt":$n[1].GameObject,"sn":"Container"},{"a":1,"n":"HeightStep","is":true,"t":4,"rt":$n[0].Single,"sn":"HeightStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"activeNeighbors","t":4,"rt":$n[3].HashSet$1(GroundPlatform),"sn":"activeNeighbors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowMaterial","t":4,"rt":$n[1].Material,"sn":"glowMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"neighborPlatforms","t":4,"rt":System.Array.type(GroundPlatform),"sn":"neighborPlatforms"},{"a":1,"n":"originalMaterial","t":4,"rt":$n[1].Material,"sn":"originalMaterial"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"pendingRemovalsOnThisPlatform","t":4,"rt":$n[0].Int32,"sn":"pendingRemovalsOnThisPlatform","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"platformRenderer","t":4,"rt":$n[1].Renderer,"sn":"platformRenderer"},{"a":2,"n":"removeParticle","t":4,"rt":$n[1].ParticleSystem,"sn":"removeParticle"},{"a":1,"n":"scaleCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"scaleCoroutine"}]}; }, $n);
    /*GroundPlatform end.*/

    /*PlatformManager start.*/
    $m("PlatformManager", function () { return {"nested":[PlatformManager.MoveDecision],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DecrementPendingRemovals","t":8,"sn":"DecrementPendingRemovals","rt":$n[0].Void},{"a":1,"n":"EvaluateFutureMatchPotential","t":8,"pi":[{"n":"source","pt":GroundPlatform,"ps":0},{"n":"target","pt":GroundPlatform,"ps":1},{"n":"movedColor","pt":Hexagon.HexagonColor,"ps":2},{"n":"blocksCount","pt":$n[0].Int32,"ps":3}],"sn":"EvaluateFutureMatchPotential","rt":$n[0].Single,"p":[GroundPlatform,GroundPlatform,Hexagon.HexagonColor,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"EvaluateMoveGlobal","t":8,"pi":[{"n":"source","pt":GroundPlatform,"ps":0},{"n":"target","pt":GroundPlatform,"ps":1},{"n":"color","pt":Hexagon.HexagonColor,"ps":2},{"n":"blocksCount","pt":$n[0].Int32,"ps":3},{"n":"recentlyMoved","pt":$n[3].HashSet$1(GroundPlatform),"ps":4},{"n":"priorityPlatform","pt":GroundPlatform,"ps":5}],"sn":"EvaluateMoveGlobal","rt":$n[0].Single,"p":[GroundPlatform,GroundPlatform,Hexagon.HexagonColor,$n[0].Int32,$n[3].HashSet$1(GroundPlatform),GroundPlatform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"EvaluateNeighborChainPotential","t":8,"pi":[{"n":"platform","pt":GroundPlatform,"ps":0},{"n":"movedColor","pt":Hexagon.HexagonColor,"ps":1},{"n":"exclude","pt":GroundPlatform,"ps":2}],"sn":"EvaluateNeighborChainPotential","rt":$n[0].Single,"p":[GroundPlatform,Hexagon.HexagonColor,GroundPlatform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"FindBestGlobalMove","t":8,"pi":[{"n":"recentlyMoved","pt":$n[3].HashSet$1(GroundPlatform),"ps":0},{"n":"priorityPlatform","pt":GroundPlatform,"ps":1}],"sn":"FindBestGlobalMove","rt":PlatformManager.MoveDecision,"p":[$n[3].HashSet$1(GroundPlatform),GroundPlatform]},{"a":1,"n":"GetNextHexagonAfterTransfer","t":8,"pi":[{"n":"platform","pt":GroundPlatform,"ps":0},{"n":"removedColor","pt":Hexagon.HexagonColor,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"GetNextHexagonAfterTransfer","rt":Hexagon,"p":[GroundPlatform,Hexagon.HexagonColor,$n[0].Int32]},{"a":1,"n":"GetUnderHexagon","t":8,"pi":[{"n":"platform","pt":GroundPlatform,"ps":0}],"sn":"GetUnderHexagon","rt":Hexagon,"p":[GroundPlatform]},{"a":2,"n":"IncrementPendingRemovals","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"IncrementPendingRemovals","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ProcessChainReactionGlobal","t":8,"pi":[{"n":"starter","pt":GroundPlatform,"ps":0}],"sn":"ProcessChainReactionGlobal","rt":$n[2].IEnumerator,"p":[GroundPlatform]},{"a":2,"n":"StartChainReaction","t":8,"pi":[{"n":"starter","pt":GroundPlatform,"ps":0}],"sn":"StartChainReaction","rt":$n[0].Void,"p":[GroundPlatform]},{"a":1,"n":"SyncAllPlatformsColors","t":8,"sn":"SyncAllPlatformsColors","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":PlatformManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":PlatformManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[PlatformManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"IsBusy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBusy","t":8,"rt":$n[0].Boolean,"fg":"IsBusy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsBusy"},{"a":2,"n":"GroundPlatforms","t":4,"rt":System.Array.type(GroundPlatform),"sn":"GroundPlatforms"},{"a":1,"n":"MaxIterations","is":true,"t":4,"rt":$n[0].Int32,"sn":"MaxIterations","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_pendingRemovals","t":4,"rt":$n[0].Int32,"sn":"_pendingRemovals","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cursorFollower","t":4,"rt":CursorFollower,"sn":"cursorFollower"},{"a":1,"n":"isChainReactionActive","t":4,"rt":$n[0].Boolean,"sn":"isChainReactionActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"matchCountThreshold","t":4,"rt":$n[0].Int32,"sn":"matchCountThreshold","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"weightChainContinuation","t":4,"rt":$n[0].Single,"sn":"weightChainContinuation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"weightEmptyUnderneathPreference","t":4,"rt":$n[0].Single,"sn":"weightEmptyUnderneathPreference","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"weightFutureMatchPotential","t":4,"rt":$n[0].Single,"sn":"weightFutureMatchPotential","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"weightGlobalOpportunity","t":4,"rt":$n[0].Single,"sn":"weightGlobalOpportunity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("AI Weights"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"weightMatchCreation","t":4,"rt":$n[0].Single,"sn":"weightMatchCreation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"weightNeighborChainPotential","t":4,"rt":$n[0].Single,"sn":"weightNeighborChainPotential","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"weightUnderColorMatch","t":4,"rt":$n[0].Single,"sn":"weightUnderColorMatch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":PlatformManager,"sn":"Instance"}]}; }, $n);
    /*PlatformManager end.*/

    /*PlatformManager+MoveDecision start.*/
    $m("PlatformManager.MoveDecision", function () { return {"td":PlatformManager,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BlocksToMove","t":4,"rt":$n[3].List$1(Hexagon),"sn":"BlocksToMove"},{"a":2,"n":"Color","t":4,"rt":Hexagon.HexagonColor,"sn":"Color","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"IsValid","t":4,"rt":$n[0].Boolean,"sn":"IsValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Score","t":4,"rt":$n[0].Single,"sn":"Score","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Source","t":4,"rt":GroundPlatform,"sn":"Source"},{"a":2,"n":"Target","t":4,"rt":GroundPlatform,"sn":"Target"}]}; }, $n);
    /*PlatformManager+MoveDecision end.*/

    /*DragAndDrop start.*/
    $m("DragAndDrop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":1,"n":"PlayUnavailableAnimation","t":8,"sn":"PlayUnavailableAnimation","rt":$n[2].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"IsDraggingAny","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDraggingAny","t":8,"rt":$n[0].Boolean,"fg":"IsDraggingAny","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsDraggingAny","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsDraggingAny","is":true},"fn":"IsDraggingAny"},{"a":1,"n":"__Property__Initializer__IsDraggingAny","is":true,"t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__IsDraggingAny","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clampMaxY","t":4,"rt":$n[0].Single,"sn":"clampMaxY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clampMinY","t":4,"rt":$n[0].Single,"sn":"clampMinY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Cursor"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cursorFollower","t":4,"rt":CursorFollower,"sn":"cursorFollower"},{"a":1,"n":"isAnimating","t":4,"rt":$n[0].Boolean,"sn":"isAnimating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftSpeed","t":4,"rt":$n[0].Single,"sn":"liftSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"a":1,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"at":[new UnityEngine.HeaderAttribute("Unavailable Animation"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeAmount","t":4,"rt":$n[0].Single,"sn":"shakeAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeDuration","t":4,"rt":$n[0].Single,"sn":"shakeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeSteps","t":4,"rt":$n[0].Int32,"sn":"shakeSteps","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothLiftCurve","t":4,"rt":pc.AnimationCurve,"sn":"smoothLiftCurve"},{"a":1,"n":"stackComponent","t":4,"rt":Stack,"sn":"stackComponent"},{"a":1,"backing":true,"n":"<IsDraggingAny>k__BackingField","is":true,"t":4,"rt":$n[0].Boolean,"sn":"IsDraggingAny","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DragAndDrop end.*/

    /*FillStack start.*/
    $m("FillStack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GenerateBlocks","t":8,"sn":"GenerateBlocks","rt":$n[0].Void},{"a":1,"n":"GetExistingColorsFromField","t":8,"sn":"GetExistingColorsFromField","rt":$n[3].List$1(Hexagon.HexagonColor)},{"a":1,"n":"GetRandomColor","t":8,"sn":"GetRandomColor","rt":Hexagon.HexagonColor,"box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":1,"n":"GetSmartRandomColor","t":8,"sn":"GetSmartRandomColor","rt":Hexagon.HexagonColor,"box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":1,"n":"HeightStep","is":true,"t":4,"rt":$n[0].Single,"sn":"HeightStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexagonPrefab","t":4,"rt":$n[1].GameObject,"sn":"hexagonPrefab"}]}; }, $n);
    /*FillStack end.*/

    /*Stack start.*/
    $m("Stack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CheckHover","t":8,"sn":"CheckHover","rt":$n[0].Void},{"a":1,"n":"DebugRaycast","t":8,"sn":"DebugRaycast","rt":$n[0].Void},{"a":2,"n":"Drop","t":8,"sn":"Drop","rt":$n[0].Void},{"a":1,"n":"MoveChildrenToContainer","t":8,"pi":[{"n":"targetContainer","pt":$n[1].GameObject,"ps":0}],"sn":"MoveChildrenToContainer","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"MoveToContainerAndTransfer","t":8,"pi":[{"n":"targetPlatform","pt":GroundPlatform,"ps":0},{"n":"targetContainer","pt":$n[1].GameObject,"ps":1}],"sn":"MoveToContainerAndTransfer","rt":$n[2].IEnumerator,"p":[GroundPlatform,$n[1].GameObject]},{"a":1,"n":"NotifyManagerIfEmpty","t":8,"sn":"NotifyManagerIfEmpty","rt":$n[0].Void},{"a":1,"n":"ReturnAndRefill","t":8,"sn":"ReturnAndRefill","rt":$n[2].IEnumerator},{"a":2,"n":"SetDisabled","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SetDisabled","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SmoothReturnToOriginal","t":8,"sn":"SmoothReturnToOriginal","rt":$n[2].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"IsDisabled","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDisabled","t":8,"rt":$n[0].Boolean,"fg":"IsDisabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDisabled"},{"a":1,"n":"PlatformOffsetY","is":true,"t":4,"rt":$n[0].Single,"sn":"PlatformOffsetY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentHoveredPlatform","t":4,"rt":GroundPlatform,"sn":"currentHoveredPlatform"},{"a":2,"n":"disabled","t":4,"rt":$n[0].Boolean,"sn":"disabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"moveCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"moveCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveCurve","t":4,"rt":pc.AnimationCurve,"sn":"moveCurve"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rayLength","t":4,"rt":$n[0].Single,"sn":"rayLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackManager","t":4,"rt":StackManager,"sn":"stackManager"}]}; }, $n);
    /*Stack end.*/

    /*StackManager start.*/
    $m("StackManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AreAllStacksEmpty","t":8,"sn":"AreAllStacksEmpty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HandleRefill","t":8,"sn":"HandleRefill","rt":$n[0].Void},{"a":2,"n":"OnStackEmptied","t":8,"pi":[{"n":"stack","pt":Stack,"ps":0}],"sn":"OnStackEmptied","rt":$n[0].Void,"p":[Stack]},{"a":1,"n":"RefillAllStacks","t":8,"sn":"RefillAllStacks","rt":$n[0].Void},{"a":1,"n":"WaitForChainReactionAndRefill","t":8,"sn":"WaitForChainReactionAndRefill","rt":$n[2].IEnumerator},{"a":2,"n":"Instance","is":true,"t":16,"rt":StackManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":StackManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[StackManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"isRefilling","t":4,"rt":$n[0].Boolean,"sn":"isRefilling","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stacks","t":4,"rt":$n[3].List$1(Stack),"sn":"stacks"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":StackManager,"sn":"Instance"}]}; }, $n);
    /*StackManager end.*/

    /*TimeManager start.*/
    $m("TimeManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"DoPulse","t":8,"sn":"DoPulse","rt":$n[2].IEnumerator},{"a":1,"n":"OnTimerFinished","t":8,"sn":"OnTimerFinished","rt":$n[0].Void},{"a":1,"n":"PlayAlarmAnimation","t":8,"sn":"PlayAlarmAnimation","rt":$n[2].IEnumerator},{"a":1,"n":"PulseLoop","t":8,"sn":"PulseLoop","rt":$n[2].IEnumerator},{"a":1,"n":"ResetBorders","t":8,"sn":"ResetBorders","rt":$n[0].Void},{"a":1,"n":"RunTimer","t":8,"sn":"RunTimer","rt":$n[2].IEnumerator},{"at":[new UnityEngine.ContextMenu.ctor("StartTimer")],"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":2,"n":"StopGame","t":8,"sn":"StopGame","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":TimeManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":TimeManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[TimeManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_alarmCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"_alarmCoroutine"},{"a":1,"n":"_isRunning","t":4,"rt":$n[0].Boolean,"sn":"_isRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_origArrowPos","t":4,"rt":$n[1].Vector3,"sn":"_origArrowPos"},{"a":1,"n":"_origArrowRot","t":4,"rt":$n[1].Vector3,"sn":"_origArrowRot"},{"a":1,"n":"_origArrowScale","t":4,"rt":$n[1].Vector3,"sn":"_origArrowScale"},{"a":1,"n":"_origTimerPos","t":4,"rt":$n[1].Vector3,"sn":"_origTimerPos"},{"a":1,"n":"_origTimerRot","t":4,"rt":$n[1].Vector3,"sn":"_origTimerRot"},{"a":1,"n":"_origTimerScale","t":4,"rt":$n[1].Vector3,"sn":"_origTimerScale"},{"a":1,"n":"_pulseCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"_pulseCoroutine"},{"a":1,"n":"_timerCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"_timerCoroutine"},{"at":[new UnityEngine.HeaderAttribute("Alarm Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"alarmDuration","t":4,"rt":$n[0].Single,"sn":"alarmDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrowImage","t":4,"rt":$n[4].Image,"sn":"arrowImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrowParentRectTransform","t":4,"rt":$n[1].RectTransform,"sn":"arrowParentRectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endColor","t":4,"rt":$n[1].Color,"sn":"endColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameDuration","t":4,"rt":$n[0].Single,"sn":"gameDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxScaleMultiplier","t":4,"rt":$n[0].Single,"sn":"maxScaleMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"midColor","t":4,"rt":$n[1].Color,"sn":"midColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pauseDuration","t":4,"rt":$n[0].Single,"sn":"pauseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseColor","t":4,"rt":$n[1].Color,"sn":"pulseColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseDuration","t":4,"rt":$n[0].Single,"sn":"pulseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Pulse Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulseThreshold","t":4,"rt":$n[0].Single,"sn":"pulseThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeAmount","t":4,"rt":$n[0].Single,"sn":"shakeAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeRotationAmount","t":4,"rt":$n[0].Single,"sn":"shakeRotationAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeSpeed","t":4,"rt":$n[0].Single,"sn":"shakeSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sliderBorderImage","t":4,"rt":$n[4].Image,"sn":"sliderBorderImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sliderFillImage","t":4,"rt":$n[4].Image,"sn":"sliderFillImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startColor","t":4,"rt":$n[1].Color,"sn":"startColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeSlider","t":4,"rt":$n[4].Slider,"sn":"timeSlider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timerBorderImage","t":4,"rt":$n[4].Image,"sn":"timerBorderImage"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":TimeManager,"sn":"Instance"}]}; }, $n);
    /*TimeManager end.*/

    /*TutorialManager start.*/
    $m("TutorialManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimatePointsSequence","t":8,"sn":"AnimatePointsSequence","rt":$n[2].IEnumerator},{"a":1,"n":"AnimateTutorialCursor","t":8,"sn":"AnimateTutorialCursor","rt":$n[2].IEnumerator},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FadeBackgrounds","t":8,"pi":[{"n":"fadeIn","pt":$n[0].Boolean,"ps":0}],"sn":"FadeBackgrounds","rt":$n[2].IEnumerator,"p":[$n[0].Boolean]},{"a":1,"n":"FadeGlows","t":8,"pi":[{"n":"fadeIn","pt":$n[0].Boolean,"ps":0}],"sn":"FadeGlows","rt":$n[2].IEnumerator,"p":[$n[0].Boolean]},{"a":1,"n":"InitializeMaterials","t":8,"sn":"InitializeMaterials","rt":$n[0].Void},{"a":1,"n":"InitializePoints","t":8,"sn":"InitializePoints","rt":$n[0].Void},{"a":2,"n":"OnHexagonPlacedSuccessfully","t":8,"sn":"OnHexagonPlacedSuccessfully","rt":$n[0].Void},{"a":1,"n":"ResetVisualsToZero","t":8,"sn":"ResetVisualsToZero","rt":$n[0].Void},{"a":1,"n":"SetMaterialAlpha","t":8,"pi":[{"n":"mat","pt":$n[1].Material,"ps":0},{"n":"propName","pt":$n[0].String,"ps":1},{"n":"alpha","pt":$n[0].Single,"ps":2}],"sn":"SetMaterialAlpha","rt":$n[0].Void,"p":[$n[1].Material,$n[0].String,$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("StartAnim")],"a":2,"n":"StartTutorialAnimation","t":8,"sn":"StartTutorialAnimation","rt":$n[0].Void},{"a":1,"n":"StartTutorialWithDelay","t":8,"sn":"StartTutorialWithDelay","rt":$n[2].IEnumerator},{"a":1,"n":"TutorialMainLoop","t":8,"sn":"TutorialMainLoop","rt":$n[2].IEnumerator},{"a":1,"n":"WaitForGlobalCooldown","t":8,"sn":"WaitForGlobalCooldown","rt":$n[2].IEnumerator},{"a":1,"n":"WaitForIdleState","t":8,"sn":"WaitForIdleState","rt":$n[2].IEnumerator},{"a":2,"n":"HasPlacedSuccessfully","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasPlacedSuccessfully","t":8,"rt":$n[0].Boolean,"fg":"HasPlacedSuccessfully","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_HasPlacedSuccessfully","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"HasPlacedSuccessfully"},"fn":"HasPlacedSuccessfully"},{"a":2,"n":"Instance","is":true,"t":16,"rt":TutorialManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":TutorialManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[TutorialManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"IsInputBlocked","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsInputBlocked","t":8,"rt":$n[0].Boolean,"fg":"IsInputBlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsInputBlocked","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsInputBlocked"},"fn":"IsInputBlocked"},{"a":1,"n":"__Property__Initializer__HasPlacedSuccessfully","t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__HasPlacedSuccessfully","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"__Property__Initializer__IsInputBlocked","t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__IsInputBlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Fade Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundFadeDuration","t":4,"rt":$n[0].Single,"sn":"backgroundFadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundPlaneMaterial","t":4,"rt":$n[1].Material,"sn":"backgroundPlaneMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundSpriteRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"backgroundSpriteRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"backgroundTimerImage","t":4,"rt":$n[4].Image,"sn":"backgroundTimerImage"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cursorFollower","t":4,"rt":CursorFollower,"sn":"cursorFollower"},{"a":1,"n":"cursorLoopCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"cursorLoopCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cursorMoveSpeed","t":4,"rt":$n[0].Single,"sn":"cursorMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Cursor Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cursorOffset","t":4,"rt":$n[1].Vector2,"sn":"cursorOffset"},{"at":[new UnityEngine.HeaderAttribute("Logic Timings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"globalCooldownDuration","t":4,"rt":$n[0].Single,"sn":"globalCooldownDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowFadeDuration","t":4,"rt":$n[0].Single,"sn":"glowFadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowMaterials","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"glowMaterials"},{"a":1,"n":"mainLoopCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"mainLoopCoroutine"},{"a":1,"n":"originalGlowColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"originalGlowColors"},{"a":1,"n":"originalSpriteColor","t":4,"rt":$n[1].Color,"sn":"originalSpriteColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pauseDuration","t":4,"rt":$n[0].Single,"sn":"pauseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"releaseCheckDelay","t":4,"rt":$n[0].Single,"sn":"releaseCheckDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetAlpha","t":4,"rt":$n[0].Single,"sn":"targetAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"totalDuration","t":4,"rt":$n[0].Single,"sn":"totalDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialCursorImage","t":4,"rt":$n[4].RawImage,"sn":"tutorialCursorImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialPoints","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"tutorialPoints"},{"a":1,"backing":true,"n":"<HasPlacedSuccessfully>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"HasPlacedSuccessfully","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":TutorialManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<IsInputBlocked>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsInputBlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*TutorialManager end.*/

    /*BakeHelper start.*/
    $m("BakeHelper", function () { return {"nested":[BakeHelper.TransformData],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.ContextMenu.ctor("Apply End Group")],"a":2,"n":"ApplyEndGroup","t":8,"sn":"ApplyEndGroup","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Apply Start Group")],"a":2,"n":"ApplyStartGroup","t":8,"sn":"ApplyStartGroup","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Bake End Group")],"a":2,"n":"BakeEndGroup","t":8,"sn":"BakeEndGroup","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("Bake Start Group")],"a":2,"n":"BakeStartGroup","t":8,"sn":"BakeStartGroup","rt":$n[0].Void},{"a":2,"n":"endGroup","t":4,"rt":$n[3].List$1(BakeHelper.TransformData),"sn":"endGroup"},{"a":2,"n":"startGroup","t":4,"rt":$n[3].List$1(BakeHelper.TransformData),"sn":"startGroup"}]}; }, $n);
    /*BakeHelper end.*/

    /*BakeHelper+TransformData start.*/
    $m("BakeHelper.TransformData", function () { return {"td":BakeHelper,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"position","t":4,"rt":$n[1].Vector3,"sn":"position"},{"a":2,"n":"rotation","t":4,"rt":$n[1].Quaternion,"sn":"rotation"},{"a":2,"n":"scale","t":4,"rt":$n[1].Vector3,"sn":"scale"},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"}]}; }, $n);
    /*BakeHelper+TransformData end.*/

    /*CursorFollower start.*/
    $m("CursorFollower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FadeCoroutine","t":8,"pi":[{"n":"targetVisible","pt":$n[0].Boolean,"ps":0}],"sn":"FadeCoroutine","rt":$n[2].IEnumerator,"p":[$n[0].Boolean]},{"a":1,"n":"HideInstantlyCursor","t":8,"sn":"HideInstantlyCursor","rt":$n[0].Void},{"a":2,"n":"PlayGrabAnimation","t":8,"sn":"PlayGrabAnimation","rt":$n[0].Void},{"a":2,"n":"PlayReleaseAnimation","t":8,"sn":"PlayReleaseAnimation","rt":$n[0].Void},{"a":1,"n":"SetAlpha","t":8,"pi":[{"n":"renderer","pt":$n[1].SpriteRenderer,"ps":0},{"n":"alpha","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[1].SpriteRenderer,$n[0].Single]},{"a":2,"n":"SetTutorialActive","t":8,"pi":[{"n":"active","pt":$n[0].Boolean,"ps":0}],"sn":"SetTutorialActive","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetVisibility","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetVisibility","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"TriggerChainReactionFade","t":8,"sn":"TriggerChainReactionFade","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"SHADOW_MAX_ALPHA","is":true,"t":4,"rt":$n[0].Single,"sn":"SHADOW_MAX_ALPHA","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":1,"n":"fadeCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"fadeCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isTutorialActive","t":4,"rt":$n[0].Boolean,"sn":"isTutorialActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isVisible","t":4,"rt":$n[0].Boolean,"sn":"isVisible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainRenderers","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"mainRenderers"},{"at":[new UnityEngine.HeaderAttribute("Pivot Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pivotOffsetX","t":4,"rt":$n[0].Single,"sn":"pivotOffsetX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pivotOffsetY","t":4,"rt":$n[0].Single,"sn":"pivotOffsetY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shadowRenderers","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"shadowRenderers"}]}; }, $n);
    /*CursorFollower end.*/

    /*EndGame start.*/
    $m("EndGame", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"FinalEndGame","t":8,"sn":"FinalEndGame","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"RefButton","t":8,"sn":"RefButton","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TriggerEndGame","t":8,"sn":"TriggerEndGame","rt":$n[0].Void},{"a":2,"n":"TriggerPackshot","t":8,"sn":"TriggerPackshot","rt":$n[0].Void},{"a":2,"n":"GameEnded","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_GameEnded","t":8,"rt":$n[0].Boolean,"fg":"GameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_GameEnded","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"GameEnded"},"fn":"GameEnded"},{"a":2,"n":"Instance","is":true,"t":16,"rt":EndGame,"g":{"a":2,"n":"get_Instance","t":8,"rt":EndGame,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[EndGame],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"__Property__Initializer__GameEnded","t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__GameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"urlButtons","t":4,"rt":System.Array.type(UnityEngine.UI.Button),"sn":"urlButtons"},{"a":1,"backing":true,"n":"<GameEnded>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"GameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":EndGame,"sn":"Instance"}]}; }, $n);
    /*EndGame end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
