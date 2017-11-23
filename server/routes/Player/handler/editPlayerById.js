const Team =  require ('../../../models/Team')


function editPlayerById(req, res) {
  const { teamID, memberID } = req.params
  const { name, lastName, nick, rol, img, primary, secondary, extras, eliminations, dead } = req.body
   return Team.update({'members._id': memberID}, {'$set': {
  'members.$.name': name,
  'members.$.lastName': lastName,
  'members.$.nick':nick,
  'members.$.rol':rol,
  'members.$.img':img,
  'members.$.primary':primary,
  'members.$.secondary':secondary,
  'members.$.extras':extras,
  'members.$.eliminations':eliminations,
  'members.$.dead':dead
  }})
  .then( response => res.status(200).json({ msg: ` player w/ ${memberID} has been edited!! ` }))
}

module.exports = editPlayerById
