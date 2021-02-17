import React, { useContext, useState } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom';
import AuthContext from './Auth-context';

const Login = () => {
    const auth = useContext(AuthContext)
    const history = useHistory()
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    async function onSubmitHandler(event) {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/user/login', data)
            console.log(response.data.token)
            localStorage.setItem("token", response.data.token)
            auth.login(response.data.token)
            history.push('/')
        }
        catch (error) {
            console.log(error.response.data)
        }

    }

    function dataChangeHandler(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="container pl-5 py-5">
                <h1 style={{ alignItems: "center", marginBottom: "35px" }}>Login</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={dataChangeHandler} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" onChange={dataChangeHandler} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default Login;