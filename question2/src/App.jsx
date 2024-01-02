import { useState } from 'react'
import Button from './Button';


function App() {
  

  return (
    
     
    <Button text= "Click on me" onclickFunction={()=>{
      console.log('The question 2 has been done ');
    }}/>

  )
}

export default App;
