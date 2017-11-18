import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron }  from 'react-bootstrap'

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
          <Col xs={12} sm={6} md={6}>
          <ul>
          {
            this.state.members.length && 
            this.state.members.map(member => {
              return(
                    <li>
                      <h4>{`${member.name}, ${member.lastName}`}</h4>
                      <small>{`Nick: ${member.nick}`}</small>
                    </li>
                  )
                })
              }
            </ul>
            {/*<img width="210" src={malagaUrl} alt=""/>*/}
            </Col>
            <div className="clearfix"></div>
          
          </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Team