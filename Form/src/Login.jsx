import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Login() {
    const[uname, setUsername] = useState("");
    const[password, setPassword] = useState("");

    function LoginForm(e){
        e.preventDefault();
        if(!uname){
            alert("please enter username")
        }
        else if(uname.length<4||uname.length>10){
            alert("plz enter atleast 4 char")
        }
        else{
            alert("login successfully")
        }
    }
  return (
    <div>
      <Form onSubmit={LoginForm}>
        <h2 className='my-3'>Login Form</h2>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label value={uname} onChange={(e)=>(setUsername(e.target.value))} >usename: </Form.Label> 
        <Form.Control type="email" className='my-3' placeholder="Enter email" />
      </Form.Group> <br /><br />
      <Form.Group  controlId="formGroupPassword">
        <Form.Label value={password} onChange={(e)=>(setPassword(e.target.value))} >Password: </Form.Label>
        <Form.Control    type="password" placeholder="Password" />
      </Form.Group>
    </Form> <br /><br />
     <Button variant="danger">Submit</Button>
    </div>
  )
}

export default Login
