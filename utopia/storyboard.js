import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Card } from '/src/card.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 375,
        height: 759,
        display: 'flex',
        flexDirection: 'column',
      }}
      data-label='Beaches'
    >
      <App style={{}} />
    </Scene>
  </Storyboard>
)
