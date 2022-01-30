const mongoose = require('mongoose')

const Submission = mongoose.model(
  "submissionmodels",
  new mongoose.Schema({
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'usermodels'
    },
    quiz: {
      quizId: mongoose.Schema.Types.ObjectId,
      score: Number,
      ref: 'quizmodels',
    },
    answers: [{
      question: {
        qId: mongoose.Schema.Types.ObjectId,
        ref: 'questionmodels',
      }
    }],
  })
);

module.exports = Submission;