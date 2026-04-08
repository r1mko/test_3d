var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointSpring' )
  var i247 = data
  i246.spring = i247[0]
  i246.damper = i247[1]
  i246.targetPosition = i247[2]
  return i246
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointMotor' )
  var i249 = data
  i248.m_TargetVelocity = i249[0]
  i248.m_Force = i249[1]
  i248.m_FreeSpin = i249[2]
  return i248
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointLimits' )
  var i251 = data
  i250.m_Min = i251[0]
  i250.m_Max = i251[1]
  i250.m_Bounciness = i251[2]
  i250.m_BounceMinVelocity = i251[3]
  i250.m_ContactDistance = i251[4]
  i250.minBounce = i251[5]
  i250.maxBounce = i251[6]
  return i250
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointDrive' )
  var i253 = data
  i252.m_PositionSpring = i253[0]
  i252.m_PositionDamper = i253[1]
  i252.m_MaximumForce = i253[2]
  i252.m_UseAcceleration = i253[3]
  return i252
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i255 = data
  i254.m_Spring = i255[0]
  i254.m_Damper = i255[1]
  return i254
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i257 = data
  i256.m_Limit = i257[0]
  i256.m_Bounciness = i257[1]
  i256.m_ContactDistance = i257[2]
  return i256
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i259 = data
  i258.m_ExtremumSlip = i259[0]
  i258.m_ExtremumValue = i259[1]
  i258.m_AsymptoteSlip = i259[2]
  i258.m_AsymptoteValue = i259[3]
  i258.m_Stiffness = i259[4]
  return i258
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i261 = data
  i260.m_LowerAngle = i261[0]
  i260.m_UpperAngle = i261[1]
  return i260
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i263 = data
  i262.m_MotorSpeed = i263[0]
  i262.m_MaximumMotorTorque = i263[1]
  return i262
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i265 = data
  i264.m_DampingRatio = i265[0]
  i264.m_Frequency = i265[1]
  i264.m_Angle = i265[2]
  return i264
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i267 = data
  i266.m_LowerTranslation = i267[0]
  i266.m_UpperTranslation = i267[1]
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i269 = data
  i268.name = i269[0]
  i268.halfPrecision = !!i269[1]
  i268.useSimplification = !!i269[2]
  i268.useUInt32IndexFormat = !!i269[3]
  i268.vertexCount = i269[4]
  i268.aabb = i269[5]
  var i271 = i269[6]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( !!i271[i + 0] );
  }
  i268.streams = i270
  i268.vertices = i269[7]
  var i273 = i269[8]
  var i272 = []
  for(var i = 0; i < i273.length; i += 1) {
    i272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i273[i + 0]) );
  }
  i268.subMeshes = i272
  var i275 = i269[9]
  var i274 = []
  for(var i = 0; i < i275.length; i += 16) {
    i274.push( new pc.Mat4().setData(i275[i + 0], i275[i + 1], i275[i + 2], i275[i + 3],  i275[i + 4], i275[i + 5], i275[i + 6], i275[i + 7],  i275[i + 8], i275[i + 9], i275[i + 10], i275[i + 11],  i275[i + 12], i275[i + 13], i275[i + 14], i275[i + 15]) );
  }
  i268.bindposes = i274
  var i277 = i269[10]
  var i276 = []
  for(var i = 0; i < i277.length; i += 1) {
    i276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i277[i + 0]) );
  }
  i268.blendShapes = i276
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i283 = data
  i282.triangles = i283[0]
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i289 = data
  i288.name = i289[0]
  var i291 = i289[1]
  var i290 = []
  for(var i = 0; i < i291.length; i += 1) {
    i290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i291[i + 0]) );
  }
  i288.frames = i290
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i292 = root || new pc.UnityMaterial()
  var i293 = data
  i292.name = i293[0]
  request.r(i293[1], i293[2], 0, i292, 'shader')
  i292.renderQueue = i293[3]
  i292.enableInstancing = !!i293[4]
  var i295 = i293[5]
  var i294 = []
  for(var i = 0; i < i295.length; i += 1) {
    i294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i295[i + 0]) );
  }
  i292.floatParameters = i294
  var i297 = i293[6]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i297[i + 0]) );
  }
  i292.colorParameters = i296
  var i299 = i293[7]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i299[i + 0]) );
  }
  i292.vectorParameters = i298
  var i301 = i293[8]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i301[i + 0]) );
  }
  i292.textureParameters = i300
  var i303 = i293[9]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i303[i + 0]) );
  }
  i292.materialFlags = i302
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i307 = data
  i306.name = i307[0]
  i306.value = i307[1]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i311 = data
  i310.name = i311[0]
  i310.value = new pc.Color(i311[1], i311[2], i311[3], i311[4])
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i315 = data
  i314.name = i315[0]
  i314.value = new pc.Vec4( i315[1], i315[2], i315[3], i315[4] )
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i319 = data
  i318.name = i319[0]
  request.r(i319[1], i319[2], 0, i318, 'value')
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i323 = data
  i322.name = i323[0]
  i322.enabled = !!i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i325 = data
  i324.name = i325[0]
  i324.width = i325[1]
  i324.height = i325[2]
  i324.mipmapCount = i325[3]
  i324.anisoLevel = i325[4]
  i324.filterMode = i325[5]
  i324.hdr = !!i325[6]
  i324.format = i325[7]
  i324.wrapMode = i325[8]
  i324.alphaIsTransparency = !!i325[9]
  i324.alphaSource = i325[10]
  i324.graphicsFormat = i325[11]
  i324.sRGBTexture = !!i325[12]
  i324.desiredColorSpace = i325[13]
  i324.wrapU = i325[14]
  i324.wrapV = i325[15]
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i327 = data
  i326.name = i327[0]
  i326.atlasId = i327[1]
  i326.mipmapCount = i327[2]
  i326.hdr = !!i327[3]
  i326.size = i327[4]
  i326.anisoLevel = i327[5]
  i326.filterMode = i327[6]
  var i329 = i327[7]
  var i328 = []
  for(var i = 0; i < i329.length; i += 4) {
    i328.push( UnityEngine.Rect.MinMaxRect(i329[i + 0], i329[i + 1], i329[i + 2], i329[i + 3]) );
  }
  i326.rects = i328
  i326.wrapU = i327[8]
  i326.wrapV = i327[9]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i333 = data
  i332.name = i333[0]
  i332.index = i333[1]
  i332.startup = !!i333[2]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i335 = data
  i334.aspect = i335[0]
  i334.orthographic = !!i335[1]
  i334.orthographicSize = i335[2]
  i334.backgroundColor = new pc.Color(i335[3], i335[4], i335[5], i335[6])
  i334.nearClipPlane = i335[7]
  i334.farClipPlane = i335[8]
  i334.fieldOfView = i335[9]
  i334.depth = i335[10]
  i334.clearFlags = i335[11]
  i334.cullingMask = i335[12]
  i334.rect = i335[13]
  request.r(i335[14], i335[15], 0, i334, 'targetTexture')
  i334.usePhysicalProperties = !!i335[16]
  i334.focalLength = i335[17]
  i334.sensorSize = new pc.Vec2( i335[18], i335[19] )
  i334.lensShift = new pc.Vec2( i335[20], i335[21] )
  i334.gateFit = i335[22]
  i334.commandBufferCount = i335[23]
  i334.cameraType = i335[24]
  i334.enabled = !!i335[25]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i337 = data
  i336.name = i337[0]
  i336.tagId = i337[1]
  i336.enabled = !!i337[2]
  i336.isStatic = !!i337[3]
  i336.layer = i337[4]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i339 = data
  i338.type = i339[0]
  i338.color = new pc.Color(i339[1], i339[2], i339[3], i339[4])
  i338.cullingMask = i339[5]
  i338.intensity = i339[6]
  i338.range = i339[7]
  i338.spotAngle = i339[8]
  i338.shadows = i339[9]
  i338.shadowNormalBias = i339[10]
  i338.shadowBias = i339[11]
  i338.shadowStrength = i339[12]
  i338.shadowResolution = i339[13]
  i338.lightmapBakeType = i339[14]
  i338.renderMode = i339[15]
  request.r(i339[16], i339[17], 0, i338, 'cookie')
  i338.cookieSize = i339[18]
  i338.shadowNearPlane = i339[19]
  i338.occlusionMaskChannel = i339[20]
  i338.enabled = !!i339[21]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i341 = data
  request.r(i341[0], i341[1], 0, i340, 'sharedMesh')
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i343 = data
  request.r(i343[0], i343[1], 0, i342, 'additionalVertexStreams')
  i342.enabled = !!i343[2]
  request.r(i343[3], i343[4], 0, i342, 'sharedMaterial')
  var i345 = i343[5]
  var i344 = []
  for(var i = 0; i < i345.length; i += 2) {
  request.r(i345[i + 0], i345[i + 1], 2, i344, '')
  }
  i342.sharedMaterials = i344
  i342.receiveShadows = !!i343[6]
  i342.shadowCastingMode = i343[7]
  i342.sortingLayerID = i343[8]
  i342.sortingOrder = i343[9]
  i342.lightmapIndex = i343[10]
  i342.lightmapSceneIndex = i343[11]
  i342.lightmapScaleOffset = new pc.Vec4( i343[12], i343[13], i343[14], i343[15] )
  i342.lightProbeUsage = i343[16]
  i342.reflectionProbeUsage = i343[17]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i349 = data
  i348.center = new pc.Vec3( i349[0], i349[1], i349[2] )
  i348.size = new pc.Vec3( i349[3], i349[4], i349[5] )
  i348.enabled = !!i349[6]
  i348.isTrigger = !!i349[7]
  request.r(i349[8], i349[9], 0, i348, 'material')
  return i348
}

Deserializers["DragAndDrop"] = function (request, data, root) {
  var i350 = root || request.c( 'DragAndDrop' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'mainCamera')
  return i350
}

Deserializers["Stack"] = function (request, data, root) {
  var i352 = root || request.c( 'Stack' )
  var i353 = data
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i355 = data
  i354.ambientIntensity = i355[0]
  i354.reflectionIntensity = i355[1]
  i354.ambientMode = i355[2]
  i354.ambientLight = new pc.Color(i355[3], i355[4], i355[5], i355[6])
  i354.ambientSkyColor = new pc.Color(i355[7], i355[8], i355[9], i355[10])
  i354.ambientGroundColor = new pc.Color(i355[11], i355[12], i355[13], i355[14])
  i354.ambientEquatorColor = new pc.Color(i355[15], i355[16], i355[17], i355[18])
  i354.fogColor = new pc.Color(i355[19], i355[20], i355[21], i355[22])
  i354.fogEndDistance = i355[23]
  i354.fogStartDistance = i355[24]
  i354.fogDensity = i355[25]
  i354.fog = !!i355[26]
  request.r(i355[27], i355[28], 0, i354, 'skybox')
  i354.fogMode = i355[29]
  var i357 = i355[30]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i357[i + 0]) );
  }
  i354.lightmaps = i356
  i354.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i355[31], i354.lightProbes)
  i354.lightmapsMode = i355[32]
  i354.mixedBakeMode = i355[33]
  i354.environmentLightingMode = i355[34]
  i354.ambientProbe = new pc.SphericalHarmonicsL2(i355[35])
  i354.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i355[36])
  i354.useReferenceAmbientProbe = !!i355[37]
  request.r(i355[38], i355[39], 0, i354, 'customReflection')
  request.r(i355[40], i355[41], 0, i354, 'defaultReflection')
  i354.defaultReflectionMode = i355[42]
  i354.defaultReflectionResolution = i355[43]
  i354.sunLightObjectId = i355[44]
  i354.pixelLightCount = i355[45]
  i354.defaultReflectionHDR = !!i355[46]
  i354.hasLightDataAsset = !!i355[47]
  i354.hasManualGenerate = !!i355[48]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'lightmapColor')
  request.r(i361[2], i361[3], 0, i360, 'lightmapDirection')
  request.r(i361[4], i361[5], 0, i360, 'shadowMask')
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i362 = root || new UnityEngine.LightProbes()
  var i363 = data
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i371 = data
  var i373 = i371[0]
  var i372 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i373.length; i += 1) {
    i372.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i373[i + 0]));
  }
  i370.ShaderCompilationErrors = i372
  i370.name = i371[1]
  i370.guid = i371[2]
  var i375 = i371[3]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( i375[i + 0] );
  }
  i370.shaderDefinedKeywords = i374
  var i377 = i371[4]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i377[i + 0]) );
  }
  i370.passes = i376
  var i379 = i371[5]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i379[i + 0]) );
  }
  i370.usePasses = i378
  var i381 = i371[6]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i381[i + 0]) );
  }
  i370.defaultParameterValues = i380
  request.r(i371[7], i371[8], 0, i370, 'unityFallbackShader')
  i370.readDepth = !!i371[9]
  i370.hasDepthOnlyPass = !!i371[10]
  i370.isCreatedByShaderGraph = !!i371[11]
  i370.disableBatching = !!i371[12]
  i370.compiled = !!i371[13]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i385 = data
  i384.shaderName = i385[0]
  i384.errorMessage = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i390 = root || new pc.UnityShaderPass()
  var i391 = data
  i390.id = i391[0]
  i390.subShaderIndex = i391[1]
  i390.name = i391[2]
  i390.passType = i391[3]
  i390.grabPassTextureName = i391[4]
  i390.usePass = !!i391[5]
  i390.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[6], i390.zTest)
  i390.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[7], i390.zWrite)
  i390.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[8], i390.culling)
  i390.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i391[9], i390.blending)
  i390.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i391[10], i390.alphaBlending)
  i390.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[11], i390.colorWriteMask)
  i390.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[12], i390.offsetUnits)
  i390.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[13], i390.offsetFactor)
  i390.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[14], i390.stencilRef)
  i390.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[15], i390.stencilReadMask)
  i390.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i391[16], i390.stencilWriteMask)
  i390.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i391[17], i390.stencilOp)
  i390.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i391[18], i390.stencilOpFront)
  i390.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i391[19], i390.stencilOpBack)
  var i393 = i391[20]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i393[i + 0]) );
  }
  i390.tags = i392
  var i395 = i391[21]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( i395[i + 0] );
  }
  i390.passDefinedKeywords = i394
  var i397 = i391[22]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i397[i + 0]) );
  }
  i390.passDefinedKeywordGroups = i396
  var i399 = i391[23]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i399[i + 0]) );
  }
  i390.variants = i398
  var i401 = i391[24]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i401[i + 0]) );
  }
  i390.excludedVariants = i400
  i390.hasDepthReader = !!i391[25]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i403 = data
  i402.val = i403[0]
  i402.name = i403[1]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i405 = data
  i404.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i405[0], i404.src)
  i404.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i405[1], i404.dst)
  i404.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i405[2], i404.op)
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i407 = data
  i406.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[0], i406.pass)
  i406.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[1], i406.fail)
  i406.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[2], i406.zFail)
  i406.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[3], i406.comp)
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i411 = data
  i410.name = i411[0]
  i410.value = i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i415 = data
  var i417 = i415[0]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( i417[i + 0] );
  }
  i414.keywords = i416
  i414.hasDiscard = !!i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i421 = data
  i420.passId = i421[0]
  i420.subShaderIndex = i421[1]
  var i423 = i421[2]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( i423[i + 0] );
  }
  i420.keywords = i422
  i420.vertexProgram = i421[3]
  i420.fragmentProgram = i421[4]
  i420.exportedForWebGl2 = !!i421[5]
  i420.readDepth = !!i421[6]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'shader')
  i426.pass = i427[2]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i431 = data
  i430.name = i431[0]
  i430.type = i431[1]
  i430.value = new pc.Vec4( i431[2], i431[3], i431[4], i431[5] )
  i430.textureValue = i431[6]
  i430.shaderPropertyFlag = i431[7]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i433 = data
  var i435 = i433[0]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i435[i + 0]) );
  }
  i432.files = i434
  i432.componentToPrefabIds = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i439 = data
  i438.path = i439[0]
  request.r(i439[1], i439[2], 0, i438, 'unityObject')
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i441 = data
  var i443 = i441[0]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i443[i + 0]) );
  }
  i440.scriptsExecutionOrder = i442
  var i445 = i441[1]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i445[i + 0]) );
  }
  i440.sortingLayers = i444
  var i447 = i441[2]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i447[i + 0]) );
  }
  i440.cullingLayers = i446
  i440.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i441[3], i440.timeSettings)
  i440.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i441[4], i440.physicsSettings)
  i440.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i441[5], i440.physics2DSettings)
  i440.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i441[6], i440.qualitySettings)
  i440.enableRealtimeShadows = !!i441[7]
  i440.enableAutoInstancing = !!i441[8]
  i440.enableStaticBatching = !!i441[9]
  i440.enableDynamicBatching = !!i441[10]
  i440.lightmapEncodingQuality = i441[11]
  i440.desiredColorSpace = i441[12]
  var i449 = i441[13]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( i449[i + 0] );
  }
  i440.allTags = i448
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i453 = data
  i452.name = i453[0]
  i452.value = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i457 = data
  i456.id = i457[0]
  i456.name = i457[1]
  i456.value = i457[2]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i461 = data
  i460.id = i461[0]
  i460.name = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i463 = data
  i462.fixedDeltaTime = i463[0]
  i462.maximumDeltaTime = i463[1]
  i462.timeScale = i463[2]
  i462.maximumParticleTimestep = i463[3]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i465 = data
  i464.gravity = new pc.Vec3( i465[0], i465[1], i465[2] )
  i464.defaultSolverIterations = i465[3]
  i464.bounceThreshold = i465[4]
  i464.autoSyncTransforms = !!i465[5]
  i464.autoSimulation = !!i465[6]
  var i467 = i465[7]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i467[i + 0]) );
  }
  i464.collisionMatrix = i466
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i471 = data
  i470.enabled = !!i471[0]
  i470.layerId = i471[1]
  i470.otherLayerId = i471[2]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'material')
  i472.gravity = new pc.Vec2( i473[2], i473[3] )
  i472.positionIterations = i473[4]
  i472.velocityIterations = i473[5]
  i472.velocityThreshold = i473[6]
  i472.maxLinearCorrection = i473[7]
  i472.maxAngularCorrection = i473[8]
  i472.maxTranslationSpeed = i473[9]
  i472.maxRotationSpeed = i473[10]
  i472.baumgarteScale = i473[11]
  i472.baumgarteTOIScale = i473[12]
  i472.timeToSleep = i473[13]
  i472.linearSleepTolerance = i473[14]
  i472.angularSleepTolerance = i473[15]
  i472.defaultContactOffset = i473[16]
  i472.autoSimulation = !!i473[17]
  i472.queriesHitTriggers = !!i473[18]
  i472.queriesStartInColliders = !!i473[19]
  i472.callbacksOnDisable = !!i473[20]
  i472.reuseCollisionCallbacks = !!i473[21]
  i472.autoSyncTransforms = !!i473[22]
  var i475 = i473[23]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i475[i + 0]) );
  }
  i472.collisionMatrix = i474
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i479 = data
  i478.enabled = !!i479[0]
  i478.layerId = i479[1]
  i478.otherLayerId = i479[2]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i481 = data
  var i483 = i481[0]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i483[i + 0]) );
  }
  i480.qualityLevels = i482
  var i485 = i481[1]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( i485[i + 0] );
  }
  i480.names = i484
  i480.shadows = i481[2]
  i480.anisotropicFiltering = i481[3]
  i480.antiAliasing = i481[4]
  i480.lodBias = i481[5]
  i480.shadowCascades = i481[6]
  i480.shadowDistance = i481[7]
  i480.shadowmaskMode = i481[8]
  i480.shadowProjection = i481[9]
  i480.shadowResolution = i481[10]
  i480.softParticles = !!i481[11]
  i480.softVegetation = !!i481[12]
  i480.activeColorSpace = i481[13]
  i480.desiredColorSpace = i481[14]
  i480.masterTextureLimit = i481[15]
  i480.maxQueuedFrames = i481[16]
  i480.particleRaycastBudget = i481[17]
  i480.pixelLightCount = i481[18]
  i480.realtimeReflectionProbes = !!i481[19]
  i480.shadowCascade2Split = i481[20]
  i480.shadowCascade4Split = new pc.Vec3( i481[21], i481[22], i481[23] )
  i480.streamingMipmapsActive = !!i481[24]
  i480.vSyncCount = i481[25]
  i480.asyncUploadBufferSize = i481[26]
  i480.asyncUploadTimeSlice = i481[27]
  i480.billboardsFaceCameraPosition = !!i481[28]
  i480.shadowNearPlaneOffset = i481[29]
  i480.streamingMipmapsMemoryBudget = i481[30]
  i480.maximumLODLevel = i481[31]
  i480.streamingMipmapsAddAllCameras = !!i481[32]
  i480.streamingMipmapsMaxLevelReduction = i481[33]
  i480.streamingMipmapsRenderersPerFrame = i481[34]
  i480.resolutionScalingFixedDPIFactor = i481[35]
  i480.streamingMipmapsMaxFileIORequests = i481[36]
  i480.currentQualityLevel = i481[37]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i491 = data
  i490.weight = i491[0]
  i490.vertices = i491[1]
  i490.normals = i491[2]
  i490.tangents = i491[3]
  return i490
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"14":[15],"16":[15],"17":[15],"18":[15],"19":[15],"20":[15],"21":[22],"23":[2],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[25],"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[33],"40":[33],"41":[33],"42":[33],"43":[33],"44":[33],"45":[33],"46":[2],"47":[7],"48":[49],"50":[49],"51":[52],"53":[52],"54":[52],"55":[51],"56":[57,52],"58":[52],"59":[51],"60":[52],"61":[52],"62":[52],"63":[52],"64":[52],"65":[52],"66":[52],"67":[52],"68":[52],"69":[57,52],"70":[52],"71":[52],"72":[52],"73":[52],"74":[57,52],"75":[52],"76":[77],"78":[77],"79":[77],"80":[77],"81":[2],"82":[2],"83":[52],"84":[7,52],"85":[52,57],"86":[52],"87":[57,52],"88":[7],"89":[57,52],"90":[52],"91":[92],"93":[92],"94":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","DragAndDrop","Stack","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "04/04/2026 17:22:47";

Deserializers.lunaDaysRunning = "1.9";

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

Deserializers.buildID = "f62d64ed-b699-4c28-9e63-25816f062936";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

