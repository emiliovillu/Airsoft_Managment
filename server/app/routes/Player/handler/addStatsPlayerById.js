const Team =  require ('../../../models/Team')

function addStatsPlayerById(req, res) {
  const { teamID, memberID } = req.params
  const { eliminations, dead, date } = req.body
  console.log(eliminations, dead, date)
  
   return Team.update({'members._id': memberID}, {'$set': {
  'members.$.stats.eliminations':eliminations,
  'members.$.stats.dead':dead,
  'members.$.stats.date':date

  }})
  .then( response => res.status(200).json({ msg: ` Stats of player w/ ${memberID} has been add!! ` }))
}

module.exports = addStatsPlayerById