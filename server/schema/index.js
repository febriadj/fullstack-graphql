const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { addList } = require('./mutations/todolist');
const { getAllList } = require('./queries/todolist');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addList,
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    getAllList,
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
