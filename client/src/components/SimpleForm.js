import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SimpleForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { address: this.props.address || '' }
	}


	render() {
		const inputProps = {
			value: this.state.address,
			onChange: address => {
				this.setState({address}, () => {
					geocodeByAddress(address)
						.then(results => getLatLng(results[0]))
						.then(latLng => this.props.onLatLng(latLng, address))
				})

			},
		}

		return <PlacesAutocomplete inputProps={inputProps} />
	}
}

export default SimpleForm