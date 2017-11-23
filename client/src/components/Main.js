import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Routers/Home'
import Team from '../Routers/Team'
import Player from '../Routers/Player'
// import DetailPlayers from '../Routers/DetailPlayers'
import RegisterTeam from '../Routers/RegisterTeam'
import CreatePlayer from '../Routers/CreatePlayer'
import EditPlayer from '../Routers/EditPlayer'
import EditTeam from '../Routers/EditTeam'

const Main = () => (
  
	<div className="Main">
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/register' component={RegisterTeam}/>
			<Route exact path='/team/:id/player/createPlayer' component={CreatePlayer}/>
			<Route exact path='/team/:id/editteam' component={EditTeam}/>
			<Route exact path='/team/:teamID/player/:memberID/editplayer' component={EditPlayer}/>
			<Route exact path='/team/:teamID/player/:memberID' component={Player}/>
			<Route exact path='/team/:id' component={Team}/>
			
		</Switch> 
	</div>
)

export default Main
