// Vendros
import React, { cloneElement } from 'react'

// Functions
import { addToHomeScreenAdd } from '../addToHomeScreen.index'

const addToHomeScreenButton = ({ onCick, Button }) => {
  const showPromt = () => {
    addToHomeScreenAdd()
    onCick && onCick
  }

  return <>{Button ? <Button onClick={showPromt} /> : <button onClick={showPromt}>Add to homescreen</button>} </>
}

addToHomeScreenButton.defaultProps = {
  onClick: null,
  button: null,
}

export default addToHomeScreenButton
