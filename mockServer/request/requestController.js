const requestService = require("./requestService");

class RequestController {
  getAllRequests(req, res) {
    try {
      res.json(requestService.getAllRequests());
    } catch (e) {
      res.status(500).json(e);
    }
  }
  isProcessing(req, res) {
    try {
      res.json(requestService.isProcessing());
    } catch (e) {
      res.status(500).json(e);
    }
  }
  getOneRequest(req, res) {
    try {
      const id = req.params.id;
      res.json(requestService.getOneRequest(id));
    } catch (e) {
      res.status(500).json(e);
    }
  }
  getRequestStatus(req, res) {
    try {
      const id = req.params.id;
      res.json(requestService.getRequestStatus(id));
    } catch (e) {
      res.status(500).json(e);
    }
  }
  creatRequest(req, res) {
    try {
      const { body } = req;
      res.json(requestService.creatRequest(body));
    } catch (e) {
      res.status(500).json(e);
    }
  }
  registerRequest(req, res) {
    try {
      const { body } = req;
      res.json(requestService.registerRequest(body));
    } catch (e) {
      res.status(500).json(e);
    }
  }
  updateRequest(req, res) {
    try {
      const { body } = req;
      res.json(requestService.updateRequest(body));
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new RequestController();
