const mongoose = require('mongoose')

const Quiz = mongoose.model(
  "quizmodels",
  new mongoose.Schema({
    title: {type: String},
    questions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'questionmodels'
    }]
  })
);

module.exports = Quiz;