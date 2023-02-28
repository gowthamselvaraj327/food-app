import React, {useEffect, useState} from "react";
import './Login.css';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const history = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/",{
                username, password
            })
            .then(res => {
                if(res.data == "exist"){
                    history("/restaurant",{state:{id:username}})
                }

                else if(res.data == "notexist"){
                    alert("User not found")
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
                        <h2>Login Form</h2>
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
                            >Login</button>
                        </div>
                    </form>
                    <div className="signup">
                        <NavLink to="/signup">Sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;