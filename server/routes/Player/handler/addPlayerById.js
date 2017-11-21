const Team = require('../../../models/Team')

function addPlayerById(req, res) {
  const { id } = req.params
  const { name, lastName, nick, rol, img, primary, secondary, extras } = req.body
  console.log(req.body)
  Team.findByIdAndUpdate(id, 
    { $push: {'members': {
      name: name, 
      lastName: lastName, 
      nick: nick, 
      rol: rol, 
      img: img, 
      equipment: { primary: primary, secondary: secondary, extras: extras}
              } } }, {'new': true})
        .then( team => res.status(200).json({ team, msg: `player w/ ${name} of Team w/ id ${id} updated properly` }) )
}

module.exports = addPlayerById
