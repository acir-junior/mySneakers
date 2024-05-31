import { AuthService } from "../../../domain/services/login/AuthService";
import { ILoginUser } from "../../../types/LoginUser.interfaces";

export class LoginUserCase {
    constructor(
        private _authService: AuthService
    ) {}

    async execute(user: ILoginUser) {
        return await this._authService.login(user);
    }
}