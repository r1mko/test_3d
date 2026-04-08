if ( TRACE ) { TRACE( JSON.parse( '["DragAndDrop#init","DragAndDrop#Awake","DragAndDrop#OnMouseDown","DragAndDrop#OnMouseUp","DragAndDrop#Update"]' ) ); }
/**
 * @version 1.0.9592.34519
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
            originalPosition: null,
            isDragging: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragAndDrop#init", this ); }

                this.originalPosition = new UnityEngine.Vector3();
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
                this.transform.position = this.originalPosition.$clone();
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
                    this.transform.position = ray.GetPoint(distance.v);
                }
            },
            /*DragAndDrop.Update end.*/


        }
    });
    /*DragAndDrop end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Stack start.*/
    Bridge.define("Stack", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*Stack end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*DragAndDrop start.*/
    $m("DragAndDrop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"a":1,"n":"originalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalPosition"}]}; }, $n);
    /*DragAndDrop end.*/

    /*Stack start.*/
    $m("Stack", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Stack end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
