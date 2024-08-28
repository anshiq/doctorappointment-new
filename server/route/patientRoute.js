const PatientRoute = require('express').Router() // jwt require 
const PatientAuthRoute = require('express').Router() // not jwt
PatientRoute.route('/').get((req,res)=>{
    res.end('hello from patient')
})
PatientAuthRoute.route('/').get((req,res)=>{
    res.end('hello from patient')
})
module.exports = {PatientRoute,PatientAuthRoute}