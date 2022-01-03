import React, { useRef } from 'react'
import Box from '@mui/material/Box'

import useBlinkAnimation from '../../../utils/animation/useBlinkAnimation/useBlinkAnimation'

type Props = { blink: boolean; children: any; sx?: any }

export default function Blink({ blink, children, sx = {} }: Props) {
  const ref = useRef(null)

  useBlinkAnimation({ el: () => ref.current, loading: blink })

  return (
    <Box ref={ref} style={{ opacity: 0 }} sx={sx}>
      {children}
    </Box>
  )
}
