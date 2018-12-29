export default (email, password) =>
  new Promise(async (resolve, reject) => {
    const credentailApiConditions =
      window.PasswordCredential &&
      window.FederatedCredential &&
      navigator.credentials &&
      navigator.credentials.preventSilentAccess

    if (credentailApiConditions) {
      try {
        let cred = new PasswordCredential({
          id: email,
          password: password,
          name: 'name',
          iconURL: 'iconUrl'
        })

        navigator.credentials.store(cred)
        resolve(true)
      } catch (e) {
        reject('Failed to store credential: ' + e)
      }
    } else {
      resolve(false)
    }
  })
