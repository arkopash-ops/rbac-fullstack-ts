import bcrypt from "bcryptjs";
import UserModel from "../models/user.model";
import { generateToken } from "../config/jwt";
import { BloggerStatus, Roles } from "../types/users.types";

interface IUser {
    name: string;
    email: string;
    password: string;
}

interface UserWithoutPassword {
    _id: string;
    name: string;
    email: string;
    role: Roles;
    bloggerStatus: BloggerStatus;
}


export const register = async (
    data: IUser
): Promise<{
    user: UserWithoutPassword;
    token: string
}> => {

    const userExist = await UserModel.findOne({ email: data.email });
    if (userExist) {
        throw {
            statusCode: 400,
            message: "Email already Registered!",
        }
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await UserModel.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: Roles.READER,
        bloggerStatus: BloggerStatus.NONE,
    });

    return {
        user: {
            _id: newUser._id.toString(),
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            bloggerStatus: newUser.bloggerStatus,
        },
        token: generateToken(newUser._id.toString()),
    };

};

export const login = async (
    data: {
        email: string,
        password: string,
    }
): Promise<{
    user: UserWithoutPassword;
    token: string
}> => {
    const user = await UserModel.findOne({ email: data.email }).select("+password");
    if (!user) {
        throw {
            statusCode: 400,
            message: "Invalid Credentials!",
        }
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
        throw {
            statusCode: 400,
            message: "Invalid Credentials!",
        }
    }

    return {
        user: {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            bloggerStatus: user.bloggerStatus,
        },
        token: generateToken(user._id.toString()),
    };

};
