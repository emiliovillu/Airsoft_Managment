import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import ImageUpload from '../components/ImageUpload'
import { addPlayerById } from '../services/api'
import axios from 'axios'
import swal from 'sweetalert2'
import '../styles/CreatePlayer.css'
const { REACT_APP_API_SERVER } = process.env

class CreatePlayer extends Component{
  
	constructor(){
		super()
		this.state = {
			name: '',
			lastName: '',
			nick: '',
			rol: '',
			img: 'http://cdn-airsoft-management.surge.sh/img/default_profile.jpg',
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
				swal({
					position: 'top-right',
					type: 'success',
					title: 'Player create correctly',
					showConfirmButton: false,
					timer: 2000
				})
				this.props.history.push(`/team/${this.props.match.params.id}`)
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
		return(
			<div>
				<legend>Crear tu Jugador</legend>
				<form>
					<Row className="form-group">
						<Col xs={6} md={6}>
							<label for="img-team">Imagen del Jugador</label>
							<ImageUpload uploadFile={ this.uploadFile } />
						</Col>
						<Col xs={6} md={6}>	
						{
							img &&
							<img className="img-responsive img-thumbnail img-player" src={ img } alt={img}  />
						}
						</Col>
					</Row>
					<Row className="form-group">
						<label for="exampleFormControlInput1">Nombre del Juagador</label>
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

export default CreatePlayer