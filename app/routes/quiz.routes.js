const controller = require("../controllers/quiz.controller");

module.exports = function(app) {
  app.post('/api/quiz', controller.createQuiz);
  app.get('/api/quiz', controller.findAllQuizzes);
  app.get('/api/quiz/:qid', controller.findQuizById);
  app.put('/api/quiz/:qid', controller.updateQuiz);
  app.delete('/api/quiz/:qid', controller.deleteQuiz);
  app.put('/api/quiz/:qid/question/:questionId', controller.addQuestion);
};