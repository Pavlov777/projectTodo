require('dotenv').config();
const express = require('express');
const configServ = require('./config/configServ');

const app = express();

const PORT = process.env.PORT || 5000;

const apiRouter = require('./api/api.routes');
const authRouter = require('./routes/auth.route');

configServ(app);

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
