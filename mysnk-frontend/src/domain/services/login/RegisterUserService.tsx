import axios from "axios";
import { RegisterUserFormData } from "../../../types/RegisterUser.interface";
import encryptData from "../../../helpers/Crypto";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export class RegisterUserService {

    async registerUser(user: RegisterUserFormData) {
        user.password = encryptData(user.password);
        const response = axios.post(`${BASE_URL}/api/register`, user);
        return response;
    }
}