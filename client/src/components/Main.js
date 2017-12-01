import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Routers/Home'
import Team from '../Routers/Team'
import Player from '../Routers/Player'
import RegisterTeam from '../Routers/RegisterTeam'
import CreatePlayer from '../Routers/CreatePlayer'
import EditPlayer from '../Routers/EditPlayer'
import EditTeam from '../Routers/EditTeam'
import StatsPlayer from '../Routers/StatsPlayer'
import Register from '../Routers/Register'
import Login from '../Routers/Login'
import PrivateRoute from '../components/PrivateRoutes'



const Main = (props) => {
	console.log(props)
	

	return(
		<div className="Main">
		
			<Switch>
				<Route 
					render={ routeProps => (
						<Register 
							hideNavigation={ props.hideNavigation }
							{ ...routeProps }
						/>)} 
					exact path='/register'
				/>
				<Route 
					render={ routeProps => (
						<Login 
							hideNavigation={ props.hideNavigation }
							{ ...routeProps }
						/>)} 
					exact path='/'
				/>
				<Route exact path='/teams' component={Home}/>
				<PrivateRoute exact path='/team' component={RegisterTeam}/>
				<PrivateRoute exact path='/team/:id/player/createPlayer' component={CreatePlayer}/>
				<PrivateRoute exact path='/team/:teamID/player/:memberID/statsplayer' component={StatsPlayer}/>
				<PrivateRoute exact path='/team/:id/editteam' component={EditTeam}/>
				<PrivateRoute exact path='/team/:teamID/player/:memberID/editplayer' component={EditPlayer}/>
				<PrivateRoute exact path='/team/:teamID/player/:memberID' component={Player}/>
				<PrivateRoute exact path='/team/:id' component={Team} showNavigation={props.showNavigation}/>
			</Switch> 
		</div>
	)
}

export default Main
