import React, { Component } from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import GoogleLogin from 'react'
import { response } from "express";
export class App extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);

    
  }
  render(){
    return (
      <div>
        <Nav />
        <Books />
        <GoogleLogin
        clientId="518771907465-9mn91uss4quc2ha1p04v38h8s7jalh85.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_orgin'}
        
        />
      </div>
    );

}
}



export default App;
