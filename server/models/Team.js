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
      img: String,
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
 





module.exports = mongoose.model('Teams', TeamSchema)
