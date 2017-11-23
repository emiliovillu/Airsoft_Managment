const Team = require('../../../models/Team')

function removeTeamById(req, res) {
  const { id } = req.params
  return Team.findByIdAndRemove(id)
                .then( response =>
                    res.status(200).json({ msg: `Team w/ id ${id} removed properly` })
                )
}

module.exports = removeTeamById