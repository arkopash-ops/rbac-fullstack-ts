export type Role = "admin" | "blogger" | "reader";

export interface User {
    name: string;
    email: string;
    password: string;
    role: Role;
}
