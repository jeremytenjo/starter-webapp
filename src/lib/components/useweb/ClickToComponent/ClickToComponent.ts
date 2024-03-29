import { lazy } from 'react'

const ClickToComponent = lazy(() => import('@useweb/click-to-component'))

export default import.meta.env.DEV ? ClickToComponent : () => null
