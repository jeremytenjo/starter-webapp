//Vendors
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

//Routes
import AccessRoutes from '../../components/pages/Access/accessRoutes'
import HomeRoutes from '../../components/pages/Home/homeRoutes'
import Page2Routes from '../../components/pages/Page2/page2Routes'

export default () => (
  <BrowserRouter>
    <>
      <AccessRoutes />
      <HomeRoutes />
      <Page2Routes />
    </>
  </BrowserRouter>
)
