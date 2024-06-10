import { RegisterUserService } from "../../../domain/services/login/RegisterUserService";
import { RegisterUserFormData } from "../../../types/RegisterUser.interface";

export class RegisterUserCase {
    constructor(
        private _registerUserService: RegisterUserService
    ) {}

    async execute (user: RegisterUserFormData) {
        return await this._registerUserService.registerUser(user);
    }
}