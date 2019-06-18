import React from 'react'
import ReactDOM from 'react-dom'
import List from '@tenjojeremy/web-toolkit/Data-Display/List/Ui/React/list.index'
console.log(List)

const dataSet1 = ['block', 'block', 'block', 'block']
const itemComponent = ({ item }) => <p>{item}</p>

ReactDOM.render(
  <div>
    <List data={dataSet1} ItemComponent={itemComponent} />
  </div>,
  document.getElementById('root'),
)
