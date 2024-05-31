import { z } from "zod";
import { registerUserSchema } from "../ui/schemas/login/RegisterUserSchema";

export interface IRegisterUser {
    id?: number;
    name: string;
    email: string;
    emailVerifiedAt?: string; 
    password: string;
    rememberToken?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type RegisterUserFormData = z.infer<typeof registerUserSchema>

export interface IRegisterUserProps {
    onRegisterUser: (data: RegisterUserFormData) => void;
}
