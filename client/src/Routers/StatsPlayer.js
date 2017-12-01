import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron, Image }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import GraphsStats from '../components/GraphsStats'
import { getPlayerByIdInTeam, addStats } from '../services/api'
import swal from 'sweetalert2'
import '../styles/StatsPlayer.css'

class Player extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			name: '',
			lastName: '',
			nick: '',
			rol: '',
			img: '',
			stats: {dead: -1, eliminations: -1 },
			date:  ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.upPlayer = this.upPlayer.bind(this)
		this.handleClickAdd = this.handleClickAdd.bind(this)
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
					dead: response.stats.dead,
					eliminations: response.stats.eliminations,
					date: response.stats.date
				})
			})
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleClickAdd() {
		let { teamID, memberID } = this.props.match.params
		addStats(teamID, memberID, {dead:this.state.dead, eliminations:this.state.eliminations, date:this.state.date})
			.then(() => {
				swal({
					position: 'top-right',
					type: 'success',
					title: 'Your stats has been add correctly',
					showConfirmButton: false,
					timer: 1500
				})
				this.props.history.push(`/team/${teamID}/player/${memberID}/statsplayer`)
			})
	}
	

	handleClick () {
		let { teamID, memberID } = this.props.match.params
		this.props.history.push(`/team/${teamID}/player/${memberID}`)
	}

	componentDidMount(){
		let { teamID, memberID } = this.props.match.params
		console.log(teamID, memberID)
		this.upPlayer(teamID, memberID)
	}

	render() {
		const {teamID} = this.props.match.params
		const date_game = this.state.date ? moment(this.state.date.toString()).format('DD MMM YYYY') : moment().format('DD MMM YYYY').toString()
		console.log(this.state.date)
		return(
			<Grid>
				<Row>
					{
						this.state.nick &&
					
					<Col xs={12} sm={6} md={12}>
						<div className="jumbotron">
							<div max width="200">
								<Col xs={12} md={6}>
									<h2>{`Partida del ${date_game}`}</h2>
									<GraphsStats dead={this.state.dead} eliminations={this.state.eliminations}/>
								</Col>
							</div>
							<Col xs={12} md={6}>
								<h1>{this.state.nick}</h1>
								<Col xs={12} md={6}>
									<h3>NOMBRE</h3>
									<p>{this.state.name}</p>
									<h3>APELLIDO</h3>
									<p>{this.state.lastName}</p>
									<h3>ROL:</h3>
									<p>{this.state.rol}</p>
								</Col>
								<Col xs={12} md={6}>
									<form className="has-success">
										<legend>Introduce las estadísticas</legend>
										<div class="form-group">
											<label for="exampleInputEmail1">Fecha de partida</label>
											<input onChange={this.handleChange} name="date" type="date" class="form-control" placeholder=""/>
										</div>
										<div className="form-group has-success">
											<label className="control-label" for="inputSuccess1">Eliminaciones</label>
											<input onChange={this.handleChange} name="eliminations" type="number" className="form-control" id="inputSuccess1" aria-describedby="helpBlock2"/>
										</div>	
										<div className="form-group has-error">
											<label className="control-label" for="inputError1">Muertes</label>
											<input onChange={this.handleChange} name="dead" type="number" className="form-control" id="inputError1"/>
										</div>
										<button 
											onClick={this.handleClickAdd} 
											className="btn btn-danger btn-lg"
										>
										Añadir Estadísticas
										</button>
									</form>
								</Col>
							</Col>
							<button
								onClick={this.handleClick}
								className="btn btn-danger btn-lg"
							>
							Volver al Jugador
							</button>
						</div>
					</Col>
					}
				</Row>
			</Grid>
		)
	}

}

export default Player