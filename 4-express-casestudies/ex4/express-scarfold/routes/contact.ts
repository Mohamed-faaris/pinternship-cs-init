import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const contactInfo = {
        email: "me@faaris.dev",
        phone: "1231231231"
    }
    res.json(contactInfo);
});

export default router;