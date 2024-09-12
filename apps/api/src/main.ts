import express from 'express';
import templateController from '../modules/template/handler';
import { errorHandler } from '../middleware/errorHandler';
import morgan from 'morgan';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// log requests
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/api', templateController);

// // Error Handling Middleware
app.use(errorHandler);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
