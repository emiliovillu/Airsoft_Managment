const Team = require('../../../models/Team')

function getTeamById( req, res ) {
  const { id } = req.params
  Team.findById(id)
      .then( team => res.json(team) )
      .catch( err => console.log(err) )
}

module.exports = getTeamById
