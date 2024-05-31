import { RegisterUserService } from "../../../domain/services/login/RegisterUserService";
import { IRegisterUser } from "../../../types/RegisterUser.interface";

export class RegisterUserCase {
    constructor(
        private _registerUserService: RegisterUserService
    ) {}

    async execute (user: IRegisterUser) {
        return await this._registerUserService.registerUser(user);
    }
}