const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Todo {
    id: ID!
    title: String!
    description: String
    status: String!
    dueDate: String!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getTodo(id: ID!): Todo
    getTodos: [Todo]
  }

  type Mutation {
    createTodo(title: String!, description: String, status: String!, dueDate: String!, userId: ID!): Todo
    updateTodo(id: ID!, title: String, description: String, status: String, dueDate: String): Todo
    deleteTodo(id: ID!): Todo
  }
`);

module.exports = schema;
