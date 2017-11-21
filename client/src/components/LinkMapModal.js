import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

import ShowMaps from './ShowMap'



class LinkMapModal extends Component {
	constructor () {
		super()
		this.state = {
			showModal: false
		}
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)
	}
	getInitialState () {
		return {
			showModal: false
		}
	}
	close () {
		this.setState({
			showModal: false
		})
	}
	open () {
		this.setState({
			showModal: true
		})
	}
	render () {
		return (
			<div>
			
				<ShowMaps
					containerElement={<div style={{ height: `200px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					lat={this.props.latitude}
					lng={this.props.longitude}
				/>
					
			</div>
		)
	}
}

export default LinkMapModal