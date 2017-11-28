import React, { Component } from 'react'
import { Grid, Row, Image, Col }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  {listTeams}  from '../services/api'
import LinkMapModal from '../components/LinkMapModal'
import '../styles/Home.css'

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			teams: []
		}
    
	}
  
	componentDidMount(){
		listTeams()
			.then(response => {
				this.setState({
					teams: response
				})
			
			})
	}
  
	render () {
	
		return(
     
			<Grid>
				<Row>
					{
						this.state.teams.length &&
          	this.state.teams.map((team,i) => {
          	return (
          			<Col xs={12} md={4}>
							<div className="jumbotron teams">
								<div className="container-name">	
          			<Link id="lista" to={`/team/${team._id}`}>
          				<h1 id="name_team">{team.name}</h1>               
									</Link>
								</div>
								<div className="container-info">
									<div className="container-info-img">
										<Image className="img-profile" src={ team.logo } alt={team.logo} responsive />
									</div>
									<ul>
          				{
          					team.members.map((member, i) => {
          						return(
          							<li>
          								<h4>{`${member.name}, ${member.lastName}`}</h4>
          								<small>{`Nick: ${member.nick}`}</small>
          							</li>
          						)
          					})
          						}
								</ul>
								</div>
								<div className="container-map">
									<LinkMapModal latLng={team.location}/>
								</div>
          				</div>
          			</Col>
          	)
          	})
					}
				</Row>
			</Grid>
		)
	}
}

export default Home