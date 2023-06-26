const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require('lodash');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require('path');
const session = require('express-session');
const passport = require('passport');
passportLocalMongoose = require('passport-local-mongoose')
const methodOverride = require('method-override');
const { stringify } = require("querystring");
const app = express();


const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'directors-lettersDB',
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database!');
    connection.release();
  }
});

// CRUD
function createLetter(letterData, callback) {
  const query = 'INSERT INTO Letters (letter_title, content, letter_type_id, letter_writer_id, letter_category_id) VALUES (?, ?, ?, ?, ?)';
  const values = [
    letterData.title,
    letterData.content,
    letterData.typeId,
    letterData.writerId,
    letterData.categoryId
  ];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating letter:', err);
      callback(err);
    } else {
      console.log('Letter created successfully!');
      callback(null, result.insertId);
    }
  });
}
//CRUD
const newLetter = {
  title: 'Sample Letter',
  content: 'Lorem ipsum dolor sit amet...',
  typeId: 1,
  writerId: 1,
  categoryId: 1
};

createLetter(newLetter, (err, insertedId) => {
  if (err) {
    console.error('Error creating letter:', err);
  } else {
    console.log('New letter created with ID:', insertedId);
  }
});
//CRUD


app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(session({
  secret: "Our little secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,

});

userSchema.plugin(passportLocalMongoose)

const User = new mongoose.model("User", userSchema)

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const homeStartingContent = "";
const aboutContent = " about zach";
const contactContent = "contact zach";

let letters = [];

//redirect home if not logged in

app.get('/', function (req,res){
  if(req.isAuthenticated()){
    res.redirect('/adminhome')

  }else{

    res.redirect('/home')
  }

})

app.get("/home", function(req,res){


    
      res.render('home')

  
  });

  app.get("/aboutus", function(req,res){


    
    res.render('about')


});

app.get("/contact", function(req,res){
    res.render('contact')
});

app.get('/aboutus', function(req,res){
    res.render('about')
});

app.get('/letters', function(req,res){
  res.render('letters')
});

app.get('/band-director-letters', function(req,res){
  res.render('banddirectorletters')
});

app.get('/choir-director-letters', function(req,res){
  res.render('choirdirectorletters')
});

app.get('/orchestra-director-letters', function(req,res){
  res.render('orchestradirectorletters')
});

app.get('/musical-theater-director-letters', function(req,res){
  res.render('musicaltheaterdirectorletters')
});

const PORT = process.env.PORT || 3100

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});