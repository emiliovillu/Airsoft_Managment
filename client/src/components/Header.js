import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'


const Header = () => (
  
	<header>
		<nav id="menu" class="navbar  navbar-inverse ">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
						<span class="sr-only">Alternar menu</span>
						<span class="icon-bar">
						</span>
						<span class="icon-bar">
						</span><span class="icon-bar">
						</span>
					</button>
					<img width="50" src="http://assets.getmynt.com/5f5e107/56c3fdd3-fa34-4272-be25-8619e3fca3ab/images/icon-military-lg.jpg" alt=""/>
				</div>
				<div class="collapse navbar-collapse" id="navbar1">
					<ul class="nav navbar-nav">
						<li>
							<a href="/">HOME</a>
						</li>
						<li>
							<a href="/register">REGISTER TEAM</a>
						</li>
						<li>
							<a href="/team">TEAM</a>
						</li>
						<li>
							<a href="/players">PLAYERS</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
)



export default Header