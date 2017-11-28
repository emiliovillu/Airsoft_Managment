import React, { Component } from 'react'
import { getPlayerByIdInTeam, editPlayerById } from '../services/api'
import ImageUpload from '../components/ImageUpload'
import { Row, Col, Image } from 'react-bootstrap'

import axios from 'axios'
const { REACT_APP_API_SERVER } = process.env

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
	uploadFile = async file => {
    let data = new FormData()
    data.append('file', file)
    
    const { data: { imageLink } } = await axios.post(`${REACT_APP_API_SERVER}/upload`,data)      
    this.setState({ img: imageLink })
  }	
      
    
	render() {
		const { img } = this.state
		console.log(img)
		return(
			<div>
				<legend>Crear tu Jugador</legend>
				<form>
					<Row className="form-group">
						<Col md={6}>
							<label for="img-team">Imagen del Jugador</label>
							<ImageUpload uploadFile={ this.uploadFile } />
						</Col>
						<Col md={6}>
							{
								img &&
								<Image width="200" src={ img } alt={ img } responsive />
							}
						</Col>
					</Row>
					<Row className="form-group">
						<label for="exampleFormControlInput1">Nombre del Jugador</label>
						<input 
							type="text"
							name="name"
							onChange={this.handleChange}
							value={this.state.name} 
							className="form-control" 
							id="exampleFormControlInput1" 
							placeholder="Nombre del jugador"
						/>
					</Row>
					<Row className="form-group">
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
					</Row>
					<Row className="form-group">
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
					</Row>
					<Row className="form-group">
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
					</Row>
					<legend>Equipamiento</legend>
					<Row className="form-group">
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
					</Row>
					<Row className="form-group">
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
					</Row>
					<Row className="form-group">
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
					</Row>
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