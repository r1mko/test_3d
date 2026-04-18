var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointSpring' )
  var i263 = data
  i262.spring = i263[0]
  i262.damper = i263[1]
  i262.targetPosition = i263[2]
  return i262
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointMotor' )
  var i265 = data
  i264.m_TargetVelocity = i265[0]
  i264.m_Force = i265[1]
  i264.m_FreeSpin = i265[2]
  return i264
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointLimits' )
  var i267 = data
  i266.m_Min = i267[0]
  i266.m_Max = i267[1]
  i266.m_Bounciness = i267[2]
  i266.m_BounceMinVelocity = i267[3]
  i266.m_ContactDistance = i267[4]
  i266.minBounce = i267[5]
  i266.maxBounce = i267[6]
  return i266
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointDrive' )
  var i269 = data
  i268.m_PositionSpring = i269[0]
  i268.m_PositionDamper = i269[1]
  i268.m_MaximumForce = i269[2]
  i268.m_UseAcceleration = i269[3]
  return i268
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i271 = data
  i270.m_Spring = i271[0]
  i270.m_Damper = i271[1]
  return i270
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i273 = data
  i272.m_Limit = i273[0]
  i272.m_Bounciness = i273[1]
  i272.m_ContactDistance = i273[2]
  return i272
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i275 = data
  i274.m_ExtremumSlip = i275[0]
  i274.m_ExtremumValue = i275[1]
  i274.m_AsymptoteSlip = i275[2]
  i274.m_AsymptoteValue = i275[3]
  i274.m_Stiffness = i275[4]
  return i274
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i277 = data
  i276.m_LowerAngle = i277[0]
  i276.m_UpperAngle = i277[1]
  return i276
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i279 = data
  i278.m_MotorSpeed = i279[0]
  i278.m_MaximumMotorTorque = i279[1]
  return i278
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i281 = data
  i280.m_DampingRatio = i281[0]
  i280.m_Frequency = i281[1]
  i280.m_Angle = i281[2]
  return i280
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i283 = data
  i282.m_LowerTranslation = i283[0]
  i282.m_UpperTranslation = i283[1]
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i285 = data
  i284.name = i285[0]
  i284.halfPrecision = !!i285[1]
  i284.useSimplification = !!i285[2]
  i284.useUInt32IndexFormat = !!i285[3]
  i284.vertexCount = i285[4]
  i284.aabb = i285[5]
  var i287 = i285[6]
  var i286 = []
  for(var i = 0; i < i287.length; i += 1) {
    i286.push( !!i287[i + 0] );
  }
  i284.streams = i286
  i284.vertices = i285[7]
  var i289 = i285[8]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i289[i + 0]) );
  }
  i284.subMeshes = i288
  var i291 = i285[9]
  var i290 = []
  for(var i = 0; i < i291.length; i += 16) {
    i290.push( new pc.Mat4().setData(i291[i + 0], i291[i + 1], i291[i + 2], i291[i + 3],  i291[i + 4], i291[i + 5], i291[i + 6], i291[i + 7],  i291[i + 8], i291[i + 9], i291[i + 10], i291[i + 11],  i291[i + 12], i291[i + 13], i291[i + 14], i291[i + 15]) );
  }
  i284.bindposes = i290
  var i293 = i285[10]
  var i292 = []
  for(var i = 0; i < i293.length; i += 1) {
    i292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i293[i + 0]) );
  }
  i284.blendShapes = i292
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i299 = data
  i298.triangles = i299[0]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i305 = data
  i304.name = i305[0]
  var i307 = i305[1]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i307[i + 0]) );
  }
  i304.frames = i306
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i308 = root || new pc.UnityMaterial()
  var i309 = data
  i308.name = i309[0]
  request.r(i309[1], i309[2], 0, i308, 'shader')
  i308.renderQueue = i309[3]
  i308.enableInstancing = !!i309[4]
  var i311 = i309[5]
  var i310 = []
  for(var i = 0; i < i311.length; i += 1) {
    i310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i311[i + 0]) );
  }
  i308.floatParameters = i310
  var i313 = i309[6]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i313[i + 0]) );
  }
  i308.colorParameters = i312
  var i315 = i309[7]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i315[i + 0]) );
  }
  i308.vectorParameters = i314
  var i317 = i309[8]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i317[i + 0]) );
  }
  i308.textureParameters = i316
  var i319 = i309[9]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i319[i + 0]) );
  }
  i308.materialFlags = i318
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i323 = data
  i322.name = i323[0]
  i322.value = i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i327 = data
  i326.name = i327[0]
  i326.value = new pc.Color(i327[1], i327[2], i327[3], i327[4])
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i331 = data
  i330.name = i331[0]
  i330.value = new pc.Vec4( i331[1], i331[2], i331[3], i331[4] )
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i335 = data
  i334.name = i335[0]
  request.r(i335[1], i335[2], 0, i334, 'value')
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i339 = data
  i338.name = i339[0]
  i338.enabled = !!i339[1]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i341 = data
  i340.position = new pc.Vec3( i341[0], i341[1], i341[2] )
  i340.scale = new pc.Vec3( i341[3], i341[4], i341[5] )
  i340.rotation = new pc.Quat(i341[6], i341[7], i341[8], i341[9])
  return i340
}

Deserializers["Hexagon"] = function (request, data, root) {
  var i342 = root || request.c( 'Hexagon' )
  var i343 = data
  var i345 = i343[0]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( request.d('Hexagon+ColorMaterialPair', i345[i + 0]) );
  }
  i342.colorMaterials = i344
  request.r(i343[1], i343[2], 0, i342, 'hexRenderer')
  return i342
}

Deserializers["Hexagon+ColorMaterialPair"] = function (request, data, root) {
  var i348 = root || request.c( 'Hexagon+ColorMaterialPair' )
  var i349 = data
  i348.color = i349[0]
  request.r(i349[1], i349[2], 0, i348, 'material')
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'sharedMesh')
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i353 = data
  request.r(i353[0], i353[1], 0, i352, 'additionalVertexStreams')
  i352.enabled = !!i353[2]
  request.r(i353[3], i353[4], 0, i352, 'sharedMaterial')
  var i355 = i353[5]
  var i354 = []
  for(var i = 0; i < i355.length; i += 2) {
  request.r(i355[i + 0], i355[i + 1], 2, i354, '')
  }
  i352.sharedMaterials = i354
  i352.receiveShadows = !!i353[6]
  i352.shadowCastingMode = i353[7]
  i352.sortingLayerID = i353[8]
  i352.sortingOrder = i353[9]
  i352.lightmapIndex = i353[10]
  i352.lightmapSceneIndex = i353[11]
  i352.lightmapScaleOffset = new pc.Vec4( i353[12], i353[13], i353[14], i353[15] )
  i352.lightProbeUsage = i353[16]
  i352.reflectionProbeUsage = i353[17]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i359 = data
  i358.name = i359[0]
  i358.tagId = i359[1]
  i358.enabled = !!i359[2]
  i358.isStatic = !!i359[3]
  i358.layer = i359[4]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i361 = data
  i360.name = i361[0]
  i360.width = i361[1]
  i360.height = i361[2]
  i360.mipmapCount = i361[3]
  i360.anisoLevel = i361[4]
  i360.filterMode = i361[5]
  i360.hdr = !!i361[6]
  i360.format = i361[7]
  i360.wrapMode = i361[8]
  i360.alphaIsTransparency = !!i361[9]
  i360.alphaSource = i361[10]
  i360.graphicsFormat = i361[11]
  i360.sRGBTexture = !!i361[12]
  i360.desiredColorSpace = i361[13]
  i360.wrapU = i361[14]
  i360.wrapV = i361[15]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i363 = data
  i362.name = i363[0]
  i362.atlasId = i363[1]
  i362.mipmapCount = i363[2]
  i362.hdr = !!i363[3]
  i362.size = i363[4]
  i362.anisoLevel = i363[5]
  i362.filterMode = i363[6]
  var i365 = i363[7]
  var i364 = []
  for(var i = 0; i < i365.length; i += 4) {
    i364.push( UnityEngine.Rect.MinMaxRect(i365[i + 0], i365[i + 1], i365[i + 2], i365[i + 3]) );
  }
  i362.rects = i364
  i362.wrapU = i363[8]
  i362.wrapV = i363[9]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i369 = data
  i368.name = i369[0]
  i368.index = i369[1]
  i368.startup = !!i369[2]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i371 = data
  i370.aspect = i371[0]
  i370.orthographic = !!i371[1]
  i370.orthographicSize = i371[2]
  i370.backgroundColor = new pc.Color(i371[3], i371[4], i371[5], i371[6])
  i370.nearClipPlane = i371[7]
  i370.farClipPlane = i371[8]
  i370.fieldOfView = i371[9]
  i370.depth = i371[10]
  i370.clearFlags = i371[11]
  i370.cullingMask = i371[12]
  i370.rect = i371[13]
  request.r(i371[14], i371[15], 0, i370, 'targetTexture')
  i370.usePhysicalProperties = !!i371[16]
  i370.focalLength = i371[17]
  i370.sensorSize = new pc.Vec2( i371[18], i371[19] )
  i370.lensShift = new pc.Vec2( i371[20], i371[21] )
  i370.gateFit = i371[22]
  i370.commandBufferCount = i371[23]
  i370.cameraType = i371[24]
  i370.enabled = !!i371[25]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i373 = data
  i372.type = i373[0]
  i372.color = new pc.Color(i373[1], i373[2], i373[3], i373[4])
  i372.cullingMask = i373[5]
  i372.intensity = i373[6]
  i372.range = i373[7]
  i372.spotAngle = i373[8]
  i372.shadows = i373[9]
  i372.shadowNormalBias = i373[10]
  i372.shadowBias = i373[11]
  i372.shadowStrength = i373[12]
  i372.shadowResolution = i373[13]
  i372.lightmapBakeType = i373[14]
  i372.renderMode = i373[15]
  request.r(i373[16], i373[17], 0, i372, 'cookie')
  i372.cookieSize = i373[18]
  i372.shadowNearPlane = i373[19]
  i372.occlusionMaskChannel = i373[20]
  i372.enabled = !!i373[21]
  return i372
}

Deserializers["GroundPlatform"] = function (request, data, root) {
  var i374 = root || request.c( 'GroundPlatform' )
  var i375 = data
  request.r(i375[0], i375[1], 0, i374, 'Container')
  request.r(i375[2], i375[3], 0, i374, 'glowMaterial')
  request.r(i375[4], i375[5], 0, i374, 'platformRenderer')
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i377 = data
  i376.center = new pc.Vec3( i377[0], i377[1], i377[2] )
  i376.radius = i377[3]
  i376.enabled = !!i377[4]
  i376.isTrigger = !!i377[5]
  request.r(i377[6], i377[7], 0, i376, 'material')
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i379 = data
  i378.center = new pc.Vec3( i379[0], i379[1], i379[2] )
  i378.size = new pc.Vec3( i379[3], i379[4], i379[5] )
  i378.enabled = !!i379[6]
  i378.isTrigger = !!i379[7]
  request.r(i379[8], i379[9], 0, i378, 'material')
  return i378
}

Deserializers["DragAndDrop"] = function (request, data, root) {
  var i380 = root || request.c( 'DragAndDrop' )
  var i381 = data
  request.r(i381[0], i381[1], 0, i380, 'mainCamera')
  i380.clampMinY = i381[2]
  i380.clampMaxY = i381[3]
  return i380
}

Deserializers["Stack"] = function (request, data, root) {
  var i382 = root || request.c( 'Stack' )
  var i383 = data
  i382.moveCurve = new pc.AnimationCurve( { keys_flow: i383[0] } )
  i382.moveDuration = i383[1]
  i382.rayLength = i383[2]
  request.r(i383[3], i383[4], 0, i382, 'fillStack')
  return i382
}

Deserializers["FillStack"] = function (request, data, root) {
  var i384 = root || request.c( 'FillStack' )
  var i385 = data
  request.r(i385[0], i385[1], 0, i384, 'hexagonPrefab')
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i387 = data
  i386.ambientIntensity = i387[0]
  i386.reflectionIntensity = i387[1]
  i386.ambientMode = i387[2]
  i386.ambientLight = new pc.Color(i387[3], i387[4], i387[5], i387[6])
  i386.ambientSkyColor = new pc.Color(i387[7], i387[8], i387[9], i387[10])
  i386.ambientGroundColor = new pc.Color(i387[11], i387[12], i387[13], i387[14])
  i386.ambientEquatorColor = new pc.Color(i387[15], i387[16], i387[17], i387[18])
  i386.fogColor = new pc.Color(i387[19], i387[20], i387[21], i387[22])
  i386.fogEndDistance = i387[23]
  i386.fogStartDistance = i387[24]
  i386.fogDensity = i387[25]
  i386.fog = !!i387[26]
  request.r(i387[27], i387[28], 0, i386, 'skybox')
  i386.fogMode = i387[29]
  var i389 = i387[30]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i389[i + 0]) );
  }
  i386.lightmaps = i388
  i386.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i387[31], i386.lightProbes)
  i386.lightmapsMode = i387[32]
  i386.mixedBakeMode = i387[33]
  i386.environmentLightingMode = i387[34]
  i386.ambientProbe = new pc.SphericalHarmonicsL2(i387[35])
  i386.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i387[36])
  i386.useReferenceAmbientProbe = !!i387[37]
  request.r(i387[38], i387[39], 0, i386, 'customReflection')
  request.r(i387[40], i387[41], 0, i386, 'defaultReflection')
  i386.defaultReflectionMode = i387[42]
  i386.defaultReflectionResolution = i387[43]
  i386.sunLightObjectId = i387[44]
  i386.pixelLightCount = i387[45]
  i386.defaultReflectionHDR = !!i387[46]
  i386.hasLightDataAsset = !!i387[47]
  i386.hasManualGenerate = !!i387[48]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'lightmapColor')
  request.r(i393[2], i393[3], 0, i392, 'lightmapDirection')
  request.r(i393[4], i393[5], 0, i392, 'shadowMask')
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i394 = root || new UnityEngine.LightProbes()
  var i395 = data
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i403 = data
  var i405 = i403[0]
  var i404 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i405.length; i += 1) {
    i404.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i405[i + 0]));
  }
  i402.ShaderCompilationErrors = i404
  i402.name = i403[1]
  i402.guid = i403[2]
  var i407 = i403[3]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( i407[i + 0] );
  }
  i402.shaderDefinedKeywords = i406
  var i409 = i403[4]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i409[i + 0]) );
  }
  i402.passes = i408
  var i411 = i403[5]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i411[i + 0]) );
  }
  i402.usePasses = i410
  var i413 = i403[6]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i413[i + 0]) );
  }
  i402.defaultParameterValues = i412
  request.r(i403[7], i403[8], 0, i402, 'unityFallbackShader')
  i402.readDepth = !!i403[9]
  i402.hasDepthOnlyPass = !!i403[10]
  i402.isCreatedByShaderGraph = !!i403[11]
  i402.disableBatching = !!i403[12]
  i402.compiled = !!i403[13]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i417 = data
  i416.shaderName = i417[0]
  i416.errorMessage = i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i422 = root || new pc.UnityShaderPass()
  var i423 = data
  i422.id = i423[0]
  i422.subShaderIndex = i423[1]
  i422.name = i423[2]
  i422.passType = i423[3]
  i422.grabPassTextureName = i423[4]
  i422.usePass = !!i423[5]
  i422.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[6], i422.zTest)
  i422.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[7], i422.zWrite)
  i422.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[8], i422.culling)
  i422.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i423[9], i422.blending)
  i422.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i423[10], i422.alphaBlending)
  i422.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[11], i422.colorWriteMask)
  i422.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[12], i422.offsetUnits)
  i422.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[13], i422.offsetFactor)
  i422.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[14], i422.stencilRef)
  i422.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[15], i422.stencilReadMask)
  i422.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[16], i422.stencilWriteMask)
  i422.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i423[17], i422.stencilOp)
  i422.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i423[18], i422.stencilOpFront)
  i422.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i423[19], i422.stencilOpBack)
  var i425 = i423[20]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i425[i + 0]) );
  }
  i422.tags = i424
  var i427 = i423[21]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( i427[i + 0] );
  }
  i422.passDefinedKeywords = i426
  var i429 = i423[22]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i429[i + 0]) );
  }
  i422.passDefinedKeywordGroups = i428
  var i431 = i423[23]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i431[i + 0]) );
  }
  i422.variants = i430
  var i433 = i423[24]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i433[i + 0]) );
  }
  i422.excludedVariants = i432
  i422.hasDepthReader = !!i423[25]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i435 = data
  i434.val = i435[0]
  i434.name = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i437 = data
  i436.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[0], i436.src)
  i436.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[1], i436.dst)
  i436.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[2], i436.op)
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i439 = data
  i438.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i439[0], i438.pass)
  i438.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i439[1], i438.fail)
  i438.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i439[2], i438.zFail)
  i438.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i439[3], i438.comp)
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i443 = data
  i442.name = i443[0]
  i442.value = i443[1]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i447 = data
  var i449 = i447[0]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( i449[i + 0] );
  }
  i446.keywords = i448
  i446.hasDiscard = !!i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i453 = data
  i452.passId = i453[0]
  i452.subShaderIndex = i453[1]
  var i455 = i453[2]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( i455[i + 0] );
  }
  i452.keywords = i454
  i452.vertexProgram = i453[3]
  i452.fragmentProgram = i453[4]
  i452.exportedForWebGl2 = !!i453[5]
  i452.readDepth = !!i453[6]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i459 = data
  request.r(i459[0], i459[1], 0, i458, 'shader')
  i458.pass = i459[2]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i463 = data
  i462.name = i463[0]
  i462.type = i463[1]
  i462.value = new pc.Vec4( i463[2], i463[3], i463[4], i463[5] )
  i462.textureValue = i463[6]
  i462.shaderPropertyFlag = i463[7]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i465 = data
  var i467 = i465[0]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i467[i + 0]) );
  }
  i464.files = i466
  i464.componentToPrefabIds = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i471 = data
  i470.path = i471[0]
  request.r(i471[1], i471[2], 0, i470, 'unityObject')
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i473 = data
  var i475 = i473[0]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i475[i + 0]) );
  }
  i472.scriptsExecutionOrder = i474
  var i477 = i473[1]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i477[i + 0]) );
  }
  i472.sortingLayers = i476
  var i479 = i473[2]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i479[i + 0]) );
  }
  i472.cullingLayers = i478
  i472.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i473[3], i472.timeSettings)
  i472.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i473[4], i472.physicsSettings)
  i472.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i473[5], i472.physics2DSettings)
  i472.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i473[6], i472.qualitySettings)
  i472.enableRealtimeShadows = !!i473[7]
  i472.enableAutoInstancing = !!i473[8]
  i472.enableStaticBatching = !!i473[9]
  i472.enableDynamicBatching = !!i473[10]
  i472.lightmapEncodingQuality = i473[11]
  i472.desiredColorSpace = i473[12]
  var i481 = i473[13]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( i481[i + 0] );
  }
  i472.allTags = i480
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i485 = data
  i484.name = i485[0]
  i484.value = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i489 = data
  i488.id = i489[0]
  i488.name = i489[1]
  i488.value = i489[2]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i493 = data
  i492.id = i493[0]
  i492.name = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i495 = data
  i494.fixedDeltaTime = i495[0]
  i494.maximumDeltaTime = i495[1]
  i494.timeScale = i495[2]
  i494.maximumParticleTimestep = i495[3]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i497 = data
  i496.gravity = new pc.Vec3( i497[0], i497[1], i497[2] )
  i496.defaultSolverIterations = i497[3]
  i496.bounceThreshold = i497[4]
  i496.autoSyncTransforms = !!i497[5]
  i496.autoSimulation = !!i497[6]
  var i499 = i497[7]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i499[i + 0]) );
  }
  i496.collisionMatrix = i498
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i503 = data
  i502.enabled = !!i503[0]
  i502.layerId = i503[1]
  i502.otherLayerId = i503[2]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'material')
  i504.gravity = new pc.Vec2( i505[2], i505[3] )
  i504.positionIterations = i505[4]
  i504.velocityIterations = i505[5]
  i504.velocityThreshold = i505[6]
  i504.maxLinearCorrection = i505[7]
  i504.maxAngularCorrection = i505[8]
  i504.maxTranslationSpeed = i505[9]
  i504.maxRotationSpeed = i505[10]
  i504.baumgarteScale = i505[11]
  i504.baumgarteTOIScale = i505[12]
  i504.timeToSleep = i505[13]
  i504.linearSleepTolerance = i505[14]
  i504.angularSleepTolerance = i505[15]
  i504.defaultContactOffset = i505[16]
  i504.autoSimulation = !!i505[17]
  i504.queriesHitTriggers = !!i505[18]
  i504.queriesStartInColliders = !!i505[19]
  i504.callbacksOnDisable = !!i505[20]
  i504.reuseCollisionCallbacks = !!i505[21]
  i504.autoSyncTransforms = !!i505[22]
  var i507 = i505[23]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i507[i + 0]) );
  }
  i504.collisionMatrix = i506
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i511 = data
  i510.enabled = !!i511[0]
  i510.layerId = i511[1]
  i510.otherLayerId = i511[2]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i513 = data
  var i515 = i513[0]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i515[i + 0]) );
  }
  i512.qualityLevels = i514
  var i517 = i513[1]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( i517[i + 0] );
  }
  i512.names = i516
  i512.shadows = i513[2]
  i512.anisotropicFiltering = i513[3]
  i512.antiAliasing = i513[4]
  i512.lodBias = i513[5]
  i512.shadowCascades = i513[6]
  i512.shadowDistance = i513[7]
  i512.shadowmaskMode = i513[8]
  i512.shadowProjection = i513[9]
  i512.shadowResolution = i513[10]
  i512.softParticles = !!i513[11]
  i512.softVegetation = !!i513[12]
  i512.activeColorSpace = i513[13]
  i512.desiredColorSpace = i513[14]
  i512.masterTextureLimit = i513[15]
  i512.maxQueuedFrames = i513[16]
  i512.particleRaycastBudget = i513[17]
  i512.pixelLightCount = i513[18]
  i512.realtimeReflectionProbes = !!i513[19]
  i512.shadowCascade2Split = i513[20]
  i512.shadowCascade4Split = new pc.Vec3( i513[21], i513[22], i513[23] )
  i512.streamingMipmapsActive = !!i513[24]
  i512.vSyncCount = i513[25]
  i512.asyncUploadBufferSize = i513[26]
  i512.asyncUploadTimeSlice = i513[27]
  i512.billboardsFaceCameraPosition = !!i513[28]
  i512.shadowNearPlaneOffset = i513[29]
  i512.streamingMipmapsMemoryBudget = i513[30]
  i512.maximumLODLevel = i513[31]
  i512.streamingMipmapsAddAllCameras = !!i513[32]
  i512.streamingMipmapsMaxLevelReduction = i513[33]
  i512.streamingMipmapsRenderersPerFrame = i513[34]
  i512.resolutionScalingFixedDPIFactor = i513[35]
  i512.streamingMipmapsMaxFileIORequests = i513[36]
  i512.currentQualityLevel = i513[37]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i523 = data
  i522.weight = i523[0]
  i522.vertices = i523[1]
  i522.normals = i523[2]
  i522.tangents = i523[3]
  return i522
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"20":[21],"22":[21],"23":[21],"24":[21],"25":[21],"26":[21],"27":[28],"29":[9],"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[31],"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[39],"46":[39],"47":[39],"48":[39],"49":[39],"50":[39],"51":[39],"52":[9],"53":[5],"54":[55],"56":[55],"57":[58],"59":[58],"60":[58],"61":[57],"62":[63,58],"64":[58],"65":[57],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[58],"72":[58],"73":[58],"74":[58],"75":[63,58],"76":[58],"77":[58],"78":[58],"79":[58],"80":[63,58],"81":[58],"82":[83],"84":[83],"85":[83],"86":[83],"87":[9],"88":[9],"89":[58],"90":[5,58],"91":[58,63],"92":[58],"93":[63,58],"94":[5],"95":[63,58],"96":[58],"97":[98],"99":[98],"100":[98]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Hexagon","UnityEngine.Material","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","GroundPlatform","UnityEngine.GameObject","UnityEngine.SphereCollider","UnityEngine.BoxCollider","DragAndDrop","Stack","FillStack","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "10.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1831";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3135";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "95ac0003-8036-4d58-8122-bb9c3b6f8976";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

