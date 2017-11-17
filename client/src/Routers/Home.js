import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron }  from 'react-bootstrap'
import Map from '../components/Map'
import { Link } from 'react-router-dom'
import { listTeams } from '../services/api'
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
        console.log('aaaaaaaaa', response)
      })
  }
    

  render () {
    const malagaUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Málaga,ES&zoom=14&size=400x400&key=AIzaSyCgs983Frq4YygbwV2uHawWmBXOj3vkpGM"
    
    return(
      <Grid>
        <Row>
        {
          this.state.teams.length &&
          this.state.teams.map((team,i) => {
            return (                
              <Col xs={12} sm={12} md={12} key={i}>
                {/*<Link id="lista" to={`/phones/${phone.id}`}>*/}
                <div className="jumbotron teams">
                <h1 className="name_team">{team.name}</h1>
                <Col xs={12} sm={6} md={6}>
                  <ul>
                    <li>
                      <h4>{`${team.member[0].name}, ${team.member[0].lastName}`}</h4>
                      <small>{`Nick: ${team.member[0].nick}`}</small>
                    </li>
                    <li>
                      <h4>{`${team.member[1].name}, ${team.member[1].lastName}`}</h4>
                      <small>{`Nick: ${team.member[1].nick}`}</small>
                    </li>
                  </ul>
                      <img width="210" src={malagaUrl} alt=""/>
                </Col>
                <img width='300' src={`http://localhost:3005/${team.logo}`} className="img-circle" />
                </div>
                {/*</Link>*/}
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