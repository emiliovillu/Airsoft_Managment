import React, { Component } from 'react'
import { Grid, Row, Col, Jumbotron }  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getPlayers } from '../services/api'
import '../styles/DetailPlayer.css'

class DetailPlayers extends Component {
  constructor(props){
    super(props)

    this.state = {
      members: []
    }
    this.upPlayer = this.upPlayer.bind(this)
  }

  upPlayer(id) {
    getPlayers(id)
      .then(response => {
        console.log(response)
        this.setState({
          members: response
        })
      })
  }

  componentDidMount(){
    let { id } = this.props.match.params
    this.upPlayer(id)
  }

  render () {
    return (
      <Grid>
        <Row>
        <Col xs={12} sm={12} md={12}>
          <h1>Miembros del Equipo</h1>
          <ul className="list-unstyled">
          {
            this.state.members.length && 
            this.state.members.map(member => {
              return(
                  <li>
                    <Col xs={12} sm={4} md={4} className="miembros">
                    <h2>{`${member.name}, ${member.lastName}`}</h2>
                    <small>{`Nick: ${member.nick}`}</small><br/>
                    <small>{`Rol: ${member.rol}`}</small>
                    <h3>Equipamiento:</h3>
                      <ul>
                        <li>
                          <p>Primaria:<br/>{member.equipment.primary}</p>
                        </li>
                        <li>
                          <p>Secundaria:<br/>{member.equipment.secondary}</p> 
                        </li>
                        <li>
                        <p>Extras:<br/>{member.equipment.extras}</p>
                        </li>
                      </ul>
                    <h3>Estadisticas:</h3>
                      <ul>
                        <li>
                          {`Eliminaciones: ${member.stats.eliminations}`}
                        </li>
                        <li>
                          {`Muertes: ${member.stats.dead}`}
                        </li>
                      </ul>
                    </Col>
                  </li>
                )
              })
            }
          </ul>
        </Col>
        </Row>  
      </Grid>
    )
  }
  
}

export default DetailPlayers