import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Routers/Home'
import Team from '../Routers/Team'
import DetailPlayer from '../Routers/DetailPlayer'

const Main = () => (
  
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/team/:id' component={Team}/>
      <Route path='/player/:id' component={DetailPlayer}/>
    </Switch> 
  </div>
)

export default Main
