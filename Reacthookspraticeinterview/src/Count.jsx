import React, { useState } from 'react'

function Count() {
    const[Count,setCount]=useState(0)
    function changecount(){
        
        
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        
       

    }
  return (
    <div>
      <h1>counter:{Count}</h1>
      <button onClick={changecount}>Increment by 4</button>
    </div>
  )
}

export default Count
