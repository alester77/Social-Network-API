const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const dateFormat = require('../utils/dateFormat');
const { Thought } = require('.');

const thoughtSchema = new Schema(
  {
    thoughtInput: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dateFormat(date)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [Reaction]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
    }
);
  

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;