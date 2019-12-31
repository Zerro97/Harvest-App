/**
 * Mongoose schema for user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reimbursementSchema = new Schema({
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

const Reimbursement = mongoose.model('User', reimbursementSchema);

module.exports = Reimbursement;