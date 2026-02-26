<<<<<<< Updated upstream
import express, { type Request, type Response } from 'express'


=======
import express from 'express';
import { BakingController } from './src/controllers/BakingController';

const app = express();
app.use(express.json());

const bakingController = new BakingController();

app.post('/baking/start', (req, res) => bakingController.startBaking(req, res));
app.get('/baking/status/:id', (req, res) => bakingController.getStatus(req, res));
>>>>>>> Stashed changes

const app = express()


export default app;