const PatientRoute = require('express').Router()
PatientRoute.route('/').get((req,res)=>{
    res.end('hello from patient')
})
module.exports = {PatientRoute}