const express = require('express');
require('express-async-errors');
require('dotenv').config();

const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((error, request, response, next) => {
  console.log('#### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(8000, () =>
  console.log('🔥 Server started at http://localhost:8000')
);
