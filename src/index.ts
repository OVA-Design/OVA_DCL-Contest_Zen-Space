import { engine, InputAction, inputSystem, Material, MeshCollider, pointerEventsSystem } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'


import { bounceScalingSystem, circularSystem } from './systems'

import { setupUi } from './ui'
import { BounceScaling, Spinner } from './components'
import { createCube } from './factory'
import { waterfallSetup } from './waterfall'


export function main() {

  // water falls
  waterfallSetup()

}
