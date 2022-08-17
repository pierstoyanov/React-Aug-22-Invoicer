//import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
//import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import LoginButton from './LoginButton';

const LoginForm = () => {
  return (
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="center" 
      alignmentItems="center"
      sx={{ '& > :not(style)': { m: 1 } }}>
      
      <FormControl variant="outlined">
        <InputLabel htmlFor="username-input">Username</InputLabel>
        <Input id="username-input"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl variant='outlined'>
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="password-input"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

      <LoginButton />
    </Box>
  );
}

export default LoginForm;
