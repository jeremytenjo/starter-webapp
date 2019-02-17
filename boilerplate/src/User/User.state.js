// Vendors
import { useGlobal } from 'reactn'

// Init State
export const userInitState = true

// Main
const UserState = () => {
  // State
  const [user, setUser] = useGlobal('user')

  // Functions
  const updateUser = (data) => setUser(data)

  // Send back the wholse state plus functions
  return { user, updateUser }
}

// Exports
export default UserState
