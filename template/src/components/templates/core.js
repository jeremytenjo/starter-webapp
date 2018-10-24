import React from 'react'

class HeaderFooter extends React.Component {
  render() {
    return (
      <>
        <p>Header</p>
        {this.props.children}
        <p>Footer</p>
      </>
    )
  }
}

export default HeaderFooter
