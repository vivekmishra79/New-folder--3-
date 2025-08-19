import react, { Component } from "react";

export default class Classcom extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            name:"Abc",
           
        }
    }

    minus(){
        if(this.state.count>0)
        this.setState({count:this.state.count-1})
    }

    render(){
        return(
            <div>
                <h3>Counter:{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
                <button onClick={()=>this.minus()}>-</button>
                <h4>My name is:{this.state.name}</h4>
                <button onClick={()=>this.setState({name:"xyz"})}>change name</button>
                <h1>visit our website {this.props.web}</h1>
                
            </div>
        )
    }
}