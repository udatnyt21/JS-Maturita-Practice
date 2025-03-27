//This file is the Express app itself, it is what delegates everything to the rest of the MVC structure
// A request comes in, this file picks it up and sends it over to mainRouter, which will send it deeper into the MVC structure.
//ie: Controllers, models and views
//-This configures all middleware
//-Sets up the view and its directories
//-Starts up the main router
//-exports the actual app to be used by the server

require("dotenv").config()
const express = require("express")
const session = require("express-session")
const multer = require("multer")
const app = express()
const upload = multer()

//What folder will be used for static files
app.use(express.static("./www"))
//Use JSON
app.use(express.json())
//initializing EJS
// What to use for my view engine - ejs
app.set('view engine', 'ejs')
//Where my views are going to be
app.set('views', './app/views')

//Accept data from froms
app.use(express.urlencoded({extended: true}))

//setting up session
app.use(session({
    secret: 'HelloWorld',
    saveUninitialized: true,
    cookie: {secure: false},
    resave: false
}))

//Send everything to mainRouter
app.use("/", require("./routers/mainRouter.js"))

module.exports = app