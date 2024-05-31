// import { RegisterUserCase } from "../../../app/usecases/login/RegisterUserCase";
import { RegisterUserService } from "../../../domain/services/login/RegisterUserService";
import { RegisterUserFormData } from "../../../types/RegisterUser.interface";
// import { IRegisterUser } from "../../../types/RegisterUser.interface";
// import { RegisterUser } from "../../../domain/entities/login/RegisterUser";
import RegisterUserForm from "../../components/login/RegisterUserForm";
import SnackBar from "../../components/utils/Feedback";

const registerUserService = new RegisterUserService();
// const registerUserCase = new RegisterUserCase(registerUserService);

export default function RegisterUserPage() {
    async function handleRegisterUser(data: RegisterUserFormData) {
        try {
            console.log(registerUserService, data);
            
            // const registerUser: IRegisterUser = new RegisterUser(name, email, password);
            // const isRegisterUser = await registerUserCase.execute(registerUser);

            <SnackBar visible={true} message={'isRegisterUser.data.message'} navigateTo="login" />
        } catch (error) {
            // console.log(error.response.data.message);
        
            // <SnackBar open={true} />
            // console.error(error);
        }
    }
    return <RegisterUserForm onRegisterUser={handleRegisterUser} />;
}
