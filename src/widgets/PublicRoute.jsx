import { useAuth } from "../../context/Authcontext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
    const { isLoggedIn, roleType, token } = useAuth();

    console.log("Auth Details:", { isLoggedIn, roleType, token });
  
    if (isLoggedIn && roleType === "admin" && token) {
        return <Navigate to="/admin" />;
    }else if(isLoggedIn && roleType === "franchise" && token){
        return <Navigate to="/frenchise" />;
    }
  
    return <Outlet />;
}

export default PublicRoute;
