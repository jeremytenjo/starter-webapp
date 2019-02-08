// Vendors
import React, { useGlobal } from 'reactn'

// Init State
export const user = {
  _id: '5b8318541dae212b50469eb5',
  displayName: 'Hayle Whitehead',
  phone_number: 519800499,
  email: 'hayle.cathernine@gmail.com',
  location: 'vancouver-bc-canada',
  categories: Array,
  rating: 5,
  photoURL:
    'https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'
}

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
