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
  const query = 'SELECT * FROM letters';
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving files from the database:', err);
      return;
    }
    const files = result.rows;
    res.render('banddirectorletters', { letters }); // Render a template or send the files data to the client
  });
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



//add letter
app.post('/upload', upload,  (req, res) => {
  const file = req.file;
  console.log(req.body.file)

  // Save the file details to the database
  const query = 'INSERT INTO letter (filename, filedata) VALUES ($1, $2)';
  const values = [file.originalname, file.buffer];
  
  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting file into the database:', err);
      return;
    }
    console.log('File uploaded and saved to the database');
    res.redirect('/banddirectorletters'); // Redirect to the page that displays uploaded files
  });
});


//dl letter
app.get('/download/:id', (req, res) => {
  const fileId = req.params.id;
  const query = 'SELECT * FROM your_table_name WHERE id = $1';
  const values = [fileId];
  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error retrieving file from the database:', err);
      return;
    }
    const file = result.rows[0];
    res.set('Content-Disposition', `attachment; filename="${file.filename}"`);
    res.send(file.filedata);
  });
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