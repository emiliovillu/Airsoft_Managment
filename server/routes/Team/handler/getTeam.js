const Team = require('../../../models/Team')

function getTeam( req, res ) {
  console.log('hola')
  Team.find()
      .then( teams => res.json(teams) )
      .catch( err => console.log(err) )
}

module.exports = getTeam