//Vendors
import React from 'react'
import ReactDOM from 'react-dom'
import { List } from '@tenjo/web-features'

//Settings
// import './Configs/configFirebase'
// import { swRegister } from './ServiceWorker/swIndex'
// import UserAuthentication from './User/userAuth/User.authentication.js'
// Wrapp render with <UserAuthentication> to enable authenicatin and set user initial state to null

// import { apiSetUrl } from './Api/apiIndex'
// import { addToHomeScreenInit } from './Utilities/Misc/AddToHomeScreen/addToHomeScreen.index'
const dataSet1 = ['block', 'block', 'block', 'block']
const itemComponent = ({ item }) => <p>{item}</p>

ReactDOM.render(
  <div>
    <List data={dataSet1} ItemComponent={itemComponent} />
  </div>,
  document.getElementById('root'),
)

// swRegister()
// apiSetUrl()
// addToHomeScreenInit()
