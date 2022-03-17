//import required modules
const express = require("express");
const connectDB = require("./config/connectDB");
const person = require("./routes/person");

//initiate express
const app = express();



//4-parse data
app.use(express.json());

//3-define routes
app.use("/api/rihab/persons", person)

//2-connect database
connectDB();


//1-run server
const port = process.env.PORT || 9000
app.listen(port,err => {
    err? console.log(err) : console.log(`THE SERVER IS RUNNING SUCCESSFULLY ON PORT ${port}`)
})