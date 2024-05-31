import { LoginUserCase } from "../../../app/usecases/login/LoginUserCase";
import { LoginUser } from "../../../domain/entities/login/LoginUser";
import { AuthService } from "../../../domain/services/login/AuthService"
import { ILoginUser } from "../../../types/LoginUser.interfaces";
import LoginForm from "../../components/login/LoginForm"

const authService = new AuthService();
const loginUserCase = new LoginUserCase(authService);

const LoginPage: React.FC = () => {
    const handleLogin = async (email: string, password: string) => {
        const loginUser: ILoginUser = new LoginUser(email, password);
        const isLogin = await loginUserCase.execute(loginUser);

        return isLogin;
    }
    return <LoginForm onLogin={handleLogin}/>;
}

export default LoginPage;