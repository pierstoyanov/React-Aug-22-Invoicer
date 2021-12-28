import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";

import * as authService from '../services/authService';


const Login = () => {

    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (ev) => {
        ev.preventDefault();

        let { email, pass } = Object.fromEntries(new FormData(ev.currentTarget));

        authService.login(email, pass)
            .then((authData) => {
                login(authData);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <section id="Login" className="Login">
            <h1>Login</h1>
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    )

}

export default Login;