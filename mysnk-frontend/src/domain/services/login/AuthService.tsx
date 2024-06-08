import axios from 'axios';
import { ILoginUser } from '../../../types/LoginUser.interfaces';
import encryptData from '../../../helpers/Crypto';

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
export class AuthService {
    async login(user: ILoginUser) {
        console.log(encryptData(user.password));
        
        user.password = encryptData(user.password);
        const response = axios.post(`${BASE_URL}/api/login`, user);
        return response;
    }
}