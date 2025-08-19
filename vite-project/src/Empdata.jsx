import React,{Component} from "react";

export default class Empdata extends Component{
    constructor(){
        super()

        this.state={
            emp:[
                {id:1,name:"vivek",age:23},
                {id:2,name:"xxxxx",age:34},
                {id:3,name:"yyyyy",age:4},

            ]
        }
     
    }

    render(){
        return(
            <div>
                <table border={1} align="center">
                   <thead>
                    <tr><th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th></tr>
                   </thead>

                   <tbody>
                    {
                        this.state.emp.map((m,index)=>{
                            return(
                                <tr key={index}>

                                    <td>{m.id}</td>
                                    <td>{m.name}</td>
                                    <td>{m.age}</td>
                                </tr>
                            )
                        })
                    }
                   </tbody>
                </table>
            </div>
        )
    }
}