const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Admin = mongoose.model('admin', AdminSchema);