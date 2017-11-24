const Team =  require ('../../../models/Team')

function editTeam (req, res) {
  const { teamID } = req.params
  console.log(teamID)
  const { logo, name, location } = req.body
  console.log(location, logo, name, teamID, 'editteam')
  return Team.findByIdAndUpdate(teamID, { logo, name, location})
    .then( response => res.status(200).json({ msg: `team w/ id ${teamID} updated properly` }))
    .catch((error) => console.log(error))
}

module.exports = editTeam