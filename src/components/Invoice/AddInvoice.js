import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Contexts/UserAuthContext";
import logo from '../../logo.svg'

import { db } from "../../Config/firebase.config";
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Box, Button, TextField, OutlinedInput } from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddInvoice = () => {
  const { logOut } = useUserAuth();
  let navigate = useNavigate();

  const [reseiver, setReseiver] = useState('')
  const [issuer, setIssuer] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');


  const handleSubmit = async (event) => {
    console.log('clicked')
    try {
      await addDoc(collection(db, 'invoices'), {
        reseiver: reseiver,
        issuer: issuer,
        item: item,
        price: price,
        created: Timestamp.now()        
      })
      onClose()
    } catch (err) {
      toast.error(err.code, {position: toast.POSITION.BOTTOM_RIGHT})
    }
  }

  const onClose = () => {
    console.log('success')
    toast.success('Successfully Added', {position: toast.POSITION.BOTTOM_RIGHT})
  }

  return (
    <>    
    <OutlinedInput 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="reseiver"
          label="Reseiver"
          value={reseiver}
          onChange={(e) => {setReseiver(e.target.value);}}
          placeholder="input Reseiver"
        />
        <TextField
          id="issuer"
          label="Issuer"
          value={issuer}
          onChange={(e) => {setIssuer(e.target.value);}}
          placeholder="input Issuer"
        />
      </div>
      <div>
        <TextField
          id="item"
          label="item"
          value={item}
          onChange={(e) => {setItem(e.target.value);}}
          placeholder="input Item"
        />
        <TextField
          id="price"
          label="Price"
          value={price}
          onChange={(e) => {setPrice(e.target.value);}}
          placeholder="input Price"
        />
      </div>
      <Button onClick={handleSubmit} variant="contained" color="success">
        Submit
      </Button>
    </OutlinedInput >
    </>

  );
}


export default AddInvoice;
