import { ILoginUser } from "../../types/LoginUser.interface";

export class LoginUser implements ILoginUser {
    constructor(
        public email: string,
        public password: string
    ) {}
}