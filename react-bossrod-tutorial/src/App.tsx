import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <h1>Users Lists</h1>
      <div className="flex flex-col gap-4">
        <UserCard name="John Doe 1" email="john1@gmail.com"/>
        <UserCard name="John Doe 2" email="john2@gmail.com"/>
        <UserCard name="John Doe 3" email="john3@gmail.com"/>
      </div>
    </>
  )
}

type UserCardProps = {
  name: string;
  email: string;
}
function UserCard(props:UserCardProps){
  return (
    <>
      <div className='flex flex-col  gap-2 p-4 bg-gray-200 rounded md max-w-sm'>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
      </div>
    </>
  )
}
