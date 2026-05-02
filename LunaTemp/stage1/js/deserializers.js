var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointSpring' )
  var i453 = data
  i452.spring = i453[0]
  i452.damper = i453[1]
  i452.targetPosition = i453[2]
  return i452
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointMotor' )
  var i455 = data
  i454.m_TargetVelocity = i455[0]
  i454.m_Force = i455[1]
  i454.m_FreeSpin = i455[2]
  return i454
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointLimits' )
  var i457 = data
  i456.m_Min = i457[0]
  i456.m_Max = i457[1]
  i456.m_Bounciness = i457[2]
  i456.m_BounceMinVelocity = i457[3]
  i456.m_ContactDistance = i457[4]
  i456.minBounce = i457[5]
  i456.maxBounce = i457[6]
  return i456
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointDrive' )
  var i459 = data
  i458.m_PositionSpring = i459[0]
  i458.m_PositionDamper = i459[1]
  i458.m_MaximumForce = i459[2]
  i458.m_UseAcceleration = i459[3]
  return i458
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i461 = data
  i460.m_Spring = i461[0]
  i460.m_Damper = i461[1]
  return i460
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i463 = data
  i462.m_Limit = i463[0]
  i462.m_Bounciness = i463[1]
  i462.m_ContactDistance = i463[2]
  return i462
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i465 = data
  i464.m_ExtremumSlip = i465[0]
  i464.m_ExtremumValue = i465[1]
  i464.m_AsymptoteSlip = i465[2]
  i464.m_AsymptoteValue = i465[3]
  i464.m_Stiffness = i465[4]
  return i464
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i467 = data
  i466.m_LowerAngle = i467[0]
  i466.m_UpperAngle = i467[1]
  return i466
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i469 = data
  i468.m_MotorSpeed = i469[0]
  i468.m_MaximumMotorTorque = i469[1]
  return i468
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i471 = data
  i470.m_DampingRatio = i471[0]
  i470.m_Frequency = i471[1]
  i470.m_Angle = i471[2]
  return i470
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i473 = data
  i472.m_LowerTranslation = i473[0]
  i472.m_UpperTranslation = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i475 = data
  i474.name = i475[0]
  i474.halfPrecision = !!i475[1]
  i474.useSimplification = !!i475[2]
  i474.useUInt32IndexFormat = !!i475[3]
  i474.vertexCount = i475[4]
  i474.aabb = i475[5]
  var i477 = i475[6]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( !!i477[i + 0] );
  }
  i474.streams = i476
  i474.vertices = i475[7]
  var i479 = i475[8]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i479[i + 0]) );
  }
  i474.subMeshes = i478
  var i481 = i475[9]
  var i480 = []
  for(var i = 0; i < i481.length; i += 16) {
    i480.push( new pc.Mat4().setData(i481[i + 0], i481[i + 1], i481[i + 2], i481[i + 3],  i481[i + 4], i481[i + 5], i481[i + 6], i481[i + 7],  i481[i + 8], i481[i + 9], i481[i + 10], i481[i + 11],  i481[i + 12], i481[i + 13], i481[i + 14], i481[i + 15]) );
  }
  i474.bindposes = i480
  var i483 = i475[10]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i483[i + 0]) );
  }
  i474.blendShapes = i482
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i489 = data
  i488.triangles = i489[0]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i495 = data
  i494.name = i495[0]
  var i497 = i495[1]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i497[i + 0]) );
  }
  i494.frames = i496
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i498 = root || new pc.UnityMaterial()
  var i499 = data
  i498.name = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'shader')
  i498.renderQueue = i499[3]
  i498.enableInstancing = !!i499[4]
  var i501 = i499[5]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i501[i + 0]) );
  }
  i498.floatParameters = i500
  var i503 = i499[6]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i503[i + 0]) );
  }
  i498.colorParameters = i502
  var i505 = i499[7]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i505[i + 0]) );
  }
  i498.vectorParameters = i504
  var i507 = i499[8]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i507[i + 0]) );
  }
  i498.textureParameters = i506
  var i509 = i499[9]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i509[i + 0]) );
  }
  i498.materialFlags = i508
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Color(i517[1], i517[2], i517[3], i517[4])
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = new pc.Vec4( i521[1], i521[2], i521[3], i521[4] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i525 = data
  i524.name = i525[0]
  request.r(i525[1], i525[2], 0, i524, 'value')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i529 = data
  i528.name = i529[0]
  i528.enabled = !!i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i531 = data
  i530.name = i531[0]
  i530.width = i531[1]
  i530.height = i531[2]
  i530.mipmapCount = i531[3]
  i530.anisoLevel = i531[4]
  i530.filterMode = i531[5]
  i530.hdr = !!i531[6]
  i530.format = i531[7]
  i530.wrapMode = i531[8]
  i530.alphaIsTransparency = !!i531[9]
  i530.alphaSource = i531[10]
  i530.graphicsFormat = i531[11]
  i530.sRGBTexture = !!i531[12]
  i530.desiredColorSpace = i531[13]
  i530.wrapU = i531[14]
  i530.wrapV = i531[15]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i533 = data
  i532.position = new pc.Vec3( i533[0], i533[1], i533[2] )
  i532.scale = new pc.Vec3( i533[3], i533[4], i533[5] )
  i532.rotation = new pc.Quat(i533[6], i533[7], i533[8], i533[9])
  return i532
}

Deserializers["CursorFollower"] = function (request, data, root) {
  var i534 = root || request.c( 'CursorFollower' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'mainCamera')
  i534.fadeDuration = i535[2]
  request.r(i535[3], i535[4], 0, i534, 'spriteRenderer')
  request.r(i535[5], i535[6], 0, i534, 'shadowRenderer')
  request.r(i535[7], i535[8], 0, i534, 'animator')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'animatorController')
  request.r(i537[2], i537[3], 0, i536, 'avatar')
  i536.updateMode = i537[4]
  i536.hasTransformHierarchy = !!i537[5]
  i536.applyRootMotion = !!i537[6]
  var i539 = i537[7]
  var i538 = []
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 2, i538, '')
  }
  i536.humanBones = i538
  i536.enabled = !!i537[8]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i543 = data
  i542.color = new pc.Color(i543[0], i543[1], i543[2], i543[3])
  request.r(i543[4], i543[5], 0, i542, 'sprite')
  i542.flipX = !!i543[6]
  i542.flipY = !!i543[7]
  i542.drawMode = i543[8]
  i542.size = new pc.Vec2( i543[9], i543[10] )
  i542.tileMode = i543[11]
  i542.adaptiveModeThreshold = i543[12]
  i542.maskInteraction = i543[13]
  i542.spriteSortPoint = i543[14]
  i542.enabled = !!i543[15]
  request.r(i543[16], i543[17], 0, i542, 'sharedMaterial')
  var i545 = i543[18]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.sharedMaterials = i544
  i542.receiveShadows = !!i543[19]
  i542.shadowCastingMode = i543[20]
  i542.sortingLayerID = i543[21]
  i542.sortingOrder = i543[22]
  i542.lightmapIndex = i543[23]
  i542.lightmapSceneIndex = i543[24]
  i542.lightmapScaleOffset = new pc.Vec4( i543[25], i543[26], i543[27], i543[28] )
  i542.lightProbeUsage = i543[29]
  i542.reflectionProbeUsage = i543[30]
  return i542
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'm_RootBone')
  var i551 = i549[2]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i548.m_BoneTransforms = i550
  i548.m_AlwaysUpdate = !!i549[3]
  i548.m_AutoRebind = !!i549[4]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i553 = data
  i552.name = i553[0]
  i552.tagId = i553[1]
  i552.enabled = !!i553[2]
  i552.isStatic = !!i553[3]
  i552.layer = i553[4]
  return i552
}

Deserializers["Hexagon"] = function (request, data, root) {
  var i554 = root || request.c( 'Hexagon' )
  var i555 = data
  var i557 = i555[0]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Hexagon+ColorMaterialPair', i557[i + 0]) );
  }
  i554.colorMaterials = i556
  request.r(i555[1], i555[2], 0, i554, 'hexRenderer')
  var i559 = i555[3]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i554.anchors = i558
  i554.jumpCurve = new pc.AnimationCurve( { keys_flow: i555[4] } )
  i554.removeCurve = new pc.AnimationCurve( { keys_flow: i555[5] } )
  i554.jumpHeight = i555[6]
  i554.jumpDuration = i555[7]
  i554.removeScaleDuration = i555[8]
  return i554
}

Deserializers["Hexagon+ColorMaterialPair"] = function (request, data, root) {
  var i562 = root || request.c( 'Hexagon+ColorMaterialPair' )
  var i563 = data
  i562.color = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'material')
  i562.particleGradient = i563[3] ? new pc.ColorGradient(i563[3][0], i563[3][1], i563[3][2]) : null
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'sharedMesh')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'additionalVertexStreams')
  i566.enabled = !!i567[2]
  request.r(i567[3], i567[4], 0, i566, 'sharedMaterial')
  var i569 = i567[5]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.sharedMaterials = i568
  i566.receiveShadows = !!i567[6]
  i566.shadowCastingMode = i567[7]
  i566.sortingLayerID = i567[8]
  i566.sortingOrder = i567[9]
  i566.lightmapIndex = i567[10]
  i566.lightmapSceneIndex = i567[11]
  i566.lightmapScaleOffset = new pc.Vec4( i567[12], i567[13], i567[14], i567[15] )
  i566.lightProbeUsage = i567[16]
  i566.reflectionProbeUsage = i567[17]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i571 = data
  i570.name = i571[0]
  i570.atlasId = i571[1]
  i570.mipmapCount = i571[2]
  i570.hdr = !!i571[3]
  i570.size = i571[4]
  i570.anisoLevel = i571[5]
  i570.filterMode = i571[6]
  var i573 = i571[7]
  var i572 = []
  for(var i = 0; i < i573.length; i += 4) {
    i572.push( UnityEngine.Rect.MinMaxRect(i573[i + 0], i573[i + 1], i573[i + 2], i573[i + 3]) );
  }
  i570.rects = i572
  i570.wrapU = i571[8]
  i570.wrapV = i571[9]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i577 = data
  i576.name = i577[0]
  i576.index = i577[1]
  i576.startup = !!i577[2]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i579 = data
  i578.aspect = i579[0]
  i578.orthographic = !!i579[1]
  i578.orthographicSize = i579[2]
  i578.backgroundColor = new pc.Color(i579[3], i579[4], i579[5], i579[6])
  i578.nearClipPlane = i579[7]
  i578.farClipPlane = i579[8]
  i578.fieldOfView = i579[9]
  i578.depth = i579[10]
  i578.clearFlags = i579[11]
  i578.cullingMask = i579[12]
  i578.rect = i579[13]
  request.r(i579[14], i579[15], 0, i578, 'targetTexture')
  i578.usePhysicalProperties = !!i579[16]
  i578.focalLength = i579[17]
  i578.sensorSize = new pc.Vec2( i579[18], i579[19] )
  i578.lensShift = new pc.Vec2( i579[20], i579[21] )
  i578.gateFit = i579[22]
  i578.commandBufferCount = i579[23]
  i578.cameraType = i579[24]
  i578.enabled = !!i579[25]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i581 = data
  i580.type = i581[0]
  i580.color = new pc.Color(i581[1], i581[2], i581[3], i581[4])
  i580.cullingMask = i581[5]
  i580.intensity = i581[6]
  i580.range = i581[7]
  i580.spotAngle = i581[8]
  i580.shadows = i581[9]
  i580.shadowNormalBias = i581[10]
  i580.shadowBias = i581[11]
  i580.shadowStrength = i581[12]
  i580.shadowResolution = i581[13]
  i580.lightmapBakeType = i581[14]
  i580.renderMode = i581[15]
  request.r(i581[16], i581[17], 0, i580, 'cookie')
  i580.cookieSize = i581[18]
  i580.shadowNearPlane = i581[19]
  i580.occlusionMaskChannel = i581[20]
  i580.enabled = !!i581[21]
  return i580
}

Deserializers["PlatformManager"] = function (request, data, root) {
  var i582 = root || request.c( 'PlatformManager' )
  var i583 = data
  var i585 = i583[0]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.GroundPlatforms = i584
  request.r(i583[1], i583[2], 0, i582, 'cursorFollower')
  i582.weightMatchCreation = i583[3]
  i582.weightChainContinuation = i583[4]
  i582.weightUnderColorMatch = i583[5]
  i582.weightNeighborChainPotential = i583[6]
  i582.weightFutureMatchPotential = i583[7]
  i582.weightGlobalOpportunity = i583[8]
  i582.weightEmptyUnderneathPreference = i583[9]
  i582.matchCountThreshold = i583[10]
  return i582
}

Deserializers["GroundPlatform"] = function (request, data, root) {
  var i588 = root || request.c( 'GroundPlatform' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'Container')
  request.r(i589[2], i589[3], 0, i588, 'removeParticle')
  request.r(i589[4], i589[5], 0, i588, 'glowMaterial')
  request.r(i589[6], i589[7], 0, i588, 'platformRenderer')
  var i591 = i589[8]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.neighborPlatforms = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i593 = data
  i592.center = new pc.Vec3( i593[0], i593[1], i593[2] )
  i592.radius = i593[3]
  i592.enabled = !!i593[4]
  i592.isTrigger = !!i593[5]
  request.r(i593[6], i593[7], 0, i592, 'material')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i595 = data
  i594.mass = i595[0]
  i594.drag = i595[1]
  i594.angularDrag = i595[2]
  i594.useGravity = !!i595[3]
  i594.isKinematic = !!i595[4]
  i594.constraints = i595[5]
  i594.maxAngularVelocity = i595[6]
  i594.collisionDetectionMode = i595[7]
  i594.interpolation = i595[8]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i597 = data
  i596.center = new pc.Vec3( i597[0], i597[1], i597[2] )
  i596.size = new pc.Vec3( i597[3], i597[4], i597[5] )
  i596.enabled = !!i597[6]
  i596.isTrigger = !!i597[7]
  request.r(i597[8], i597[9], 0, i596, 'material')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i599 = data
  i598.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i599[0], i598.main)
  i598.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i599[1], i598.colorBySpeed)
  i598.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i599[2], i598.colorOverLifetime)
  i598.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i599[3], i598.emission)
  i598.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i599[4], i598.rotationBySpeed)
  i598.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i599[5], i598.rotationOverLifetime)
  i598.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i599[6], i598.shape)
  i598.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i599[7], i598.sizeBySpeed)
  i598.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i599[8], i598.sizeOverLifetime)
  i598.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i599[9], i598.textureSheetAnimation)
  i598.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i599[10], i598.velocityOverLifetime)
  i598.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i599[11], i598.noise)
  i598.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i599[12], i598.inheritVelocity)
  i598.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i599[13], i598.forceOverLifetime)
  i598.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i599[14], i598.limitVelocityOverLifetime)
  i598.useAutoRandomSeed = !!i599[15]
  i598.randomSeed = i599[16]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemMain()
  var i601 = data
  i600.duration = i601[0]
  i600.loop = !!i601[1]
  i600.prewarm = !!i601[2]
  i600.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.startDelay)
  i600.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[4], i600.startLifetime)
  i600.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[5], i600.startSpeed)
  i600.startSize3D = !!i601[6]
  i600.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[7], i600.startSizeX)
  i600.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[8], i600.startSizeY)
  i600.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[9], i600.startSizeZ)
  i600.startRotation3D = !!i601[10]
  i600.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[11], i600.startRotationX)
  i600.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[12], i600.startRotationY)
  i600.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[13], i600.startRotationZ)
  i600.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i601[14], i600.startColor)
  i600.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[15], i600.gravityModifier)
  i600.simulationSpace = i601[16]
  request.r(i601[17], i601[18], 0, i600, 'customSimulationSpace')
  i600.simulationSpeed = i601[19]
  i600.useUnscaledTime = !!i601[20]
  i600.scalingMode = i601[21]
  i600.playOnAwake = !!i601[22]
  i600.maxParticles = i601[23]
  i600.emitterVelocityMode = i601[24]
  i600.stopAction = i601[25]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i602 = root || new pc.MinMaxCurve()
  var i603 = data
  i602.mode = i603[0]
  i602.curveMin = new pc.AnimationCurve( { keys_flow: i603[1] } )
  i602.curveMax = new pc.AnimationCurve( { keys_flow: i603[2] } )
  i602.curveMultiplier = i603[3]
  i602.constantMin = i603[4]
  i602.constantMax = i603[5]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i604 = root || new pc.MinMaxGradient()
  var i605 = data
  i604.mode = i605[0]
  i604.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i605[1], i604.gradientMin)
  i604.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i605[2], i604.gradientMax)
  i604.colorMin = new pc.Color(i605[3], i605[4], i605[5], i605[6])
  i604.colorMax = new pc.Color(i605[7], i605[8], i605[9], i605[10])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i607 = data
  i606.mode = i607[0]
  var i609 = i607[1]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i609[i + 0]) );
  }
  i606.colorKeys = i608
  var i611 = i607[2]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i611[i + 0]) );
  }
  i606.alphaKeys = i610
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemColorBySpeed()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i613[1], i612.color)
  i612.range = new pc.Vec2( i613[2], i613[3] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i617 = data
  i616.color = new pc.Color(i617[0], i617[1], i617[2], i617[3])
  i616.time = i617[4]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i621 = data
  i620.alpha = i621[0]
  i620.time = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemColorOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i623[1], i622.color)
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemEmitter()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[1], i624.rateOverTime)
  i624.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[2], i624.rateOverDistance)
  var i627 = i625[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i627[i + 0]) );
  }
  i624.bursts = i626
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemBurst()
  var i631 = data
  i630.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[0], i630.count)
  i630.cycleCount = i631[1]
  i630.minCount = i631[2]
  i630.maxCount = i631[3]
  i630.repeatInterval = i631[4]
  i630.time = i631[5]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemRotationBySpeed()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[1], i632.x)
  i632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[2], i632.y)
  i632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[3], i632.z)
  i632.separateAxes = !!i633[4]
  i632.range = new pc.Vec2( i633[5], i633[6] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemRotationOverLifetime()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[1], i634.x)
  i634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.y)
  i634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.z)
  i634.separateAxes = !!i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemShape()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.shapeType = i637[1]
  i636.randomDirectionAmount = i637[2]
  i636.sphericalDirectionAmount = i637[3]
  i636.randomPositionAmount = i637[4]
  i636.alignToDirection = !!i637[5]
  i636.radius = i637[6]
  i636.radiusMode = i637[7]
  i636.radiusSpread = i637[8]
  i636.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.radiusSpeed)
  i636.radiusThickness = i637[10]
  i636.angle = i637[11]
  i636.length = i637[12]
  i636.boxThickness = new pc.Vec3( i637[13], i637[14], i637[15] )
  i636.meshShapeType = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'mesh')
  request.r(i637[19], i637[20], 0, i636, 'meshRenderer')
  request.r(i637[21], i637[22], 0, i636, 'skinnedMeshRenderer')
  i636.useMeshMaterialIndex = !!i637[23]
  i636.meshMaterialIndex = i637[24]
  i636.useMeshColors = !!i637[25]
  i636.normalOffset = i637[26]
  i636.arc = i637[27]
  i636.arcMode = i637[28]
  i636.arcSpread = i637[29]
  i636.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[30], i636.arcSpeed)
  i636.donutRadius = i637[31]
  i636.position = new pc.Vec3( i637[32], i637[33], i637[34] )
  i636.rotation = new pc.Vec3( i637[35], i637[36], i637[37] )
  i636.scale = new pc.Vec3( i637[38], i637[39], i637[40] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemSizeBySpeed()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.x)
  i638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.y)
  i638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.z)
  i638.separateAxes = !!i639[4]
  i638.range = new pc.Vec2( i639[5], i639[6] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemSizeOverLifetime()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.separateAxes = !!i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.mode = i643[1]
  i642.animation = i643[2]
  i642.numTilesX = i643[3]
  i642.numTilesY = i643[4]
  i642.useRandomRow = !!i643[5]
  i642.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[6], i642.frameOverTime)
  i642.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[7], i642.startFrame)
  i642.cycleCount = i643[8]
  i642.rowIndex = i643[9]
  i642.flipU = i643[10]
  i642.flipV = i643[11]
  i642.spriteCount = i643[12]
  var i645 = i643[13]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.sprites = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.x)
  i648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.y)
  i648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[3], i648.z)
  i648.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[4], i648.radial)
  i648.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[5], i648.speedModifier)
  i648.space = i649[6]
  i648.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[7], i648.orbitalX)
  i648.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[8], i648.orbitalY)
  i648.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[9], i648.orbitalZ)
  i648.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[10], i648.orbitalOffsetX)
  i648.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[11], i648.orbitalOffsetY)
  i648.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[12], i648.orbitalOffsetZ)
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemNoise()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.separateAxes = !!i651[1]
  i650.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.strengthX)
  i650.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.strengthY)
  i650.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[4], i650.strengthZ)
  i650.frequency = i651[5]
  i650.damping = !!i651[6]
  i650.octaveCount = i651[7]
  i650.octaveMultiplier = i651[8]
  i650.octaveScale = i651[9]
  i650.quality = i651[10]
  i650.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[11], i650.scrollSpeed)
  i650.scrollSpeedMultiplier = i651[12]
  i650.remapEnabled = !!i651[13]
  i650.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[14], i650.remapX)
  i650.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[15], i650.remapY)
  i650.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[16], i650.remapZ)
  i650.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[17], i650.positionAmount)
  i650.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[18], i650.rotationAmount)
  i650.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[19], i650.sizeAmount)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemInheritVelocity()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.mode = i653[1]
  i652.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.curve)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemForceOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[1], i654.x)
  i654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.y)
  i654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[3], i654.z)
  i654.space = i655[4]
  i654.randomized = !!i655[5]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.limit)
  i656.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.limitX)
  i656.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.limitY)
  i656.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[4], i656.limitZ)
  i656.dampen = i657[5]
  i656.separateAxes = !!i657[6]
  i656.space = i657[7]
  i656.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[8], i656.drag)
  i656.multiplyDragByParticleSize = !!i657[9]
  i656.multiplyDragByParticleVelocity = !!i657[10]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'mesh')
  i658.meshCount = i659[2]
  i658.activeVertexStreamsCount = i659[3]
  i658.alignment = i659[4]
  i658.renderMode = i659[5]
  i658.sortMode = i659[6]
  i658.lengthScale = i659[7]
  i658.velocityScale = i659[8]
  i658.cameraVelocityScale = i659[9]
  i658.normalDirection = i659[10]
  i658.sortingFudge = i659[11]
  i658.minParticleSize = i659[12]
  i658.maxParticleSize = i659[13]
  i658.pivot = new pc.Vec3( i659[14], i659[15], i659[16] )
  request.r(i659[17], i659[18], 0, i658, 'trailMaterial')
  i658.applyActiveColorSpace = !!i659[19]
  i658.enabled = !!i659[20]
  request.r(i659[21], i659[22], 0, i658, 'sharedMaterial')
  var i661 = i659[23]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.sharedMaterials = i660
  i658.receiveShadows = !!i659[24]
  i658.shadowCastingMode = i659[25]
  i658.sortingLayerID = i659[26]
  i658.sortingOrder = i659[27]
  i658.lightmapIndex = i659[28]
  i658.lightmapSceneIndex = i659[29]
  i658.lightmapScaleOffset = new pc.Vec4( i659[30], i659[31], i659[32], i659[33] )
  i658.lightProbeUsage = i659[34]
  i658.reflectionProbeUsage = i659[35]
  return i658
}

Deserializers["StackManager"] = function (request, data, root) {
  var i662 = root || request.c( 'StackManager' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('Stack')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.stacks = i664
  return i662
}

Deserializers["DragAndDrop"] = function (request, data, root) {
  var i668 = root || request.c( 'DragAndDrop' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'mainCamera')
  i668.smoothLiftCurve = new pc.AnimationCurve( { keys_flow: i669[2] } )
  i668.clampMinY = i669[3]
  i668.clampMaxY = i669[4]
  i668.liftSpeed = i669[5]
  i668.shakeAmount = i669[6]
  i668.shakeDuration = i669[7]
  i668.shakeSteps = i669[8]
  request.r(i669[9], i669[10], 0, i668, 'cursorFollower')
  return i668
}

Deserializers["Stack"] = function (request, data, root) {
  var i670 = root || request.c( 'Stack' )
  var i671 = data
  i670.disabled = !!i671[0]
  i670.moveCurve = new pc.AnimationCurve( { keys_flow: i671[1] } )
  i670.moveDuration = i671[2]
  i670.rayLength = i671[3]
  request.r(i671[4], i671[5], 0, i670, 'stackManager')
  return i670
}

Deserializers["FillStack"] = function (request, data, root) {
  var i672 = root || request.c( 'FillStack' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'hexagonPrefab')
  return i672
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_FirstSelected')
  i674.m_sendNavigationEvents = !!i675[2]
  i674.m_DragThreshold = i675[3]
  return i674
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i677 = data
  i676.m_HorizontalAxis = i677[0]
  i676.m_VerticalAxis = i677[1]
  i676.m_SubmitButton = i677[2]
  i676.m_CancelButton = i677[3]
  i676.m_InputActionsPerSecond = i677[4]
  i676.m_RepeatDelay = i677[5]
  i676.m_ForceModuleActive = !!i677[6]
  i676.m_SendPointerHoverToParent = !!i677[7]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i679 = data
  i678.ambientIntensity = i679[0]
  i678.reflectionIntensity = i679[1]
  i678.ambientMode = i679[2]
  i678.ambientLight = new pc.Color(i679[3], i679[4], i679[5], i679[6])
  i678.ambientSkyColor = new pc.Color(i679[7], i679[8], i679[9], i679[10])
  i678.ambientGroundColor = new pc.Color(i679[11], i679[12], i679[13], i679[14])
  i678.ambientEquatorColor = new pc.Color(i679[15], i679[16], i679[17], i679[18])
  i678.fogColor = new pc.Color(i679[19], i679[20], i679[21], i679[22])
  i678.fogEndDistance = i679[23]
  i678.fogStartDistance = i679[24]
  i678.fogDensity = i679[25]
  i678.fog = !!i679[26]
  request.r(i679[27], i679[28], 0, i678, 'skybox')
  i678.fogMode = i679[29]
  var i681 = i679[30]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i681[i + 0]) );
  }
  i678.lightmaps = i680
  i678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i679[31], i678.lightProbes)
  i678.lightmapsMode = i679[32]
  i678.mixedBakeMode = i679[33]
  i678.environmentLightingMode = i679[34]
  i678.ambientProbe = new pc.SphericalHarmonicsL2(i679[35])
  i678.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i679[36])
  i678.useReferenceAmbientProbe = !!i679[37]
  request.r(i679[38], i679[39], 0, i678, 'customReflection')
  request.r(i679[40], i679[41], 0, i678, 'defaultReflection')
  i678.defaultReflectionMode = i679[42]
  i678.defaultReflectionResolution = i679[43]
  i678.sunLightObjectId = i679[44]
  i678.pixelLightCount = i679[45]
  i678.defaultReflectionHDR = !!i679[46]
  i678.hasLightDataAsset = !!i679[47]
  i678.hasManualGenerate = !!i679[48]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'lightmapColor')
  request.r(i685[2], i685[3], 0, i684, 'lightmapDirection')
  request.r(i685[4], i685[5], 0, i684, 'shadowMask')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i686 = root || new UnityEngine.LightProbes()
  var i687 = data
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i695 = data
  var i697 = i695[0]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i697[i + 0]));
  }
  i694.ShaderCompilationErrors = i696
  i694.name = i695[1]
  i694.guid = i695[2]
  var i699 = i695[3]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.shaderDefinedKeywords = i698
  var i701 = i695[4]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i701[i + 0]) );
  }
  i694.passes = i700
  var i703 = i695[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i703[i + 0]) );
  }
  i694.usePasses = i702
  var i705 = i695[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i705[i + 0]) );
  }
  i694.defaultParameterValues = i704
  request.r(i695[7], i695[8], 0, i694, 'unityFallbackShader')
  i694.readDepth = !!i695[9]
  i694.hasDepthOnlyPass = !!i695[10]
  i694.isCreatedByShaderGraph = !!i695[11]
  i694.disableBatching = !!i695[12]
  i694.compiled = !!i695[13]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i709 = data
  i708.shaderName = i709[0]
  i708.errorMessage = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i714 = root || new pc.UnityShaderPass()
  var i715 = data
  i714.id = i715[0]
  i714.subShaderIndex = i715[1]
  i714.name = i715[2]
  i714.passType = i715[3]
  i714.grabPassTextureName = i715[4]
  i714.usePass = !!i715[5]
  i714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[6], i714.zTest)
  i714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[7], i714.zWrite)
  i714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[8], i714.culling)
  i714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i715[9], i714.blending)
  i714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i715[10], i714.alphaBlending)
  i714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[11], i714.colorWriteMask)
  i714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[12], i714.offsetUnits)
  i714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[13], i714.offsetFactor)
  i714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[14], i714.stencilRef)
  i714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[15], i714.stencilReadMask)
  i714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[16], i714.stencilWriteMask)
  i714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[17], i714.stencilOp)
  i714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[18], i714.stencilOpFront)
  i714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i715[19], i714.stencilOpBack)
  var i717 = i715[20]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i717[i + 0]) );
  }
  i714.tags = i716
  var i719 = i715[21]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.passDefinedKeywords = i718
  var i721 = i715[22]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i721[i + 0]) );
  }
  i714.passDefinedKeywordGroups = i720
  var i723 = i715[23]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i714.variants = i722
  var i725 = i715[24]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i725[i + 0]) );
  }
  i714.excludedVariants = i724
  i714.hasDepthReader = !!i715[25]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i727 = data
  i726.val = i727[0]
  i726.name = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i729 = data
  i728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.src)
  i728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.dst)
  i728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.op)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i731 = data
  i730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[0], i730.pass)
  i730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[1], i730.fail)
  i730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[2], i730.zFail)
  i730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[3], i730.comp)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i739 = data
  var i741 = i739[0]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.keywords = i740
  i738.hasDiscard = !!i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i745 = data
  i744.passId = i745[0]
  i744.subShaderIndex = i745[1]
  var i747 = i745[2]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.keywords = i746
  i744.vertexProgram = i745[3]
  i744.fragmentProgram = i745[4]
  i744.exportedForWebGl2 = !!i745[5]
  i744.readDepth = !!i745[6]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'shader')
  i750.pass = i751[2]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i755 = data
  i754.name = i755[0]
  i754.type = i755[1]
  i754.value = new pc.Vec4( i755[2], i755[3], i755[4], i755[5] )
  i754.textureValue = i755[6]
  i754.shaderPropertyFlag = i755[7]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i757 = data
  i756.name = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'texture')
  i756.aabb = i757[3]
  i756.vertices = i757[4]
  i756.triangles = i757[5]
  i756.textureRect = UnityEngine.Rect.MinMaxRect(i757[6], i757[7], i757[8], i757[9])
  i756.packedRect = UnityEngine.Rect.MinMaxRect(i757[10], i757[11], i757[12], i757[13])
  i756.border = new pc.Vec4( i757[14], i757[15], i757[16], i757[17] )
  i756.transparency = i757[18]
  i756.bounds = i757[19]
  i756.pixelsPerUnit = i757[20]
  i756.textureWidth = i757[21]
  i756.textureHeight = i757[22]
  i756.nativeSize = new pc.Vec2( i757[23], i757[24] )
  i756.pivot = new pc.Vec2( i757[25], i757[26] )
  i756.textureRectOffset = new pc.Vec2( i757[27], i757[28] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i759 = data
  i758.name = i759[0]
  i758.wrapMode = i759[1]
  i758.isLooping = !!i759[2]
  i758.length = i759[3]
  var i761 = i759[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i761[i + 0]) );
  }
  i758.curves = i760
  var i763 = i759[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i763[i + 0]) );
  }
  i758.events = i762
  i758.halfPrecision = !!i759[6]
  i758._frameRate = i759[7]
  i758.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i759[8], i758.localBounds)
  i758.hasMuscleCurves = !!i759[9]
  var i765 = i759[10]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i758.clipMuscleConstant = i764
  i758.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i759[11], i758.clipBindingConstant)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i769 = data
  i768.path = i769[0]
  i768.hash = i769[1]
  i768.componentType = i769[2]
  i768.property = i769[3]
  i768.keys = i769[4]
  var i771 = i769[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i771[i + 0]) );
  }
  i768.objectReferenceKeys = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i775 = data
  i774.time = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'value')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i779 = data
  i778.functionName = i779[0]
  i778.floatParameter = i779[1]
  i778.intParameter = i779[2]
  i778.stringParameter = i779[3]
  request.r(i779[4], i779[5], 0, i778, 'objectReferenceParameter')
  i778.time = i779[6]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i781 = data
  i780.center = new pc.Vec3( i781[0], i781[1], i781[2] )
  i780.extends = new pc.Vec3( i781[3], i781[4], i781[5] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i785 = data
  var i787 = i785[0]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i784.genericBindings = i786
  var i789 = i785[1]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i784.pptrCurveMapping = i788
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i791 = data
  i790.name = i791[0]
  var i793 = i791[1]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i793[i + 0]) );
  }
  i790.layers = i792
  var i795 = i791[2]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i795[i + 0]) );
  }
  i790.parameters = i794
  i790.animationClips = i791[3]
  i790.avatarUnsupported = i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i799 = data
  i798.name = i799[0]
  i798.defaultWeight = i799[1]
  i798.blendingMode = i799[2]
  i798.avatarMask = i799[3]
  i798.syncedLayerIndex = i799[4]
  i798.syncedLayerAffectsTiming = !!i799[5]
  i798.syncedLayers = i799[6]
  i798.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i799[7], i798.stateMachine)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i801 = data
  i800.id = i801[0]
  i800.name = i801[1]
  i800.path = i801[2]
  var i803 = i801[3]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i803[i + 0]) );
  }
  i800.states = i802
  var i805 = i801[4]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i805[i + 0]) );
  }
  i800.machines = i804
  var i807 = i801[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i807[i + 0]) );
  }
  i800.entryStateTransitions = i806
  var i809 = i801[6]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i809[i + 0]) );
  }
  i800.exitStateTransitions = i808
  var i811 = i801[7]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i811[i + 0]) );
  }
  i800.anyStateTransitions = i810
  i800.defaultStateId = i801[8]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i815 = data
  i814.id = i815[0]
  i814.name = i815[1]
  i814.cycleOffset = i815[2]
  i814.cycleOffsetParameter = i815[3]
  i814.cycleOffsetParameterActive = !!i815[4]
  i814.mirror = !!i815[5]
  i814.mirrorParameter = i815[6]
  i814.mirrorParameterActive = !!i815[7]
  i814.motionId = i815[8]
  i814.nameHash = i815[9]
  i814.fullPathHash = i815[10]
  i814.speed = i815[11]
  i814.speedParameter = i815[12]
  i814.speedParameterActive = !!i815[13]
  i814.tag = i815[14]
  i814.tagHash = i815[15]
  i814.writeDefaultValues = !!i815[16]
  var i817 = i815[17]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.behaviours = i816
  var i819 = i815[18]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i819[i + 0]) );
  }
  i814.transitions = i818
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i825 = data
  i824.fullPath = i825[0]
  i824.canTransitionToSelf = !!i825[1]
  i824.duration = i825[2]
  i824.exitTime = i825[3]
  i824.hasExitTime = !!i825[4]
  i824.hasFixedDuration = !!i825[5]
  i824.interruptionSource = i825[6]
  i824.offset = i825[7]
  i824.orderedInterruption = !!i825[8]
  i824.destinationStateId = i825[9]
  i824.isExit = !!i825[10]
  i824.mute = !!i825[11]
  i824.solo = !!i825[12]
  var i827 = i825[13]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i827[i + 0]) );
  }
  i824.conditions = i826
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i833 = data
  i832.destinationStateId = i833[0]
  i832.isExit = !!i833[1]
  i832.mute = !!i833[2]
  i832.solo = !!i833[3]
  var i835 = i833[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i835[i + 0]) );
  }
  i832.conditions = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i839 = data
  i838.defaultBool = !!i839[0]
  i838.defaultFloat = i839[1]
  i838.defaultInt = i839[2]
  i838.name = i839[3]
  i838.nameHash = i839[4]
  i838.type = i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i843[i + 0]) );
  }
  i840.files = i842
  i840.componentToPrefabIds = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i847 = data
  i846.path = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'unityObject')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i851[i + 0]) );
  }
  i848.scriptsExecutionOrder = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i853[i + 0]) );
  }
  i848.sortingLayers = i852
  var i855 = i849[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i855[i + 0]) );
  }
  i848.cullingLayers = i854
  i848.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i849[3], i848.timeSettings)
  i848.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i849[4], i848.physicsSettings)
  i848.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i849[5], i848.physics2DSettings)
  i848.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i849[6], i848.qualitySettings)
  i848.enableRealtimeShadows = !!i849[7]
  i848.enableAutoInstancing = !!i849[8]
  i848.enableStaticBatching = !!i849[9]
  i848.enableDynamicBatching = !!i849[10]
  i848.lightmapEncodingQuality = i849[11]
  i848.desiredColorSpace = i849[12]
  var i857 = i849[13]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i848.allTags = i856
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i861 = data
  i860.name = i861[0]
  i860.value = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i865 = data
  i864.id = i865[0]
  i864.name = i865[1]
  i864.value = i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i871 = data
  i870.fixedDeltaTime = i871[0]
  i870.maximumDeltaTime = i871[1]
  i870.timeScale = i871[2]
  i870.maximumParticleTimestep = i871[3]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i873 = data
  i872.gravity = new pc.Vec3( i873[0], i873[1], i873[2] )
  i872.defaultSolverIterations = i873[3]
  i872.bounceThreshold = i873[4]
  i872.autoSyncTransforms = !!i873[5]
  i872.autoSimulation = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i875[i + 0]) );
  }
  i872.collisionMatrix = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.layerId = i879[1]
  i878.otherLayerId = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'material')
  i880.gravity = new pc.Vec2( i881[2], i881[3] )
  i880.positionIterations = i881[4]
  i880.velocityIterations = i881[5]
  i880.velocityThreshold = i881[6]
  i880.maxLinearCorrection = i881[7]
  i880.maxAngularCorrection = i881[8]
  i880.maxTranslationSpeed = i881[9]
  i880.maxRotationSpeed = i881[10]
  i880.baumgarteScale = i881[11]
  i880.baumgarteTOIScale = i881[12]
  i880.timeToSleep = i881[13]
  i880.linearSleepTolerance = i881[14]
  i880.angularSleepTolerance = i881[15]
  i880.defaultContactOffset = i881[16]
  i880.autoSimulation = !!i881[17]
  i880.queriesHitTriggers = !!i881[18]
  i880.queriesStartInColliders = !!i881[19]
  i880.callbacksOnDisable = !!i881[20]
  i880.reuseCollisionCallbacks = !!i881[21]
  i880.autoSyncTransforms = !!i881[22]
  var i883 = i881[23]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i883[i + 0]) );
  }
  i880.collisionMatrix = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i887 = data
  i886.enabled = !!i887[0]
  i886.layerId = i887[1]
  i886.otherLayerId = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i891[i + 0]) );
  }
  i888.qualityLevels = i890
  var i893 = i889[1]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i888.names = i892
  i888.shadows = i889[2]
  i888.anisotropicFiltering = i889[3]
  i888.antiAliasing = i889[4]
  i888.lodBias = i889[5]
  i888.shadowCascades = i889[6]
  i888.shadowDistance = i889[7]
  i888.shadowmaskMode = i889[8]
  i888.shadowProjection = i889[9]
  i888.shadowResolution = i889[10]
  i888.softParticles = !!i889[11]
  i888.softVegetation = !!i889[12]
  i888.activeColorSpace = i889[13]
  i888.desiredColorSpace = i889[14]
  i888.masterTextureLimit = i889[15]
  i888.maxQueuedFrames = i889[16]
  i888.particleRaycastBudget = i889[17]
  i888.pixelLightCount = i889[18]
  i888.realtimeReflectionProbes = !!i889[19]
  i888.shadowCascade2Split = i889[20]
  i888.shadowCascade4Split = new pc.Vec3( i889[21], i889[22], i889[23] )
  i888.streamingMipmapsActive = !!i889[24]
  i888.vSyncCount = i889[25]
  i888.asyncUploadBufferSize = i889[26]
  i888.asyncUploadTimeSlice = i889[27]
  i888.billboardsFaceCameraPosition = !!i889[28]
  i888.shadowNearPlaneOffset = i889[29]
  i888.streamingMipmapsMemoryBudget = i889[30]
  i888.maximumLODLevel = i889[31]
  i888.streamingMipmapsAddAllCameras = !!i889[32]
  i888.streamingMipmapsMaxLevelReduction = i889[33]
  i888.streamingMipmapsRenderersPerFrame = i889[34]
  i888.resolutionScalingFixedDPIFactor = i889[35]
  i888.streamingMipmapsMaxFileIORequests = i889[36]
  i888.currentQualityLevel = i889[37]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i899 = data
  i898.weight = i899[0]
  i898.vertices = i899[1]
  i898.normals = i899[2]
  i898.tangents = i899[3]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i903 = data
  i902.mode = i903[0]
  i902.parameter = i903[1]
  i902.threshold = i903[2]
  return i902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"34":[35],"36":[35],"37":[35],"38":[35],"39":[35],"40":[35],"41":[42],"43":[5],"44":[23],"45":[23],"46":[23],"47":[23],"48":[23],"49":[23],"50":[23],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[52],"60":[52],"61":[52],"62":[52],"63":[52],"64":[52],"65":[5],"66":[13],"67":[68],"69":[68],"70":[71],"72":[73],"11":[6],"74":[73],"75":[71],"76":[71],"77":[70],"78":[79,71],"80":[71],"81":[70],"82":[71],"83":[71],"84":[71],"85":[71],"86":[71],"87":[71],"88":[71],"89":[71],"90":[71],"91":[79,71],"92":[71],"93":[71],"94":[71],"95":[71],"96":[79,71],"97":[71],"98":[31],"99":[31],"32":[31],"100":[31],"101":[5],"102":[5],"103":[71],"104":[13,71],"105":[71,79],"106":[71],"107":[79,71],"108":[13],"109":[79,71],"110":[71],"111":[73]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","CursorFollower","UnityEngine.Camera","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.U2D.Animation.SpriteSkin","Hexagon","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.AudioListener","UnityEngine.Light","PlatformManager","GroundPlatform","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.ParticleSystemRenderer","StackManager","Stack","DragAndDrop","FillStack","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "04/04/2026 17:22:47";

Deserializers.lunaDaysRunning = "27.8";

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

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1816";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3223";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.test-3d";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "003056c4-fd93-4c6e-b611-fe2d8c009cd0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

