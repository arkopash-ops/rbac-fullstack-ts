import express from "express";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

// middleware
app.use(loggerMiddleware);
app.use(express.json());

// routes


// Error Middleware
app.use(errorMiddleware);

export default app;
