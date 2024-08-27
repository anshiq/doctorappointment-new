const mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
  },
  verifyToken: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
  age: Number,
  experience: Number,
  specialization: String,
  gender: String,
  rating: [ratingSchema]
})
const ratingSchema = new mongoose.Schema({
  patientId: String,
  rate: Number
  
})
const DoctorSchema = model("users", doctorSchema);
module.exports = { DoctorSchema }