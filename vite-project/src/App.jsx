


import Classcom from './Classcom'
import { Component } from 'react'
import Empdata from './Empdata'


export default class App extends Component{
  constructor(){
    super()
    this.state={
        webname:"https://www.youtube.com"
    }
  }
  render(){
    return(
      <>
      <h1>Classs component</h1>
  
       <Classcom web={this.state.webname}/>
       <Empdata/>
      
      </>
    )
  }
}



