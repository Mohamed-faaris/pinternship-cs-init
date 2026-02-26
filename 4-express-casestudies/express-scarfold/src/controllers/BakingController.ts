import { Request, Response } from 'express';

interface BakingOrder {
  id: string;
  orderId: string;
  flavor: string;
  quantity: number;
  status: 'pending' | 'baking' | 'ready' | 'completed';
  startedAt?: string;
}

const bakingOrders: BakingOrder[] = [];

export class BakingController {
  startBaking(req: Request, res: Response): void {
    const { orderId, flavor, quantity } = req.body;

    if (!orderId || !flavor || !quantity) {
      res.status(400).json({
        status: 'error',
        error: 'Missing required fields: orderId, flavor, quantity',
      });
      return;
    }

    const newBakingOrder: BakingOrder = {
      id: (bakingOrders.length + 1).toString(),
      orderId,
      flavor,
      quantity,
      status: 'baking',
      startedAt: new Date().toISOString(),
    };

    bakingOrders.push(newBakingOrder);
    res.status(201).json({ status: 'success', data: newBakingOrder });
  }

  getStatus(req: Request, res: Response): void {
    const { id } = req.params;
    const bakingOrder = bakingOrders.find(o => o.id === id);

    if (!bakingOrder) {
      res.status(404).json({ status: 'error', error: 'Baking order not found' });
      return;
    }

    res.json({ status: 'success', data: bakingOrder });
  }
}
