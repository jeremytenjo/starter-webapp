// Vendors
import React from 'react'
import styled from 'styled-components'

import { ThemeManifest } from '../Manifest'
import getColorCOllection from './Figma.Colors.set'

const Colors = () => {
  // Vars
  const { colors: colorSet } = ThemeManifest
  let colorSetFinal = []
  let colorSetFinalLength = 0

  colorSetFinal = getColorCOllection(colorSet)
  colorSetFinalLength = colorSetFinal.length

  // Template
  return (
    <Wrapper colorSetFinalLength={colorSetFinalLength}>
      {colorSetFinal.map((Item) => (
        <DIV key={Item.colorKey}>
          <svg height='100' width='100'>
            <circle cx='50' cy='50' r='40' stroke='black' strokeWidth='1' fill={Item.colorValue} />
          </svg>

          <span> {Item.colorKey}</span>
          <span> {Item.colorValue}</span>
        </DIV>
      ))}
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ colorSetFinalLength }) => colorSetFinalLength}, fit-content(100%));
  grid-gap: 50px;
`
const DIV = styled.div`
  font-family: Roboto;
  display: inline-grid;
  justify-content: center;
  font-weight: 600;
  text-align: center;
  grid-gap: 10px;

  svg {
    justify-self: center;
  }
`

// Exports
export default Colors
