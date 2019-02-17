/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types'
import React from 'react'
const Shape = ({ size, ...props }) => (
  <svg viewBox='0 0 16 16' fill='currentColor' width={size || '16'} height={size || '16'} {...props}>
    <path
      d='M16 7H3.8L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7Z'
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'
      fillOpacity='.54'
    />
  </svg>
)
Shape.displayName = 'Shape'
Shape.propTypes = {
  size: PropTypes.string,
}
export default Shape
/* tslint:enable */
/* eslint-enable */
