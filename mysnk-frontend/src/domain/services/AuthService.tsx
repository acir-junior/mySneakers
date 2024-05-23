import { ILoginUser } from '../../types/LoginUser.interface'

export class AuthService {
    async login(user: ILoginUser) {
        return user
    }
}