const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     enum: ['student', 'ccpd_admin'],
//     default: 'student'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Hash the password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to compare password during login
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };



// models/User.js
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  role: { type: String, enum: ['student', 'mentor_admin'], required: true, default: 'student' },
});

module.exports =mongoose.model('User', userSchema);
