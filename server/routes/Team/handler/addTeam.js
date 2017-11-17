const Team = require('../../../models/Team')

function addTeam(req, res) {
  const { name, logo, location, members } = req.body
  const team = new Team({ name, logo, location, members });
  team.save()
    .then( response =>
        res.status(200).json({ msg: `Team with name ${name} created successfully` })
    )
    .catch( error =>{
        console.log(error)
        res.status(500).json({ msg: error })
    })
}

module.exports = addTeam