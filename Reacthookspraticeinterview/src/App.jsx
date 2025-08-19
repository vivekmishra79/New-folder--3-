
import { useState,React } from 'react'
import './App.css'
import Count from './Count'

function App() {
  
   const[car,setCar]=useState({
      name:"mahindra",
      model:'roma',
      color:"red",
      size:4*4
   })
  // const[state,seState]=useState("blue")
  // const changecolor=()=>{
  //   seState("red")
    // }
  function changecolor(){
    setCar((prev)=>{
      return {...prev,color:"blue",model:"new"}
    })
  }


  return (
    <>
      <h1>useState hook</h1>
      <h2>Car name is{car.name}</h2>
      <h2>Car model name is {car.model}</h2>
      <h2>Car size is {car.size}</h2>
      <h2>my fav col is {car.color}!</h2>
      <button onClick={changecolor}>Red</button>

      <Count/>
    </>
  )
}

export default App
