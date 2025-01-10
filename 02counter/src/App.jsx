import { useState } from 'react'
import './App.css'
import Visibility from './component/Visibility'
import Form from './component/Form'

function App() {
  //let counter = 15
  const [counter, setCounter] = useState(15)
  const addValue = () =>{
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>React Course with Hitesh</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick = {addValue}
      >Add value</button> {" "}
      <button 
      onClick={removeValue}
      >Remove value</button>
      <p>footer: {counter} </p>

      <Visibility/>
      <Form />
    </>
  )
}

export default App
