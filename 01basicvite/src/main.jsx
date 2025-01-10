import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>My App </h1>
        </div>
    )
    
}

const SampleElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)
//React Can only Understand this
//It creates an Element
//But you have to specify it, ORDER MATTERS
const areactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: "_blank"
    },
    'click to visit google'
)
createRoot(document.getElementById('root')).render(
    areactElement
)
