import express from "express";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import authRoute from "./routes/auth.routes"

const app = express();

// middleware
app.use(loggerMiddleware);
app.use(express.json());

// routes
app.use("/api/auth/", authRoute);

// Error Middleware
app.use(errorMiddleware);

export default app;
