import React, { useState } from 'react'
import Box from '@mui/material/Box'

type Props = {
  name: string
  label: string
  register?: any
  options: {
    label: string
    value: string | number
  }[]
  defaultValue?: string | number
}

export default function Select({
  name,
  label,
  options = [],
  defaultValue = 1,
  register = () => null,
}: Props) {
  const [value, setValue] = useState(defaultValue)

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <label id={name} hidden>
        {label}
      </label>

      <Box
        component='select'
        id={name}
        value={value}
        onChange={handleValueChange}
        {...register(name)}
        sx={{
          width: '100%',
          zIndex: 2,
        }}
      >
        {options.map((option) => (
          <option key={option.value + option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Box>
    </Box>
  )
}
