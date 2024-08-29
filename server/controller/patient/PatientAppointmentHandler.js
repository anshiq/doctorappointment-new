const { AppointmentSchema } = require("../../model/appointmentModel");
const { DoctorSchema } = require("../../model/doctorModel");
const createAppointment = async (req, res) => {
  try {
    const { problem, time } = req.body;
    const userId = req.userId;
    const data = await AppointmentSchema.create({
      patientId: userId,
      time: time,
      problem: problem,
      progress: "toaccept",
      reviewed: false,
      appointedDoctorId: undefined,
      presentDoctorIds: [],
    });
    res.send(data);
  } catch (e) {
    res.status(500).send("error while creaating appoiintment");
  }
};
const getPatientAppointments = async (req, res) => {
  const userId = req.userId;
  try {
    const data = await AppointmentSchema.find({
      patientId: userId,
    });
    res.send(data);
  } catch (error) {
    res.status(500).send({ err: error });
  }
};
const acceptYourDoctorForTreatment = async (req, res) => {
  try {
    const { doctorId, appointmentId } = req.body;
    const appointment = await AppointmentSchema.findById(appointmentId);
    appointment.appointedDoctorId = doctorId;
    appointment.presentDoctorIds = [];
    appointment.save();
    res.send(appointment);
    return;
  } catch (e) {
    res.status(500).send("Error in accepting doctor", e);
  }
};
const reviewDoctor = async (req, res) => {
  const { rating, appointmentId } = req.body;
  const userId = req.userId;
  if (rating > 5) {
    res.status(500).send("rating can't be more than 5 ");
    return;
  }
  try {
    const data = await AppointmentSchema.findById(appointmentId);
    if (data.patientId !== userId)
      return res
        .status(500)
        .send("this user is not allowed for this appointment ");
    const review = {
      appointmentId: data._id,
      rate: rating,
    };
    const doctor = await DoctorSchema.findById(data.appointedDoctorId);
    doctor.rating = [...doctor.rating, review];
    await doctor.save();
    data.reviewed = true;
    await data.save();
    res.send(data);
  } catch (error) {
    res.status(500).send({ err: error });
  }
};
module.exports = {
  getPatientAppointments,
  reviewDoctor,
  acceptYourDoctorForTreatment,
  createAppointment
};
