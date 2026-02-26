import { Router, type NextFunction, type Request, type Response } from 'express';

const router = Router();

function insuranceApprovalCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.body.insuranceApproved) {
    return res.status(403).json({ error: 'Insurance approval required for discharge.' });
  }
  next();
}

router.post('/discharge', insuranceApprovalCheck, (req: Request, res: Response) => {
  res.json({ status: 'Discharge complete', patient: req.body.patientName });
});

export default router;
