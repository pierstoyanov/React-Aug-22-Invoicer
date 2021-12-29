import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../../firebase'
import { useAuthContext } from "../../contexts/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    //get firebase Auth
    const authentication = getAuth();

    const registerSubmitHandler = (ev) => {
        ev.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(ev.target));
        console.log(email, password)
        createUserWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                //register in local storrage
                login(userCredential.user)
                
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
    }

    return (
        <Container>
        <div className="mx-auto">
            <h2>Register new User</h2>
        </div>
        <form onSubmit={registerSubmitHandler}>
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
    );
}

export default Register;
