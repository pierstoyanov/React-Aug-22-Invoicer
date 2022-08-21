import React, { useState } from "react";

//@MUI
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
//import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import AccountCircle from '@mui/icons-material/AccountCircle';
//components
import LoginButton from './LoginButton';
//import BoxStyled from './profileForm.styles';

//
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../Contexts/UserAuthContext";
import { IconButton } from "@mui/material";

// Messages
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mapAuthCodeToMessage } from "./authErrorMessages";

import { titleColor, btnColor } from "./profileForm.styles";

const ProfileForm = ({ title, action }) => {
  //actions: login, register 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signUp, logIn } = useUserAuth();
  let navigate = useNavigate();

  const [passVisibility, setPassVisibility] = React.useState({
    pass: "",
    showPassword: false,
  });


  const handleUserEntry = async (e) => {
    setError('');

    //login
    if (action === 'login') {
      try {
        const responce = await logIn(email, password);
        toast.success('Logged in successfully', {position: toast.POSITION.BOTTOM_RIGHT})
        navigate("/Homepage");
      } catch (err) {
        if (err !== '') {
          toast.error(mapAuthCodeToMessage(err.code), {position: toast.POSITION.BOTTOM_RIGHT})
          setError(mapAuthCodeToMessage(err.code))
        }
      }
    }

    //register
    if (action === 'register') {
      try {
        await signUp(email, password);
        toast.success('Registered successfully', {position: toast.POSITION.BOTTOM_RIGHT})
        navigate("/Homepage");
      } catch (err) {
        if (err !== '') {
          toast.error(mapAuthCodeToMessage(err.code), {position: toast.POSITION.BOTTOM_RIGHT})
          setError(mapAuthCodeToMessage(err.code))
        }
      }
    }

  };

  const handleClickShowHidePassword = () => {
    setPassVisibility({ ...passVisibility, showPassword: !passVisibility.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (ev) => {
   // console.log(ev.target.value);
    setPassword(ev.target.value);
    setPassVisibility({ ...passVisibility, [prop]: ev.target.value });
  };

  return (
    <>
    <div className="heading-container">
      <h3 textcolor={btnColor(action)}>
        {title} Page
      </h3>
    </div>
    <Box sx={{ '& > :not(style)': { 
      m: 1, 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignmentItems: "center"} }}>
    {/* //<BoxStyled> */}
      {error && <Alert variant="danger">{error}</Alert>}
        <FormControl variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            required={ true }
            startAdornment={<InputAdornment position="start">
              <AccountCircle />
              </InputAdornment>}
            placeholder="Please enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl variant='outlined'>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input 
            id="password"
            onChange={handlePasswordChange('password')}
            type={passVisibility.showPassword ? "text" : "password"}
            placeholder="Please enter your password"
            required={ true }
            startAdornment={<InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowHidePassword}
                  onMouseDown={handleMouseDownPassword}
                  >
                  {passVisibility.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} 
                </IconButton>
              </InputAdornment>
            }
            />
        </FormControl>

        <LoginButton title={title} action={action} handleUserEntry={handleUserEntry} />
      {/* //</BoxStyled> */}
      </Box>
      </>
  );
}

export default ProfileForm;
