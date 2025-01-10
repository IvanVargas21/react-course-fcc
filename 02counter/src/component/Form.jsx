import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [userName, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username ${userName}, Password: ${password}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setUserPassword(e.target.value)}
                />
                <button type="submit">Login</button>

            </form>
        </div>  
    )
}

export default Form