const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema(
  {
    liker: { type: Schema.Types.ObjectId, ref: "User" },
    liked: { type: Boolean, default: null },
  },
  { timestamps: true }
);

const commentSchema = new Schema(
  {
    commentor: { type: Schema.Types.ObjectId, ref: "User" },
    content: String,
  },
  { timestamps: true }
);

const ratingSchema = new Schema(
  {
    rated_by: { type: Schema.Types.ObjectId, ref: "User" },
    rating: Number,
  },
  { timestamps: true }
);

const entrySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    private: { type: Boolean, default: false },
    classification: {
      type: String,
      enum: [
        "Poem",
        "Short Story",
        "Blog",
        "Lyrics",
        "Novel",
        "Essay",
        "Speech",
        "Comic",
        "Journal",
        "Play",
      ],
    },
    genre: {
      type: String,
      enum: [
        "Fantasy",
        "Mystery",
        "Drama",
        "Comedy",
        "AutoBiography",
        "Non-Fiction",
        "Fiction",
        "Fan-Fic",
        "Sci-Fi",
        "Horror",
        "Romance",
        "Historical",
        "Myth",
        "Adventure",
      ],
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: Schema.Types.ObjectId, ref: "Draft" },
    quote: { type: Schema.Types.ObjectId, ref: "Quote" },
    comments: [commentSchema],
    likes: [likeSchema],
    rating: [ratingSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entry", entrySchema);
