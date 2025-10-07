import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';

const app = express();
app.use(bodyParser.json());
dotenv.config();

const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log('DB connected');
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((error) => {
    console.log('Error');
  });

app.use('/api', userRoute);
