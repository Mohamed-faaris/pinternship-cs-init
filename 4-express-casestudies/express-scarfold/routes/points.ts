import { Router } from "express";
import { type Request, type Response } from "express";
import { z } from "zod";

class ApiError extends Error {
    constructor(
        public statusCode: number,
        message: string,
        public details?: any
    ) {
        super(message);
    }
}


const router = Router();
type Customer = {
    customerId: string;
    points: number;
};

let customers: Customer[] = [
    { customerId: "123e4567-e89b-12d3-a456-426614174000", points: 100 },
    { customerId: "123e4567-e89b-12d3-a456-426614174001", points: 200 },
];

const TransferSchema = z.object({
    fromCustomerId: z.uuid(),
    toCustomerId: z.uuid(),
    points: z.number().positive(),
});

router.post("/transfer", (req: Request, res: Response) => {
    try {
       const { fromCustomerId, toCustomerId, points } =
            TransferSchema.parse(req.body);

        const sender = customers.find(
            (c) => c.customerId === fromCustomerId
        );
        if (!sender) {
            throw new ApiError(404, "Sender not found");
        }

        const receiver = customers.find(
            (c) => c.customerId === toCustomerId
        );
        if (!receiver) {
            throw new ApiError(404, "Receiver not found");}

        if (sender.points < points) {
            throw new ApiError(400, "Sender has insufficient points");}

        // Perform transfer
        sender.points -= points;
        receiver.points += points;

        return res.json({
            status: "success",
            data: {
                transferred: points,
                senderRemaining: sender.points,
            },
        });

    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: "Invalid request data", details: error.errors });
        }
        return res.status(400).json({ error: "Invalid request data" });
    }
});

export default router;

