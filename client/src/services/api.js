import axios from 'axios'

export const listTeams = () => {
	const url = 'http://localhost:3005/api/team'
	return axios.get(url)
		.then(response => {
			return response.data
		})
}

export const getTeamById = (id) => {
	const url = `http://localhost:3005/api/team/${id}`
	return axios.get(url)
		.then(response => {
			return response.data
		})
}

export const getPlayers = (id) => {
	const url = `http://localhost:3005/api/players/${id}`
	return axios.get(url)
		.then(response => {
			console.log(response)
			return response.data
		})
}

export const getPlayerByIdInTeam = (teamID, memberID) => {
	const url = `http://localhost:3005/api/teams/${teamID}/members/${memberID}`
	return axios.get(url)
		.then(response => {
			console.log(response)
			return response.data
		})
}

export const addTeam = (params) => {
	const url = 'http://localhost:3005/api/addteam'
	return axios.post(url, params)
		.then(function(response){
			return response
		})
}

export const addPlayerById = (id, params) => {
	const url = `http://localhost:3005/api/team/${id}/addplayer`
	return axios.post(url, params)
		.then(function(response){
			return response
		})
}


//  url --> crear members
// http://localhost:3005/api/users/:userId/teams/:teamId/members
// url --> crear teams
// http://localhost:3005/api/users/:userId/teams/
