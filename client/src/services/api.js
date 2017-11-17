import axios from 'axios'

const listTeams = () => {
  const url = 'http://localhost:3005/api/team'
  return axios.get(url)
    .then(response => {
      return response.data
    })
}

export default listTeams


 

