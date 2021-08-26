const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/index');
const dbConnect = require('./dbConnect');

const app = express();
const port = process.env.PORT || 8000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

dbConnect();

app.listen(port);
console.log(`Server running on port ${port}`);
