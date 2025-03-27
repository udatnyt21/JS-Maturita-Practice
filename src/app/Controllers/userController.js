userModel = require("../Models/userModel");


exports.register = (req,res) => {
    const name = req.body.name.trim();
    const password = req.body.password.trim();
    const passwordCheck = req.body.passwordCheck.trim();
    const aiCheck = req.body.aiCheck

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
    const name = req.body.name.trim();
    const password = req.body.password.trim();

    if(!name || !password)
        return res.redirect("loginGet");

    const user = userModel.userFromName(name);

    if(!userModel.checkPassword(user.id, password))
        return res.redirect("/user/loginGet")

    req.session.user = {
        id: user.id,
        username: user.username
    }
    
    console.log(req.session.user)

    res.redirect("/user/profile")
}

exports.logout = (req,res) => {

}

exports.profile = (req,res) => {
    res.render("./user/profile.ejs", {
        user: req.session.user
    })
}

exports.registerGet = (req,res) => {
    res.render("./user/register.ejs")
}

exports.loginGet = (req,res) => {
    res.render("./user/login.ejs")
}