const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/index');
const dbConnect = require('./dbConnect');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
dbConnect();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(port);
console.log(`Server running on port ${port}`);
