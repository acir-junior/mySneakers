import { z } from "zod"

export const registerUserSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório'),
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido'),
    password: z.string().min(6, 'A senha precisa ter no minímo 6 caracteres')
});