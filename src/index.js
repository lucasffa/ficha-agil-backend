const express = require('express');
const { clearExpiredTokens } = require('./app/utils/blacklist');
require('express-async-errors');
require('dotenv').config();

const routes = require('./routes');
const cors = require('cors');

// Agenda a limpeza da blacklist a cada 5 minutos
setInterval(() => {
  clearExpiredTokens();
}, 5 * 60 * 1000
);


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
