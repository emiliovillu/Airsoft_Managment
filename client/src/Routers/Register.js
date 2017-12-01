import React, { Component } from 'react'
import { registerUser, loginUser } from '../services/authService'
import  { saveToken } from '../services/storageService'
import { Redirect } from 'react-router-dom'
import '../styles/Register.css'


class Register extends Component{
	constructor(props){
		super(props)
		this.state = {
      fireRedirect: false
    }
    
  }
  
  componentWillMount(){
    this.props.hideNavigation()
  }
  
  handleRegister = async (e) => {
    const { username, password } = this.state
    await registerUser(username, password)
    const token = await loginUser(username, password)
    saveToken(token)
    this.setState({
      fireRedirect: true
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	render(){
    const { fireRedirect } = this.state
		return(
			<form className="register">
				<div className="form-group">
					<label for="exampleInputEmail1">Nombre de Usuario</label>
					<input onChange={this.handleChange} name="username" type="text" className="form-control" id="exampleInputEmail1" placeholder="Username"/>
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input onChange={this.handleChange} name="password" required={true} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
				</div>
        <button onClick={this.handleRegister} type="button" required={true} className="btn btn-lg btn-primary">Registrarse</button>
        { fireRedirect && <Redirect to={'/team'}/>}
      </form>
		)
	}
}
export default Register