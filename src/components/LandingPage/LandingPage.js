import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Contexts/UserAuthContext";
import logo from '../../logo.svg'

import { db } from "../../Config/firebase.config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { Box, Button, TextField } from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = () => {
  let navigate = useNavigate();

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'invoices'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {

        console.log(querySnapshot)
      setInvoices(querySnapshot.docs.map(doc => ({
        id: doc.id,
        key: doc.id,
        data: doc.data()
        
      })))
        //console.log(invoices)
    })
  },[])

  return (
    <>
    {invoices.map((i) => (
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
            id={i.id}
            key={i.key}
            value={i.id}
            />

        </div>
        <div>
            <TextField
            id={i.id}
            key={i.key}
            label="Reseiver"
            value={i.data.reseiver}
            />
            <TextField
            id={i.id}
            key={i.key}
            label="Issuer"
            value={i.data.issuer}
            />
        </div>
        <div>
            <TextField
            id={i.id}
            key={i.key}
            label="item"
            value={i.data.item}
            />
            <TextField
            id={i.id}
            key={i.key}
            label="Price"
            value={i.data.price}
            />
        </div>
        </Box>
    ))}  
    </>
  )
}


export default LandingPage;
