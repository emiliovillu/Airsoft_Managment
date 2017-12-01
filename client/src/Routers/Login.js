import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/authService'
import  { saveToken } from '../services/storageService'
import { getInfoUser } from '../services/api'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert2'
import '../styles/Login.css'


class Register extends Component{
	constructor(props){
		super(props)
		
  }
  
  componentWillMount(){
    this.props.hideNavigation()
    document.body.style.background = 'url(http://www.esnporto.org/sites/default/files/styles/zoom/public/events/images/airsoft.jpg?itok=yL1dM7i4) no-repeat'
    document.body.style.backgroundSize = 'cover' 
  }
  
  handleLogin = async (e) => {
    try {
      const { username, password } = this.state
      const token = await loginUser(username, password)
      saveToken(token)
      const infoUser = await getInfoUser()
      const idInfoUser = infoUser.user.team._id
      swal({
        position: 'top-right',
        type: 'success',
        title: 'You has been logged correctly',
        showConfirmButton: false,
        timer: 1500
      })
      this.props.history.push(`/team/${idInfoUser}`)
    }
    catch (err) {
      swal(
        'Oops...',
        'You not register!',
        'error'
      )
      this.props.history.push('/register')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	render(){
    
		return(
      <div className="login-background">

			<form className="login">
				<div className="form-group">
					<label for="exampleInputEmail1">Nombre de Usuario</label>
					<input onChange={this.handleChange} name="username" type="text" className="form-control" id="exampleInputEmail1" placeholder="Username"/>
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input onChange={this.handleChange} name="password" required={true} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
				</div>
        <button onClick={this.handleLogin} type="button" required={true} className="btn btn-lg btn-primary">Login</button>
        <Link id="lista" to={'/register'}>
          <p>No tienes usuario aún?, REGISTRATE AHORA!!</p>
        </Link>  
      </form>
      </div>
		)
	}
}
export default Register