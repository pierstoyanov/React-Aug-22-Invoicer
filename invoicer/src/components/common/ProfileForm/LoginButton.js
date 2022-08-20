// import * as React from 'react';
import Button from '@mui/material/Button';

export default function LoginButton({title, handleAction: handleUserEntry}) {
    
    
    return (
        <Button 
            variant="contained" 
            color="secondary"
            onClick={handleUserEntry}
        >
            {title}
        </Button>
    );
}
