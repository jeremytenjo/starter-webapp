import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const NotFoundPage = lazy(() => import('./NotFoundPage'))

export default function NotFoundPageRoutes() {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
