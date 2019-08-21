import React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@tenjojeremy/web-toolkit/build/Data-Display/Typography/Ui/React/typography.index'

import List from './build/Data-Display/List/Ui/React/list.index'
// import Icon from '@tenjojeremy/web-toolkit/build/Data-Display/Icon/Ui/React/icon.index'
// import Icon from './build/Data-Display/Icon/Ui/React/icon.index'
// console.log(Icon)

const dataSet1 = ['block', 'block', 'block', 'block']
const itemComponent = ({ item }) => <p>{item}</p>

ReactDOM.render(
  <div>
    <Typography text='huhuhu' />
    <List data={dataSet1} ItemComponent={itemComponent} />
  </div>,
  document.getElementById('root'),
)
