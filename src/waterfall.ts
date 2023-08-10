import {
    MeshCollider,
    Transform,
    engine,
    InputAction,
    Material,
    MeshRenderer,
    VisibilityComponent,
    VideoPlayer,
    PointerEventType,
    inputSystem,
    pointerEventsSystem,
    Texture,
    MaterialTransparencyMode,
    VideoTexture
  } from '@dcl/sdk/ecs'
  import { Quaternion, Vector3, Color4, Color3 } from '@dcl/sdk/math'
  import * as utils from '@dcl-sdk/utils'

export function waterfallSetup() {
    //#set plane model for video texture
    let waterfallPlane = engine.addEntity()
    Transform.create(waterfallPlane, {
      position: Vector3.create(16, 0, 16),
      scale: Vector3.create(1, 6, 1),
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
}