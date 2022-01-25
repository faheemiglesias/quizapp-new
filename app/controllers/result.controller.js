const config = require("../config/auth.config");
const db = require("../models");
const Result = db.result;

exports.findAllResults = (req, res) =>
Result.find()
    .populate('students')
    .populate('quizes')
    .populate('questions')
    .populate('score')
    .then(submission => {
        res.send(submission);
    });
