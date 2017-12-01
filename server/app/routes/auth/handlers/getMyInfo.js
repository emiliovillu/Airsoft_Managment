function getMyInfo( req, res ) {
  const { user } = req
  res.json({ user })
}

module.exports = getMyInfo