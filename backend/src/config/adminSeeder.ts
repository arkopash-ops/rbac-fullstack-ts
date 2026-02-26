import UserModel from "../models/user.model";
import bcrypt from "bcryptjs";
import { Roles, BloggerStatus } from "../types/users.types";
import mongoose from "mongoose";

export const adminSeeder = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            throw new Error("Database is not connected");
        }

        const adminEmail = "admin@mail.com";

        const existingAdmin = await UserModel.findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log("Admin user already exists. Seeder skipped.");
            return;
        }

        const hashedPassword = await bcrypt.hash("admin123", 10);

        const adminUser = await UserModel.create({
            name: "admin",
            email: adminEmail,
            password: hashedPassword,
            role: Roles.ADMIN,
            bloggerStatus: BloggerStatus.NONE,
        });

        console.log("Admin user created successfully:", {
            _id: adminUser._id.toString(),
            name: adminUser.name,
            email: adminUser.email,
            role: adminUser.role,
        });
    } catch (error) {
        console.error("Error seeding admin user:", error);
    }
};
