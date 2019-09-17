
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from'morgan';
require('dotenv').config();

import models, { connectDb } from './models';

const app = express();
app.use(cors());

connectDb().then(async ()=> {
  console.log('db connected')
  app.listen(process.env.API_PORT, () => console.log(`Express server listening on port ${process.env.API_PORT}!`))
})
  .catch((error)=> console.log(error));

app.get('/', (req, res) => res.send('Hello World!'))

