import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

import HomeRoutes from './HomePage/routes'

export function Routes() {
  return (
    <>
      <Suspense fallback={null}>
        <HomeRoutes />
      </Suspense>
    </>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
