/**
 * Mongoose schema for user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO
// Find out about difference between timestamp and date variable
const reimbursementSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  // Holds the URL string for image that will be stored in AWS
  photo: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

const Reimbursement = mongoose.model('User', reimbursementSchema);

module.exports = Reimbursement;