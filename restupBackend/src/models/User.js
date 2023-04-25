const mongoose = require('mongoose');

const roles = ['admin', 'client','livreur','serveur']; // liste des rôles possibles

const UserSchema = new mongoose.Schema({
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
  role: {
    type: String,
    // default:'client',
    enum: roles, // restreindre les valeurs possibles à "admin" ou "client"
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  panier: [
    {
      plats: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'plats',
      },

      quantity: {
        type: Number,
      },
      
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports = User = mongoose.model('user', UserSchema);
