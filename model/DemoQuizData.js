const mongoose = require("mongoose");

const DemoQuizDataSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    option1: {
      type: String,
      required: true,
    },
    option2: {
      type: String,
      required: true,
    },
    option3: {
      type: String,
      required: true,
    },
    option4: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    userAnswer: {
      type: String,
      default: null,
    },
    asnwered: {
      type: Boolean,
      default: false,
    },
    score: {
      type: Number,
      default: 0,
    },
    marked: {
      type: Boolean,
      default: false,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DemoQuizdata",
  DemoQuizDataSchema,
  "demoQuizdata"
);
