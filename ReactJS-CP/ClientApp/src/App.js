import { Route, Routes } from 'react-router';

import { AuthProvider } from './contexts/AuthContext';

import 'bootstrap/dist/css/bootstrap.css';
import './custom.css'

//import GuardedRoute from './components/Common/GuardedRoute'
import Home from './components/Home';
import Navigation from './components/Navigation';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

import Invoices from './components/Invoices'
import InvoiceDetails from './components/InvoiceDetails';

//Firebase
//import app from './firebase'


function App() {
    return (
        <AuthProvider>
            <Navigation />

            <main id="site-content">
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />

                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/invoice/:invoiceId" element={<InvoiceDetails />} />
                    TODO
                    {/* <Route path="/companies" element={<Invoices />} />
                    <Route path="/materials" element={<Invoices />} /> */}
                    {/* <Route path="/invoice/:invoiceID" element={<InvoiceDetails />} />

                    <Route path="/user-details" element={<PrivateRoute><UserDetails /></PrivateRoute>} />

                    <Route element={<GuardedRoute />}>
                        <Route path="/invoice-c" element={<CreateInvoice />} />
                        <Route path="/invoice-u/:invoiceId" element={<EditInvoice />} />


                        <Route path="/accountant-c" element={<CreateAccountant />} />
                        <Route path="/accountant-u/:invoiceId" element={<EditAccountant />} />


                        <Route path="/company-c" element={<CreateCompany />} />
                        <Route path="/company-u/:invoiceId" element={<EditCompany />} />

                    </Route> */}
                </Routes>
            </main>
        </AuthProvider>
    );
}

export default App;
