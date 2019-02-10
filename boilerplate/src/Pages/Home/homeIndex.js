//Vendors
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AddToHomeScreenButton } from '../../Utilities/Misc/AddToHomeScreen/addToHomeScreen.index'

const Buttons = ({ onClick }) => <button onClick={onClick}>Custom Button</button>

const Home = () => (
  <Wrapper>
    Home
    <br />
    <Link to='/Page2'>page2</Link>
    <AddToHomeScreenButton Button={Buttons} onClick={() => console.log('clicked')} />
  </Wrapper>
)

//Style
const Wrapper = styled.div``

export default Home
