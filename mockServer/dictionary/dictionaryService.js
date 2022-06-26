const db = require("../db");

class DictionaryService {
  getDictionary(id) {
    switch (id) {
      case "DICT_AUTO":
        return db.auto;
      case "DICT_CITIES":
        return db.cities.items;
      default:
        return { message: "this id does not exist" };
    }
  }
}

module.exports = new DictionaryService();
