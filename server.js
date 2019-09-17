
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from'morgan';


require('dotenv').config();
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('connected'))
  .catch((error)=> console.log(error));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.API_PORT, () => console.log(`Express server listening on port ${process.env.API_PORT}!`))
