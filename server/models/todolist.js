const { Schema, model } = require('mongoose');

const TodolistSchema = new Schema({
  title: Schema.Types.String,
  done: {
    type: Schema.Types.Boolean,
    default: false,
  },
  time: {
    type: Schema.Types.Date,
    default: new Date(),
  },
});

module.exports = model('todolist', TodolistSchema);
