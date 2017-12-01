import axios from 'axios'
import { getAuthHeader } from '../services/authService'
const { REACT_APP_API_SERVER } = process.env

export const listTeams = () => {
	const url =  `${REACT_APP_API_SERVER}/api/teams`
	return axios.get(url, getAuthHeader())
		.then(response => {
			return response.data
		})
}

export const getTeamById = (id) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}`
	return axios.get(url, getAuthHeader())
		.then(response => {
			return response.data
		})
}

export const getPlayers = (id) => {
	const url = `${REACT_APP_API_SERVER}/api/players/${id}`
	return axios.get(url, getAuthHeader())
		.then(response => {
			console.log(response)
			return response.data
		})
}

export const getPlayerByIdInTeam = (teamID, memberID) => {
	const url = `${REACT_APP_API_SERVER}/api/teams/${teamID}/members/${memberID}`
	return axios.get(url, getAuthHeader())
		.then(response => {
			console.log(response)
			return response.data
		})
}

export const addTeam = (params) => {
	const url = `${REACT_APP_API_SERVER}/api/teams`
	return axios.post(url, params, getAuthHeader())
		.then(function(response){
			return response
		})
}

export const addPlayerById = (id, params) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}/addplayer`
	return axios.post(url, params, getAuthHeader())
		.then(function(response){
			return response
		})
}

export const removePlayerByIdInTeam = (teamID, memberID) => {
	const url = `${REACT_APP_API_SERVER}/api/teams/${teamID}/members/${memberID}`
	return axios.post(url, getAuthHeader())
		.then(function(response){
			return response
		})
}

export const removeTeamById = (id) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}`
	return axios.delete(url, getAuthHeader())
		.then(function(response){
			return response
		})
}


export const editPlayerById = (teamID, memberID, params) => {
	console.log(teamID, memberID)
	const url = `${REACT_APP_API_SERVER}/api/teams/${teamID}/members/${memberID}/editplayer`
	return axios.post(url, params, getAuthHeader())
		.then(function(response){
			return response
		})
}

export const editTeamById = (id, params) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}`
	return axios.put(url, params, getAuthHeader())
		.then(function(response){
			return response
		})
}

export const addStats = (teamID, memberID, params) => {
	const url = `${REACT_APP_API_SERVER}/api/teams/${teamID}/members/${memberID}/addstatsplayer`
	return axios.post(url, params, getAuthHeader())
		.then(function(response){
			return response
		})
}

export const registerUser = (username, password) => {
	const url = `${REACT_APP_API_SERVER}/register`
	return axios.post(url, {username, password}, getAuthHeader())
		.then(function(response){
			return response
		})
	
}

export const getInfoUser = () => {
	const url = `${REACT_APP_API_SERVER}/me`
	return axios.get(url, getAuthHeader())
		.then(response => {
			return response.data
		})
}



//  url --> crear members
// ${REACT_APP_API_SERVER}/api/users/:userId/teams/:teamId/members
// url --> crear teams
// ${REACT_APP_API_SERVER}/api/users/:userId/teams/
