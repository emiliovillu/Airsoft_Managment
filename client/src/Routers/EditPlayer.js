import React, { Component } from 'react'
import { getPlayerByIdInTeam, editPlayerById } from '../services/api'

class EditPlayer extends Component{
  
	constructor(){
		super()
		this.state = {
			name: '',
			lastName: '',
			nick: '',
			rol: '',
			img: '',
			primary: '',
			secondary: '',
			extras: '',
			button: 'Editar mi Jugador'
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.upPlayer = this.upPlayer.bind(this)
	}
  
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
  

	upPlayer (teamID, memberID) {
		getPlayerByIdInTeam(teamID, memberID)
			.then(response => {
				this.setState({
					name: response.name,
					lastName: response.lastName,
					nick: response.nick,
					rol: response.rol,
					img: response.img,
					primary: response.equipment.primary,
					secondary: response.equipment.secondary,
					extras: response.equipment.extras,
					stats: response.stats
				})
			})
	}
  
	componentDidMount(){
		let { teamID, memberID } = this.props.match.params
		this.upPlayer(teamID, memberID)
	}
  
  
	handleClick(){
		let { teamID, memberID } = this.props.match.params
		this.setState({button : 'Guardando jugador...'}, () => {
			editPlayerById(teamID, memberID, {
				name: this.state.name,
				lastName: this.state.lastName,
				nick: this.state.nick,
				rol: this.state.rol,
				img: this.state.img, 
				primary: this.state.primary,
				secondary: this.state.secondary,
				extras: this.state.extras,
			})
				.then(() => {
					let { teamID, memberID } = this.props.match.params
					this.props.history.push(`/team/${teamID}/player/${memberID}`)
				})
		})
	}
		
      
    
	render() {
		return(
			<div>
				<legend>Crear tu Jugador</legend>
				<form>
					<div className="form-group">
						<label for="img-team">Imagen del Jugador</label>
						<input 
							type="file"
							name="img"
							onChange={this.handleChange} 
							value={this.state.img} 
							className="form-control-file" 
							id="img-team"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Nombre del Juagdor</label>
						<input 
							type="text"
							name="name"
							onChange={this.handleChange}
							value={this.state.name} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="Nombre del jugador"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Apellido del Juagador</label>
						<input 
							type="text"
							name="lastName"
							onChange={this.handleChange}
							value={this.state.lastName} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="apellido del jugador"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Nick del Juagdor</label>
						<input 
							type="text"
							name="nick"
							onChange={this.handleChange}
							value={this.state.nick} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="nick del jugador"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlSelect1">Seleciona un Rol</label>
						<select name="rol" 
							onChange={this.handleChange} 
							className="form-control"
							id="exampleFormControlSelect1">
							<option disabled selected>Selecciona el Rol</option>
							<option>Asalto</option>
							<option>Apoyo</option>
							<option>Tirador Selecto</option>
							<option>Francotirador</option>
						</select>
					</div>
					<legend>Equipamiento</legend>
					<div className="form-group">
						<label for="exampleFormControlInput1">Primaria</label>
						<input 
							type="text"
							name="primary"
							onChange={this.handleChange}
							value={this.state.primary} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="réplica primaria"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Secundaria</label>
						<input 
							type="text"
							name="secondary"
							onChange={this.handleChange}
							value={this.state.secondary} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="réplica secundaria"
						/>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Extras</label>
						<input 
							type="text"
							name="extras"
							onChange={this.handleChange}
							value={this.state.extras} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="granada, mina, ...."
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

export default EditPlayer