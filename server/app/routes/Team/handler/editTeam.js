const Team =  require ('../../../models/Team')

function editTeam (req, res) {
  const { id } = req.params
  console.log(id)
  const { logo, name, location } = req.body
  console.log(location, logo, name, id, 'editteam')
  return Team.findByIdAndUpdate(id, { logo, name, location})
    .then( response => res.status(200).json({ msg: `team w/ id ${id} updated properly` }))
    .catch((error) => console.log(error))
}

module.exports = editTeam