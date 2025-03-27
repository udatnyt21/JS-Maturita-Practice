const mainRouter = require("express").Router();


mainRouter.get("/", (req,res) => {res.render("index.ejs")})

mainRouter.get("/user", require("./userRouter"));
mainRouter.get("/note", require("./noteRouter"));

mainRouter.get("*",(req,res) => res.send("Error 404"));

module.exports = mainRouter;