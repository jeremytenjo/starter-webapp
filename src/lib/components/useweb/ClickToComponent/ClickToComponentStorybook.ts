import { lazy } from 'react'

const ClickToComponent = lazy(() => import('@useweb/click-to-component'))

export default process.env.NODE_ENV === 'development' ? ClickToComponent : () => null
