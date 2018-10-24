import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import HomeRoutes from '../../components/pages/Home/routes'
import AccessRoutes from '../../components/pages/Access/routes'
import Page2Routes from '../../components/pages/Page2/routes'

export default () => (
  <BrowserRouter>
    <>
      <AccessRoutes />
      <HomeRoutes />
      <Page2Routes />
    </>
  </BrowserRouter>
)
