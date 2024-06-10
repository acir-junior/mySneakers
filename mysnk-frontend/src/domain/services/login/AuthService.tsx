import axios from 'axios';
import { ILoginUser } from '../../../types/LoginUser.interfaces';

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
export class AuthService {
    async login(user: ILoginUser) {
        const response = axios.post(`${BASE_URL}/api/login`, user);
        return response;
    }
}