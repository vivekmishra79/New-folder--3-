import React,{useEffect} from "react"
import './App.css'
import { useState } from "react"

function App() {

  const[count,setCount]=useState(0)
  const[name,setName]=useState("vivek")

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
      console.log("component called");
      
    },2000)
  },[])

   function changename(){
     setName(()=>{
       console.log("component called");
       return "sujeet"
       })
   }
  return (
    <>
    <h1>Example of useEffect</h1>
    <h2>I have rendered {count} times</h2>
    <h1>I am {name}</h1>
    <button onClick={changename}>Changename</button>
      
    </>
  )
}

export default App
