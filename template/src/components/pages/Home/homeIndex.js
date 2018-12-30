//Vendors
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      Home
      <br />
      <Link to="/Page2">page2</Link>
    </Wrapper>
  )
}

//Style
const Wrapper = styled.div``

export default Home
