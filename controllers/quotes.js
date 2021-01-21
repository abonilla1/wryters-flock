const Quote = require("../models/quote");

module.exports = {
  new: newQuote,
  delete: deleteQuote,
  index,
};

function newQuote(req, res) {
  Quote.create(req.body)
    .then((quote) => {
      res.json(quote);
    })
    .catch((err) => res.json(err));
}

function index(req, res) {
  Quote.find({})
    .populate("addedBy")
    .then((quotes) => {
      res.json(quotes);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deleteQuote(req, res) {
  Quote.findByIdAndDelete(req.params.id)
    .then((quote) => {
      res.json(quote);
    })
    .catch((err) => res.json(err));
}
