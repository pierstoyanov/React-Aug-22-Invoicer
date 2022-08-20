//import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
//import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import LoginButton from './LoginButton';
import BoxStyled from './profileForm.styles';

const ProfileForm = ({ title, setEmail, setPassword, handleAction: HandleUserEntry }) => {

  return (
    <><div className="heading-container">
      <h3>
        {title} Page
      </h3>
    </div>
    <Box 
      sx={{ '& > :not(style)': { m: 1, display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignmentItems: "center"} }}>
    {/* //<BoxStyled> */}
        <FormControl variant="outlined">
          <InputLabel htmlFor="email">Username</InputLabel>
          <Input id="email"
            startAdornment={<InputAdornment position="start">
              <AccountCircle />
              </InputAdornment>}
            placeholder="Please enter your email or username"
            onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>

        <FormControl variant='outlined'>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password"
            startAdornment={<InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>} 
            placeholder="Please enter your password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </FormControl>

        <LoginButton title={title} handleAction={HandleUserEntry} />
      {/* //</BoxStyled> */}
      </Box>
      </>
  );
}

export default ProfileForm;
