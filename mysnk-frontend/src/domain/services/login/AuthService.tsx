import { ILoginUser } from '../../../types/LoginUser.interfaces'

export class AuthService {
    async login(user: ILoginUser) {
        return user
    }
}