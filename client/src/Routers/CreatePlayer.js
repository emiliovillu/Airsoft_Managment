import React, { Component } from 'react'
import { addPlayerById } from '../services/api'

class CreatePlayer extends Component{
  
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
			button: 'Crear mi Jugador'
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
		this.setState({button : 'Guardando jugador'}, () => {
			addPlayerById(this.props.match.params.id, {
				name: this.state.name,
				lastName: this.state.lastName,
				nick: this.state.nick,
				rol: this.state.rol,
				img: this.state.img, 
				primary: this.state.primary,
				secondary: this.state.secondary,
				extras: this.state.extras,
			}).then(() => {
				this.props.history.push(`/team/${this.props.match.params.id}`)
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
						<label for="exampleFormControlInput1">Apellido del Juagdor</label>
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

export default CreatePlayer