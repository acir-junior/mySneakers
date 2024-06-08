import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { ISnackBar } from "../../../types/SnackBar.interface";
import { useNavigate } from "react-router-dom";

export default function SnackBar({ visible, message, navigateTo }: ISnackBar) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState({ visible: false, message: '' });
    
    const closeSnack = () => {
        setOpen({ ...open, visible: false });
        
        if (navigateTo) {
            navigate(navigateTo);
        }
    }

    return (
        <Snackbar open={visible} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert
                onClose={closeSnack}
                variant="filled"
                sx={{ width: '100%' }}
            >
                { message }
            </Alert>
        </Snackbar>
    )
}
