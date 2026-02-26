export enum Roles {
    ADMIN = "admin",
    BLOGGER = "blogger",
    READER = "reader",
}

export enum BloggerStatus {
    NONE = "none",
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected",
}
export interface User {
    name: string;
    email: string;
    password: string;
    role: Roles;
    bloggerStatus: BloggerStatus;
}
