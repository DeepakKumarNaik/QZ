import React from 'react';
import './login.css';


const Login = () => {

    return (
        <div  id="sign-in">
            <div id="sign-in-button" data-width="450" data-height="100" className="g-signin2" data-onsuccess="onSignIn" />
        </div>
    );
};

export default Login;


