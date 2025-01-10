import React from 'react'
import { useState } from 'react'

const Visibility = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
        {isVisible && <p>This text is Visible</p>}
        <button onClick={()=> {setIsVisible(!isVisible)}}>
            {isVisible ? "Hide" : "Show"}
        </button>
    </div>
  )
}

export default Visibility