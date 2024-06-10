import { ILoginUser } from "../../../types/LoginUser.interfaces";

export class LoginUser implements ILoginUser {
    constructor(
        public email: string,
        public password: string
    ) {}
}