import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";
import { adminSeeder } from "./config/adminSeeder.js";

const startServer = async () => {
    try {
        await connectDB();
        console.log("DB Connected.");

        await adminSeeder();

        const PORT = Number(process.env.PORT) || 8081;

        app.listen(PORT, () => {
            console.log(`Server is running on PORT no - ${PORT}`)
        });
    } catch (error) {
        console.error("Server failed to start:", error);
        process.exit(1);
    }
}

startServer();
