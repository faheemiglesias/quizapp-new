const mongoose = require("mongoose");

const Result = mongoose.model(
  "Result",
  new mongoose.Schema({
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidate',
      quizes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quizmodels',
        questions: [{
            ref: 'questionmodels',
            score: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'submissionmodels'
            }
        },
      ]
      }]
    }]
  })
);

module.exports = Result;