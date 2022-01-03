import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

import IconChevron from '../../../icons/IconChevron'
import colors from '../../../../../theme/tokens/colors'

type Props = {
  name: string
  label: string
  register?: any
  options: {
    label: string
    value: string | number
  }[]
  defaultValue?: string | number
  sx?: object
  color?: string
  onChange?: (value: any) => any
  buttonProps?: ButtonProps
}

export default function Select({
  name,
  label,
  options = [],
  defaultValue = 1,
  register = () => null,
  sx = {},
  color = colors.grey.light,
  onChange = () => null,
  buttonProps = {},
}: Props) {
  const [value, setValue] = useState(defaultValue)

  const handleValueChange = (event) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  return (
    <Box sx={{ width: '100%', position: 'relative', height: '37px' }}>
      <Button
        sx={{
          position: 'absolute',
          pointerEvents: 'none',
          color,
          borderColor: color,
          ...sx,
        }}
        variant='outlined'
        size='medium'
        endIcon={<IconChevron sx={{ stroke: color, transform: 'translateY(8px)' }} />}
        {...buttonProps}
      >
        {label}
      </Button>

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
          height: '100%',
          zIndex: 1,
          opacity: 0,
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
