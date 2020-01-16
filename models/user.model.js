/**
 * Mongoose schema for user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 8
  },
  firstname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;