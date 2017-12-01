const jwt = require('jsonwebtoken')
const { SECRET } = process.env

function handleLogin( req, res) {
  const { _id: id } = req.user
  const token = jwt.sign({ id }, SECRET)
  res.json({ token })
}

module.exports = handleLogin