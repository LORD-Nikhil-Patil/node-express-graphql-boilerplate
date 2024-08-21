const { mergeTypeDefs } = require('@graphql-tools/merge');
const todoSchema = require('./todo.shema');

/**
 * This file merges all GraphQL type definitions into one.
 * It exports a single typeDef that can be used to create
 * a GraphQL schema.
 *
 * @module shemas/index
 */

const typeDefs = mergeTypeDefs([
  todoSchema
]);


module.exports = typeDefs;

