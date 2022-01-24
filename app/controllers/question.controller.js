const config = require("../config/auth.config");
const db = require("../models");
const Question = db.question;


  exports.findAllQuestions = (req, res) =>
    Question.find()
        .then(questions => {
          res.send(questions);
        });

  exports.createQuestion = (req, res) =>
    Question.create(req.body)
        .then(
          question => res.json(question),
          error => res.send(error)
  )

        