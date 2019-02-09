//Vendors
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AddToHomeScreenButton } from '../../Utilities/addToHomeScreen/addToHomeScreen.index'

const Home = () => (
  <Wrapper>
    Home
    <br />
    <Link to='/Page2'>page2</Link>
    <AddToHomeScreenButton />
  </Wrapper>
)

//Style
const Wrapper = styled.div``

export default Home
