import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Routers/Home'
import Team from '../Routers/Team'
import DetailPlayers from '../Routers/DetailPlayers'

const Main = () => (
  
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/team/:id' component={Team}/>
      <Route path='/player/:id' component={DetailPlayers}/>
    </Switch> 
  </div>
)

export default Main
