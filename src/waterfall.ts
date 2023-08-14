import {
    Transform,
    engine,
    Material,
    MeshRenderer,
    VideoPlayer,
  } from '@dcl/sdk/ecs'
  import { Quaternion, Vector3, Color4, Color3 } from '@dcl/sdk/math'

export function waterSetup() {
    // water fall
    //#region Import
    //#set plane model for video texture
    let waterfallPlane = engine.addEntity()
    Transform.create(waterfallPlane, {
      position: Vector3.create(14.85, 1, 21.15),
      rotation: Quaternion.fromEulerDegrees(0, 50, 0),
      scale: Vector3.create(2, 16, 2),
    })
    MeshRenderer.setPlane(waterfallPlane)  
    // import videos as texture maps
    VideoPlayer.create(waterfallPlane, {
      src: 'videos/Waterfall_Alpha_sm.webm',
      playing: true,
      loop: true,
      volume: 0.3,
      playbackRate: 1,
    })
    const waterFallVideoTexture = Material.Texture.Video({ videoPlayerEntity: waterfallPlane })
    Material.setPbrMaterial(waterfallPlane, {
      texture: waterFallVideoTexture,
      albedoColor: Color4.create(0.6118, 0.8275, 0.8588, 0.5),
      alphaTexture: waterFallVideoTexture,
      emissiveTexture: waterFallVideoTexture, // adding the color channel as emissive texture too, this way only the bright parts were visible
      emissiveColor: Color3.create(0.6118, 0.8275, 0.8588), // Fresh Water Blue / #9cd3db
      emissiveIntensity: 1, 
      bumpTexture: waterFallVideoTexture,
      roughness: 0.3, // turn on this for more shimmers
    //   metallic: 0.8,  // turn on this for even more shimmers !
    //   transparencyMode: MaterialTransparencyMode.MTM_AUTO,
    //   alphaTest:0.5
    })
    //#endregion


    // water pond
    //#region Import
    //#set plane model for video texture
    let waterPondPlane = engine.addEntity()
    Transform.create(waterPondPlane, {
      position: Vector3.create(16, 1, 16),
      rotation: Quaternion.fromEulerDegrees(90, 180, 0),
      scale: Vector3.create(24, 24, 24),
    })
    MeshRenderer.setPlane(waterPondPlane)  
    // import videos as texture maps
    VideoPlayer.create(waterPondPlane, {
      src: 'videos/pond.mp4',
      playing: true,
      loop: true,
      volume: 0.3,
      playbackRate: 0.6,
    })
    const waterPondVideoTexture = Material.Texture.Video({ videoPlayerEntity: waterPondPlane })
    Material.setPbrMaterial(waterPondPlane, {
      texture: waterPondVideoTexture,
      albedoColor: Color4.create(0.6118, 0.8275, 0.8588, 0.5),
      // alphaTexture: waterPondVideoTexture,
      emissiveTexture: waterPondVideoTexture, // adding the color channel as emissive texture too, this way only the bright parts were visible
      emissiveColor: Color3.create(0.6118, 0.8275, 0.8588), // Fresh Water Blue / #9cd3db
      emissiveIntensity: 1, 
      bumpTexture: waterPondVideoTexture,
      roughness: 0.3, // turn on this for more shimmers
    //   metallic: 0.8,  // turn on this for even more shimmers !
    //   transparencyMode: MaterialTransparencyMode.MTM_AUTO,
    //   alphaTest:0.5
    })
    //#endregion

}