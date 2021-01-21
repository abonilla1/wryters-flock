const Entry = require("../models/entry");

module.exports = {
  create,
  deleteOne: deleteComment,
  index,
};
function index(req, res) {
  Entry.findById(req.params.id)
    .then((entry) => res.json(entry.comments))
    .catch((err) => res.json(err));
}
function create(req, res) {
  Entry.findById(req.params.id)
    .then((entry) => {
      req.body.commentor = req.user._id;
      entry.comments.push(req.body);
      entry.save()((res) => {
        res.json(entry);
      });
    })
    .catch((err) => res.json(err));
}

function deleteComment(req, res) {
  Entry.findById(req.params.entryID)
    .then((entry) => {
      let idx = entry.comments.indexOf(req.params.id);
      entry.comments.splice(idx, 1);
      entry.save()((res) => {
        res.json(entry);
      });
    })
    .catch((err) => res.json(err));
}
