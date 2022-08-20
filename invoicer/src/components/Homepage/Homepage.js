import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Contexts/UserAuthContext";
import logo from '../../logo.svg'

const Homepage = () => {
    const { logOut } = useUserAuth();
    let navigate = useNavigate();
    // useEffect(() => {
    //     let authToken = sessionStorage.getItem('Auth Token');

    //     if (!authToken)
    //     {
    //         navigate('/Login');
    //     }
    //     if (authToken) {
    //         navigate('/Homepage');
    //     }
    // }, [])

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
    
      };

    return (
        <div>
            User Homepage
            <button onClick={handleLogout}>Log out</button>
        
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Homepage;
