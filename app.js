const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// mongodb+srv://admin:xx@cluster0-mqiyp.mongodb.net/test?retryWrites=true&w=majority
// mongoose.connect('urlmongodb');

// atlas db
mongoose.connect(
  'mongodb+srv://admin:xx@cluster0-mqiyp.mongodb.net/test?retryWrites=true&w=majority', {
  dbName: 'gql-ninja',
  useNewUrlParser: true
}
)
  .then(() => console.log('Mongodb Atlas connected'))
  .catch(err => console.log(err))

mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});