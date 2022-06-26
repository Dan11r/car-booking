const db = require("../db");
const { Request } = require("../helpers.js");

class RequestService {
  getAllRequests() {
    return db.requests;
  }
  isProcessing() {
    return {
      processing: db.requests.some((r) => r.status.code === "PROCESSING"),
      id: db.requests.find((r) => r.status.code === "PROCESSING")?.id || null,
    };
  }
  getOneRequest(id) {
    return db.requests.find((request) => +request.id === +id);
  }
  getRequestStatus(id) {
    return db.requests.find((request) => +request.id === +id)?.status.code;
  }
  creatRequest(body) {
    const request = new Request(db, body, "DRAFT", true, true);
    db.requests.push(request.value);
    const { createDate, status, id } = db.requests[db.requests.length - 1];
    return { createDate, status, id };
  }
  registerRequest(body) {
    if (db.requests.some((request) => +request.id === +body.id)) {
      const request = new Request(db, body, "PROCESSING", false, true);
      const requestIndex = db.requests.findIndex(
        (request) => +request.id === +body.id,
      );
      db.requests[requestIndex] = {
        ...db.requests[requestIndex],
        ...request.value,
      };
      setTimeout(() => {
        db.requests[requestIndex] = {
          ...db.requests[requestIndex],
          status: { code: "SUCCESS" },
        };
      }, 10000);
    } else {
      const request = new Request(db, body, "PROCESSING", true, true);
      db.requests.push(request.value);
      setTimeout(() => {
        db.requests[db.requests.length - 1] = {
          ...db.requests[db.requests.length - 1],
          status: { code: "SUCCESS" },
        };
      }, 10000);
    }
    const { createDate, status, id } = db.requests[db.requests.length - 1];
    return { createDate, status, id };
  }
  updateRequest(body) {
    const request = new Request(db, body, "DRAFT", false, true);
    const requestIndex = db.requests.findIndex(
      (request) => +request.id === +body.id,
    );
    db.requests[requestIndex] = {
      ...db.requests[requestIndex],
      ...request.value,
    };
    const { createDate, status, id } = db.requests[db.requests.length - 1];
    return { createDate, status, id };
  }
}

module.exports = new RequestService();
