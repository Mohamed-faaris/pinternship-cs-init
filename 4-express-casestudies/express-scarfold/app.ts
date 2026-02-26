import express from 'express';
import dischargeRoutes from './routes/discharge';

const app = express();
app.use(express.json());

app.use('/discharge', dischargeRoutes);

export default app;
