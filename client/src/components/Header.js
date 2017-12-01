import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getToken, removeToken } from '../services/storageService'
import { getInfoUser } from '../services/api'
import '../styles/Header.css'


class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			id: '',
			fireRedirect: false
		}
	}

	componentWillMount(){
		getInfoUser()
			.then(response => {
				console.log(response.user.team._id)
				this.setState({
					id: response.user.team._id
				})
			})
	}
			
	

	handleClick = () => {
		removeToken()
		this.setState({
			fireRedirect: true
		})
		
	} 	

	render() {
		const { fireRedirect } = this.state
		const { id } = this.state
		console.log(id)
		return(
			<header>
				<nav id="menu" className="navbar  navbar-inverse ">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
								<span className="sr-only">Alternar menu</span>
								<span className="icon-bar">
								</span>
								<span className="icon-bar">
								</span><span className="icon-bar">
								</span>
							</button>
							<img width="50" src="http://assets.getmynt.com/5f5e107/56c3fdd3-fa34-4272-be25-8619e3fca3ab/images/icon-military-lg.jpg" alt=""/>
						</div>
						<div className="collapse navbar-collapse" id="navbar1">
							<ul className="nav navbar-nav">
								<li>
									<a href="/">HOME</a>
								</li>
								<li>
									<a href="/login">LOGIN</a>
								</li>
								<li>
									<a href="/register">REGISTRATE</a>
								</li>
								<li>
									<a href={`/team/${id}`}>My Team</a>
								</li>
							</ul>
							{
								getToken() &&
								<button onClick={this.handleClick} className="btn btn-danger" id="logout">LOGOUT</button>
							}
						</div>
					</div>
				</nav>
				{ fireRedirect && <Redirect to={'/'}/>}
			</header>
		)
	}
}



export default Header