const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const ListType = require('../types/todolist');
const Todolist = require('../../models/todolist');

exports.addList = {
  type: ListType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    done: { type: GraphQLBoolean },
  },
  resolve(parent, args) {
    const { title, done } = args;

    const todolist = new Todolist({ title, done });
    return todolist.save();
  },
}
