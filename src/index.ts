import { engine, GltfContainer, InputAction, inputSystem, Material, MeshCollider, pointerEventsSystem, Transform } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import { waterSetup } from './waterfall'


export function main() {
  //// Import glb models into scene
  //#region Import

  const landscapeEntity = engine.addEntity()
  GltfContainer.create(landscapeEntity, { src: 'models/collider.glb' })
  Transform.create(landscapeEntity, { position: { x: 16, y: 0, z: 16 } })

  //#endregion


  // water falls
  waterSetup()

}
