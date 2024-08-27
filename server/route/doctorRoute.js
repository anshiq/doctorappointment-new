const DoctorRouter = require('express').Router()
DoctorRouter.route('/').get((req,res)=>{
    res.end('hello from doctor')
})
module.exports = {DoctorRouter}