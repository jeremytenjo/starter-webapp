//Vendors
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

//Routes
import AccessRoutes from '../../components/pages/Access/accessRoutes'
import HomeRoutes from '../../components/pages/Home/homeRoutes'
import Page2Routes from '../../components/pages/Page2/page2Routes'

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
