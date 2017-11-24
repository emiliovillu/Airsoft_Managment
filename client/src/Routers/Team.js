import React, { Component } from 'react'
import { Grid, Row, Col }  from 'react-bootstrap'
import LinkMapModal from '../components/LinkMapModal'
import { Link } from 'react-router-dom'
import { getTeamById, removeTeamById } from '../services/api'
import '../styles/Home.css'

class Team extends Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			logo: '',
			members: '',
			location:'',
			_id: ''
		}
		this.upIdTeam = this.upIdTeam.bind(this) 
		this.handleClick = this.handleClick.bind(this)
	}

	upIdTeam(id){
		getTeamById(id)
			.then(response => {
			
				this.setState({
					name: response.name,
					logo: response.logo,
					location:response.location,
					members: response.members,
					_id: response._id
				})
			})
	}

	handleClick() {
		let { id } = this.props.match.params
		removeTeamById(id)
			.then(() => {
				this.props.history.push('/')
			})
	}

	componentDidMount(){
		let { id } = this.props.match.params
		this.upIdTeam(id)
	}

	render(){

		return(
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
						<div className="jumbotron teams">
							<Link id="lista" to={`/player/${this.state._id}`}>
								<h1 className="name_team">{this.state.name}</h1>
							</Link>
							<Col xs={12} sm={12} md={12}>
								<img width="300" src={this.state.logo} alt={this.state.logo}/>
								<ul className="list-unstyled">
									{
										this.state.members.length && 
            				this.state.members.map(member => {
            	return(
            						<li>
            							<Link id="lista" to={`/team/${this.state._id}/player/${member._id}`}>
            								<h4>{`${member.name}, ${member.lastName}`}</h4>
            							</Link>	
            			<small>{`Nick: ${member.nick}`}</small>
            		</li>
            	)
            				})
									}
								</ul>
							</Col>
							<Col xs={12} sm={12} md={12}>
								<Link id="lista" to={`/team/${this.state._id}/editteam`}>
									<button 
										type="button" 
										className="btn btn-danger btn-lg">
										Editar Equipo
										<span class="glyphicon glyphicon-pencil"></span>
									</button>
								</Link>
								<button 
									onClick={this.handleClick}
									type="button" 
									className="btn btn-danger btn-lg">
									Eliminar Equipo
									<span class="glyphicon glyphicon-trash"></span>
								</button>
								<Link id="lista" to={`/team/${this.state._id}/player/createPlayer`}>
									<button 
										type="button" 
										className="btn btn-warning btn-lg">
									Añadir Jugador
										<span class="glyphicon glyphicon-pencil"></span>
									</button>
								</Link>	
							</Col>
							<div className="clearfix"></div>
							<h3>Cuartel General del Equipo</h3>
							<LinkMapModal latLng={this.state.location}/>
						</div>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Team