const Team = require('../../../models/Team')

function addTeam(req, res) {
  const { name, logo, location } = req.body
  console.log(location.lat, 'desde el server')
  const team = new Team({ name, logo, location });
  team.save()
    .then( response =>
        res.status(200).json({ msg: response })
    )
    .catch( error =>{
        console.log(error)
        res.status(500).json({ msg: error })
    })
}

module.exports = addTeam