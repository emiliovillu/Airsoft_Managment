import React, { Component } from 'react'
import { addTeam } from '../services/api'
import  SimpleForm  from '../components/SimpleForm'
import ImageUpload from '../components/ImageUpload'
import { Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'

const { REACT_APP_API_SERVER } = process.env

class RegisterTeam extends Component{
  
	constructor(){
		super()
		this.state = {
			name: '',
			logo: '',
			location:'',
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

	uploadFile = async file => {
    let data = new FormData()
    data.append('file', file)
    
    const { data: { imageLink } } = await axios.post(`${REACT_APP_API_SERVER}/upload`,data)      
    this.setState({ logo: imageLink })
  }
  
	handleClick(){
		this.setState({
			button: 'Creando Equipo......'
		}, () => {
			
			addTeam({logo: this.state.logo, name: this.state.name, location: this.state.location})
				.then(this.setState({
					button : 'Crear mi equipo'
				}))
				.then(() => {
					this.props.history.push('/')
				})
		})

	}

	render() {
		const { logo } = this.state
		return(
			<div className="registerTeam">
				<legend>REGISTRA TU EQUIPO</legend>
				<form>
					<Row className="form-group">
						<Col md={6}>
							<label for="img-team">Logo del Equipo</label>
							<ImageUpload uploadFile={ this.uploadFile } />
						</Col>
						<Col md={6}>
							{
								logo &&
								<Image width="300" src={ logo } alt={logo} responsive />
							}
						</Col>
					</Row>
					<Row className="form-group">
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
					</Row>
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

export default RegisterTeam