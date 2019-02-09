//Vendors
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  const add = () => window.addToHomeScreen.prompt()

  return (
    <Wrapper>
      Home
      <br />
      <Link to='/Page2'>page2</Link>
      <button onClick={add}>Add to homescreen</button>
    </Wrapper>
  )
}

//Style
const Wrapper = styled.div``

export default Home
