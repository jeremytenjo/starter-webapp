import React from 'react'
import { storiesOf } from '@storybook/react'

import { colors } from './colors.index'

const Colorsd = () => {
  const colorArray = Object.keys(colors).map((i) => ({
    name: i,
    value: colors[i],
  }))

  return (
    <div
      style={{
        dislay: 'grid',
        gridTemplateColumns: `repeat(${colorArray.length}, 100px)`,
      }}
    >
      {colorArray.map(({ name, value }) => (
        <div
          key={name}
          style={{
            display: 'inline-grid',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            width: 'fit-content',
            marginRight: '10px',
          }}
        >
          <svg height='100' width='100'>
            <circle cx='50' cy='50 ' r='40' fill={value} />
          </svg>
          {name}
        </div>
      ))}
    </div>
  )
}
storiesOf('Theme|Colors', module).add('Color Palette', () => <Colorsd />)
