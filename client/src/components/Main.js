import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Routers/Home'
import Team from '../Routers/Team'

const Main = () => (
  
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/team' componet={Team}/>
    </Switch> 
  </div>
)

export default Main
