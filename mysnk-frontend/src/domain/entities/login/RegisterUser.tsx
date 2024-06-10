import { IRegisterUser } from "../../../types/RegisterUser.interface";

export class RegisterUser implements IRegisterUser {
    constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {}
}