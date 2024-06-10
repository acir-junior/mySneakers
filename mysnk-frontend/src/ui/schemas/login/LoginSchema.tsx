import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido'),
    password: z.string().min(6, 'A senha precisa ter no minímo 6 caracteres')
});