const mongoose = require("mongoose");
const { Schema } = mongoose;

const draftSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, default: "" },
    title: { type: String, default: "my draft" },
    posted: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Draft", draftSchema);
