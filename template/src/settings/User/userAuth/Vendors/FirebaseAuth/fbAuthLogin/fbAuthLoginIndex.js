export default async (type, email, password) => {
  let userInfo
  let loginFun

  switch (type) {
    case 'email':
      loginFun = await import('./loginEmail')
      userInfo = await loginFun.default(email, password)
      break

    default:
      userInfo = false
      break
  }

  return userInfo
}
