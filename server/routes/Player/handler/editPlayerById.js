const Team =  require ('../../../models/Team')


function editPlayerById(req, res) {
  const { teamID, memberID } = req.params
  const { name, lastName, nick, rol, img, primary, secondary, extras, eliminations, dead } = req.body
  console.log(img)
   return Team.update({'members._id': memberID}, {'$set': {
  'members.$.name': name,
  'members.$.lastName': lastName,
  'members.$.nick':nick,
  'members.$.rol':rol,
  'members.$.img':img,
  'members.$.equipment.primary':primary,
  'members.$.equipment.secondary':secondary,
  'members.$.equipment.extras':extras,
  'members.$.eliminations':eliminations,
  'members.$.dead':dead
  }})
  .then( response => res.status(200).json({ msg: ` player w/ ${memberID} has been edited!! ` }))
}

module.exports = editPlayerById
