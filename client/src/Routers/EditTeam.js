import React, { Component } from 'react'
import { getTeamById ,editTeamById } from '../services/api'
import { Row, Col, Image } from 'react-bootstrap'
import  SimpleForm  from '../components/SimpleForm'
import ImageUpload from '../components/ImageUpload'
import axios from 'axios'
const { REACT_APP_API_SERVER } = process.env

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
				console.log(response)
				this.setState({
					name: response.name,
					logo: response.logo,
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
			.then(() => {
				this.props.history.push(`/team/${id}`)
			})
	}
  
	componentDidMount(){
		let {id} =  this.props.match.params
		this.upTeam(id)
	}

	uploadFile = async file => {
		let data = new FormData()
		data.append('file', file)
		
		const { data: { imageLink } } = await axios.post(`${REACT_APP_API_SERVER}/upload`,data)      
		this.setState({ logo: imageLink })
	}

	render() {
		const { logo } = this.state
		console.log(logo)
		return(
			<div>
				<form>
					<Row className="form-group">
					<Col xs={6} md={6}>
						<label for="img-team">Logo del Equipo</label>
						<ImageUpload uploadFile={ this.uploadFile } />
						</Col>
						<Col xs={6} md={6}>	
						{
							logo &&
							<Image width="300" src={ logo } alt={ logo } responsive />
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
					<Row className="form-group">
						<label for="exampleFormControlInput1">Cuartel General del Equipo</label>
						<SimpleForm onLatLng={(latLng, address) => {
							this.setState({location: latLng})
						}}/>
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

export default EditTeam