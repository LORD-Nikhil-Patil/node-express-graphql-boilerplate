const {Todo, User} = require('../models/index');

const resolvers = {
  // Query Resolvers
  Query: {
  getTodo: async (_, { id }) => {
    try {
      const todo = await Todo.findById(id).populate('user');
      return todo;
    } catch (err) {
      throw new Error('Error retrieving todo');
    }
  },
  getTodos: async () => {
    try {
      const todos = await Todo.find().populate('user');
      return todos;
    } catch (err) {
      throw new Error('Error retrieving todos');
    }
  },
},

  // Mutation Resolvers
  Mutation : {
  createTodo: async (_, { title, description, status, dueDate, userId }) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const todo = new Todo({
        title,
        description,
        status,
        dueDate,
        user: userId,
      });

      await todo.save();
      return todo.populate('user');
    } catch (err) {
      throw new Error(err);
    }
  },
  updateTodo: async (_, { id, title, description, status, dueDate }) => {
    try {
      const todo = await Todo.findByIdAndUpdate(
        id,
        { title, description, status, dueDate },
        { new: true }
      ).populate('user');
      return todo;
    } catch (err) {
      throw new Error('Error updating todo');
    }
  },
  deleteTodo: async (_, { id }) => {
    try {
      const todo = await Todo.findByIdAndRemove(id).populate('user');
      return todo;
    } catch (err) {
      throw new Error('Error deleting todo');
    }
  },
},
};

module.exports = resolvers;
