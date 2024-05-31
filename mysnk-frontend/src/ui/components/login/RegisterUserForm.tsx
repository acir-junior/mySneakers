import { IRegisterUserProps, RegisterUserFormData } from "../../../types/RegisterUser.interface";
import { 
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    ThemeProvider,
    Typography,
    createTheme 
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Copyright } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "../../schemas/login/RegisterUserSchema";


export default function RegisterUserForm ({ onRegisterUser }: IRegisterUserProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterUserFormData>({
        resolver: zodResolver(registerUserSchema)
    });
    
    async function handleSubmitForm(data: RegisterUserFormData) {
        onRegisterUser(data);
    }

    return (
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs" className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Crie sua conta
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(handleSubmitForm)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="name"
                                    label="Nome completo"
                                    id="name"
                                    autoComplete="given-name"
                                    { ...register('name') }
                                    autoFocus
                                />
                                { errors.name && <span>{ errors.name.message }</span> }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="E-mail"
                                    type="email"
                                    id="email"
                                    autoComplete="email"
                                    { ...register('email') }
                                />
                                { errors.email && <span>{ errors.email.message }</span> }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    { ...register('password') }
                                />
                                { errors.password && <span>{ errors.password.message }</span> }
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Cadastre-se
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    )
}
