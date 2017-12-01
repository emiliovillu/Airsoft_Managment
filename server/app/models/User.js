const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')
const collection = 'users'
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  team: { type: ObjectId, ref: 'Team' }
}, { collection })
 

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema)