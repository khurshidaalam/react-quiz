import React from 'react'
import { useAuth } from './contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({component:Component, ...rest}) => {
    const {currentUser} = useAuth();
  return !currentUser ? (
            <Outlet {...rest}> {(props)=> <Component{...props}/> }</Outlet>
        ):(
            <Navigate to="/" replace/>
        )
  
}

export default PublicRoute;