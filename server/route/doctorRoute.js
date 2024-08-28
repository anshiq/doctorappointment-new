const { getAllAppointments, getDoctorAppointments, addPresentDoctor } = require('../controller/doctor/DoctorAppointmentHandler')
const { loginUser, signupUser, forgotPassword, verifyEmailToken, verifyForgotPasswordToken } = require('../controller/doctor/DoctorAuthenticationHandler')

const DoctorRouter = require('express').Router() // jwt required to accesss
DoctorRouter.get('/add-present-doctor', addPresentDoctor) //first response to a patients appointment that i am available for your problem
DoctorRouter.get('/get-all-appointments', getAllAppointments)
DoctorRouter.get('/get-my-appointments', getDoctorAppointments) // on going appointment of this doctor



const DoctorAuthRouter = require('express').Router()// no jwt , signup login etc

DoctorAuthRouter.route('/login').post(loginUser)
DoctorAuthRouter.route('/signup').post(signupUser)
DoctorAuthRouter.route('/reset-password').post(forgotPassword)
DoctorAuthRouter.route('/verify-email-token').post(verifyEmailToken)
DoctorAuthRouter.route('/verify-forgot-password-token').post(verifyForgotPasswordToken)

module.exports = {DoctorRouter,DoctorAuthRouter}