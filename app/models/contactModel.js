const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Contact must have a name'],
    unique: true,
    minlength: [2, 'Contact must have more or equal 2 characters'],
    maxlength: [50, 'Contact must have less or equal 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Contact must have a email'],
  },
  address: {
    type: String,
    required: [true, 'Contact must have a address'],
  },
  phone: {
    type: String,
    required: [true, 'Contact must have a phone'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
