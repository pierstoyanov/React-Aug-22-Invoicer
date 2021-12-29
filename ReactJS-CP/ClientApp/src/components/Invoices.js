import { useState, useEffect } from 'react';

import { collection, getDocs } from "firebase/database";
import { getFirestore } from 'firebase/firestore';

import { Container } from 'react-bootstrap';

import InvoicesList from './InvoicesList'

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        const getData = async () => {
            const invoicesData = await getDocs(collection(db, "invoices"));
            console.log(invoicesData);

            setInvoices(invoicesData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
    
        getData();
    }, []);

    return (

        <Container>
        <section id="dashboard-page" className="invoices">
            <h1>Invoices</h1>

            <section>
                <InvoicesList invoices={invoices} />
            </section>
        </section>
        </Container>
        
    );

}

export default Invoices;