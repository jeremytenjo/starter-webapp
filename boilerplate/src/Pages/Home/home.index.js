//Vendors
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { AddToHomeScreenButton } from '../../Utilities/Misc/AddToHomeScreen/addToHomeScreen.index'

import { H1 } from '../../Theme/Theme.Typography/Theme.Typography.get'

const Buttons = ({ onClick }) => <button onClick={onClick}>Custom Button</button>

// const hi = Buttons ? true : false

const Home = () => (
  <Wrapper>
    Home
    <H1Custom>This is a H1</H1Custom>
    UPDATE UPDATE
    <br />
    <Link to='/Page2'>page2</Link>
    <AddToHomeScreenButton Button={Buttons} onClick={() => console.log('clicked')} />
  </Wrapper>
)

//Style
const Wrapper = styled.div``

const H1Custom = styled(H1)``

export default Home
