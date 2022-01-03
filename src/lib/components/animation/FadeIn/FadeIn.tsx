import React, { useRef } from 'react'
import Box from '@mui/material/Box'

import useFadeInOutAnimation from '../../../utils/animation/useFadeInOutAnimation/useFadeInOutAnimation'

type Props = { show: boolean; children: any; sx?: any }

export default function FadeIn({ show, children, sx = {} }: Props) {
  const ref = useRef(null)

  useFadeInOutAnimation({ el: () => ref.current, show, display: sx?.display || 'block' })

  return (
    <Box ref={ref} style={{ opacity: 0 }} sx={sx}>
      {children}
    </Box>
  )
}
