const Draft = require("../models/draft");

module.exports = {
  create,
  remove,
  update,
  show,
  index,
};

function create(req, res) {
  req.body.author = req.user._id;
  console.log(req.body);
  Draft.create(req.body)
    .then((draft) => {
      res.json(draft);
    })
    .catch((err) => {
      res.json(err);
    });
}

function update(req, res) {
  Draft.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((entry) => {
      res.json(entry);
    })
    .catch((err) => {
      res.json(err);
    });
}

function remove(req, res) {
  Draft.findByIdAndDelete(req.params.id)
    .then((entry) => {
      res.json(entry);
    })
    .catch((err) => {
      res.json(err);
    });
}

function show(req, res) {
  Draft.findOne({ author: req.user._id })
    .populate("author")
    .then((entry) => {
      res.json(entry);
    })
    .catch((err) => {
      res.json(err);
    });
}

function index(req, res) {
  req.body.author = req.user._id;
  Draft.find({ author: req.user._id })
    .populate("author")
    .then((draft) => {
      res.json(draft);
    })
    .catch((err) => {
      res.json(err);
    });
}
