import React, { Component } from 'react'
import { addTeam } from '../services/api'

class RegisterTeam extends Component{
  
	constructor(){
		super()
		this.state = {
			name: '',
			logo: '',
			button: 'Crear mi equipo'
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
  
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
  
	handleClick(){
		this.setState({
			name: '',
			logo: '',
			button: 'Creando Equipo......'
		})
		addTeam({logo: this.state.logo, name: this.state.name})
			.then(this.setState({
				button : 'Crear mi equipo'
			}))
	}

	render() {
		return(
			<div>
				<legend>REGISTRA TU EQUIPO</legend>
				<form>
					<div className="form-group">
						<label for="img-team">Logo del Equipo</label>
						<input 
							type="file"
							name="logo"
							onChange={this.handleChange} 
							value={this.state.logo} 
							className="form-control-file" 
							id="img-team"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Nombre del Equipo</label>
						<input 
							type="text"
							name="name"
							onChange={this.handleChange}
							value={this.state.name} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="Nombre del Equipo"
						/>
					</div>
					<button 
						type="button" 
						onClick={this.handleClick} 
						className="btn btn-danger btn-lg">
						{this.state.button}
					</button>
				</form>
			</div>
		)
	}
}

export default RegisterTeam