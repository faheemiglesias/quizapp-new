const controller = require("../controllers/submission.controller");

module.exports = function(app) {
  app.post('/api/submit', controller.createSubmission);
  app.get('/api/submit', controller.findAllSubmissions);
  app.get('/api/submit/:studentId', controller.findAllSubmissionsForStudent);
  app.put('/api/submit/:quizId', controller.findAllSubmissionsForQuiz);
};