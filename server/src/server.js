import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express'

import SwaggerSpecs from './routes/swaggerJsDoc'
import router from './routes/exampleRoute'

console.log(SwaggerSpecs);

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern';
const connection = mongoose.connection;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerSpecs));
app.use('/example', router);

app.use('*', (request, response) => {
  console.log('**** Invalid request',request.method, 'at', process.env.API_URL + request.url);
  return response.sendStatus(404);
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
