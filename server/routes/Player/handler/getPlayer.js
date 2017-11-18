const Team = require('../../../models/Team')

function getPlayer( req, res ) {
  const { id } = req.params
  Team.findById(id)
      .then( team => res.json(team.members) )
      .catch( err => console.log(err) )
}

module.exports = getPlayer