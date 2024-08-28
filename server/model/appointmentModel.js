const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  progress: String, // "toaccept", "recieved", "on going", "done"
  patientId: String,
  presentDoctorIds: [{ type: String, unique: true }], // or [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', unique: true }]
  appointedDoctorId: String,
  problem: String,
  time: String,
  reviewed :Boolean
})

const AppointmentSchema = mongoose.model("Appointment", appointmentSchema); // changed from "users" to "Appointment"
module.exports = { AppointmentSchema }