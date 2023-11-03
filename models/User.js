const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'You need to provide a username!',
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: 'You need to provide an email address!',
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
    },
    {
      toJSON: {
        virtuals: true
      },
      id: false
    }
);

const User = model('User', userSchema);
module.exports = User;