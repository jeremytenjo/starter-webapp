// Vendors
import styled from 'styled-components'

// Figma
import { textStyles } from '../Theme.Figma/theme.json'

let { H1, H2, H3, H4, H5, H6, P } = textStyles

H1 = styled.h1`
  ${H1}
`
H2 = styled.h2`
  ${H2}
`
H3 = styled.h3`
  ${H3}
`

H4 = styled.h4`
  ${H4}
`
H5 = styled.h5`
  ${H5}
`
H6 = styled.h6`
  ${H6}
`
P = styled.p`
  ${P}
`

export { H1, H2, H3, H4, H5, H6, P }
