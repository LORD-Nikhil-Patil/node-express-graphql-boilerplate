const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
    dueDate: {
      type: Date,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
todoSchema.plugin(toJSON);
todoSchema.plugin(paginate);

/**
 * @typedef Todo
 */
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;