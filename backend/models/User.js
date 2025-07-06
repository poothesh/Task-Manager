const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // ✅ Added missing name field
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional for Google users
  provider: { type: String, default: 'local' } // 'local' or 'google'
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);