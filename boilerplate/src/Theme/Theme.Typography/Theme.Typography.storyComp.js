import React, { useState, useEffect } from 'react'
import * as Types from './Theme.Typography.get'

const Typography = () => {
  // State
  const [Typos, setTypos] = useState([])

  // Effect
  useEffect(() => {
    createTypes()
  }, [])

  // Functions
  const createTypes = () => {
    const allTypes = { ...Types }
    const arrayTypos = []

    for (const key in allTypes) {
      if (allTypes.hasOwnProperty(key)) {
        const element = allTypes[key]
        arrayTypos.push(element)
      }
    }
    setTypos(arrayTypos)
  }

  // Template
  return (
    <>
      {Typos.map((Item) => (
        <Item key={Item.displayName}>{Item.target}</Item>
      ))}
    </>
  )
}

// Exports
export default Typography
