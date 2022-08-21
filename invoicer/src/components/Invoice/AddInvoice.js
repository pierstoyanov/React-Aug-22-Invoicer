import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Contexts/UserAuthContext";
import logo from '../../logo.svg'

import { db } from "../../Config/firebase.config";
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Box, Button, TextField } from "@mui/material";

const AddInvoice = () => {
  const { logOut } = useUserAuth();
  let navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   // try {
  //   //   await addDoc(collection(db, 'invoices'), {
  //   //     reseiver: receiver,
  //   //     issuer: issuer,
  //   //     item: item,
  //   //     price: price
  //   //   })
  //   //   // onClose()
  //   // } catch (err) {
  //   //   alert(err)
  //   }
  // }

  return (
    <>    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="reseiver"
          label="reseiver"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="issuer"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
      {/* <Button onClick={handleSubmit} variant="contained" color="success">
        Submit
      </Button> */}
    </Box>
    </>

  );
}


export default AddInvoice;
