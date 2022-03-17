//import mongoose

const mongoose = require("mongoose");


//define schema
const  schema = mongoose.Schema

//create a new schema
const personSchema = new schema({

 fullname: {type:String, required:true},
 age: {type:Number, required:true},
 favouritefood: {type:[String], required:true}
})





//export person
module.exports = person = mongoose.model("person", personSchema);