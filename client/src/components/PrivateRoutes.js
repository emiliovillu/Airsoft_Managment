import React from 'react'
import { Route, Redirect } from 'react-router'
import { getToken } from '../services/storageService'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		getToken() ? (
			<Component {...props} {...rest} />
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}} />
		)
	)} />
)

export default PrivateRoute