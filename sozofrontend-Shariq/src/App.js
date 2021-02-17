import logo from "./logo.svg";
import Drawing1 from "./Drawing/Drawing";
import "./App.css";
import React, { useState } from "react";
import Sketch from "react-p5";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Drawing from "./Drawing/Drawing";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import AuthContext from "./Auth/Auth-context";
function App() {
  const [token, setToken] = useState(null);

  function login(token){
    setToken(token)
  }
  function logout(token){
    setToken(null)
  }

  let routes;
  if (token) {
    routes = <Switch>
      <Route exact path="/">
        <Header></Header>
      </Route>
      <Route path="/drawing">
        <Drawing></Drawing>
      </Route>
      <Redirect to="/" />
    </Switch>
    }
    else {
      routes = <Switch>
      <Route path="/signup" exact>
        <Signup></Signup>
      </Route>
      <Route path="/login" exact>
        <Login></Login>
      </Route>
      <Redirect to="login"/>
    </Switch>
    }
    return (
      <AuthContext.Provider value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout
      }}>
        <Router>
          {routes}
        </Router>
      </AuthContext.Provider>
  
    );
  }


  

export default App;
