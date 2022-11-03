const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minLength: [2, 'user must have more or equal 2 characters'],
    maxLength: [50, 'user must have less or equal 50 characters'],
  },
  password: {
    type: String,
    required: true,
    minLength: [2, 'user must have more or equal 2 characters'],
    maxLength: [50, 'user must have less or equal 50 characters'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
