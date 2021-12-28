import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

import { Form, Button } from 'react-bootstrap';


import * as authService from '../services/authService';

const Register = () => {

    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmitHandler = (ev) => {
        ev.preventDefault();

        let { email, password, username } = Object.fromEntries(new FormData(ev.currentTarget));

        authService.register(email, password, username)
            .then(authData => 
                {login(authData); 
                navigate('/')
            })
    }

    return (
        <section id="register" className="register">
            <h1>Registration From</h1>
            <Form onSubmit={registerSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    )
}

export default Register;