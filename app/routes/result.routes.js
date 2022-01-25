const controller = require("../controllers/result.controller");

module.exports = function(app) {
  app.get('/api/results', controller.findAllResults);
};