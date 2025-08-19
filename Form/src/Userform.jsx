import React from "react";
import { useState } from "react";
function Userform(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[radio1, setRadio1] = useState("");
    const[radio2, setRadio2] = useState("");
    const[checkbox1, setCheck] = useState("");
    const[checkbox2, setCheckbox] = useState("");
    const[add, setAdd] = useState("");
    const[option1, setOptiob1] = useState("");

    function getdata(e){
        e.preventDefault();
        let user={name, email, password, radio1, radio2, checkbox1, checkbox2, add, option1};
        console.log(user);
    }
    
    return(
        <div>
            <h2>User Form</h2>
            <form onSubmit={getdata}>
                <input type="text" placeholder="Enter name" value={name} onChange={(e)=>(setName(e.target.value))} /><br /> <br />
                <input type="email"placeholder="Enter email" value={email} onChange={(e)=>(setEmail(e.target.value))} /> <br /> <br />
                <input type="password"placeholder="enter password" value={password} onChange={(e)=>(setPassword(e.target.value))} /> <br /> <br />
                <label>gender:</label>
                <input type="radio" name="radio" value={radio1} onChange={(e)=>(setRadio1(e.target.checked))} />male
                <input type="radio" name="radio"value={radio2} onChange={(e)=>(setRadio2(e.target.checked))} />female <br /> <br />

                <label>hobbies:</label>
                <input type="checkbox" name="ch1" value={checkbox1} onChange={(e)=>(setCheck(e.target.checked))} />coding
                <input type="checkbox" name="ch2" value={checkbox2} onChange={(e)=>(setCheckbox(e.target.checked))}/>watching movies <br /><br />
                <label>Address</label>
                <textarea rows={5}cols={30} value={add} onChange={(e)=>(setAdd(e.target.value))}></textarea><br /><br />
                <label>State</label>
                <select value={option1} onChange={(e)=>(setOptiob1(e.target.value))}>
                    <option>Select state</option>
                   <option >maharastra</option>
                    <option >madhyapr</option>
                    <option >uttar</option>

                </select>

                <br /><br />
                <button type="submit">submit</button>

            </form>
        </div>
    )
}

export default Userform;