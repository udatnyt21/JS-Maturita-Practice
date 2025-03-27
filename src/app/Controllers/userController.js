userModel = require("../Models/userModel");


exports.register = (req,res) => {
    const name = req.body.name.trim();
    const password = req.body.password.trim();
    const passwordCheck = req.body.passwordCheck.trim();
    const aiCheck = req.body.aiCheck

    console.log(req.body)

    if(aiCheck != "on")
        return res.redirect("/user/registerGet");
    if(!name || !name)
        return res.redirect("/user/registerGet");
    if(password != passwordCheck)
        return res.redirect("/user/registerGet");
    if(!userModel.checkName(name))
        return res.redirect("/user/registerGet");

    userModel.addUser(name, password);

    return res.redirect("/user/loginGet");
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