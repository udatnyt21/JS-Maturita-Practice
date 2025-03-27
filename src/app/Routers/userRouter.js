const userController = require("../Controllers/userController")
const userRouter = require("express").Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout)

userRouter.get("/profile", userController.profile);
userRouter.get("/registerGet", userController.registerGet);
userRouter.get("/loginGet", userController.loginGet)


module.exports = userRouter;