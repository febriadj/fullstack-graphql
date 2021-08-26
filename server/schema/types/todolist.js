const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');

// inisialisasi tipe
module.exports = new GraphQLObjectType({
  name: 'Todolist',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    done: { type: new GraphQLNonNull(GraphQLBoolean) },
    time: { type: GraphQLString },
  }),
});
