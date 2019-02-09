import React from 'react'
import { addToHomeScreenAdd } from '../addToHomeScreen.index'

const addToHomeScreenButton = ({ onCick }) => {
  const add = () => addToHomeScreenAdd

  return (
    <>
      <button onClick={add}>Add to homescreen</button>
    </>
  )
}

export default addToHomeScreenButton
