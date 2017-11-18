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
  const url = `http://localhost:3005/api/player/${id}`
  return axios.get(url)
    .then(response => {
      console.log(response)
      return response.data
    })
}


 

