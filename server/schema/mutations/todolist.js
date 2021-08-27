const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
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
    const time = new Date();

    const todolist = new Todolist({ title, done, time });
    return todolist.save();
  },
}

exports.deleteList = {
  type: ListType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Todolist.findOneAndDelete({ _id: args.id });
  },
}
