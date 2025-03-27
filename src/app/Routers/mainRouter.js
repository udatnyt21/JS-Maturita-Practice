const mainRouter = require("express").Router();


mainRouter.get("/", (req,res) => {res.render("index.ejs")})

mainRouter.use("/user", require("./userRouter"));
mainRouter.use("/note", require("./noteRouter"));

mainRouter.get("*",(req,res) => res.send("Error 404a"));

module.exports = mainRouter;