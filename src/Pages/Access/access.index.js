import React from 'react'
import AccessPage from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/AccessPage/accessPage.index.js'

import BASE_URL from '../../Router/router.constants'
import UserState from '../../User/user.state'

const AccessIndex = () => {
  const historyRouter = window.historyRouter
  const { updateUser } = UserState()

  const redirectToBase = () => historyRouter.history.push(BASE_URL)

  const handleSuccess = ({ token, user }) => {
    console.log({ token, user })

    const {
      userData: {
        user: { photoURL, displayName, uid },
      },
    } = user

    const userInfo = {
      id: uid,
      photoURL,
      name: displayName,
    }

    updateUser(userInfo)
    redirectToBase()
  }
  return (
    <>
      <AccessPage onSuccess={handleSuccess} />
    </>
  )
}

export default AccessIndex
