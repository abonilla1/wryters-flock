const User = require("../models/user");

module.exports = {
  update,
  profile,
};

function profile(req, res) {
  User.findOne(req.user._id)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.json(err);
    });
}

function update(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
}
