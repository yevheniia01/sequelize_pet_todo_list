const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
var logger = require("morgan");

const app = express();
var PORT = process.env.PORT || 8082;
var db = require("./models");




// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
// mongoose.connect('mongodb://localhost/pet_todo_db', {useNewUrlParser: true});





app.post('/todo', (req, res)=>{
    db.PetTodo.create({
        todo: req.body.todo
    })
    .then(function(dbPetTodo){
        res.json(dbPetTodo)
    })
    .catch(function(err){
        res.json(err);
    })
})
app.get('/todo', (req,res)=>{
    db.PetTodo.findAll({})
    .then(function(dbPetTodo){
        res.json(dbPetTodo)
        console.log(dbPetTodo)
    })
    .catch(function(err){
        res.json(err);
    })
});

app.get('/delete/:id', (req, res)=>{
    db.PetTodo.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbPetTodo) {
          res.json(dbPetTodo);
        });
})

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  