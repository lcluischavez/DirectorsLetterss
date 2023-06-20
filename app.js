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

//mongoose.connect("mongodb+srv://devinlatham20:Devlat411@blog.p0z8rju.mongodb.net/blogDB?retryWrites=true&w=majority", {useNewUrlParser: true});


const userSchema = new mongoose.Schema ({
    email: String,
    password: String,

});

userSchema.plugin(passportLocalMongoose)

const User = new mongoose.model("User", userSchema)

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// const postSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// })

// const Post = mongoose.model("Post", postSchema);


// const aboutSchema = new mongoose.Schema({
//   title: String,
//   content: String,

// })
// const About = mongoose.model("About", aboutSchema);
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


const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});