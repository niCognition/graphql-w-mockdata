const express = require('express');
const cors = require('cors');
const app = express();
const port = 6969;
const { graphqlHTTP } = require('express-graphql');
const schema = require("./Schemas/index.js");

app.use(cors({ origin: 'http://localhost:3000', credentials: true}))
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});
