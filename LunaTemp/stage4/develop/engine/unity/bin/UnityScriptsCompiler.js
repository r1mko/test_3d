if ( TRACE ) { TRACE( JSON.parse( '["DragAndDrop#init","DragAndDrop#Awake","DragAndDrop#OnMouseDown","DragAndDrop#OnMouseUp","DragAndDrop#Update","FillStack#init","FillStack#GenerateBlocks","FillStack#GetRandomColor","FillStack#GetRandomColorExcept","GroundPlatform#Awake","GroundPlatform#SetGlow","GroundPlatform#RemoveGlow","GroundPlatform#IsAvailable","Hexagon#Awake","Hexagon#Init","Hexagon#GetColor","Hexagon.ColorMaterialPair#getDefaultValue","Hexagon.ColorMaterialPair#ctor","Hexagon.ColorMaterialPair#getHashCode","Hexagon.ColorMaterialPair#equals","Hexagon.ColorMaterialPair#$clone","Stack#init","Stack#Awake","Stack#Start","Stack#Update","Stack#CheckHover","Stack#DebugRaycast","Stack#Drop","Stack#MoveToContainerAndTransfer","Stack#ReturnAndRefill","Stack#ReturnToOriginal","Stack#MoveChildrenToContainer"]' ) ); }
/**
 * @version 1.0.9600.40985
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*DragAndDrop start.*/
    Bridge.define("DragAndDrop", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mainCamera: null,
            clampMinY: 0,
            clampMaxY: 0,
            originalPosition: null,
            isDragging: false,
            stackComponent: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragAndDrop#init", this ); }

                this.originalPosition = new UnityEngine.Vector3();
                this.clampMinY = 0.0;
                this.clampMaxY = 1.25;
                this.isDragging = false;
            }
        },
        methods: {
            /*DragAndDrop.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DragAndDrop#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    this.mainCamera = UnityEngine.Camera.main;
                }

                this.originalPosition = this.transform.position.$clone();
                this.stackComponent = this.GetComponent(Stack);
            },
            /*DragAndDrop.Awake end.*/

            /*DragAndDrop.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "DragAndDrop#OnMouseDown", this ); }

                this.isDragging = true;
                this.originalPosition = this.transform.position.$clone();
            },
            /*DragAndDrop.OnMouseDown end.*/

            /*DragAndDrop.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "DragAndDrop#OnMouseUp", this ); }

                this.isDragging = false;
                this.stackComponent.Drop();
            },
            /*DragAndDrop.OnMouseUp end.*/

            /*DragAndDrop.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DragAndDrop#Update", this ); }

                if (!this.isDragging) {
                    return;
                }

                var mousePos = UnityEngine.Input.mousePosition.$clone();
                var ray = this.mainCamera.ScreenPointToRay(mousePos);
                var plane = new UnityEngine.Plane.$ctor2(this.mainCamera.transform.forward, this.originalPosition);

                var distance = { };
                if (plane.Raycast(ray, distance)) {
                    var rayPoint = ray.GetPoint(distance.v);
                    var clampedPos = new pc.Vec3( rayPoint.x, Math.max(this.clampMinY, Math.min(rayPoint.y, this.clampMaxY)), rayPoint.z );
                    this.transform.position = clampedPos.$clone();
                }
            },
            /*DragAndDrop.Update end.*/


        }
    });
    /*DragAndDrop end.*/

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

                var count = UnityEngine.Random.Range(4, 8);

                var color1 = this.GetRandomColor();
                var color2 = null;

                if (UnityEngine.Random.value < 0.3) {
                    color2 = this.GetRandomColorExcept(color1);
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
                        var chosenColor = (i < splitIndex) ? color1 : System.Nullable.getValue(color2);
                        hexComponent.Init(chosenColor);
                    }
                }
            },
            /*FillStack.GenerateBlocks end.*/

            /*FillStack.GetRandomColor start.*/
            GetRandomColor: function () {
if ( TRACE ) { TRACE( "FillStack#GetRandomColor", this ); }

                var values = System.Enum.getValues(Hexagon.HexagonColor);
                return System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Array.get(values, UnityEngine.Random.Range(0, values.length)), Hexagon.HexagonColor), System.Int32));
            },
            /*FillStack.GetRandomColor end.*/

            /*FillStack.GetRandomColorExcept start.*/
            GetRandomColorExcept: function (exclude) {
if ( TRACE ) { TRACE( "FillStack#GetRandomColorExcept", this ); }

                var $t;
                var values = System.Enum.getValues(Hexagon.HexagonColor);
                var availableColors = new (System.Collections.Generic.List$1(Hexagon.HexagonColor)).ctor();

                $t = Bridge.getEnumerator(values);
                try {
                    while ($t.moveNext()) {
                        var c = Bridge.cast($t.Current, Hexagon.HexagonColor);
                        if (c !== exclude) {
                            availableColors.add(c);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                if (availableColors.Count > 0) {
                    return availableColors.getItem(UnityEngine.Random.Range(0, availableColors.Count));
                }

                return exclude;
            },
            /*FillStack.GetRandomColorExcept end.*/


        }
    });
    /*FillStack end.*/

    /*GroundPlatform start.*/
    Bridge.define("GroundPlatform", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Container: null,
            glowMaterial: null,
            platformRenderer: null,
            originalMaterial: null
        },
        methods: {
            /*GroundPlatform.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GroundPlatform#Awake", this ); }

                if (UnityEngine.Component.op_Inequality(this.platformRenderer, null)) {
                    this.originalMaterial = this.platformRenderer.material;
                }
            },
            /*GroundPlatform.Awake end.*/

            /*GroundPlatform.SetGlow start.*/
            SetGlow: function () {
if ( TRACE ) { TRACE( "GroundPlatform#SetGlow", this ); }

                if (UnityEngine.Component.op_Equality(this.platformRenderer, null) || this.glowMaterial == null) {
                    return;
                }

                this.platformRenderer.material = this.glowMaterial;
            },
            /*GroundPlatform.SetGlow end.*/

            /*GroundPlatform.RemoveGlow start.*/
            RemoveGlow: function () {
if ( TRACE ) { TRACE( "GroundPlatform#RemoveGlow", this ); }

                if (UnityEngine.Component.op_Equality(this.platformRenderer, null) || this.originalMaterial == null) {
                    return;
                }

                this.platformRenderer.material = this.originalMaterial;
            },
            /*GroundPlatform.RemoveGlow end.*/

            /*GroundPlatform.IsAvailable start.*/
            IsAvailable: function () {
if ( TRACE ) { TRACE( "GroundPlatform#IsAvailable", this ); }

                if (UnityEngine.GameObject.op_Equality(this.Container, null)) {
                    return false;
                }
                return this.Container.transform.childCount === 0;
            },
            /*GroundPlatform.IsAvailable end.*/


        }
    });
    /*GroundPlatform end.*/

    /*Hexagon start.*/
    Bridge.define("Hexagon", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            colorMaterials: null,
            hexRenderer: null,
            currentColor: 0
        },
        methods: {
            /*Hexagon.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Hexagon#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.hexRenderer, null)) {
                    this.hexRenderer = this.GetComponentInChildren(UnityEngine.Renderer);
                }

            },
            /*Hexagon.Awake end.*/

            /*Hexagon.Init start.*/
            Init: function (color) {
if ( TRACE ) { TRACE( "Hexagon#Init", this ); }

                var $t;
                this.currentColor = color;

                // Находим соответствующий материал
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

                UnityEngine.Debug.LogWarning$1(System.String.format("Material for color {0} not found in Hexagon script.", [Bridge.box(color, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor))]));
            },
            /*Hexagon.Init end.*/

            /*Hexagon.GetColor start.*/
            GetColor: function () {
if ( TRACE ) { TRACE( "Hexagon#GetColor", this ); }

                return this.currentColor;
            },
            /*Hexagon.GetColor end.*/


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
            material: null
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

                var h = Bridge.addHash([7224197112, this.color, this.material]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Hexagon.ColorMaterialPair#equals", this ); }

                if (!Bridge.is(o, Hexagon.ColorMaterialPair)) {
                    return false;
                }
                return Bridge.equals(this.color, o.color) && Bridge.equals(this.material, o.material);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Hexagon.ColorMaterialPair#$clone", this ); }

                var s = to || new Hexagon.ColorMaterialPair();
                s.color = this.color;
                s.material = this.material;
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
                Black: 0,
                Blue: 1,
                Green: 2,
                Purple: 3,
                Red: 4,
                Yellow: 5
            }
        }
    });
    /*Hexagon+HexagonColor end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Stack start.*/
    Bridge.define("Stack", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveCurve: null,
            moveDuration: 0,
            rayLength: 0,
            fillStack: null,
            originalPosition: null,
            currentHoveredPlatform: null,
            moveCoroutine: null
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

                if (UnityEngine.MonoBehaviour.op_Equality(this.fillStack, null)) {
                    this.fillStack = this.GetComponent(FillStack);
                }
            },
            /*Stack.Awake end.*/

            /*Stack.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Stack#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.fillStack, null) && this.transform.childCount === 0) {
                    this.fillStack.GenerateBlocks();
                }
            },
            /*Stack.Start end.*/

            /*Stack.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Stack#Update", this ); }

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

                    if (UnityEngine.MonoBehaviour.op_Inequality(platform, null) && platform.IsAvailable()) {
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
                    this.moveCoroutine = this.StartCoroutine$1(this.MoveToContainerAndTransfer(this.currentHoveredPlatform.Container));
                } else {
                    this.ReturnToOriginal();
                }
            },
            /*Stack.Drop end.*/

            /*Stack.MoveToContainerAndTransfer start.*/
            MoveToContainerAndTransfer: function (targetContainer) {
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
                                    startPos = this.transform.position.$clone();
                                        endPos = targetContainer.transform.position.$clone();
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

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null)) {
                                            this.currentHoveredPlatform.RemoveGlow();
                                            this.currentHoveredPlatform = null;
                                        }

                                        this.ReturnAndRefill();

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

                this.transform.position = this.originalPosition.$clone();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.fillStack, null)) {
                    this.fillStack.GenerateBlocks();
                }
            },
            /*Stack.ReturnAndRefill end.*/

            /*Stack.ReturnToOriginal start.*/
            ReturnToOriginal: function () {
if ( TRACE ) { TRACE( "Stack#ReturnToOriginal", this ); }

                this.transform.position = this.originalPosition.$clone();

                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentHoveredPlatform, null)) {
                    this.currentHoveredPlatform.RemoveGlow();
                    this.currentHoveredPlatform = null;
                }
            },
            /*Stack.ReturnToOriginal end.*/

            /*Stack.MoveChildrenToContainer start.*/
            MoveChildrenToContainer: function (targetContainer) {
if ( TRACE ) { TRACE( "Stack#MoveChildrenToContainer", this ); }

                while (this.transform.childCount > 0) {
                    var child = this.transform.GetChild(0);
                    child.SetParent(targetContainer.transform, true);
                }
            },
            /*Stack.MoveChildrenToContainer end.*/


        }
    });
    /*Stack end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections"];

    /*Hexagon start.*/
    $m("Hexagon", function () { return {"nested":[Hexagon.HexagonColor,Hexagon.ColorMaterialPair],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetColor","t":8,"sn":"GetColor","rt":Hexagon.HexagonColor,"box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Init","t":8,"pi":[{"n":"color","pt":Hexagon.HexagonColor,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Hexagon.HexagonColor]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"colorMaterials","t":4,"rt":System.Array.type(Hexagon.ColorMaterialPair),"sn":"colorMaterials"},{"a":1,"n":"currentColor","t":4,"rt":Hexagon.HexagonColor,"sn":"currentColor","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexRenderer","t":4,"rt":$n[1].Renderer,"sn":"hexRenderer"}]}; }, $n);
    /*Hexagon end.*/

    /*Hexagon+HexagonColor start.*/
    $m("Hexagon.HexagonColor", function () { return {"td":Hexagon,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Black","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Black","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Blue","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Blue","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Green","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Green","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Purple","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Purple","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Red","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Red","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":Hexagon.HexagonColor,"sn":"Yellow","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}}]}; }, $n);
    /*Hexagon+HexagonColor end.*/

    /*Hexagon+ColorMaterialPair start.*/
    $m("Hexagon.ColorMaterialPair", function () { return {"td":Hexagon,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":Hexagon.HexagonColor,"sn":"color","box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":2,"n":"material","t":4,"rt":$n[1].Material,"sn":"material"}]}; }, $n);
    /*Hexagon+ColorMaterialPair end.*/

    /*GroundPlatform start.*/
    $m("GroundPlatform", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"IsAvailable","t":8,"sn":"IsAvailable","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RemoveGlow","t":8,"sn":"RemoveGlow","rt":$n[0].Void},{"a":2,"n":"SetGlow","t":8,"sn":"SetGlow","rt":$n[0].Void},{"a":2,"n":"Container","t":4,"rt":$n[1].GameObject,"sn":"Container"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowMaterial","t":4,"rt":$n[1].Material,"sn":"glowMaterial"},{"a":1,"n":"originalMaterial","t":4,"rt":$n[1].Material,"sn":"originalMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"platformRenderer","t":4,"rt":$n[1].Renderer,"sn":"platformRenderer"}]}; }, $n);
    /*GroundPlatform end.*/

    /*DragAndDrop start.*/
    $m("DragAndDrop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clampMaxY","t":4,"rt":$n[0].Single,"sn":"clampMaxY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clampMinY","t":4,"rt":$n[0].Single,"sn":"clampMinY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"a":1,"n":"originalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalPosition"},{"a":1,"n":"stackComponent","t":4,"rt":Stack,"sn":"stackComponent"}]}; }, $n);
    /*DragAndDrop end.*/

    /*FillStack start.*/
    $m("FillStack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GenerateBlocks","t":8,"sn":"GenerateBlocks","rt":$n[0].Void},{"a":1,"n":"GetRandomColor","t":8,"sn":"GetRandomColor","rt":Hexagon.HexagonColor,"box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":1,"n":"GetRandomColorExcept","t":8,"pi":[{"n":"exclude","pt":Hexagon.HexagonColor,"ps":0}],"sn":"GetRandomColorExcept","rt":Hexagon.HexagonColor,"p":[Hexagon.HexagonColor],"box":function ($v) { return Bridge.box($v, Hexagon.HexagonColor, System.Enum.toStringFn(Hexagon.HexagonColor));}},{"a":1,"n":"HeightStep","is":true,"t":4,"rt":$n[0].Single,"sn":"HeightStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexagonPrefab","t":4,"rt":$n[1].GameObject,"sn":"hexagonPrefab"}]}; }, $n);
    /*FillStack end.*/

    /*Stack start.*/
    $m("Stack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CheckHover","t":8,"sn":"CheckHover","rt":$n[0].Void},{"a":1,"n":"DebugRaycast","t":8,"sn":"DebugRaycast","rt":$n[0].Void},{"a":2,"n":"Drop","t":8,"sn":"Drop","rt":$n[0].Void},{"a":1,"n":"MoveChildrenToContainer","t":8,"pi":[{"n":"targetContainer","pt":$n[1].GameObject,"ps":0}],"sn":"MoveChildrenToContainer","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"MoveToContainerAndTransfer","t":8,"pi":[{"n":"targetContainer","pt":$n[1].GameObject,"ps":0}],"sn":"MoveToContainerAndTransfer","rt":$n[2].IEnumerator,"p":[$n[1].GameObject]},{"a":1,"n":"ReturnAndRefill","t":8,"sn":"ReturnAndRefill","rt":$n[0].Void},{"a":1,"n":"ReturnToOriginal","t":8,"sn":"ReturnToOriginal","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"currentHoveredPlatform","t":4,"rt":GroundPlatform,"sn":"currentHoveredPlatform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fillStack","t":4,"rt":FillStack,"sn":"fillStack"},{"a":1,"n":"moveCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"moveCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveCurve","t":4,"rt":pc.AnimationCurve,"sn":"moveCurve"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rayLength","t":4,"rt":$n[0].Single,"sn":"rayLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Stack end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
