const config = require("../config/auth.config");
const db = require("../models");
const Quiz = db.quiz;

exports.createQuiz = (req, res) => {
    Quiz.create(req.body)
      .then(quiz => res.send(quiz))
  }


exports.findAllQuizzes = (req, res) =>
    Quiz.find()
        .then(quizzes => {
          res.send(quizzes);
        });

exports.findQuizById = (req, res) =>
    Quiz.findById(req.params.qid)
    .populate('questions')
    .exec().then(quiz => res.send(quiz))

exports.updateQuiz = (req, res) =>
  Quiz.update({_id: req.params.qid}, {
    $set: req.body
  }).then(status => res.send(status))

exports.deleteQuiz = (req, res) =>
  Quiz.remove({_id: req.params.qid})
  .then(status => res.send(status))

  exports.addQuestion = (req, res) =>
    Quiz.update({_id: req.params.qid}, {
    $push: {questions: req.params.questionId}
  }).then(
      status => res.send(status),
      error => res.send(error)
    )
