import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getPlayerByIdInTeam } from '../services/api'
import '../styles/DetailPlayer.css'

class Player extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			name: '',
			lastName: '',
			nick: '',
			rol: '',
			img: '',
			primary: '',
			secondary: '',
			extras: '',
			stats: ''
		}
		
		this.upPlayer = this.upPlayer.bind(this)
	}
  
	upPlayer (teamID, memberID) {
		getPlayerByIdInTeam(teamID, memberID)
			.then(response => {
				console.log(response)
				this.setState({
					name: this.state.name,
					lastName: this.state.lastName,
					nick: this.state.nick,
					rol: this.state.rol,
					img: this.state.img,
					primary: this.state.primary,
					secondary: this.state.secondary,
					extras: this.state.extras,
					stats: this.state.stats
				})
			})
	}

	componentDidMount(){
		let { teamID, memberID } = this.props.match.params
		this.upPlayer(teamID, memberID)
	}

	render() {
		return(
			<Grid>
				<Row>
					<Col xs={12} sm={6} md={6}>
						<div className="jumbotron">
							<h1>{this.state.nick}</h1>
							<p>{this.state.name}</p>
							<p>{this.state.name}</p>
							<p>{this.state.name}</p>
							<h3>Equipamiento</h3>
							
							<p><a className="btn btn-danger btn-lg" href="#" role="button">Learn more</a></p>
						</div>
					</Col>
				</Row>
			</Grid>
			
		)
	}

}