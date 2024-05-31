import axios from "axios";
import { IRegisterUser } from "../../../types/RegisterUser.interface";
import bcrypt from 'bcryptjs-react';

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export class RegisterUserService {

    async registerUser(user: IRegisterUser) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(user.password, salt);
        user.password = hashPassword;
        
        const response = axios.post(`${BASE_URL}/api/register`, user);
        return response;
    }
}