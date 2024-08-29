const { AppointmentSchema } = require("../../model/appointmentModel")

const getAllAppointments = async (req, res) => {
    try {
        const data = await AppointmentSchema.find({
            progress: "toaccept"
        })
        res.send(data)
    } catch (error) {
        res.status(500).send({ err: error })
    }
}
const getDoctorAppointments = async (req, res) => { // on going appointment of this doctor
    try {
        const data = await AppointmentSchema.find({
            appointedDoctorId: req.userId,
            progress: "ongoing"
        })
        res.send(data);
    } catch (error) {
        res.status(500).send({ err: error })
    }
}
const addPresentDoctor = async (req, res) => {
    const {  appointmentId } = req.body;
    const doctorId = req.userId
    try {
        const data = await AppointmentSchema.findById(appointmentId);
        if (!data.presentDoctorIds.includes(doctorId)) {
            data.presentDoctorIds.push(doctorId);
        }
        await data.save();
        res.send(data);
    } catch (error) {
        res.status(500).send({ err: error });
    }
};
module.exports = { getAllAppointments, addPresentDoctor, getDoctorAppointments }