const controller = require("../controllers/question.controller");

module.exports = function(app) {
  app.get("/api/question", controller.findAllQuestions);
  app.post("/api/question", controller.createQuestion);
};