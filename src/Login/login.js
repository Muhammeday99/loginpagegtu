import React, { Component } from "react";
import ReactDom from "react-dom";
import "./Login.css";
import ExitBtn from "./ExitButton";

class Login extends Component{

  constructor(props){
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false};

  }

  showRegisterBox(){
    this.setState({isRegisterOpen: true,isLoginOpen: false})
  }
  showLoginBox(){
    this.setState({isRegisterOpen: false,isLoginOpen: true})
  }
  render(){
    return(
      <div>
      <ExitBtn />
      <div className="root-container">
        <div className="box-controller">
          <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
            Login
          </div>
          <div className={"controller "+ (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
            Register
          </div>
        </div>
        <div className="box-cont">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>
      </div>
      </div>
    )
  }
}

class LoginBox extends React.Component {

  constructor(props){
    super(props);
    this.state = { username : "", password : "", errors: [] };
  }

  showValidationerr(elm, msg){
    this.setState((prevState)=> ({errors: [...prevState.errors, { elm, msg }] }));
  }

  clearValidationErr(elm){
    this.setState((prevState) => {
      let newArr = [];
      for(let err of prevState.errors) {
        if(elm != err.elm){
          newArr.push(err);
        }
      }
      return {errors: newArr};
    })
  }

  onUsernameChange(e){
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }

  onPasswordChange(e){
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }

  submitLogin(e){
   if(this.state.username == ""){
      this.showValidationerr("username", "Username connot be empty!");
   } 
   if(this.state.password == ""){
      this.showValidationerr("password", "Password connot be empty!");
   }
  }
  render(){
    let usernameErr = null,passwordErr = null;

    for(let err of this.state.errors){
      if(err.elm == "username"){
        usernameErr = err.msg;
      } 
      if(err.elm == "password"){
        passwordErr = err.msg;
      }
    }

    return(
      <div className="inner-cont">
        <div className="header">
          Login
        </div>
        <div className="box">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="login-input" placeholder="Username"
          onChange={this.onUsernameChange.bind(this)}/>
          <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="login-input" placeholder="Password"
          onChange={this.onPasswordChange.bind(this)}/>
          <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
        </div>

        <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>

        </div>
      </div>
    )
  }
}

class RegisterBox extends React.Component {

  constructor(props){
    super(props);
    this.state = { username : "", password : "", email : "", errors: [] };
  }

  showValidationerr(elm, msg){
    this.setState((prevState)=> ({errors: [...prevState.errors, { elm, msg }] }));
  }

  clearValidationErr(elm){
    this.setState((prevState) => {
      let newArr = [];
      for(let err of prevState.errors) {
        if(elm != err.elm){
          newArr.push(err);
        }
      }
      return {errors: newArr};
    })
  }

  onUsernameChange(e){
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }
  
  onEmailChange(e){
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e){
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }

  submitRegister(e){
    if(this.state.username == ""){
       this.showValidationerr("username", "Username connot be empty!");
    }
    if(this.state.email == ""){
       this.showValidationerr("email", "Email connot be empty!");
    } 
    if(this.state.password == ""){
       this.showValidationerr("password", "Password connot be empty!");
    }


  }
  render(){

    let usernameErr = null,passwordErr = null, emailErr = null;

    for(let err of this.state.errors){
      if(err.elm == "username"){
        usernameErr = err.msg;
      } 
      if(err.elm == "email"){
        emailErr = err.msg;
      } 
      if(err.elm == "password"){
        passwordErr = err.msg;
      }
    }

    return(
      <div className="inner-cont">
        <div className="header">
          Register
        </div>
        <div className="box">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="login-input" placeholder="Username" 
          onChange={this.onUsernameChange.bind(this)}/>
          <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="login-input" placeholder="Email"
          onChange={this.onEmailChange.bind(this)}/>
          <small className="danger-error">{emailErr ? emailErr : ""}</small>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="login-input" placeholder="Password"
          onChange={this.onPasswordChange.bind(this)}/>
          <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
        </div>

        <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>

        </div>
      </div>
    )
  }
}

export default Login
