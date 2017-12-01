import axios from 'axios'
const { REACT_APP_API_SERVER } = process.env


async function registerUser (username, password) {
	const url = `${REACT_APP_API_SERVER}/register`
	const response = await axios.post(url, {username, password})
		return response.data
}
 

async function loginUser (username, password) {
  const url = `${REACT_APP_API_SERVER}/login`
  const response = await axios.post(url, {username, password})
    return response.data.token
}

const getAuthHeader = () => {
  const token = localStorage.getItem('token')
  return ({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `bearer ${token}`
    }
  })
}

export { registerUser, loginUser, getAuthHeader }