/**
 * Mongoose model and schema for user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sermonSchema = new Schema({
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
    trim: true,
    minlength: 5,
  }
}, {
  timestamps: true,
});

const Sermon = mongoose.model('Sermon', sermonSchema);

module.exports = Sermon;