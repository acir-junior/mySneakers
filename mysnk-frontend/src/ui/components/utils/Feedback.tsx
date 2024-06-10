import { IconButton, Snackbar } from "@mui/material";
import React from "react";
import { ISnackBar } from "../../../types/SnackBar.interface";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

export default function SnackBar({ visible, message, navigateTo }: ISnackBar) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState({ visible: false, message: '' });

    const closeSnack = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
        setOpen(open);
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeSnack}
            >
                <Close fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            open={visible}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            message={message}
            onClose={closeSnack}
            action={action}
        />
    )
}
