import React, { Component } from 'react'
import { getTeamById ,editTeamById } from '../services/api'
import  SimpleForm  from '../components/SimpleForm'

class EditTeam extends Component{
  
	constructor(){
		super()
		this.state = {
			name: '',
			logo: '',
			location: '',
			button: 'Editar equipo'
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.upTeam = this.upTeam.bind(this)
	}
  
	upTeam(id){
		getTeamById(id)
			.then(response => {
				this.setState({
					name: response.name,
					logo: response.log,
					location: response.location
				})
			})
	}
  
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
  
	handleClick(){
   
		let { id } = this.props.match.params
		
		editTeamById(id, {
			logo: this.state.logo, 
			name: this.state.name, 
			location: this.state.location})
			// .then(this.setState({
			// 	button : 'Crear mi equipo'
			// }))
			.then(() => {
				this.props.history.push(`/team/${id}`)
			})
	}
  
	componentDidMount(){
		let {id} =  this.props.match.params
		this.upTeam(id)
	}

	render() {
		return(
			<div>
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
					<div className="form-group">
						<label for="exampleFormControlInput1">Cuartel General del Equipo</label>
						<SimpleForm onLatLng={(latLng, address) => {
							this.setState({location: latLng})
						}}/>
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

export default EditTeam