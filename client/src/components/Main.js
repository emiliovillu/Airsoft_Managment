import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Routers/Home'
import Team from '../Routers/Team'
import DetailPlayers from '../Routers/DetailPlayers'
import RegisterTeam from '../Routers/RegisterTeam'
import CreatePlayer from '../Routers/CreatePlayer'

const Main = () => (
  
	<div className="Main">
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/register' component={RegisterTeam}/>
			<Route path='/team/:id/player/createPlayer' component={CreatePlayer}/>
			<Route path='/team/:id' component={Team}/>
			<Route path='/player/:id' component={DetailPlayers}/>
		</Switch> 
	</div>
)

export default Main
