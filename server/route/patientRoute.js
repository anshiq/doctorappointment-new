const {loginUser,signupUser,forgotPassword,verifyEmailToken,verifyForgotPasswordToken} = require('../controller/patient/PatientAuthenticationHandler')
const {getPatientAppointments,acceptYourDoctorForTreatment,reviewDoctor} = require('../controller/patient/PatientAppointmentHandler')
const PatientRoute = require('express').Router() // jwt require 
const PatientAuthRoute = require('express').Router() // not jwt
PatientRoute.route('/get-patient-appointments').get(getPatientAppointments)
PatientRoute.route('/accept-your-doctor',acceptYourDoctorForTreatment)
PatientRoute.route('/review-doctor',reviewDoctor)

PatientAuthRoute.route('/login').post(loginUser)
PatientAuthRoute.route('/signup').post(signupUser)
PatientAuthRoute.route('/reset-password').post(forgotPassword)
PatientAuthRoute.route('/verify-email-token').post(verifyEmailToken)
PatientAuthRoute.route('/verify-forgot-password-token').post(verifyForgotPasswordToken)
module.exports = {PatientRoute,PatientAuthRoute}