const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')
const collection = 'Users'
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  teamId: {type: ObjectId, ref: 'teams'}
})
 

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', UserSchema)