import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatesRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return;
    }
    

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace ></Navigate>;
    
};

export default PrivatesRoute;


/****
 * 1. check user login or not
 * 2. if user is logged in , then allow to visit the route
 * 3. Else redirect the login page
 * 4. setup the private router
 * 5. handleLoading
 * *** */
