export interface ILoginUser {
    email: string,
    password: string
}

export interface ILoginFormProps {
    onLogin: (email: string, password: string) => void;
}