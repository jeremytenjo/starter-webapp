// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
// Addons
import { withReadme } from 'storybook-readme'
// Readme
import IconsReadme from './Icons.readme.md'
// Components
import * as Icons from './Icons.Set/index'

const { Shape, Bookmark } = Icons

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20px);
  grid-gap: 20px;
`

// Stories
storiesOf('Icons', module)
  .addDecorator(withReadme([IconsReadme]))
  .add('Icons Set', () => (
    <Wrapper>
      <Shape />
      <Bookmark />
    </Wrapper>
  ))
  .add('with Color', () => <Shape color='red' />)
  .add('with Size', () => <Shape size={50} />)
