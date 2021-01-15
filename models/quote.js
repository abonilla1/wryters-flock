const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const quoteSchema = new Schema ({
    addedBy: [{type: Schema.Types.ObjectId, ref: "User"}],
    content: String,
    author: String,
})

module.exports = mongoose.model("Quote", quoteSchema)


