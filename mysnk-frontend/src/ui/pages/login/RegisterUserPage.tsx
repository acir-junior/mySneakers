import { RegisterUserCase } from "../../../app/usecases/login/RegisterUserCase";
import { RegisterUserService } from "../../../domain/services/login/RegisterUserService";
import { RegisterUserFormData } from "../../../types/RegisterUser.interface";
import { RegisterUser } from "../../../domain/entities/login/RegisterUser";
import RegisterUserForm from "../../components/login/RegisterUserForm";
import { useState } from "react";
import SnackBar from "../../components/utils/Feedback";

const registerUserService = new RegisterUserService();
const registerUserCase = new RegisterUserCase(registerUserService);

export default function RegisterUserPage() {
    const [snackBar, setSnackbar] = useState({ visible: false, message: '', navigateTo: ''});

    async function handleRegisterUser(data: RegisterUserFormData) {
        try {
            const registerUser = new RegisterUser(data.name, data.email, data.password);
            const isRegisterUser = await registerUserCase.execute(registerUser);
            setSnackbar({ 
                visible: true,
                message: isRegisterUser.data.message,
                navigateTo: '/login'
            });
        } catch (error) {
            setSnackbar({ 
                visible: true,
                message: error.response.data.message,
                navigateTo: ''
            });
        }
    }
    return (
        <>
            { snackBar.visible && <SnackBar visible={true} message={snackBar.message} navigateTo={snackBar.navigateTo} /> }
            <RegisterUserForm onRegisterUser={handleRegisterUser} />
        </>
    );
}
