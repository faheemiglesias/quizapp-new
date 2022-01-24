const config = require("../config/auth.config");
const db = require("../models");
const Submission = db.submission;

exports.createSubmission = (req, res) =>
    Submission.create(req.body)
        .then(
        submission => res.json(submission),
        error => res.send(error)
    )

exports.findAllSubmissions = (req, res) =>
    Submission.find()
    .then(submission => {
        res.send(submission);
    });

exports.findAllSubmissionsForStudent = (req, res) =>
    Submission.find({student: req.params.studentId})
    .then(submission => {
        res.send(submission);
    });

exports.findAllSubmissionsForQuiz = (req, res) =>
    Submission.find({quiz: req.params.quizId})
    .then(submission => {
        res.send(submission);
    });