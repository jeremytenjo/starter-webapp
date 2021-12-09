import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./HomePage'))

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
