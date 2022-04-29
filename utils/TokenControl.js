import jwtDecode from "jwt-decode";

const isValidToken = (jwtToken) => {
    if (!jwtToken) {
        return false;
    }
    const decoded = jwtDecode(jwtToken);
    const currentTime = Date.now() / 1000;

    return decoded.iat > currentTime;
}

const setSession = (jwtToken) => {
    if (jwtToken) {
        window.localStorage.setItem('jwt-token', jwtToken);
    } else {
        window.localStorage.removeItem('jwt-token');
    }
};

export {setSession, isValidToken} ;