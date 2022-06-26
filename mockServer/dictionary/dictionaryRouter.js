const Router = require("express");

const dictionaryRouter = new Router();

const dictionaryController = require("./dictionaryController");

dictionaryRouter.get("/dictionary/:id", dictionaryController.getAllRequests);

module.exports = dictionaryRouter;
