//import express and router
const express = require("express");


const router = express.Router();


//import Person from models
const Person = require("../models/person");



//@api http://localhost:9000/api/rihab/persons
//@description add new person
//access public
router.post("/",(req,res) => {
    const newPerson = new Person({...req.body})
    newPerson.save()

    .then(person => res.status(200).json(person))
   .catch(err => res.status(400).json(err))
})


//create and save a record of a model
const firstPerson = new Person({
    fullname:"joe biden",
    age:69,
    favouritefood:["black label","corona beer" ,"burritos", "foret-noire"]
})
firstPerson.save(function(err) {
    err? console.log(err): console.log(firstPerson)
})
   
//create many records
const arrayOfPeople=[
    {
        fullname:"queen elisabeth II",
        age:95,
        favouritefood:["schwarzbier guinness", "pork dishes","nutella waffles"]
    },
    {
        fullname:"emmanuel macron",
        age:44,
        favouritefood:["white shadrapa","bloody mary","camembert", "macaron"]
    },
    {
        fullname:"vladimir putin",
        age:68,
        favouritefood:["grey goose", "borsht", "burritos","kartoshka"]
    }
]

Person.create(arrayOfPeople)
console.log(arrayOfPeople)


//@api http://localhost:9000/api/rihab/persons
//@description find all persons
//access public
router.get("/",(req,res) =>{
    Person.find()

    .then(persons =>res.status(200).json(persons))
    .catch(err =>res.status(400).json(err))
})

//@api http://localhost:9000/api/rihab/persons
//@description find one person by id
//access public
router.get("/:_id",(req,res)=>{
    let {_id} = req.params
    Person.find({_id})

    .then(person =>res.send(person))
    .catch(err => res.send(err))
})


//find one person by favouritefood
router.get("/:favouritefood",(req,res) =>{
    let {favouritefood} = req.params
   Person.findOne({favouritefood})

    .then(person =>res.send(person))
    .catch(err => res.send(err))
})

//Perform Classic Updates by Running Find, Edit, then Save
router.patch("/:_id",(req,res) =>{
    let {_id} = req.params
    Person.findByIdAndUpdate({_id});
    person.favouritefood.push("hamburger");
    person.favouritefood.save()

    
    .then(()=> res.send("P.S: HAMBURGER HAS BEEN ADDED!"))
    .catch(err => res.send(err))
})

//Perform New Updates on a Document Using model.findOneAndUpdate()
router.put("/:_id",(req,res) => {
    let {_id} = req.params
    Person.findOneAndUpdate({_id}, {$set :{age:20}})

    .then(() => res.send("P.S: THE AGE HAS BEEN UPDATED!"))
    .catch(err => res.send(err))
})




//Delete One Document Using model.findByIdAndRemove
router.delete("/:_id",(req,res) =>{
    let {_id} = req.params
    Person.findByIdAndRemove({_id})

    .then(() => res.send("P.S: A PERSON HAS BEEN REMOVED!"))
    .catch(err => res.send(err))
})


//Delete Many Documents with model.remove()
router.delete("/:fullname",(req,res) => {
    let {fullname} = req.params
    Person.remove({fullname})

    .then(() => res.send("P.S: PERSONS HAVE BEEN REMOVED!"))
    .catch(err => res.send(err))
})

//Chain Search Query Helpers to Narrow Search Results
router.get("/:favouritefood",(req,res)=>{
  
   Person.find({favouritefood: "burritos"})
         .sort({fullname: "asc"})
         .limit(2)
         .select("-age")
         .exec()

   .then((person) => res.send(person))
   .catch(err => res.send(err))

})


//@api http://localhost:9000/api/rihab/persons
//@description update one person by id
//@access public
router.put("/:_id",(req,res) =>{
    let {_id} = req.params
    Person.findByIdAndUpdate({_id} , {$set: {...req.body} })

    .then(() => res.send("P.S: A PERSON HAS BEEN UPDATED!"))
    .catch(err =>res.send(err))
})




module.exports = router;
