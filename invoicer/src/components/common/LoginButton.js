// import * as React from 'react';
import Button from '@mui/material/Button';

export default function LoginButton({title, handleAction}) {
    return (
        <Button 
            variant="contained" 
            color="secondary"
            onClick={handleAction}
        >
            {title}
        </Button>
    );
}
