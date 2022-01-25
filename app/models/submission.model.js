const mongoose = require('mongoose')

const Submission = mongoose.model(
  "submissionmodels",
  new mongoose.Schema({
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'usermodels'
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'QuizModel'
    },
    answers: [{
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questionmodels',
        score: Number
      }
    }]
  })
);

module.exports = Submission;