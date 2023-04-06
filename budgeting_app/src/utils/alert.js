import React, {useEffect, useState} from "react";
import {Alert, Collapse, IconButton} from "@mui/material";

const CustomAlert = ({ message, effectOpen, setMessage, setEffectOpen}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(effectOpen) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
                setMessage('')
                setEffectOpen(false)
            }, 5000);
        }
    }, [effectOpen]);

    return (
        <Collapse in={open}>
            <Alert
                sx={{ mb: 2 }}
            >
                {message}
            </Alert>
        </Collapse>
    );
};

export default CustomAlert;

