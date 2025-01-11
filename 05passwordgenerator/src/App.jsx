import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()"

    for(let i=1; i<length; i++){
      //rounds down to nearest integer, regardless of the decimal value
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed])

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select()
    // passwordRef.current.setSelectionRange(0,4)
  }

  // runs the effect on every render
  useEffect(()=>{
    generatePassword()
  },[length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-xl rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          className='outline-non bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipBoard}
          >
            copy 
          </button>
        </div>
        <div
        className="flex text-sm gap-x-2"
        >
          <div
          className='flex items-center gap-x-1'
          >
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            readOnly
            onChange={(e)=>setLength(e.target.value)}
            className='cursor-pointer'
            name=''
            id=''
            />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div
          className='flex items-center gap-x-1'
          >
            <input 
            type="checkbox" 
            name=''
            id=''
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div
          className='flex items-center gap-x-1'
          >
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
    </div>
  )
}

export default App
