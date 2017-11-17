import axios from 'axios'

export const listTeams = () => {
  const url = 'http://localhost:3005/api/teams'
  return axios.get(url)
    .then(response => {
      return response.data
    })
}

export const listTeam = () => {
  const url = 'http://localhost:3005/api/teams'
  return axios.get(url)
    .then(response => {
      return response.data[0]
    })
}


 

