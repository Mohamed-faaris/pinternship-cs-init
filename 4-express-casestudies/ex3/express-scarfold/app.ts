import express, { type Request, type Response } from 'express'

import contactRouter from "./routes/contact";
import productRouter from "./routes/product";

const app = express()

app.use("/contact", contactRouter);
app.use("/product", productRouter);

export default app;