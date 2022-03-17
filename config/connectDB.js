//import mongoose and config
const mongoose = require("mongoose");
const config = require("config");

//mongoose connection
const connectDB = () => {
    mongoose.connect(config.get("MONGO_URI"),{useNewUrlParser:true, useUnifiedTopology:true})
     .then(console.log("DATABASE IS CONNECTED SUCCESSFULLY"))
     .catch(err => console.log(err))
}


//export connectDB
module.exports = connectDB;