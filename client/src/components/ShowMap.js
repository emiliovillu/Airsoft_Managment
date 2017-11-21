import React from 'react'

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ShowMaps = withGoogleMap(props =>
	<GoogleMap
		defaultZoom={10}
		center={{ lat: 36.617670, lng: -4.501615 }}
	>
		<Marker
			position={{ lat: 36.617670, lng:  -4.501615,}}
		/>
	</GoogleMap>
)

export default ShowMaps