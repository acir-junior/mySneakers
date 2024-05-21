import { AuthService } from "../../domain/services/AuthService";
import { ILoginUser } from "../../types/LoginUser.interface";

export class LoginUserCase {
    constructor(
        private _authService: AuthService
    ) {}

    async execute(user: ILoginUser) {
        return await this._authService.login(user);
    }
}