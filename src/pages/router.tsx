import { BrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react'

import ShellLayout from './shell.layout'
import HomeRoutes from './HomePage/routes'
import NotFoundPageRoutes from './NotFoundPage/routes'

export function Routes() {
  return (
    <ShellLayout>
      <Suspense fallback={null}>
        <HomeRoutes />
        <NotFoundPageRoutes />
      </Suspense>
    </ShellLayout>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
