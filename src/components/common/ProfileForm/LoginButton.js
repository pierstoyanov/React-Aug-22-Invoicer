// import * as React from 'react';
import Button from '@mui/material/Button';
import { btnColor } from './profileForm.styles';


export default function LoginButton({ title, action, handleUserEntry }) {
    
    return (
        <Button 
            color={btnColor(action)} 
            variant="contained"
            onClick={handleUserEntry}
        >
            {title}

        </Button>
    );
}
