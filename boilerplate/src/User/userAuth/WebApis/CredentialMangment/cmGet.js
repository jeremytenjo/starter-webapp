export default () =>
  new Promise(async (resolve, reject) => {
    const credentailApiConditions =
      window.PasswordCredential &&
      window.FederatedCredential &&
      navigator.credentials &&
      navigator.credentials.preventSilentAccess
    let userInfo

    if (credentailApiConditions) {
      try {
        userInfo = await navigator.credentials.get({
          password: true,
          mediation: 'silent',
        })
        resolve(userInfo)
      } catch (e) {
        reject('Sign in Failed: ' + e)
      }
    } else {
      resolve(false)
    }
  })
