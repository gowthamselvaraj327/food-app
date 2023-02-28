import React, {useEffect, useState} from "react";
import './Signup.css';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
    const history = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/signup",{
                username, password
            })
            .then(res => {
                if(res.data == "exist"){
                    alert("User already exists")
                }

                else if(res.data == "notexist"){
                    history("/restaurant",{state:{id:username}})
                }
            })
            .catch(e => {
                alert("Invalid Credentials")
            })

        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <div className="body">
            <div className="container">
                <div className="login-content">
                    <div className="user-icon">
                        <h2>Signup Form</h2>
                    </div>
                    <form action="POST" className="login-form">
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="Username"
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={submit}
                            >Signup</button>
                        </div>
                    </form>
                    <div className="forgot-password">
                        <NavLink to="/">Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;