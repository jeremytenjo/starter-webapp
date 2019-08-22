import React, { useState, createContext, useContext } from 'react'

export const UserContext = createContext(null)

const initUser = {
  id: '',
  displayName: '',
  phone_number: '',
  email: '',
  location: '',
  categories: [],
  rating: 0,
  photoURL: '',
}

export const UserProvider = ({ children }) => {
  // State
  const [user, setUser] = useState(initUser)

  // Functions
  const updateUser = (data) => setUser(data)

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default () => useContext(UserContext)
