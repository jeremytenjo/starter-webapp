import React, { cloneElement } from 'react'
import { ToastProvider } from '@tenjojeremy/web-toolkit/build/Feedback/Toast/toast.index'

import { UploadsProvider } from '../Data/Uploads/uploads.state'
import { UserProvider } from '../User/User.state'

const providers = [<UploadsProvider key={1} />, <UserProvider key={2} />, <ToastProvider key={3} />]

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children,
  )

const ContextProvider = ({ children }) => <ProviderComposer contexts={providers}>{children}</ProviderComposer>

export default ContextProvider
