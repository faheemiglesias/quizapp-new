const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.quiz = require("./quiz.model");
db.question = require("./question.model");
db.submission = require("./submission.model");
db.result = require("./result.model");


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;