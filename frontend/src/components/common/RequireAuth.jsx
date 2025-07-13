import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import {AuthContext} from "../backend/context/Auth"

const RequireAuth = ({children}) => {
    const {user} = useContext(AuthContext);

    if (!user){
        return <Navigate to = '/admin/login'/>
    }

  return children; 
}

export default RequireAuth
