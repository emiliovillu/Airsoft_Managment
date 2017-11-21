const Team =  require ('../../../models/Team')

function removeMemberInTeamById(req, res) {
  const { teamID, memberID } = req.params
  console.log(req.params)
  return Team.findByIdAndUpdate(teamID, { $pull: { members:{'_id': memberID }}})
                .then( response =>
                    res.status(200).json({ msg: ` player w/ ${memberID} has been removed!! ` })
                )
                .catch( response => {
                  console.log(response)
                  res.status(500).json({msg: 'error!!!' })
                })

}
module.exports = removeMemberInTeamById