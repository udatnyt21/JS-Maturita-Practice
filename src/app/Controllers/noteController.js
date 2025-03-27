noteModel = require("../Models/noteModel");


exports.add = (req,res) => {
    const title = req.body.title.trim();
    const content = req.body.content.trim();
    const isImportant = req.body.isImportant;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const owner =  req.session.user.id;

    if(!title || !content)
        return res.redirect("/note/addGet")

    noteModel.add(owner, title, content, isImportant, date, time)

    res.redirect("/user/profile");
}

exports.delete = (req,res) => {

}

exports.setImportance = (req, res) => {

}

exports.addGet = (req,res) => {
    return res.render("./note/add.ejs")
}