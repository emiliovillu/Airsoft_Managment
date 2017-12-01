const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'teams'

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
        eliminations: { type: Number, default: -1},
        dead: { type: Number, default: -1},
        date: Date
      }
    } 
  ] 
}, { collection })

module.exports = mongoose.model('Team', TeamSchema)
