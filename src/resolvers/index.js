const { mergeResolvers } = require('@graphql-tools/merge');
const todoResolver = require('./todo.resolver');

const resolvers = mergeResolvers([todoResolver]);

module.exports = resolvers;
