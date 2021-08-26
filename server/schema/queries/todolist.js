const { GraphQLList } = require('graphql');
const ListType = require('../types/todolist');
const Todolist = require('../../models/todolist');

exports.getAllList = {
  /*
    Gunakan GraphQLList
    jika ingin mengambil data dalam bentuk array
  */
  type: new GraphQLList(ListType),
  resolve() {
    return Todolist.find().sort({ time: -1 });
  },
}
