import { z } from "zod";
import { loginSchema } from "../ui/schemas/login/LoginSchema";

export interface ILoginUser {
    email: string,
    password: string
}

export type LoginFormData = z.infer<typeof loginSchema> 

export interface ILoginFormProps {
    onLogin: (data: LoginFormData) => void;
}