const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { addList, deleteList } = require('./mutations/todolist');
const { getAllList } = require('./queries/todolist');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addList, deleteList,
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
