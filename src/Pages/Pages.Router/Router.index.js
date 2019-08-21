//Vendors
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

//Routes
import AccessRoutes from '../Access/access.routes'
import HomeRoutes from '../Home/home.routes'
import Page2Routes from '../Page2/page2.routes'

const Routes = withRouter(({ history }) => {
  window.historyRouter = history
  return (
    <>
      <AccessRoutes />
      <HomeRoutes />
      <Page2Routes />
    </>
  )
})

// Export
export default () => (
  <BrowserRouter>
    <>
      <Routes />
    </>
  </BrowserRouter>
)
