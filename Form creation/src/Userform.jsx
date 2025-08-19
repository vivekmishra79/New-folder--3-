import React from "react";

function Userform(){
    return(
        <div>
            <h2>User Form</h2>
            <form>
                <input type="text" placeholder="Enter name" /><br /> <br />
                <input type="email"placeholder="Enter email" /> <br /> <br />
                <input type="password"placeholder="enter password" /> <br /> <br />
                <label>gender:</label>
                <input type="radio" name="radio"  />male
                <input type="radio" name="radio" />female <br /> <br />

                <label>hobbies:</label>
                <input type="checkbox" name="ch1"  />coding
                <input type="checkbox" name="ch2" />watching movies <br /><br />
                <label>Address</label>
                <textarea rows={5}cols={30}></textarea><br /><br />
                <label>State</label>
                <select>
                   <option >maharastra</option>
                    <option >madhyapr</option>
                    <option >uttar</option>

                </select>

                <br /><br />
                <button type="submit"></button>

            </form>
        </div>
    )
}