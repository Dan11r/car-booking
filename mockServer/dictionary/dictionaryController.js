const dictionaryService = require("./dictionaryService");

class DictionaryController {
  getAllRequests(req, res) {
    try {
      const id = req.params.id;
      res.json(dictionaryService.getDictionary(id));
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new DictionaryController();
