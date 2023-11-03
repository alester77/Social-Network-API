const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// This is the reactionSchema that will be used as a subdocument to the thoughtSchema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dateFormat(date)
    },
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

// This is the thoughtSchema that will now include the reactionSchema as a subdocument
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
    // Include reactionSchema as an array indicating there can be many reactions
    reactions: [reactionSchema]
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