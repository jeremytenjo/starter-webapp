import React, { Suspense } from 'react'
import { BrowserRouter } from '@tenjojeremy/web-toolkit/navigation/router'

import Core from '../templates/core'
import HomeRoutes from '../pages/home/routes'

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Core>
          <HomeRoutes />
        </Core>
      </Suspense>
    </BrowserRouter>
  )
}

export default RouterWrapper
