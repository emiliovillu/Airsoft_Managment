import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron, Image }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GraphsStats from '../components/GraphsStats'
import swal from 'sweetalert2'
import { getPlayerByIdInTeam, removePlayerByIdInTeam } from '../services/api'
import '../styles/Player.css'

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
		this.handleClickEdit = this.handleClickEdit.bind(this)
		this.handleClickRemove = this.handleClickRemove.bind(this)
		this.upPlayer = this.upPlayer.bind(this)
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

	handleClickRemove () {
		let { teamID, memberID } = this.props.match.params
		removePlayerByIdInTeam(teamID, memberID)
			.then(() => {
				swal({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
					if (result.value) {
						swal(
							'Deleted!',
							'Your file has been deleted.',
							'success'
						)
					}
				})
				this.props.history.push(`/team/${this.props.match.params.teamID}`)
			})
	}

	handleClickEdit () {
		
		let { teamID, memberID } = this.props.match.params
		this.props.history.push(`/team/${teamID}/player/${memberID}/editplayer`)
	}

	componentDidMount(){
		let { teamID, memberID } = this.props.match.params
		console.log(teamID, memberID)
		this.upPlayer(teamID, memberID)
	}

	render() {
		const {teamID, memberID} = this.props.match.params
		return(
			<Grid className="profile">
				<Row>
					{
						this.state.nick &&
					
					<Col xs={12} sm={6} md={12}>
						<div className="jumbotron">
							<Row>
								<Col xs={12} md={6}>
									<div>
										<img className="img-responsive img-thumbnail" src={ this.state.img } alt={this.state.img} />
									</div>
									<Link to={`/team/${teamID}`}>
										<button className="btn btn-info">Volver al Equipo</button>
									</Link>
									<Link to={`/team/${teamID}/player/${memberID}/statsplayer`}>
										<button className="btn btn-info">Introducir Estadisticas</button>
									</Link>
									<div className="graphism">
										<GraphsStats className="stats" dead={this.state.stats.dead} eliminations={this.state.stats.eliminations}/>
									</div>
								</Col>
							
								<Col xs={12} md={6}>
									<h1>{this.state.nick}</h1>
									<h3>NOMBRE</h3>
									<p>{this.state.name}</p>
									<h3>APELLIDO</h3>
									<p>{this.state.lastName}</p>
									<h3>ROL:</h3>
									<p>{this.state.rol}</p>
									<h3>Equipamiento</h3>
									<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingOne">
												<h4 className="panel-title">
													<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								REPLICA PRIMARIA <img src="http://cdn-airsoft-management.surge.sh/img/rifle.png" alt=""/>
													</a>
												</h4>
											</div>
											<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
												<div className="panel-body">
													{this.state.primary}
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
												<h4 className="panel-title">
													<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								REPLICA SECUNDARIA <img src="http://cdn-airsoft-management.surge.sh/img/pistola.png" alt=""/> 
													</a>
												</h4>
											</div>
											<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
												<div className="panel-body">
													{this.state.secondary}
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingThree">
												<h4 className="panel-title">
													<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								EXTRAS <img src="http://cdn-airsoft-management.surge.sh/img/granada.png" alt=""/> 
													</a>
												</h4>
											</div>
											<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
												<div className="panel-body">
													{this.state.extras}
												</div>
											</div>
										</div>
									</div>
								</Col>
							</Row>
							<div>
								<button 
									onClick={this.handleClickRemove} 
									className="btn btn-danger btn-lg" 
									role="button">
								Cargarse este Bastardo!!
									<span className="glyphicon glyphicon-trash"></span>
								</button>
								<button
									onClick={this.handleClickEdit} 
									className="btn btn-warning btn-lg" 
									role="button">
						Editar este Bastardo!!
									<span className="glyphicon glyphicon-pencil"></span>
								</button>
							</div>
						</div>
					</Col>
					}
				</Row>
			</Grid>
		)
	}

}

export default Player