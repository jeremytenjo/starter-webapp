import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

// Route Pages
import AccessRoutes from '../Pages/Access/access.routes'
import HomeRoutes from '../Pages/Home/home.routes'
import Core from '../Templates/Core/core.index'

const Routes = withRouter((router) => {
  // Set history object globally
  window.historyRouter = router

  return (
    <>
      <AccessRoutes />
      <Core>
        <HomeRoutes />
      </Core>
    </>
  )
})

export default () => (
  <BrowserRouter>
    <>
      <Routes />
    </>
  </BrowserRouter>
)
