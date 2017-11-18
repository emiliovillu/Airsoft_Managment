const Team = require('../../../models/Team')

function getTeam( req, res ) {
  Team.find()
      .then( teams => res.json(teams) )
      .catch( err => console.log(err) )
}

module.exports = getTeam