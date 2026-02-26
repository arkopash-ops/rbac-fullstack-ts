import { Document, model, Schema } from "mongoose";
import { Role, User } from '../types/users.types';

export interface UserDocument extends User, Document { }

const UserSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        enum: ["admin", "blogger", "reader"] as Role[],
        default: "reader",
    }
}, { timestamps: true });

const UserModel = model<UserDocument>("User", UserSchema);

export default UserModel;
