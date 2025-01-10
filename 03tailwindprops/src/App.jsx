import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    name: 'Ivan',
    age: 21,
    address: {
      city: 'Manila',
      state: 'Metro Manila',
      country: 'Philippines'
    }
  }
  let newArr = [1,2,3,4,5,6,7,8]
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">Vite with Tailwind</h1>
      <Card userName="Ivan" myArrr={newArr} />
      <Card userName="Ian" post="Not Assigned Yet" />
      <Card />
    </>
  )
}

export default App
