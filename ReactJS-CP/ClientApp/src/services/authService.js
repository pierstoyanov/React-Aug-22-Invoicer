const baseUrl = 'https://localhost:7013';

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/authentication/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = ( email, password, username = "" ) => {
    return fetch(`${baseUrl}/authentication/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
    })
        .then(res => res.json());
};

export const logout = (token) => {
    return fetch(`${baseUrl}/authentication/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};