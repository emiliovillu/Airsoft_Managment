import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'




class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showHeader: true
		}
		
	}

	hideNavigation = () => {
    this.setState({
      showHeader: false
    })
	}
	
	showNavigation = () => {
    this.setState({
      showHeader: true
    })
  }

	render() {
		return (
			<div className="container">
				{ this.state.showHeader && <Header /> }
				<Main hideNavigation={this.hideNavigation} showNavigation={this.showNavigation}/>
				<Footer />
			</div>
		);
	}
}

export default App;
