import express, { type Request, type Response } from 'express'

import contactRouter from "./routes/contact";

const app = express()

app.use("/contact", contactRouter);

export default app;