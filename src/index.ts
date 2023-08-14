import { engine, GltfContainer,Transform } from '@dcl/sdk/ecs'
import { waterSetup } from './waterfall'


export function main() {
  //// Import glb models into scene

  const landscapeEntity = engine.addEntity()
  GltfContainer.create(landscapeEntity, { src: 'models/OVA_zenSpace.glb' })
  Transform.create(landscapeEntity, { position: { x: 16, y: 0, z: 16 }  })

  // water falls
  waterSetup()

}
