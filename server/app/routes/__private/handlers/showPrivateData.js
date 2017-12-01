function showPrivateData(req, res) {
  const { user } = req
  res.json({
    msg: 'This is your private data...',
    user
  })
}

module.exports = showPrivateData