import express from 'express';
import bakingRoutes from './routes/baking';

const app = express();
app.use(express.json());

app.use('/baking', bakingRoutes);

export default app;
