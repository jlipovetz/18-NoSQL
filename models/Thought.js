const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLentgh: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username:
    {
      type: Schema.Types.String,
      ref: 'user',
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getter: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;