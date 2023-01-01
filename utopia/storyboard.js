import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Card } from '/src/card.js'
import { FlexCol } from 'utopia-api'
import { AuthComponent } from '/src/features/Auth/components/AuthComponent.tsx'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        left: 72,
        top: -282,
        width: 375,
        height: 759,
        display: 'flex',
        flexDirection: 'column',
      }}
      data-label='Beaches'
    >
      <App style={{ left: 0, top: 18 }}>
        <FlexCol style={{ position: 'absolute' }} />
        <Card />
      </App>
    </Scene>
  </Storyboard>
)
