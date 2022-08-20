import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({handleLogout}) => {
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if (!authToken)
        {
            navigate('/Login');
        }
        if (authToken) {
            navigate('/Homepage');
        }
    }, [])



    return (
        <div>
            User Homepage
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Homepage;
