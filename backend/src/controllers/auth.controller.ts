import { Request, Response, NextFunction } from 'express';
import * as authService from "../services/auth.service"

export const _register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, email, password } = req.body;
        const register = await authService.register({ name, email, password });
        res
            .status(201)
            .json({
                success: true,
                message: "User Registered Successfully.",
                user: register.user,
                token: register.token,
            });
    } catch (error: any) {
        next(error);
    }
};

export const _login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;
        const login = await authService.login({ email, password });
        res
            .status(201)
            .json({
                success: true,
                message: "User Logged in Successfully.",
                user: login.user,
                token: login.token,
            });
    } catch (error: any) {
        next(error);
    }
};
