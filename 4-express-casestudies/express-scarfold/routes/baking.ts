import { Router } from 'express';
import { BakingController } from '../controllers/BakingController';

const router = Router();
const bakingController = new BakingController();

router.post('/start', (req, res) => bakingController.startBaking(req, res));
router.get('/status/:id', (req, res) => bakingController.getStatus(req, res));

export default router;
