import { useState } from "react";
import { LoginUserCase } from "../../../app/usecases/login/LoginUserCase";
import { LoginUser } from "../../../domain/entities/login/LoginUser";
import { AuthService } from "../../../domain/services/login/AuthService"
import { ILoginUser, LoginFormData } from "../../../types/LoginUser.interfaces";
import LoginForm from "../../components/login/LoginForm"
import SnackBar from "../../components/utils/Feedback";

const authService = new AuthService();
const loginUserCase = new LoginUserCase(authService);

export default function LoginPage() {
    const [snackBar, setSnackbar] = useState({ visible: false, message: '', navigateTo: ''});

    async function handleLogin(data: LoginFormData) {
        try {
            const loginUser: ILoginUser = new LoginUser(data.email, data.password);
            const isLogin = await loginUserCase.execute(loginUser);
            
            return isLogin;
        } catch (error) {
            console.error(error);
            setSnackbar({
                visible: true,
                message: 'error.response.data.message',
                navigateTo: ''
            });
        }
    }
    return (
        <>
            { snackBar.visible && <SnackBar visible={true} message={snackBar.message} navigateTo={snackBar.navigateTo} /> }
            <LoginForm onLogin={handleLogin}/>;
        </>
    )
}
