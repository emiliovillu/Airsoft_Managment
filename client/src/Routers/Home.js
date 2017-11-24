import React, { Component } from 'react'
import { Grid, Row, Image }  from 'react-bootstrap'
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
				// console.log('aaaaaaaaa', this.state.teams.ObjectId())
			})
	}
  
	render () {
		//const malagaUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Málaga,ES&zoom=14&size=400x400&key=AIzaSyCgs983Frq4YygbwV2uHawWmBXOj3vkpGM"
		// const members = this.state.teams.length&&this.state.teams
		// const nameTeam = this.state.teams.length&& this.state.teams[1].name
		// console.log(nameTeam)
		// console.log(members)
		
		return(
     
			<Grid>
				<Row>
					{
						this.state.teams.length &&
          	this.state.teams.map((team,i) => {
          	return (
          		<div className="jumbotron teams">
          			<Link id="lista" to={`/team/${team._id}`}>
          				<h1 className="name_team">{team.name}</h1>               
          				</Link>
          				<Image width="500" src={ team.logo } alt={team.logo} responsive />
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
                
          				{/*<img width="210" src={malagaUrl} alt=""/>*/}
          				{/*<img width='300' src={`http://localhost:3005/${team.logo}`} className="img-circle" />*/}
          			</ul>
          				<LinkMapModal latLng={team.location}/>
          		</div>
          	)
          	})
					}
				</Row>
			</Grid>
		)
	}
}

export default Home