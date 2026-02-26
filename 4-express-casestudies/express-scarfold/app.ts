import express, { type Request, type Response } from 'express'

import contactRouter from "./routes/contact";
import productRouter from "./routes/product";
import pointsRouter from "./routes/points";

const app = express()

app.use("/contact", contactRouter);
app.use("/product", productRouter); 
app.use("/points", pointsRouter);

export default app;