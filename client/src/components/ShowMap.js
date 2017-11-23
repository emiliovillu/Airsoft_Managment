import React from 'react'

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const ShowMaps = withGoogleMap(props => {
	
	return (
		<GoogleMap
			defaultZoom={10}
			center={props.latLng}
		>
			<Marker
				position={props.latLng}
			/>
		</GoogleMap>
	)

})

export default ShowMaps