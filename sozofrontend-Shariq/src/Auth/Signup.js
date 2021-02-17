import React, { useState } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory()
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  })

  async function onSubmitHandler(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user/register', data)
      console.log(response.data)
      history.push('/login')
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
        <h1 style={{ alignItems: "center", marginBottom: "35px" }}>Signup</h1>
        <div className="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input type="text" onChange={dataChangeHandler} name="firstname" className="form-control" id="exampleInputEmail1" placeholder="First Name" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Last Name</label>
          <input type="text" onChange={dataChangeHandler} name="lastname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" onChange={dataChangeHandler} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" onChange={dataChangeHandler} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input type="password" onChange={dataChangeHandler} name="confirmpassword" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default Signup;