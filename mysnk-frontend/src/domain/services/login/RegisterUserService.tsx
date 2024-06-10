import axios from "axios";
import { RegisterUserFormData } from "../../../types/RegisterUser.interface";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export class RegisterUserService {

    async registerUser(user: RegisterUserFormData) {
        const response = axios.post(`${BASE_URL}/api/register`, user);
        return response;
    }
}