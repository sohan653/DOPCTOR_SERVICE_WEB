
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading]=useAuthState(auth);
    const location=useLocation()
    if(loading){
        return <p>loading.......</p>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // email verify only for password email
    if(user.providerData[0]?.providerId==='password' && !user.emailVerified){
        return (<>
            <h1>Your email doesnt verified</h1>
            <h1>please check your email</h1>
            <p>dont get email <button>send verification</button></p>
            </>
         
        )
    }
    return children
};

export default RequireAuth;