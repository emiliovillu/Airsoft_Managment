const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'Teams'

const TeamSchema = new Schema({
  name: String,
  logo: String,
  location: {lat: Number, lng: Number},
  members: [ 
  { 
    name: String,
    lastName: String,
    nick: String,
    rol: String,
    equipment: {
      primary: String,
      secondary: String,
      extras: String
    },
    stats: {
      eliminations: Number,
      dead: Number
    }
  } 
    ] 
})
 
TeamSchema.statics.getPlayerById = function(id) {
  return this.find()
                .then( team => team.members.find( member => {
                  
                } ))
                .then( team => cats.map( cat => cat.name || ''))
};




module.exports = mongoose.model('Teams', TeamSchema)
