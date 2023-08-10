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
    pointerEventsSystem
  } from '@dcl/sdk/ecs'
  import { Quaternion, Vector3, Color4, Color3 } from '@dcl/sdk/math'
  import * as utils from '@dcl-sdk/utils'

export function waterfallSetup() {
    //#set plane model for video texture
    let waterfallPlane = engine.addEntity()
    Transform.create(waterfallPlane, {
      position: Vector3.create(16, 3, 16),
      scale: Vector3.create(1, 6, 1),
    })
    MeshRenderer.setPlane(waterfallPlane)  
    // import videos as texture maps
    VideoPlayer.create(waterfallPlane, {
      src: 'videos/Waterfall_Alpha_sm.webm',
      playing: true,
      loop: true,
      volume: 0.3,
      playbackRate: 1
    })
    const videoTexture = Material.Texture.Video({ videoPlayerEntity: waterfallPlane })
    Material.setPbrMaterial(waterfallPlane, {
      texture: videoTexture,
      alphaTest: true,
    //   alphaTexture: videoTexture,
    //   emissiveTexture: videoTexture
    })
}