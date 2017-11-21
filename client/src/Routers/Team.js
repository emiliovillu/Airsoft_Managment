import React, { Component } from 'react'
import { Grid, Row, Col }  from 'react-bootstrap'
import LinkMapModal from '../components/LinkMapModal'
import { Link } from 'react-router-dom'
import { getTeamById } from '../services/api'
import '../styles/Home.css'

class Team extends Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			logo: '',
			members: '',
			_id: ''
		}
		this.upIdTeam = this.upIdTeam.bind(this) 
	}

	upIdTeam(id){
		getTeamById(id)
			.then(response => {
				console.log(response)
				this.setState({
					name: response.name,
					logo: response.logo,
					members: response.members,
					_id: response._id
				})
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
								{/*<img width="210" src={malagaUrl} alt=""/>*/}
							</Col>
							<Col xs={12} sm={12} md={12}>
								<Link id="lista" to={`/team/${this.state._id}/player/createPlayer`}>
									<button 
										type="button" 
										className="btn btn-danger btn-lg">
										Añadir Jugador
									</button>
								</Link>	
							</Col>
							<div className="clearfix"></div>
							<h3>Cuartel General del Equipo</h3>
							<LinkMapModal/>
						</div>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Team