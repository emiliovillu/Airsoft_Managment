const Team = require('../../../models/Team')


// GET /api/teams/:teamID/members/:memberID


function getMemberInTeamById( req, res ) {
  const { teamID, memberID } = req.params
  console.log(teamID, memberID)
  Team.findById(teamID)
      .then(team => res.json(team.members.find(member => {
        return member._id == memberID
      })))
      .catch(err => console.log(err))
}

module.exports = getMemberInTeamById