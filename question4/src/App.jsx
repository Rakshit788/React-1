import { useState } from 'react'
import List from './List'


function App() {
  let ArrayOfItems = ['Item 1' , 'Item 2' , 'Item 3', 'Item 4', 'Item 5']

  return (
    <>
   <List unorderlist={ArrayOfItems}/>
    </>
  )
}

export default App
