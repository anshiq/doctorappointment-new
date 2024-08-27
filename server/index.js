const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
const {DoctorRouter} = require('./route/doctorRoute')
const {PatientRoute} = require('./route/patientRoute')
const { connect } = require("./db/connect")
const app  = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use('/doctor',DoctorRouter)
app.use('/patient',PatientRoute)
const start = async () => {
    try {
        const db_url = process.env.mongod_url;
		
        const port = process.env.PORT || 8080;
		console.log(db_url,port)
        connect(db_url);
        app.listen(port, () =>
            console.log(`server up n running on ${port} and connected to db....`),
        );
    } catch (error) {
        console.log(error);
        console.log("server did not started because of error in db connection...");
    }
};
start();
