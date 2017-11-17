// import React, { Component } from 'react'
// import { Grid, Row, Col, Jumbotron }  from 'react-bootstrap'

// import { Link } from 'react-router-dom'
// import { listTeam } from '../services/api'
// import '../styles/Home.css'

// class Team extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       teams: []
//     }
//   }
//   componentDidMount(){
//     listTeam()
//       .then(response => {
//         this.setState({
//           teams: response
//         })
//         console.log(this.state.teams)
//       })
//   }

//   render(){

//     return(
//       <Grid>
//         <Row>
//           <Col xs={12} sm={12} md={12}>
//           {/*<Link id="lista" to={`/phones/${phone.id}`}>*/}
//           <div className="jumbotron teams">
//           <h1 className="name_team">{this.state.teams[0].name}</h1>
//           <Col xs={12} sm={6} md={6}>
//             <ul>
//               <li>
//                 <h4>{`${this.state.teams[0].member[0].name}, ${this.state.teams[0].member[0].lastName}`}</h4>
//                 <small>{`Nick: ${this.state.teams[0].member[0].nick}`}</small>
//               </li>
//               <li>
//                 <h4>{`${this.state.teams[0].member[1].name}, ${this.state.teams[0].member[1].lastName}`}</h4>
//                 <small>{`Nick: ${this.state.teams[0].member[1].nick}`}</small>
//               </li>
//             </ul>
//                 {/*<img width="210" src={malagaUrl} alt=""/>*/}
//           </Col>
//           <img width='300' src={`http://localhost:3005/${this.state.teams[0].logo}`} alt="" />
//           </div>
//           {/*</Link>*/}
//           </Col>
//         </Row>
//       </Grid>
//     )
//   }
// }

// export default Team