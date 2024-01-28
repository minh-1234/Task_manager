const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "must provide your email"],
    trim: true,
  },
  password: {
    type: String,
    require: [true, "must provide your password"]
  }
});
module.exports = mongoose.model('User', UserSchema); 