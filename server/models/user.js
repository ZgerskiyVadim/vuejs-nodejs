'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {type: String, require: true, unique: true},
  city: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  dispatch: {type: Boolean, require: true}
});

module.exports = mongoose.model('User', userSchema);
