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
      fillBlanksAnswers: {
        variable: String,
        value: String
      },
        multipleChoiceAnswer: Number,
      trueFalseAnswer: Boolean,
      essayAnswer: String,
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questionmodels'
      }
    }]
  })
);

module.exports = Submission;