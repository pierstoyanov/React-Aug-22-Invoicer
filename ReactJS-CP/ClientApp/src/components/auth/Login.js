import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';

import { useAuthContext } from "../../contexts/AuthContext";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const onLoginHandler = (ev) => {
        ev.preventDefault();

        const authentication = getAuth();

        let { email, password } = Object.fromEntries(new FormData(ev.currentTarget));

        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                login(userCredential.user);

                navigate('/');
            })
            .catch(error => {
                const errorMessage = error.message;
                const errorCode = error.code;
            })
    }

    return (
        <Container>
        <div className="mx-auto">
            <h2>Login</h2>
        </div>
        <form onSubmit={onLoginHandler}>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </Container>
    )

}

export default Login;