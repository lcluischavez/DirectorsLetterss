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
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }).single('file');
const app = express();
const pool = require('./db');


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

//let letters = [];

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

app.get('/letters', function(req, res) {
  const query = 'SELECT * FROM directors_letters_db.letters';
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving letters from the database:', err);
      return;
    }
    const letters = result.rows;
    res.render('letters', { letters }); // Render the 'letters' template and pass the 'letters' data
  });
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

app.get('/add-letters', function(req,res){
  res.render('addletters')
});





///sql connection


const db = require('./db');

db.query('SELECT * FROM directors_letters_db.lettercategories', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results.rows);
});



const PORT = process.env.PORT || 3100





app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});