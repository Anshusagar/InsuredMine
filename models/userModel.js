const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: Number, required: true },
  dob: { type: Date, required: true },
});

module.exports = mongoose.model('user', userSchema);
