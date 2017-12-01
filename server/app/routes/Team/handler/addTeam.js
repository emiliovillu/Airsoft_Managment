const Team = require('../../../models/Team')
const User = require('../../../models/User')

function addTeam(req, res) {
  const { name, logo, location } = req.body
  const { user } = req
  const newTeam = new Team({ name, logo, location });
  console.log({ name, logo, location })
  console.log(user)
  console.log(newTeam)
  newTeam.save()
    .then( () => {
        let team = newTeam._id
        return User.findByIdAndUpdate(user._id, { team })
    })
    .then( () => {
        console.log('LLega al team created properly...')
        res.status(200).json({ msg: `Team ${newTeam._id} has been created properly and added to user ${user._id}` })
    })
    .catch( error => {
        console.log('LLega al team ERROR!!!')
        res.status(500).json({ msg: error })
    })
}

module.exports = addTeam