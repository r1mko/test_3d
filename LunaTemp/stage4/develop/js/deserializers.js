var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSpring' )
  var i523 = data
  i522.spring = i523[0]
  i522.damper = i523[1]
  i522.targetPosition = i523[2]
  return i522
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointMotor' )
  var i525 = data
  i524.m_TargetVelocity = i525[0]
  i524.m_Force = i525[1]
  i524.m_FreeSpin = i525[2]
  return i524
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointLimits' )
  var i527 = data
  i526.m_Min = i527[0]
  i526.m_Max = i527[1]
  i526.m_Bounciness = i527[2]
  i526.m_BounceMinVelocity = i527[3]
  i526.m_ContactDistance = i527[4]
  i526.minBounce = i527[5]
  i526.maxBounce = i527[6]
  return i526
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointDrive' )
  var i529 = data
  i528.m_PositionSpring = i529[0]
  i528.m_PositionDamper = i529[1]
  i528.m_MaximumForce = i529[2]
  i528.m_UseAcceleration = i529[3]
  return i528
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i531 = data
  i530.m_Spring = i531[0]
  i530.m_Damper = i531[1]
  return i530
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i533 = data
  i532.m_Limit = i533[0]
  i532.m_Bounciness = i533[1]
  i532.m_ContactDistance = i533[2]
  return i532
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i535 = data
  i534.m_ExtremumSlip = i535[0]
  i534.m_ExtremumValue = i535[1]
  i534.m_AsymptoteSlip = i535[2]
  i534.m_AsymptoteValue = i535[3]
  i534.m_Stiffness = i535[4]
  return i534
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i537 = data
  i536.m_LowerAngle = i537[0]
  i536.m_UpperAngle = i537[1]
  return i536
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i539 = data
  i538.m_MotorSpeed = i539[0]
  i538.m_MaximumMotorTorque = i539[1]
  return i538
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i541 = data
  i540.m_DampingRatio = i541[0]
  i540.m_Frequency = i541[1]
  i540.m_Angle = i541[2]
  return i540
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i543 = data
  i542.m_LowerTranslation = i543[0]
  i542.m_UpperTranslation = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i544 = root || new pc.UnityMaterial()
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'shader')
  i544.renderQueue = i545[3]
  i544.enableInstancing = !!i545[4]
  var i547 = i545[5]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i547[i + 0]) );
  }
  i544.floatParameters = i546
  var i549 = i545[6]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i549[i + 0]) );
  }
  i544.colorParameters = i548
  var i551 = i545[7]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i551[i + 0]) );
  }
  i544.vectorParameters = i550
  var i553 = i545[8]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i553[i + 0]) );
  }
  i544.textureParameters = i552
  var i555 = i545[9]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i555[i + 0]) );
  }
  i544.materialFlags = i554
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Color(i563[1], i563[2], i563[3], i563[4])
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = new pc.Vec4( i567[1], i567[2], i567[3], i567[4] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i571 = data
  i570.name = i571[0]
  request.r(i571[1], i571[2], 0, i570, 'value')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i575 = data
  i574.name = i575[0]
  i574.enabled = !!i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i577 = data
  i576.name = i577[0]
  i576.width = i577[1]
  i576.height = i577[2]
  i576.mipmapCount = i577[3]
  i576.anisoLevel = i577[4]
  i576.filterMode = i577[5]
  i576.hdr = !!i577[6]
  i576.format = i577[7]
  i576.wrapMode = i577[8]
  i576.alphaIsTransparency = !!i577[9]
  i576.alphaSource = i577[10]
  i576.graphicsFormat = i577[11]
  i576.sRGBTexture = !!i577[12]
  i576.desiredColorSpace = i577[13]
  i576.wrapU = i577[14]
  i576.wrapV = i577[15]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i579 = data
  i578.position = new pc.Vec3( i579[0], i579[1], i579[2] )
  i578.scale = new pc.Vec3( i579[3], i579[4], i579[5] )
  i578.rotation = new pc.Quat(i579[6], i579[7], i579[8], i579[9])
  return i578
}

Deserializers["BakeHelper"] = function (request, data, root) {
  var i580 = root || request.c( 'BakeHelper' )
  var i581 = data
  var i583 = i581[0]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('BakeHelper+TransformData')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(request.d('BakeHelper+TransformData', i583[i + 0]));
  }
  i580.startGroup = i582
  var i585 = i581[1]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('BakeHelper+TransformData')))
  for(var i = 0; i < i585.length; i += 1) {
    i584.add(request.d('BakeHelper+TransformData', i585[i + 0]));
  }
  i580.endGroup = i584
  return i580
}

Deserializers["BakeHelper+TransformData"] = function (request, data, root) {
  var i588 = root || request.c( 'BakeHelper+TransformData' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'target')
  i588.position = new pc.Vec3( i589[2], i589[3], i589[4] )
  i588.rotation = new pc.Quat(i589[5], i589[6], i589[7], i589[8])
  i588.scale = new pc.Vec3( i589[9], i589[10], i589[11] )
  return i588
}

Deserializers["CursorFollower"] = function (request, data, root) {
  var i590 = root || request.c( 'CursorFollower' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'mainCamera')
  i590.fadeDuration = i591[2]
  var i593 = i591[3]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.mainRenderers = i592
  var i595 = i591[4]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i590.shadowRenderers = i594
  request.r(i591[5], i591[6], 0, i590, 'animator')
  i590.pivotOffsetX = i591[7]
  i590.pivotOffsetY = i591[8]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'animatorController')
  request.r(i599[2], i599[3], 0, i598, 'avatar')
  i598.updateMode = i599[4]
  i598.hasTransformHierarchy = !!i599[5]
  i598.applyRootMotion = !!i599[6]
  var i601 = i599[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.humanBones = i600
  i598.enabled = !!i599[8]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i605 = data
  i604.color = new pc.Color(i605[0], i605[1], i605[2], i605[3])
  request.r(i605[4], i605[5], 0, i604, 'sprite')
  i604.flipX = !!i605[6]
  i604.flipY = !!i605[7]
  i604.drawMode = i605[8]
  i604.size = new pc.Vec2( i605[9], i605[10] )
  i604.tileMode = i605[11]
  i604.adaptiveModeThreshold = i605[12]
  i604.maskInteraction = i605[13]
  i604.spriteSortPoint = i605[14]
  i604.enabled = !!i605[15]
  request.r(i605[16], i605[17], 0, i604, 'sharedMaterial')
  var i607 = i605[18]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.sharedMaterials = i606
  i604.receiveShadows = !!i605[19]
  i604.shadowCastingMode = i605[20]
  i604.sortingLayerID = i605[21]
  i604.sortingOrder = i605[22]
  i604.lightmapIndex = i605[23]
  i604.lightmapSceneIndex = i605[24]
  i604.lightmapScaleOffset = new pc.Vec4( i605[25], i605[26], i605[27], i605[28] )
  i604.lightProbeUsage = i605[29]
  i604.reflectionProbeUsage = i605[30]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i611 = data
  i610.name = i611[0]
  i610.tagId = i611[1]
  i610.enabled = !!i611[2]
  i610.isStatic = !!i611[3]
  i610.layer = i611[4]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i613 = data
  i612.name = i613[0]
  i612.halfPrecision = !!i613[1]
  i612.useSimplification = !!i613[2]
  i612.useUInt32IndexFormat = !!i613[3]
  i612.vertexCount = i613[4]
  i612.aabb = i613[5]
  var i615 = i613[6]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( !!i615[i + 0] );
  }
  i612.streams = i614
  i612.vertices = i613[7]
  var i617 = i613[8]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i617[i + 0]) );
  }
  i612.subMeshes = i616
  var i619 = i613[9]
  var i618 = []
  for(var i = 0; i < i619.length; i += 16) {
    i618.push( new pc.Mat4().setData(i619[i + 0], i619[i + 1], i619[i + 2], i619[i + 3],  i619[i + 4], i619[i + 5], i619[i + 6], i619[i + 7],  i619[i + 8], i619[i + 9], i619[i + 10], i619[i + 11],  i619[i + 12], i619[i + 13], i619[i + 14], i619[i + 15]) );
  }
  i612.bindposes = i618
  var i621 = i613[10]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i621[i + 0]) );
  }
  i612.blendShapes = i620
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i627 = data
  i626.triangles = i627[0]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i633 = data
  i632.name = i633[0]
  var i635 = i633[1]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i635[i + 0]) );
  }
  i632.frames = i634
  return i632
}

Deserializers["Hexagon"] = function (request, data, root) {
  var i636 = root || request.c( 'Hexagon' )
  var i637 = data
  var i639 = i637[0]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Hexagon+ColorMaterialPair', i639[i + 0]) );
  }
  i636.colorMaterials = i638
  request.r(i637[1], i637[2], 0, i636, 'hexRenderer')
  var i641 = i637[3]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i636.anchors = i640
  i636.jumpCurve = new pc.AnimationCurve( { keys_flow: i637[4] } )
  i636.removeCurve = new pc.AnimationCurve( { keys_flow: i637[5] } )
  i636.jumpHeight = i637[6]
  i636.jumpDuration = i637[7]
  i636.removeScaleDuration = i637[8]
  return i636
}

Deserializers["Hexagon+ColorMaterialPair"] = function (request, data, root) {
  var i644 = root || request.c( 'Hexagon+ColorMaterialPair' )
  var i645 = data
  i644.color = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'material')
  i644.particleGradient = i645[3] ? new pc.ColorGradient(i645[3][0], i645[3][1], i645[3][2]) : null
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'sharedMesh')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'additionalVertexStreams')
  i648.enabled = !!i649[2]
  request.r(i649[3], i649[4], 0, i648, 'sharedMaterial')
  var i651 = i649[5]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.sharedMaterials = i650
  i648.receiveShadows = !!i649[6]
  i648.shadowCastingMode = i649[7]
  i648.sortingLayerID = i649[8]
  i648.sortingOrder = i649[9]
  i648.lightmapIndex = i649[10]
  i648.lightmapSceneIndex = i649[11]
  i648.lightmapScaleOffset = new pc.Vec4( i649[12], i649[13], i649[14], i649[15] )
  i648.lightProbeUsage = i649[16]
  i648.reflectionProbeUsage = i649[17]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i653 = data
  i652.name = i653[0]
  i652.atlasId = i653[1]
  i652.mipmapCount = i653[2]
  i652.hdr = !!i653[3]
  i652.size = i653[4]
  i652.anisoLevel = i653[5]
  i652.filterMode = i653[6]
  var i655 = i653[7]
  var i654 = []
  for(var i = 0; i < i655.length; i += 4) {
    i654.push( UnityEngine.Rect.MinMaxRect(i655[i + 0], i655[i + 1], i655[i + 2], i655[i + 3]) );
  }
  i652.rects = i654
  i652.wrapU = i653[8]
  i652.wrapV = i653[9]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i659 = data
  i658.name = i659[0]
  i658.index = i659[1]
  i658.startup = !!i659[2]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i661 = data
  i660.type = i661[0]
  i660.color = new pc.Color(i661[1], i661[2], i661[3], i661[4])
  i660.cullingMask = i661[5]
  i660.intensity = i661[6]
  i660.range = i661[7]
  i660.spotAngle = i661[8]
  i660.shadows = i661[9]
  i660.shadowNormalBias = i661[10]
  i660.shadowBias = i661[11]
  i660.shadowStrength = i661[12]
  i660.shadowResolution = i661[13]
  i660.lightmapBakeType = i661[14]
  i660.renderMode = i661[15]
  request.r(i661[16], i661[17], 0, i660, 'cookie')
  i660.cookieSize = i661[18]
  i660.shadowNearPlane = i661[19]
  i660.occlusionMaskChannel = i661[20]
  i660.enabled = !!i661[21]
  return i660
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_FirstSelected')
  i662.m_sendNavigationEvents = !!i663[2]
  i662.m_DragThreshold = i663[3]
  return i662
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i665 = data
  i664.m_HorizontalAxis = i665[0]
  i664.m_VerticalAxis = i665[1]
  i664.m_SubmitButton = i665[2]
  i664.m_CancelButton = i665[3]
  i664.m_InputActionsPerSecond = i665[4]
  i664.m_RepeatDelay = i665[5]
  i664.m_ForceModuleActive = !!i665[6]
  i664.m_SendPointerHoverToParent = !!i665[7]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i667 = data
  i666.aspect = i667[0]
  i666.orthographic = !!i667[1]
  i666.orthographicSize = i667[2]
  i666.backgroundColor = new pc.Color(i667[3], i667[4], i667[5], i667[6])
  i666.nearClipPlane = i667[7]
  i666.farClipPlane = i667[8]
  i666.fieldOfView = i667[9]
  i666.depth = i667[10]
  i666.clearFlags = i667[11]
  i666.cullingMask = i667[12]
  i666.rect = i667[13]
  request.r(i667[14], i667[15], 0, i666, 'targetTexture')
  i666.usePhysicalProperties = !!i667[16]
  i666.focalLength = i667[17]
  i666.sensorSize = new pc.Vec2( i667[18], i667[19] )
  i666.lensShift = new pc.Vec2( i667[20], i667[21] )
  i666.gateFit = i667[22]
  i666.commandBufferCount = i667[23]
  i666.cameraType = i667[24]
  i666.enabled = !!i667[25]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i669 = data
  i668.pivot = new pc.Vec2( i669[0], i669[1] )
  i668.anchorMin = new pc.Vec2( i669[2], i669[3] )
  i668.anchorMax = new pc.Vec2( i669[4], i669[5] )
  i668.sizeDelta = new pc.Vec2( i669[6], i669[7] )
  i668.anchoredPosition3D = new pc.Vec3( i669[8], i669[9], i669[10] )
  i668.rotation = new pc.Quat(i669[11], i669[12], i669[13], i669[14])
  i668.scale = new pc.Vec3( i669[15], i669[16], i669[17] )
  return i668
}

Deserializers["EndGame"] = function (request, data, root) {
  var i670 = root || request.c( 'EndGame' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'animator')
  var i673 = i671[2]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.urlButtons = i672
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i677 = data
  i676.planeDistance = i677[0]
  i676.referencePixelsPerUnit = i677[1]
  i676.isFallbackOverlay = !!i677[2]
  i676.renderMode = i677[3]
  i676.renderOrder = i677[4]
  i676.sortingLayerName = i677[5]
  i676.sortingOrder = i677[6]
  i676.scaleFactor = i677[7]
  request.r(i677[8], i677[9], 0, i676, 'worldCamera')
  i676.overrideSorting = !!i677[10]
  i676.pixelPerfect = !!i677[11]
  i676.targetDisplay = i677[12]
  i676.overridePixelPerfect = !!i677[13]
  i676.enabled = !!i677[14]
  return i676
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i679 = data
  i678.m_UiScaleMode = i679[0]
  i678.m_ReferencePixelsPerUnit = i679[1]
  i678.m_ScaleFactor = i679[2]
  i678.m_ReferenceResolution = new pc.Vec2( i679[3], i679[4] )
  i678.m_ScreenMatchMode = i679[5]
  i678.m_MatchWidthOrHeight = i679[6]
  i678.m_PhysicalUnit = i679[7]
  i678.m_FallbackScreenDPI = i679[8]
  i678.m_DefaultSpriteDPI = i679[9]
  i678.m_DynamicPixelsPerUnit = i679[10]
  i678.m_PresetInfoIsWorld = !!i679[11]
  return i678
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i681 = data
  i680.m_IgnoreReversedGraphics = !!i681[0]
  i680.m_BlockingObjects = i681[1]
  i680.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i681[2] )
  return i680
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Slider' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_FillRect')
  request.r(i683[2], i683[3], 0, i682, 'm_HandleRect')
  i682.m_Direction = i683[4]
  i682.m_MinValue = i683[5]
  i682.m_MaxValue = i683[6]
  i682.m_WholeNumbers = !!i683[7]
  i682.m_Value = i683[8]
  i682.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i683[9], i682.m_OnValueChanged)
  i682.m_Navigation = request.d('UnityEngine.UI.Navigation', i683[10], i682.m_Navigation)
  i682.m_Transition = i683[11]
  i682.m_Colors = request.d('UnityEngine.UI.ColorBlock', i683[12], i682.m_Colors)
  i682.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i683[13], i682.m_SpriteState)
  i682.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i683[14], i682.m_AnimationTriggers)
  i682.m_Interactable = !!i683[15]
  request.r(i683[16], i683[17], 0, i682, 'm_TargetGraphic')
  return i682
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i685 = data
  i684.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i685[0], i684.m_PersistentCalls)
  return i684
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i687 = data
  var i689 = i687[0]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('UnityEngine.Events.PersistentCall', i689[i + 0]));
  }
  i686.m_Calls = i688
  return i686
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'm_Target')
  i692.m_TargetAssemblyTypeName = i693[2]
  i692.m_MethodName = i693[3]
  i692.m_Mode = i693[4]
  i692.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i693[5], i692.m_Arguments)
  i692.m_CallState = i693[6]
  return i692
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i695 = data
  i694.m_Mode = i695[0]
  i694.m_WrapAround = !!i695[1]
  request.r(i695[2], i695[3], 0, i694, 'm_SelectOnUp')
  request.r(i695[4], i695[5], 0, i694, 'm_SelectOnDown')
  request.r(i695[6], i695[7], 0, i694, 'm_SelectOnLeft')
  request.r(i695[8], i695[9], 0, i694, 'm_SelectOnRight')
  return i694
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i697 = data
  i696.m_NormalColor = new pc.Color(i697[0], i697[1], i697[2], i697[3])
  i696.m_HighlightedColor = new pc.Color(i697[4], i697[5], i697[6], i697[7])
  i696.m_PressedColor = new pc.Color(i697[8], i697[9], i697[10], i697[11])
  i696.m_SelectedColor = new pc.Color(i697[12], i697[13], i697[14], i697[15])
  i696.m_DisabledColor = new pc.Color(i697[16], i697[17], i697[18], i697[19])
  i696.m_ColorMultiplier = i697[20]
  i696.m_FadeDuration = i697[21]
  return i696
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_HighlightedSprite')
  request.r(i699[2], i699[3], 0, i698, 'm_PressedSprite')
  request.r(i699[4], i699[5], 0, i698, 'm_SelectedSprite')
  request.r(i699[6], i699[7], 0, i698, 'm_DisabledSprite')
  return i698
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i701 = data
  i700.m_NormalTrigger = i701[0]
  i700.m_HighlightedTrigger = i701[1]
  i700.m_PressedTrigger = i701[2]
  i700.m_SelectedTrigger = i701[3]
  i700.m_DisabledTrigger = i701[4]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i703 = data
  i702.cullTransparentMesh = !!i703[0]
  return i702
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Image' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Sprite')
  i704.m_Type = i705[2]
  i704.m_PreserveAspect = !!i705[3]
  i704.m_FillCenter = !!i705[4]
  i704.m_FillMethod = i705[5]
  i704.m_FillAmount = i705[6]
  i704.m_FillClockwise = !!i705[7]
  i704.m_FillOrigin = i705[8]
  i704.m_UseSpriteMesh = !!i705[9]
  i704.m_PixelsPerUnitMultiplier = i705[10]
  request.r(i705[11], i705[12], 0, i704, 'm_Material')
  i704.m_Maskable = !!i705[13]
  i704.m_Color = new pc.Color(i705[14], i705[15], i705[16], i705[17])
  i704.m_RaycastTarget = !!i705[18]
  i704.m_RaycastPadding = new pc.Vec4( i705[19], i705[20], i705[21], i705[22] )
  return i704
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_Texture')
  i706.m_UVRect = UnityEngine.Rect.MinMaxRect(i707[2], i707[3], i707[4], i707[5])
  request.r(i707[6], i707[7], 0, i706, 'm_Material')
  i706.m_Maskable = !!i707[8]
  i706.m_Color = new pc.Color(i707[9], i707[10], i707[11], i707[12])
  i706.m_RaycastTarget = !!i707[13]
  i706.m_RaycastPadding = new pc.Vec4( i707[14], i707[15], i707[16], i707[17] )
  return i706
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Button' )
  var i709 = data
  i708.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i709[0], i708.m_OnClick)
  i708.m_Navigation = request.d('UnityEngine.UI.Navigation', i709[1], i708.m_Navigation)
  i708.m_Transition = i709[2]
  i708.m_Colors = request.d('UnityEngine.UI.ColorBlock', i709[3], i708.m_Colors)
  i708.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i709[4], i708.m_SpriteState)
  i708.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i709[5], i708.m_AnimationTriggers)
  i708.m_Interactable = !!i709[6]
  request.r(i709[7], i709[8], 0, i708, 'm_TargetGraphic')
  return i708
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i711 = data
  i710.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i711[0], i710.m_PersistentCalls)
  return i710
}

Deserializers["PlatformManager"] = function (request, data, root) {
  var i712 = root || request.c( 'PlatformManager' )
  var i713 = data
  var i715 = i713[0]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.GroundPlatforms = i714
  request.r(i713[1], i713[2], 0, i712, 'cursorFollower')
  i712.weightMatchCreation = i713[3]
  i712.weightChainContinuation = i713[4]
  i712.weightUnderColorMatch = i713[5]
  i712.weightNeighborChainPotential = i713[6]
  i712.weightFutureMatchPotential = i713[7]
  i712.weightGlobalOpportunity = i713[8]
  i712.weightEmptyUnderneathPreference = i713[9]
  i712.matchCountThreshold = i713[10]
  return i712
}

Deserializers["GroundPlatform"] = function (request, data, root) {
  var i718 = root || request.c( 'GroundPlatform' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'Container')
  request.r(i719[2], i719[3], 0, i718, 'removeParticle')
  request.r(i719[4], i719[5], 0, i718, 'glowMaterial')
  request.r(i719[6], i719[7], 0, i718, 'platformRenderer')
  var i721 = i719[8]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i718.neighborPlatforms = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i723 = data
  i722.center = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.radius = i723[3]
  i722.enabled = !!i723[4]
  i722.isTrigger = !!i723[5]
  request.r(i723[6], i723[7], 0, i722, 'material')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i725 = data
  i724.mass = i725[0]
  i724.drag = i725[1]
  i724.angularDrag = i725[2]
  i724.useGravity = !!i725[3]
  i724.isKinematic = !!i725[4]
  i724.constraints = i725[5]
  i724.maxAngularVelocity = i725[6]
  i724.collisionDetectionMode = i725[7]
  i724.interpolation = i725[8]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i727 = data
  i726.center = new pc.Vec3( i727[0], i727[1], i727[2] )
  i726.size = new pc.Vec3( i727[3], i727[4], i727[5] )
  i726.enabled = !!i727[6]
  i726.isTrigger = !!i727[7]
  request.r(i727[8], i727[9], 0, i726, 'material')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i729 = data
  i728.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i729[0], i728.main)
  i728.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i729[1], i728.colorBySpeed)
  i728.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i729[2], i728.colorOverLifetime)
  i728.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i729[3], i728.emission)
  i728.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i729[4], i728.rotationBySpeed)
  i728.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i729[5], i728.rotationOverLifetime)
  i728.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i729[6], i728.shape)
  i728.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i729[7], i728.sizeBySpeed)
  i728.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i729[8], i728.sizeOverLifetime)
  i728.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i729[9], i728.textureSheetAnimation)
  i728.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i729[10], i728.velocityOverLifetime)
  i728.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i729[11], i728.noise)
  i728.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i729[12], i728.inheritVelocity)
  i728.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i729[13], i728.forceOverLifetime)
  i728.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i729[14], i728.limitVelocityOverLifetime)
  i728.useAutoRandomSeed = !!i729[15]
  i728.randomSeed = i729[16]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemMain()
  var i731 = data
  i730.duration = i731[0]
  i730.loop = !!i731[1]
  i730.prewarm = !!i731[2]
  i730.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[3], i730.startDelay)
  i730.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[4], i730.startLifetime)
  i730.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[5], i730.startSpeed)
  i730.startSize3D = !!i731[6]
  i730.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[7], i730.startSizeX)
  i730.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[8], i730.startSizeY)
  i730.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[9], i730.startSizeZ)
  i730.startRotation3D = !!i731[10]
  i730.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[11], i730.startRotationX)
  i730.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[12], i730.startRotationY)
  i730.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[13], i730.startRotationZ)
  i730.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i731[14], i730.startColor)
  i730.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[15], i730.gravityModifier)
  i730.simulationSpace = i731[16]
  request.r(i731[17], i731[18], 0, i730, 'customSimulationSpace')
  i730.simulationSpeed = i731[19]
  i730.useUnscaledTime = !!i731[20]
  i730.scalingMode = i731[21]
  i730.playOnAwake = !!i731[22]
  i730.maxParticles = i731[23]
  i730.emitterVelocityMode = i731[24]
  i730.stopAction = i731[25]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i732 = root || new pc.MinMaxCurve()
  var i733 = data
  i732.mode = i733[0]
  i732.curveMin = new pc.AnimationCurve( { keys_flow: i733[1] } )
  i732.curveMax = new pc.AnimationCurve( { keys_flow: i733[2] } )
  i732.curveMultiplier = i733[3]
  i732.constantMin = i733[4]
  i732.constantMax = i733[5]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i734 = root || new pc.MinMaxGradient()
  var i735 = data
  i734.mode = i735[0]
  i734.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i735[1], i734.gradientMin)
  i734.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i735[2], i734.gradientMax)
  i734.colorMin = new pc.Color(i735[3], i735[4], i735[5], i735[6])
  i734.colorMax = new pc.Color(i735[7], i735[8], i735[9], i735[10])
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i737 = data
  i736.mode = i737[0]
  var i739 = i737[1]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i739[i + 0]) );
  }
  i736.colorKeys = i738
  var i741 = i737[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i741[i + 0]) );
  }
  i736.alphaKeys = i740
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemColorBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i743[1], i742.color)
  i742.range = new pc.Vec2( i743[2], i743[3] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i747 = data
  i746.color = new pc.Color(i747[0], i747[1], i747[2], i747[3])
  i746.time = i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i751 = data
  i750.alpha = i751[0]
  i750.time = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemColorOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[1], i752.color)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemEmitter()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.rateOverTime)
  i754.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.rateOverDistance)
  var i757 = i755[3]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i757[i + 0]) );
  }
  i754.bursts = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemBurst()
  var i761 = data
  i760.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[0], i760.count)
  i760.cycleCount = i761[1]
  i760.minCount = i761[2]
  i760.maxCount = i761[3]
  i760.repeatInterval = i761[4]
  i760.time = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemRotationBySpeed()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.separateAxes = !!i763[4]
  i762.range = new pc.Vec2( i763[5], i763[6] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemRotationOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.separateAxes = !!i765[4]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemShape()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.shapeType = i767[1]
  i766.randomDirectionAmount = i767[2]
  i766.sphericalDirectionAmount = i767[3]
  i766.randomPositionAmount = i767[4]
  i766.alignToDirection = !!i767[5]
  i766.radius = i767[6]
  i766.radiusMode = i767[7]
  i766.radiusSpread = i767[8]
  i766.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[9], i766.radiusSpeed)
  i766.radiusThickness = i767[10]
  i766.angle = i767[11]
  i766.length = i767[12]
  i766.boxThickness = new pc.Vec3( i767[13], i767[14], i767[15] )
  i766.meshShapeType = i767[16]
  request.r(i767[17], i767[18], 0, i766, 'mesh')
  request.r(i767[19], i767[20], 0, i766, 'meshRenderer')
  request.r(i767[21], i767[22], 0, i766, 'skinnedMeshRenderer')
  i766.useMeshMaterialIndex = !!i767[23]
  i766.meshMaterialIndex = i767[24]
  i766.useMeshColors = !!i767[25]
  i766.normalOffset = i767[26]
  i766.arc = i767[27]
  i766.arcMode = i767[28]
  i766.arcSpread = i767[29]
  i766.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[30], i766.arcSpeed)
  i766.donutRadius = i767[31]
  i766.position = new pc.Vec3( i767[32], i767[33], i767[34] )
  i766.rotation = new pc.Vec3( i767[35], i767[36], i767[37] )
  i766.scale = new pc.Vec3( i767[38], i767[39], i767[40] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemSizeBySpeed()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.separateAxes = !!i769[4]
  i768.range = new pc.Vec2( i769[5], i769[6] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemSizeOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.x)
  i770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.y)
  i770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.z)
  i770.separateAxes = !!i771[4]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.mode = i773[1]
  i772.animation = i773[2]
  i772.numTilesX = i773[3]
  i772.numTilesY = i773[4]
  i772.useRandomRow = !!i773[5]
  i772.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[6], i772.frameOverTime)
  i772.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.startFrame)
  i772.cycleCount = i773[8]
  i772.rowIndex = i773[9]
  i772.flipU = i773[10]
  i772.flipV = i773[11]
  i772.spriteCount = i773[12]
  var i775 = i773[13]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.sprites = i774
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[4], i778.radial)
  i778.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[5], i778.speedModifier)
  i778.space = i779[6]
  i778.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[7], i778.orbitalX)
  i778.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[8], i778.orbitalY)
  i778.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[9], i778.orbitalZ)
  i778.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[10], i778.orbitalOffsetX)
  i778.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[11], i778.orbitalOffsetY)
  i778.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[12], i778.orbitalOffsetZ)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemNoise()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.separateAxes = !!i781[1]
  i780.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.strengthX)
  i780.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.strengthY)
  i780.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[4], i780.strengthZ)
  i780.frequency = i781[5]
  i780.damping = !!i781[6]
  i780.octaveCount = i781[7]
  i780.octaveMultiplier = i781[8]
  i780.octaveScale = i781[9]
  i780.quality = i781[10]
  i780.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[11], i780.scrollSpeed)
  i780.scrollSpeedMultiplier = i781[12]
  i780.remapEnabled = !!i781[13]
  i780.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[14], i780.remapX)
  i780.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[15], i780.remapY)
  i780.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[16], i780.remapZ)
  i780.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[17], i780.positionAmount)
  i780.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[18], i780.rotationAmount)
  i780.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[19], i780.sizeAmount)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemInheritVelocity()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.mode = i783[1]
  i782.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.curve)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemForceOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.space = i785[4]
  i784.randomized = !!i785[5]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.limit)
  i786.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.limitX)
  i786.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.limitY)
  i786.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[4], i786.limitZ)
  i786.dampen = i787[5]
  i786.separateAxes = !!i787[6]
  i786.space = i787[7]
  i786.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[8], i786.drag)
  i786.multiplyDragByParticleSize = !!i787[9]
  i786.multiplyDragByParticleVelocity = !!i787[10]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'mesh')
  i788.meshCount = i789[2]
  i788.activeVertexStreamsCount = i789[3]
  i788.alignment = i789[4]
  i788.renderMode = i789[5]
  i788.sortMode = i789[6]
  i788.lengthScale = i789[7]
  i788.velocityScale = i789[8]
  i788.cameraVelocityScale = i789[9]
  i788.normalDirection = i789[10]
  i788.sortingFudge = i789[11]
  i788.minParticleSize = i789[12]
  i788.maxParticleSize = i789[13]
  i788.pivot = new pc.Vec3( i789[14], i789[15], i789[16] )
  request.r(i789[17], i789[18], 0, i788, 'trailMaterial')
  i788.applyActiveColorSpace = !!i789[19]
  i788.enabled = !!i789[20]
  request.r(i789[21], i789[22], 0, i788, 'sharedMaterial')
  var i791 = i789[23]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.sharedMaterials = i790
  i788.receiveShadows = !!i789[24]
  i788.shadowCastingMode = i789[25]
  i788.sortingLayerID = i789[26]
  i788.sortingOrder = i789[27]
  i788.lightmapIndex = i789[28]
  i788.lightmapSceneIndex = i789[29]
  i788.lightmapScaleOffset = new pc.Vec4( i789[30], i789[31], i789[32], i789[33] )
  i788.lightProbeUsage = i789[34]
  i788.reflectionProbeUsage = i789[35]
  return i788
}

Deserializers["StackManager"] = function (request, data, root) {
  var i792 = root || request.c( 'StackManager' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Stack')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i792.stacks = i794
  return i792
}

Deserializers["DragAndDrop"] = function (request, data, root) {
  var i798 = root || request.c( 'DragAndDrop' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'mainCamera')
  i798.smoothLiftCurve = new pc.AnimationCurve( { keys_flow: i799[2] } )
  i798.clampMinY = i799[3]
  i798.clampMaxY = i799[4]
  i798.liftSpeed = i799[5]
  i798.shakeAmount = i799[6]
  i798.shakeDuration = i799[7]
  i798.shakeSteps = i799[8]
  request.r(i799[9], i799[10], 0, i798, 'cursorFollower')
  return i798
}

Deserializers["Stack"] = function (request, data, root) {
  var i800 = root || request.c( 'Stack' )
  var i801 = data
  i800.disabled = !!i801[0]
  i800.moveCurve = new pc.AnimationCurve( { keys_flow: i801[1] } )
  i800.moveDuration = i801[2]
  i800.rayLength = i801[3]
  request.r(i801[4], i801[5], 0, i800, 'stackManager')
  return i800
}

Deserializers["FillStack"] = function (request, data, root) {
  var i802 = root || request.c( 'FillStack' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'hexagonPrefab')
  return i802
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i804 = root || request.c( 'TutorialManager' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'cursorFollower')
  var i807 = i805[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.tutorialPoints = i806
  request.r(i805[3], i805[4], 0, i804, 'backgroundPlaneMaterial')
  request.r(i805[5], i805[6], 0, i804, 'backgroundSpriteRenderer')
  request.r(i805[7], i805[8], 0, i804, 'backgroundTimerImage')
  var i809 = i805[9]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i804.glowMaterials = i808
  request.r(i805[10], i805[11], 0, i804, 'tutorialCursorImage')
  i804.totalDuration = i805[12]
  i804.pauseDuration = i805[13]
  i804.cursorOffset = new pc.Vec2( i805[14], i805[15] )
  i804.cursorMoveSpeed = i805[16]
  i804.backgroundFadeDuration = i805[17]
  i804.glowFadeDuration = i805[18]
  i804.targetAlpha = i805[19]
  i804.globalCooldownDuration = i805[20]
  i804.releaseCheckDelay = i805[21]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'sharedMesh')
  i812.convex = !!i813[2]
  i812.enabled = !!i813[3]
  i812.isTrigger = !!i813[4]
  request.r(i813[5], i813[6], 0, i812, 'material')
  return i812
}

Deserializers["TimeManager"] = function (request, data, root) {
  var i814 = root || request.c( 'TimeManager' )
  var i815 = data
  i814.gameDuration = i815[0]
  request.r(i815[1], i815[2], 0, i814, 'timeSlider')
  request.r(i815[3], i815[4], 0, i814, 'sliderFillImage')
  request.r(i815[5], i815[6], 0, i814, 'arrowParentRectTransform')
  request.r(i815[7], i815[8], 0, i814, 'timerBorderImage')
  request.r(i815[9], i815[10], 0, i814, 'sliderBorderImage')
  request.r(i815[11], i815[12], 0, i814, 'arrowImage')
  i814.startColor = new pc.Color(i815[13], i815[14], i815[15], i815[16])
  i814.midColor = new pc.Color(i815[17], i815[18], i815[19], i815[20])
  i814.endColor = new pc.Color(i815[21], i815[22], i815[23], i815[24])
  i814.pulseColor = new pc.Color(i815[25], i815[26], i815[27], i815[28])
  i814.pulseThreshold = i815[29]
  i814.pulseDuration = i815[30]
  i814.pauseDuration = i815[31]
  i814.maxScaleMultiplier = i815[32]
  i814.alarmDuration = i815[33]
  i814.shakeAmount = i815[34]
  i814.shakeSpeed = i815[35]
  i814.shakeRotationAmount = i815[36]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i817 = data
  i816.ambientIntensity = i817[0]
  i816.reflectionIntensity = i817[1]
  i816.ambientMode = i817[2]
  i816.ambientLight = new pc.Color(i817[3], i817[4], i817[5], i817[6])
  i816.ambientSkyColor = new pc.Color(i817[7], i817[8], i817[9], i817[10])
  i816.ambientGroundColor = new pc.Color(i817[11], i817[12], i817[13], i817[14])
  i816.ambientEquatorColor = new pc.Color(i817[15], i817[16], i817[17], i817[18])
  i816.fogColor = new pc.Color(i817[19], i817[20], i817[21], i817[22])
  i816.fogEndDistance = i817[23]
  i816.fogStartDistance = i817[24]
  i816.fogDensity = i817[25]
  i816.fog = !!i817[26]
  request.r(i817[27], i817[28], 0, i816, 'skybox')
  i816.fogMode = i817[29]
  var i819 = i817[30]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i819[i + 0]) );
  }
  i816.lightmaps = i818
  i816.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i817[31], i816.lightProbes)
  i816.lightmapsMode = i817[32]
  i816.mixedBakeMode = i817[33]
  i816.environmentLightingMode = i817[34]
  i816.ambientProbe = new pc.SphericalHarmonicsL2(i817[35])
  i816.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i817[36])
  i816.useReferenceAmbientProbe = !!i817[37]
  request.r(i817[38], i817[39], 0, i816, 'customReflection')
  request.r(i817[40], i817[41], 0, i816, 'defaultReflection')
  i816.defaultReflectionMode = i817[42]
  i816.defaultReflectionResolution = i817[43]
  i816.sunLightObjectId = i817[44]
  i816.pixelLightCount = i817[45]
  i816.defaultReflectionHDR = !!i817[46]
  i816.hasLightDataAsset = !!i817[47]
  i816.hasManualGenerate = !!i817[48]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'lightmapColor')
  request.r(i823[2], i823[3], 0, i822, 'lightmapDirection')
  request.r(i823[4], i823[5], 0, i822, 'shadowMask')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i824 = root || new UnityEngine.LightProbes()
  var i825 = data
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i835[i + 0]));
  }
  i832.ShaderCompilationErrors = i834
  i832.name = i833[1]
  i832.guid = i833[2]
  var i837 = i833[3]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.shaderDefinedKeywords = i836
  var i839 = i833[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i839[i + 0]) );
  }
  i832.passes = i838
  var i841 = i833[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i841[i + 0]) );
  }
  i832.usePasses = i840
  var i843 = i833[6]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i843[i + 0]) );
  }
  i832.defaultParameterValues = i842
  request.r(i833[7], i833[8], 0, i832, 'unityFallbackShader')
  i832.readDepth = !!i833[9]
  i832.hasDepthOnlyPass = !!i833[10]
  i832.isCreatedByShaderGraph = !!i833[11]
  i832.disableBatching = !!i833[12]
  i832.compiled = !!i833[13]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i847 = data
  i846.shaderName = i847[0]
  i846.errorMessage = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i852 = root || new pc.UnityShaderPass()
  var i853 = data
  i852.id = i853[0]
  i852.subShaderIndex = i853[1]
  i852.name = i853[2]
  i852.passType = i853[3]
  i852.grabPassTextureName = i853[4]
  i852.usePass = !!i853[5]
  i852.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[6], i852.zTest)
  i852.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[7], i852.zWrite)
  i852.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[8], i852.culling)
  i852.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i853[9], i852.blending)
  i852.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i853[10], i852.alphaBlending)
  i852.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[11], i852.colorWriteMask)
  i852.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[12], i852.offsetUnits)
  i852.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[13], i852.offsetFactor)
  i852.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[14], i852.stencilRef)
  i852.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[15], i852.stencilReadMask)
  i852.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[16], i852.stencilWriteMask)
  i852.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[17], i852.stencilOp)
  i852.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[18], i852.stencilOpFront)
  i852.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[19], i852.stencilOpBack)
  var i855 = i853[20]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i855[i + 0]) );
  }
  i852.tags = i854
  var i857 = i853[21]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i852.passDefinedKeywords = i856
  var i859 = i853[22]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i859[i + 0]) );
  }
  i852.passDefinedKeywordGroups = i858
  var i861 = i853[23]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i861[i + 0]) );
  }
  i852.variants = i860
  var i863 = i853[24]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i863[i + 0]) );
  }
  i852.excludedVariants = i862
  i852.hasDepthReader = !!i853[25]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i865 = data
  i864.val = i865[0]
  i864.name = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i867 = data
  i866.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[0], i866.src)
  i866.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[1], i866.dst)
  i866.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[2], i866.op)
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i869 = data
  i868.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[0], i868.pass)
  i868.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[1], i868.fail)
  i868.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[2], i868.zFail)
  i868.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[3], i868.comp)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i873 = data
  i872.name = i873[0]
  i872.value = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i876.keywords = i878
  i876.hasDiscard = !!i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i883 = data
  i882.passId = i883[0]
  i882.subShaderIndex = i883[1]
  var i885 = i883[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i882.keywords = i884
  i882.vertexProgram = i883[3]
  i882.fragmentProgram = i883[4]
  i882.exportedForWebGl2 = !!i883[5]
  i882.readDepth = !!i883[6]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'shader')
  i888.pass = i889[2]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i893 = data
  i892.name = i893[0]
  i892.type = i893[1]
  i892.value = new pc.Vec4( i893[2], i893[3], i893[4], i893[5] )
  i892.textureValue = i893[6]
  i892.shaderPropertyFlag = i893[7]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i895 = data
  i894.name = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'texture')
  i894.aabb = i895[3]
  i894.vertices = i895[4]
  i894.triangles = i895[5]
  i894.textureRect = UnityEngine.Rect.MinMaxRect(i895[6], i895[7], i895[8], i895[9])
  i894.packedRect = UnityEngine.Rect.MinMaxRect(i895[10], i895[11], i895[12], i895[13])
  i894.border = new pc.Vec4( i895[14], i895[15], i895[16], i895[17] )
  i894.transparency = i895[18]
  i894.bounds = i895[19]
  i894.pixelsPerUnit = i895[20]
  i894.textureWidth = i895[21]
  i894.textureHeight = i895[22]
  i894.nativeSize = new pc.Vec2( i895[23], i895[24] )
  i894.pivot = new pc.Vec2( i895[25], i895[26] )
  i894.textureRectOffset = new pc.Vec2( i895[27], i895[28] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i897 = data
  i896.name = i897[0]
  i896.wrapMode = i897[1]
  i896.isLooping = !!i897[2]
  i896.length = i897[3]
  var i899 = i897[4]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i899[i + 0]) );
  }
  i896.curves = i898
  var i901 = i897[5]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i901[i + 0]) );
  }
  i896.events = i900
  i896.halfPrecision = !!i897[6]
  i896._frameRate = i897[7]
  i896.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i897[8], i896.localBounds)
  i896.hasMuscleCurves = !!i897[9]
  var i903 = i897[10]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i896.clipMuscleConstant = i902
  i896.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i897[11], i896.clipBindingConstant)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i907 = data
  i906.path = i907[0]
  i906.hash = i907[1]
  i906.componentType = i907[2]
  i906.property = i907[3]
  i906.keys = i907[4]
  var i909 = i907[5]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i909[i + 0]) );
  }
  i906.objectReferenceKeys = i908
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i913 = data
  i912.time = i913[0]
  request.r(i913[1], i913[2], 0, i912, 'value')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i917 = data
  i916.functionName = i917[0]
  i916.floatParameter = i917[1]
  i916.intParameter = i917[2]
  i916.stringParameter = i917[3]
  request.r(i917[4], i917[5], 0, i916, 'objectReferenceParameter')
  i916.time = i917[6]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i919 = data
  i918.center = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.extends = new pc.Vec3( i919[3], i919[4], i919[5] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i923 = data
  var i925 = i923[0]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i922.genericBindings = i924
  var i927 = i923[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i922.pptrCurveMapping = i926
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i929 = data
  i928.name = i929[0]
  var i931 = i929[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i931[i + 0]) );
  }
  i928.layers = i930
  var i933 = i929[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i933[i + 0]) );
  }
  i928.parameters = i932
  i928.animationClips = i929[3]
  i928.avatarUnsupported = i929[4]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i937 = data
  i936.name = i937[0]
  i936.defaultWeight = i937[1]
  i936.blendingMode = i937[2]
  i936.avatarMask = i937[3]
  i936.syncedLayerIndex = i937[4]
  i936.syncedLayerAffectsTiming = !!i937[5]
  i936.syncedLayers = i937[6]
  i936.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i937[7], i936.stateMachine)
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i939 = data
  i938.id = i939[0]
  i938.name = i939[1]
  i938.path = i939[2]
  var i941 = i939[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i941[i + 0]) );
  }
  i938.states = i940
  var i943 = i939[4]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i943[i + 0]) );
  }
  i938.machines = i942
  var i945 = i939[5]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i945[i + 0]) );
  }
  i938.entryStateTransitions = i944
  var i947 = i939[6]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i947[i + 0]) );
  }
  i938.exitStateTransitions = i946
  var i949 = i939[7]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i949[i + 0]) );
  }
  i938.anyStateTransitions = i948
  i938.defaultStateId = i939[8]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i953 = data
  i952.id = i953[0]
  i952.name = i953[1]
  i952.cycleOffset = i953[2]
  i952.cycleOffsetParameter = i953[3]
  i952.cycleOffsetParameterActive = !!i953[4]
  i952.mirror = !!i953[5]
  i952.mirrorParameter = i953[6]
  i952.mirrorParameterActive = !!i953[7]
  i952.motionId = i953[8]
  i952.nameHash = i953[9]
  i952.fullPathHash = i953[10]
  i952.speed = i953[11]
  i952.speedParameter = i953[12]
  i952.speedParameterActive = !!i953[13]
  i952.tag = i953[14]
  i952.tagHash = i953[15]
  i952.writeDefaultValues = !!i953[16]
  var i955 = i953[17]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.behaviours = i954
  var i957 = i953[18]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i957[i + 0]) );
  }
  i952.transitions = i956
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i963 = data
  i962.fullPath = i963[0]
  i962.canTransitionToSelf = !!i963[1]
  i962.duration = i963[2]
  i962.exitTime = i963[3]
  i962.hasExitTime = !!i963[4]
  i962.hasFixedDuration = !!i963[5]
  i962.interruptionSource = i963[6]
  i962.offset = i963[7]
  i962.orderedInterruption = !!i963[8]
  i962.destinationStateId = i963[9]
  i962.isExit = !!i963[10]
  i962.mute = !!i963[11]
  i962.solo = !!i963[12]
  var i965 = i963[13]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i965[i + 0]) );
  }
  i962.conditions = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i971 = data
  i970.destinationStateId = i971[0]
  i970.isExit = !!i971[1]
  i970.mute = !!i971[2]
  i970.solo = !!i971[3]
  var i973 = i971[4]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i973[i + 0]) );
  }
  i970.conditions = i972
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i977 = data
  i976.defaultBool = !!i977[0]
  i976.defaultFloat = i977[1]
  i976.defaultInt = i977[2]
  i976.name = i977[3]
  i976.nameHash = i977[4]
  i976.type = i977[5]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i981[i + 0]) );
  }
  i978.files = i980
  i978.componentToPrefabIds = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i985 = data
  i984.path = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'unityObject')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i989[i + 0]) );
  }
  i986.scriptsExecutionOrder = i988
  var i991 = i987[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i991[i + 0]) );
  }
  i986.sortingLayers = i990
  var i993 = i987[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i993[i + 0]) );
  }
  i986.cullingLayers = i992
  i986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i987[3], i986.timeSettings)
  i986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i987[4], i986.physicsSettings)
  i986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i987[5], i986.physics2DSettings)
  i986.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i987[6], i986.qualitySettings)
  i986.enableRealtimeShadows = !!i987[7]
  i986.enableAutoInstancing = !!i987[8]
  i986.enableStaticBatching = !!i987[9]
  i986.enableDynamicBatching = !!i987[10]
  i986.lightmapEncodingQuality = i987[11]
  i986.desiredColorSpace = i987[12]
  var i995 = i987[13]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i986.allTags = i994
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i999 = data
  i998.name = i999[0]
  i998.value = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  i1002.value = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1009 = data
  i1008.fixedDeltaTime = i1009[0]
  i1008.maximumDeltaTime = i1009[1]
  i1008.timeScale = i1009[2]
  i1008.maximumParticleTimestep = i1009[3]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1011 = data
  i1010.gravity = new pc.Vec3( i1011[0], i1011[1], i1011[2] )
  i1010.defaultSolverIterations = i1011[3]
  i1010.bounceThreshold = i1011[4]
  i1010.autoSyncTransforms = !!i1011[5]
  i1010.autoSimulation = !!i1011[6]
  var i1013 = i1011[7]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1013[i + 0]) );
  }
  i1010.collisionMatrix = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.layerId = i1017[1]
  i1016.otherLayerId = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'material')
  i1018.gravity = new pc.Vec2( i1019[2], i1019[3] )
  i1018.positionIterations = i1019[4]
  i1018.velocityIterations = i1019[5]
  i1018.velocityThreshold = i1019[6]
  i1018.maxLinearCorrection = i1019[7]
  i1018.maxAngularCorrection = i1019[8]
  i1018.maxTranslationSpeed = i1019[9]
  i1018.maxRotationSpeed = i1019[10]
  i1018.baumgarteScale = i1019[11]
  i1018.baumgarteTOIScale = i1019[12]
  i1018.timeToSleep = i1019[13]
  i1018.linearSleepTolerance = i1019[14]
  i1018.angularSleepTolerance = i1019[15]
  i1018.defaultContactOffset = i1019[16]
  i1018.autoSimulation = !!i1019[17]
  i1018.queriesHitTriggers = !!i1019[18]
  i1018.queriesStartInColliders = !!i1019[19]
  i1018.callbacksOnDisable = !!i1019[20]
  i1018.reuseCollisionCallbacks = !!i1019[21]
  i1018.autoSyncTransforms = !!i1019[22]
  var i1021 = i1019[23]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1029[i + 0]) );
  }
  i1026.qualityLevels = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.names = i1030
  i1026.shadows = i1027[2]
  i1026.anisotropicFiltering = i1027[3]
  i1026.antiAliasing = i1027[4]
  i1026.lodBias = i1027[5]
  i1026.shadowCascades = i1027[6]
  i1026.shadowDistance = i1027[7]
  i1026.shadowmaskMode = i1027[8]
  i1026.shadowProjection = i1027[9]
  i1026.shadowResolution = i1027[10]
  i1026.softParticles = !!i1027[11]
  i1026.softVegetation = !!i1027[12]
  i1026.activeColorSpace = i1027[13]
  i1026.desiredColorSpace = i1027[14]
  i1026.masterTextureLimit = i1027[15]
  i1026.maxQueuedFrames = i1027[16]
  i1026.particleRaycastBudget = i1027[17]
  i1026.pixelLightCount = i1027[18]
  i1026.realtimeReflectionProbes = !!i1027[19]
  i1026.shadowCascade2Split = i1027[20]
  i1026.shadowCascade4Split = new pc.Vec3( i1027[21], i1027[22], i1027[23] )
  i1026.streamingMipmapsActive = !!i1027[24]
  i1026.vSyncCount = i1027[25]
  i1026.asyncUploadBufferSize = i1027[26]
  i1026.asyncUploadTimeSlice = i1027[27]
  i1026.billboardsFaceCameraPosition = !!i1027[28]
  i1026.shadowNearPlaneOffset = i1027[29]
  i1026.streamingMipmapsMemoryBudget = i1027[30]
  i1026.maximumLODLevel = i1027[31]
  i1026.streamingMipmapsAddAllCameras = !!i1027[32]
  i1026.streamingMipmapsMaxLevelReduction = i1027[33]
  i1026.streamingMipmapsRenderersPerFrame = i1027[34]
  i1026.resolutionScalingFixedDPIFactor = i1027[35]
  i1026.streamingMipmapsMaxFileIORequests = i1027[36]
  i1026.currentQualityLevel = i1027[37]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1037 = data
  i1036.weight = i1037[0]
  i1036.vertices = i1037[1]
  i1036.normals = i1037[2]
  i1036.tangents = i1037[3]
  return i1036
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'm_ObjectArgument')
  i1038.m_ObjectArgumentAssemblyTypeName = i1039[2]
  i1038.m_IntArgument = i1039[3]
  i1038.m_FloatArgument = i1039[4]
  i1038.m_StringArgument = i1039[5]
  i1038.m_BoolArgument = !!i1039[6]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1043 = data
  i1042.mode = i1043[0]
  i1042.parameter = i1043[1]
  i1042.threshold = i1043[2]
  return i1042
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[5],"57":[36],"58":[36],"59":[36],"60":[36],"61":[36],"62":[36],"63":[36],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[5],"79":[13],"80":[81],"82":[81],"23":[21],"83":[84],"85":[6],"86":[84],"87":[21],"88":[21],"25":[23],"28":[27,21],"89":[21],"24":[23],"90":[21],"91":[21],"92":[21],"93":[21],"94":[21],"95":[21],"96":[21],"97":[21],"98":[21],"29":[27,21],"99":[21],"100":[21],"101":[21],"26":[21],"102":[27,21],"103":[21],"104":[18],"105":[18],"19":[18],"106":[18],"107":[5],"108":[5],"109":[21],"110":[13,21],"111":[21,27],"112":[21],"113":[27,21],"114":[13],"115":[27,21],"116":[21],"117":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","BakeHelper","CursorFollower","UnityEngine.Camera","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Texture2D","Hexagon","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioListener","UnityEngine.RectTransform","EndGame","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Slider","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.UI.Button","PlatformManager","GroundPlatform","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.ParticleSystemRenderer","StackManager","Stack","DragAndDrop","FillStack","TutorialManager","UnityEngine.MeshCollider","TimeManager","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "04/04/2026 17:22:47";

Deserializers.lunaDaysRunning = "29.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "38436";

Deserializers.projectId = "c4c25e8ac02e28242b71a38d2f7d0a01";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1762";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3617";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.test-3d";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "6ebbac6e-4cc4-44c3-bcd5-362d7f1b08c7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

