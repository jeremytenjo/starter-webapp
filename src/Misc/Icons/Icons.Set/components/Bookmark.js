/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types'
import React from 'react'
const Bookmark = ({ size, ...props }) => (
  <svg viewBox='0 0 14 18' fill='currentColor' width={size || '14'} height={size || '18'} {...props}>
    <path
      d='M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0Z'
      fill='currentColor'
      fillOpacity='.54'
    />
  </svg>
)
Bookmark.displayName = 'Bookmark'
Bookmark.propTypes = {
  size: PropTypes.string,
}
export default Bookmark
/* tslint:enable */
/* eslint-enable */
