userModel = require("../Models/userModel");


exports.register = (req,res) => {

}

exports.login = (req,res) => {

}

exports.logout = (req,res) => {

}

exports.profile = (req,res) => {
    res.render("./user/profile.ejs")
}

exports.registerGet = (req,res) => {
    res.render("./user/register.ejs")
}

exports.loginGet = (req,res) => {
    res.render("./user/login.ejs")
}