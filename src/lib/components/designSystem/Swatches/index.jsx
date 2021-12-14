import Box from '../../Box'
import objectToArray from '../../../utils/objects/objectToArray'
import flattenObject from '../../../utils/objects/flattenObject'

import Swatch from './Swatch'
import * as styles from './styles'

export default function Swatches({ colors = {} }) {
  const flattenObj = flattenObject(colors)
  const colorsArray = objectToArray(flattenObj) || []

  return (
    <Box sx={styles.wrapper}>
      {colorsArray.map((color) => {
        return (
          <Swatch
            key={Object.keys(color)[0]}
            name={Object.keys(color)[0]}
            color={Object.values(color)[0]}
          />
        )
      })}
    </Box>
  )
}
