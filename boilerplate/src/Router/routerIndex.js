//Vendors
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

//Routes
import AccessRoutes from '../Pages/Access/accessRoutes'
import HomeRoutes from '../Pages/Home/homeRoutes'
import Page2Routes from '../Pages/Page2/page2Routes'

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
