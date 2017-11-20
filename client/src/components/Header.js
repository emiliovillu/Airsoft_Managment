import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'


const Header = () => (
  
	<header>
		<nav className="navbar navbar-static-top navbar-inverse navbar">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
						<span className="sr-only">Alternar menu</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<img width="50" src= "http://assets.getmynt.com/5f5e107/56c3fdd3-fa34-4272-be25-8619e3fca3ab/images/icon-military-lg.jpg" alt="" />
				</div>
				<div className="collapse navbar-collapse" id="navbar1">
					<ul className="nav navbar-nav">
						<li><Link to="/">HOME</Link></li>
						<li><Link to="/register">REGISTER TEAM</Link></li>
						<li><Link to="/team">TEAM</Link></li>
						<li><Link to="/players">PLAYERS</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header> 
)



export default Header