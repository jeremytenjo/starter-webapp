import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class PrivateComponent extends React.Component {
  render() {
    return (
      <>
        <Route
          render={(props, authed = true) =>
            authed === true ? (
              this.props.children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: {
                    from: props.location
                  }
                }}
              />
            )
          }
        />
      </>
    )
  }
}

export default PrivateComponent
