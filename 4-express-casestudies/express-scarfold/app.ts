import express, { application } from 'express';
import ApplicationRouter from './routes/application';

const app = express();
app.use(express.json());

app.use('/application', ApplicationRouter);

export default app;
