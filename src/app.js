import * as React from 'react'
import '../public/globals.css'
import { Card } from './card.js'
import { FlexRow, FlexCol, TwoColumnGrid } from './utils'
import { SearchIcon } from '@heroicons/react/solid'
import { Ratings } from '/src/card.js'
import { AuthComponent } from '/src/features/Auth/components/AuthComponent.tsx'

export var App = (props) => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        padding: 8,
        gap: 8,
      }}
    >
      <AuthComponent />
      <img
        style={{
          width: 142,
          height: 142,
          contain: 'layout',
        }}
        src='/editor/icons/favicons/favicon-128.png?hash=v0.1.425'
      />
      <span
        style={{
          fontSize: '40px',
          fontWeight: 700,
          fontStyle: 'normal',
        }}
      >
        Beaches
      </span>
      <span
        style={{
          color: 'rgb(0, 0, 0, 0.5)',
          fontSize: '16px',
        }}
      >
        Featured
      </span>
      <TwoColumnGrid style={{ gap: 8 }}>
        <Card
          name='La Digue'
          country='Seychelles'
          image='https://source.unsplash.com/jPmurJKSL_0/600x800'
          rating={5}
        />
        <Card
          name='Isle of Pines'
          country='New Caledonia'
          image='https://source.unsplash.com/n7DY58YFg9E/600x800'
          rating={5}
        />
        <Card
          name='McWay Falls'
          country='California'
          image='https://source.unsplash.com/07mSKrzKiRw/600x800'
          rating={3}
        />
        <Card
          name='Meeru Island'
          country='Maldives'
          image='https://source.unsplash.com/8OGJqpNMBGM/600x800'
          rating={4}
        >
          <FlexRow>
            <div
              style={{
                backgroundColor: '#aaaaaa33',
                position: 'absolute',
                left: 54,
                top: -116,
                width: 156,
                height: 217,
              }}
            />
          </FlexRow>
          <Card />
        </Card>
      </TwoColumnGrid>
    </FlexCol>
  )
}
