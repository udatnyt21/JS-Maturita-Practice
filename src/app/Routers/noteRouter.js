const noteController = require("../Controllers/noteController")
const noteRouter = require("express").Router();


noteRouter.post("/add", noteController.add);
noteRouter.post("/delete", noteController.delete);
noteRouter.post("/setImportance", noteController.setImportance);

noteRouter.get("/addGet", noteController.addGet);

module.exports = noteRouter;
