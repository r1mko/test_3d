var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.JointSpring' )
  var i245 = data
  i244.spring = i245[0]
  i244.damper = i245[1]
  i244.targetPosition = i245[2]
  return i244
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointMotor' )
  var i247 = data
  i246.m_TargetVelocity = i247[0]
  i246.m_Force = i247[1]
  i246.m_FreeSpin = i247[2]
  return i246
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointLimits' )
  var i249 = data
  i248.m_Min = i249[0]
  i248.m_Max = i249[1]
  i248.m_Bounciness = i249[2]
  i248.m_BounceMinVelocity = i249[3]
  i248.m_ContactDistance = i249[4]
  i248.minBounce = i249[5]
  i248.maxBounce = i249[6]
  return i248
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointDrive' )
  var i251 = data
  i250.m_PositionSpring = i251[0]
  i250.m_PositionDamper = i251[1]
  i250.m_MaximumForce = i251[2]
  i250.m_UseAcceleration = i251[3]
  return i250
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i253 = data
  i252.m_Spring = i253[0]
  i252.m_Damper = i253[1]
  return i252
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i255 = data
  i254.m_Limit = i255[0]
  i254.m_Bounciness = i255[1]
  i254.m_ContactDistance = i255[2]
  return i254
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i257 = data
  i256.m_ExtremumSlip = i257[0]
  i256.m_ExtremumValue = i257[1]
  i256.m_AsymptoteSlip = i257[2]
  i256.m_AsymptoteValue = i257[3]
  i256.m_Stiffness = i257[4]
  return i256
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i259 = data
  i258.m_LowerAngle = i259[0]
  i258.m_UpperAngle = i259[1]
  return i258
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i261 = data
  i260.m_MotorSpeed = i261[0]
  i260.m_MaximumMotorTorque = i261[1]
  return i260
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i263 = data
  i262.m_DampingRatio = i263[0]
  i262.m_Frequency = i263[1]
  i262.m_Angle = i263[2]
  return i262
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i265 = data
  i264.m_LowerTranslation = i265[0]
  i264.m_UpperTranslation = i265[1]
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i267 = data
  i266.name = i267[0]
  i266.halfPrecision = !!i267[1]
  i266.useSimplification = !!i267[2]
  i266.useUInt32IndexFormat = !!i267[3]
  i266.vertexCount = i267[4]
  i266.aabb = i267[5]
  var i269 = i267[6]
  var i268 = []
  for(var i = 0; i < i269.length; i += 1) {
    i268.push( !!i269[i + 0] );
  }
  i266.streams = i268
  i266.vertices = i267[7]
  var i271 = i267[8]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i271[i + 0]) );
  }
  i266.subMeshes = i270
  var i273 = i267[9]
  var i272 = []
  for(var i = 0; i < i273.length; i += 16) {
    i272.push( new pc.Mat4().setData(i273[i + 0], i273[i + 1], i273[i + 2], i273[i + 3],  i273[i + 4], i273[i + 5], i273[i + 6], i273[i + 7],  i273[i + 8], i273[i + 9], i273[i + 10], i273[i + 11],  i273[i + 12], i273[i + 13], i273[i + 14], i273[i + 15]) );
  }
  i266.bindposes = i272
  var i275 = i267[10]
  var i274 = []
  for(var i = 0; i < i275.length; i += 1) {
    i274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i275[i + 0]) );
  }
  i266.blendShapes = i274
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i281 = data
  i280.triangles = i281[0]
  return i280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i287 = data
  i286.name = i287[0]
  var i289 = i287[1]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i289[i + 0]) );
  }
  i286.frames = i288
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i290 = root || new pc.UnityMaterial()
  var i291 = data
  i290.name = i291[0]
  request.r(i291[1], i291[2], 0, i290, 'shader')
  i290.renderQueue = i291[3]
  i290.enableInstancing = !!i291[4]
  var i293 = i291[5]
  var i292 = []
  for(var i = 0; i < i293.length; i += 1) {
    i292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i293[i + 0]) );
  }
  i290.floatParameters = i292
  var i295 = i291[6]
  var i294 = []
  for(var i = 0; i < i295.length; i += 1) {
    i294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i295[i + 0]) );
  }
  i290.colorParameters = i294
  var i297 = i291[7]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i297[i + 0]) );
  }
  i290.vectorParameters = i296
  var i299 = i291[8]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i299[i + 0]) );
  }
  i290.textureParameters = i298
  var i301 = i291[9]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i301[i + 0]) );
  }
  i290.materialFlags = i300
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i305 = data
  i304.name = i305[0]
  i304.value = i305[1]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i309 = data
  i308.name = i309[0]
  i308.value = new pc.Color(i309[1], i309[2], i309[3], i309[4])
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i313 = data
  i312.name = i313[0]
  i312.value = new pc.Vec4( i313[1], i313[2], i313[3], i313[4] )
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i317 = data
  i316.name = i317[0]
  request.r(i317[1], i317[2], 0, i316, 'value')
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i321 = data
  i320.name = i321[0]
  i320.enabled = !!i321[1]
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i323 = data
  i322.name = i323[0]
  i322.width = i323[1]
  i322.height = i323[2]
  i322.mipmapCount = i323[3]
  i322.anisoLevel = i323[4]
  i322.filterMode = i323[5]
  i322.hdr = !!i323[6]
  i322.format = i323[7]
  i322.wrapMode = i323[8]
  i322.alphaIsTransparency = !!i323[9]
  i322.alphaSource = i323[10]
  i322.graphicsFormat = i323[11]
  i322.sRGBTexture = !!i323[12]
  i322.desiredColorSpace = i323[13]
  i322.wrapU = i323[14]
  i322.wrapV = i323[15]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i325 = data
  i324.name = i325[0]
  i324.atlasId = i325[1]
  i324.mipmapCount = i325[2]
  i324.hdr = !!i325[3]
  i324.size = i325[4]
  i324.anisoLevel = i325[5]
  i324.filterMode = i325[6]
  var i327 = i325[7]
  var i326 = []
  for(var i = 0; i < i327.length; i += 4) {
    i326.push( UnityEngine.Rect.MinMaxRect(i327[i + 0], i327[i + 1], i327[i + 2], i327[i + 3]) );
  }
  i324.rects = i326
  i324.wrapU = i325[8]
  i324.wrapV = i325[9]
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i331 = data
  i330.name = i331[0]
  i330.index = i331[1]
  i330.startup = !!i331[2]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i333 = data
  i332.aspect = i333[0]
  i332.orthographic = !!i333[1]
  i332.orthographicSize = i333[2]
  i332.backgroundColor = new pc.Color(i333[3], i333[4], i333[5], i333[6])
  i332.nearClipPlane = i333[7]
  i332.farClipPlane = i333[8]
  i332.fieldOfView = i333[9]
  i332.depth = i333[10]
  i332.clearFlags = i333[11]
  i332.cullingMask = i333[12]
  i332.rect = i333[13]
  request.r(i333[14], i333[15], 0, i332, 'targetTexture')
  i332.usePhysicalProperties = !!i333[16]
  i332.focalLength = i333[17]
  i332.sensorSize = new pc.Vec2( i333[18], i333[19] )
  i332.lensShift = new pc.Vec2( i333[20], i333[21] )
  i332.gateFit = i333[22]
  i332.commandBufferCount = i333[23]
  i332.cameraType = i333[24]
  i332.enabled = !!i333[25]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i335 = data
  i334.name = i335[0]
  i334.tagId = i335[1]
  i334.enabled = !!i335[2]
  i334.isStatic = !!i335[3]
  i334.layer = i335[4]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i337 = data
  i336.type = i337[0]
  i336.color = new pc.Color(i337[1], i337[2], i337[3], i337[4])
  i336.cullingMask = i337[5]
  i336.intensity = i337[6]
  i336.range = i337[7]
  i336.spotAngle = i337[8]
  i336.shadows = i337[9]
  i336.shadowNormalBias = i337[10]
  i336.shadowBias = i337[11]
  i336.shadowStrength = i337[12]
  i336.shadowResolution = i337[13]
  i336.lightmapBakeType = i337[14]
  i336.renderMode = i337[15]
  request.r(i337[16], i337[17], 0, i336, 'cookie')
  i336.cookieSize = i337[18]
  i336.shadowNearPlane = i337[19]
  i336.occlusionMaskChannel = i337[20]
  i336.enabled = !!i337[21]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i339 = data
  request.r(i339[0], i339[1], 0, i338, 'sharedMesh')
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i341 = data
  request.r(i341[0], i341[1], 0, i340, 'additionalVertexStreams')
  i340.enabled = !!i341[2]
  request.r(i341[3], i341[4], 0, i340, 'sharedMaterial')
  var i343 = i341[5]
  var i342 = []
  for(var i = 0; i < i343.length; i += 2) {
  request.r(i343[i + 0], i343[i + 1], 2, i342, '')
  }
  i340.sharedMaterials = i342
  i340.receiveShadows = !!i341[6]
  i340.shadowCastingMode = i341[7]
  i340.sortingLayerID = i341[8]
  i340.sortingOrder = i341[9]
  i340.lightmapIndex = i341[10]
  i340.lightmapSceneIndex = i341[11]
  i340.lightmapScaleOffset = new pc.Vec4( i341[12], i341[13], i341[14], i341[15] )
  i340.lightProbeUsage = i341[16]
  i340.reflectionProbeUsage = i341[17]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i347 = data
  i346.center = new pc.Vec3( i347[0], i347[1], i347[2] )
  i346.size = new pc.Vec3( i347[3], i347[4], i347[5] )
  i346.enabled = !!i347[6]
  i346.isTrigger = !!i347[7]
  request.r(i347[8], i347[9], 0, i346, 'material')
  return i346
}

Deserializers["DragAndDrop"] = function (request, data, root) {
  var i348 = root || request.c( 'DragAndDrop' )
  var i349 = data
  request.r(i349[0], i349[1], 0, i348, 'mainCamera')
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i351 = data
  i350.ambientIntensity = i351[0]
  i350.reflectionIntensity = i351[1]
  i350.ambientMode = i351[2]
  i350.ambientLight = new pc.Color(i351[3], i351[4], i351[5], i351[6])
  i350.ambientSkyColor = new pc.Color(i351[7], i351[8], i351[9], i351[10])
  i350.ambientGroundColor = new pc.Color(i351[11], i351[12], i351[13], i351[14])
  i350.ambientEquatorColor = new pc.Color(i351[15], i351[16], i351[17], i351[18])
  i350.fogColor = new pc.Color(i351[19], i351[20], i351[21], i351[22])
  i350.fogEndDistance = i351[23]
  i350.fogStartDistance = i351[24]
  i350.fogDensity = i351[25]
  i350.fog = !!i351[26]
  request.r(i351[27], i351[28], 0, i350, 'skybox')
  i350.fogMode = i351[29]
  var i353 = i351[30]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i353[i + 0]) );
  }
  i350.lightmaps = i352
  i350.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i351[31], i350.lightProbes)
  i350.lightmapsMode = i351[32]
  i350.mixedBakeMode = i351[33]
  i350.environmentLightingMode = i351[34]
  i350.ambientProbe = new pc.SphericalHarmonicsL2(i351[35])
  i350.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i351[36])
  i350.useReferenceAmbientProbe = !!i351[37]
  request.r(i351[38], i351[39], 0, i350, 'customReflection')
  request.r(i351[40], i351[41], 0, i350, 'defaultReflection')
  i350.defaultReflectionMode = i351[42]
  i350.defaultReflectionResolution = i351[43]
  i350.sunLightObjectId = i351[44]
  i350.pixelLightCount = i351[45]
  i350.defaultReflectionHDR = !!i351[46]
  i350.hasLightDataAsset = !!i351[47]
  i350.hasManualGenerate = !!i351[48]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i357 = data
  request.r(i357[0], i357[1], 0, i356, 'lightmapColor')
  request.r(i357[2], i357[3], 0, i356, 'lightmapDirection')
  request.r(i357[4], i357[5], 0, i356, 'shadowMask')
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i358 = root || new UnityEngine.LightProbes()
  var i359 = data
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i367 = data
  var i369 = i367[0]
  var i368 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i369.length; i += 1) {
    i368.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i369[i + 0]));
  }
  i366.ShaderCompilationErrors = i368
  i366.name = i367[1]
  i366.guid = i367[2]
  var i371 = i367[3]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( i371[i + 0] );
  }
  i366.shaderDefinedKeywords = i370
  var i373 = i367[4]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i373[i + 0]) );
  }
  i366.passes = i372
  var i375 = i367[5]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i375[i + 0]) );
  }
  i366.usePasses = i374
  var i377 = i367[6]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i377[i + 0]) );
  }
  i366.defaultParameterValues = i376
  request.r(i367[7], i367[8], 0, i366, 'unityFallbackShader')
  i366.readDepth = !!i367[9]
  i366.hasDepthOnlyPass = !!i367[10]
  i366.isCreatedByShaderGraph = !!i367[11]
  i366.disableBatching = !!i367[12]
  i366.compiled = !!i367[13]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i381 = data
  i380.shaderName = i381[0]
  i380.errorMessage = i381[1]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i386 = root || new pc.UnityShaderPass()
  var i387 = data
  i386.id = i387[0]
  i386.subShaderIndex = i387[1]
  i386.name = i387[2]
  i386.passType = i387[3]
  i386.grabPassTextureName = i387[4]
  i386.usePass = !!i387[5]
  i386.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[6], i386.zTest)
  i386.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[7], i386.zWrite)
  i386.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[8], i386.culling)
  i386.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i387[9], i386.blending)
  i386.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i387[10], i386.alphaBlending)
  i386.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[11], i386.colorWriteMask)
  i386.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[12], i386.offsetUnits)
  i386.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[13], i386.offsetFactor)
  i386.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[14], i386.stencilRef)
  i386.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[15], i386.stencilReadMask)
  i386.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i387[16], i386.stencilWriteMask)
  i386.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i387[17], i386.stencilOp)
  i386.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i387[18], i386.stencilOpFront)
  i386.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i387[19], i386.stencilOpBack)
  var i389 = i387[20]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i389[i + 0]) );
  }
  i386.tags = i388
  var i391 = i387[21]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( i391[i + 0] );
  }
  i386.passDefinedKeywords = i390
  var i393 = i387[22]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i393[i + 0]) );
  }
  i386.passDefinedKeywordGroups = i392
  var i395 = i387[23]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i395[i + 0]) );
  }
  i386.variants = i394
  var i397 = i387[24]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i397[i + 0]) );
  }
  i386.excludedVariants = i396
  i386.hasDepthReader = !!i387[25]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i399 = data
  i398.val = i399[0]
  i398.name = i399[1]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i401 = data
  i400.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[0], i400.src)
  i400.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[1], i400.dst)
  i400.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i401[2], i400.op)
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i403 = data
  i402.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[0], i402.pass)
  i402.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[1], i402.fail)
  i402.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[2], i402.zFail)
  i402.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i403[3], i402.comp)
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i407 = data
  i406.name = i407[0]
  i406.value = i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i411 = data
  var i413 = i411[0]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( i413[i + 0] );
  }
  i410.keywords = i412
  i410.hasDiscard = !!i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i417 = data
  i416.passId = i417[0]
  i416.subShaderIndex = i417[1]
  var i419 = i417[2]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( i419[i + 0] );
  }
  i416.keywords = i418
  i416.vertexProgram = i417[3]
  i416.fragmentProgram = i417[4]
  i416.exportedForWebGl2 = !!i417[5]
  i416.readDepth = !!i417[6]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i423 = data
  request.r(i423[0], i423[1], 0, i422, 'shader')
  i422.pass = i423[2]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i427 = data
  i426.name = i427[0]
  i426.type = i427[1]
  i426.value = new pc.Vec4( i427[2], i427[3], i427[4], i427[5] )
  i426.textureValue = i427[6]
  i426.shaderPropertyFlag = i427[7]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i429 = data
  var i431 = i429[0]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i431[i + 0]) );
  }
  i428.files = i430
  i428.componentToPrefabIds = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i435 = data
  i434.path = i435[0]
  request.r(i435[1], i435[2], 0, i434, 'unityObject')
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i437 = data
  var i439 = i437[0]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i439[i + 0]) );
  }
  i436.scriptsExecutionOrder = i438
  var i441 = i437[1]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i441[i + 0]) );
  }
  i436.sortingLayers = i440
  var i443 = i437[2]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i443[i + 0]) );
  }
  i436.cullingLayers = i442
  i436.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i437[3], i436.timeSettings)
  i436.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i437[4], i436.physicsSettings)
  i436.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i437[5], i436.physics2DSettings)
  i436.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i437[6], i436.qualitySettings)
  i436.enableRealtimeShadows = !!i437[7]
  i436.enableAutoInstancing = !!i437[8]
  i436.enableStaticBatching = !!i437[9]
  i436.enableDynamicBatching = !!i437[10]
  i436.lightmapEncodingQuality = i437[11]
  i436.desiredColorSpace = i437[12]
  var i445 = i437[13]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( i445[i + 0] );
  }
  i436.allTags = i444
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i449 = data
  i448.name = i449[0]
  i448.value = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i453 = data
  i452.id = i453[0]
  i452.name = i453[1]
  i452.value = i453[2]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i457 = data
  i456.id = i457[0]
  i456.name = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i459 = data
  i458.fixedDeltaTime = i459[0]
  i458.maximumDeltaTime = i459[1]
  i458.timeScale = i459[2]
  i458.maximumParticleTimestep = i459[3]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i461 = data
  i460.gravity = new pc.Vec3( i461[0], i461[1], i461[2] )
  i460.defaultSolverIterations = i461[3]
  i460.bounceThreshold = i461[4]
  i460.autoSyncTransforms = !!i461[5]
  i460.autoSimulation = !!i461[6]
  var i463 = i461[7]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i463[i + 0]) );
  }
  i460.collisionMatrix = i462
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i467 = data
  i466.enabled = !!i467[0]
  i466.layerId = i467[1]
  i466.otherLayerId = i467[2]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'material')
  i468.gravity = new pc.Vec2( i469[2], i469[3] )
  i468.positionIterations = i469[4]
  i468.velocityIterations = i469[5]
  i468.velocityThreshold = i469[6]
  i468.maxLinearCorrection = i469[7]
  i468.maxAngularCorrection = i469[8]
  i468.maxTranslationSpeed = i469[9]
  i468.maxRotationSpeed = i469[10]
  i468.baumgarteScale = i469[11]
  i468.baumgarteTOIScale = i469[12]
  i468.timeToSleep = i469[13]
  i468.linearSleepTolerance = i469[14]
  i468.angularSleepTolerance = i469[15]
  i468.defaultContactOffset = i469[16]
  i468.autoSimulation = !!i469[17]
  i468.queriesHitTriggers = !!i469[18]
  i468.queriesStartInColliders = !!i469[19]
  i468.callbacksOnDisable = !!i469[20]
  i468.reuseCollisionCallbacks = !!i469[21]
  i468.autoSyncTransforms = !!i469[22]
  var i471 = i469[23]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i471[i + 0]) );
  }
  i468.collisionMatrix = i470
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i475 = data
  i474.enabled = !!i475[0]
  i474.layerId = i475[1]
  i474.otherLayerId = i475[2]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i477 = data
  var i479 = i477[0]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i479[i + 0]) );
  }
  i476.qualityLevels = i478
  var i481 = i477[1]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( i481[i + 0] );
  }
  i476.names = i480
  i476.shadows = i477[2]
  i476.anisotropicFiltering = i477[3]
  i476.antiAliasing = i477[4]
  i476.lodBias = i477[5]
  i476.shadowCascades = i477[6]
  i476.shadowDistance = i477[7]
  i476.shadowmaskMode = i477[8]
  i476.shadowProjection = i477[9]
  i476.shadowResolution = i477[10]
  i476.softParticles = !!i477[11]
  i476.softVegetation = !!i477[12]
  i476.activeColorSpace = i477[13]
  i476.desiredColorSpace = i477[14]
  i476.masterTextureLimit = i477[15]
  i476.maxQueuedFrames = i477[16]
  i476.particleRaycastBudget = i477[17]
  i476.pixelLightCount = i477[18]
  i476.realtimeReflectionProbes = !!i477[19]
  i476.shadowCascade2Split = i477[20]
  i476.shadowCascade4Split = new pc.Vec3( i477[21], i477[22], i477[23] )
  i476.streamingMipmapsActive = !!i477[24]
  i476.vSyncCount = i477[25]
  i476.asyncUploadBufferSize = i477[26]
  i476.asyncUploadTimeSlice = i477[27]
  i476.billboardsFaceCameraPosition = !!i477[28]
  i476.shadowNearPlaneOffset = i477[29]
  i476.streamingMipmapsMemoryBudget = i477[30]
  i476.maximumLODLevel = i477[31]
  i476.streamingMipmapsAddAllCameras = !!i477[32]
  i476.streamingMipmapsMaxLevelReduction = i477[33]
  i476.streamingMipmapsRenderersPerFrame = i477[34]
  i476.resolutionScalingFixedDPIFactor = i477[35]
  i476.streamingMipmapsMaxFileIORequests = i477[36]
  i476.currentQualityLevel = i477[37]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i487 = data
  i486.weight = i487[0]
  i486.vertices = i487[1]
  i486.normals = i487[2]
  i486.tangents = i487[3]
  return i486
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"12":[13],"14":[13],"15":[13],"16":[13],"17":[13],"18":[13],"19":[20],"21":[1],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[31],"38":[31],"39":[31],"40":[31],"41":[31],"42":[31],"43":[31],"44":[1],"45":[6],"46":[47],"48":[47],"49":[50],"51":[50],"52":[50],"53":[49],"54":[55,50],"56":[50],"57":[49],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[50],"64":[50],"65":[50],"66":[50],"67":[55,50],"68":[50],"69":[50],"70":[50],"71":[50],"72":[55,50],"73":[50],"74":[75],"76":[75],"77":[75],"78":[75],"79":[1],"80":[1],"81":[50],"82":[6,50],"83":[50,55],"84":[50],"85":[55,50],"86":[6],"87":[55,50],"88":[50],"89":[90],"91":[90],"92":[90]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","DragAndDrop","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "04/04/2026 17:22:47";

Deserializers.lunaDaysRunning = "1.7";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1840";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3034";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "f23cc7c4-7f0e-4278-9355-f750bbd88df8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

