const Router = require("express");

const requestRouter = new Router();

const requestController = require("./requestController");

requestRouter.get("/requests", requestController.getAllRequests);
requestRouter.get("/request/processing", requestController.isProcessing);
requestRouter.get("/request/:id", requestController.getOneRequest);
requestRouter.get("/request/status/:id", requestController.getRequestStatus);
requestRouter.post("/request", requestController.creatRequest);
requestRouter.post("/request/registration", requestController.registerRequest);
requestRouter.put("/request", requestController.updateRequest);

module.exports = requestRouter;
