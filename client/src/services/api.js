import axios from 'axios'
const { REACT_APP_API_SERVER } = process.env

export const listTeams = () => {
	const url =  `${REACT_APP_API_SERVER}/api/team`
	return axios.get(url)
		.then(response => {
			return response.data
		})
}

export const getTeamById = (id) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}`
	return axios.get(url)
		.then(response => {
			return response.data
		})
}

export const getPlayers = (id) => {
	const url = `${REACT_APP_API_SERVER}/api/players/${id}`
	return axios.get(url)
		.then(response => {
			console.log(response)
			return response.data
		})
}

export const getPlayerByIdInTeam = (teamID, memberID) => {
	const url = `${REACT_APP_API_SERVER}/api/teams/${teamID}/members/${memberID}`
	return axios.get(url)
		.then(response => {
			console.log(response)
			return response.data
		})
}

export const addTeam = (params) => {
	const url = `${REACT_APP_API_SERVER}/api/addteam`
	return axios.post(url, params)
		.then(function(response){
			return response
		})
}

export const addPlayerById = (id, params) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}/addplayer`
	return axios.post(url, params)
		.then(function(response){
			return response
		})
}

export const removePlayerByIdInTeam = (teamID, memberID) => {
	const url = `${REACT_APP_API_SERVER}/api/teams/${teamID}/members/${memberID}`
	return axios.post(url)
		.then(function(response){
			return response
		})
}

export const removeTeamById = (id) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}`
	return axios.post(url)
		.then(function(response){
			return response
		})
}


export const editPlayerById = (teamID, memberID, params) => {
	console.log(teamID, memberID)
	const url = `${REACT_APP_API_SERVER}/api/teams/${teamID}/members/${memberID}/editplayer`
	return axios.post(url, params)
		.then(function(response){
			return response
		})
}

export const editTeamById = (id, params) => {
	const url = `${REACT_APP_API_SERVER}/api/team/${id}/editteam`
	return axios.post(url, params)
		.then(function(response){
			return response
		})
}



//  url --> crear members
// ${REACT_APP_API_SERVER}/api/users/:userId/teams/:teamId/members
// url --> crear teams
// ${REACT_APP_API_SERVER}/api/users/:userId/teams/
