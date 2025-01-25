import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
import { useEffect, useState } from "react";

// function ProtectedRoute() {
//     const { isLoggedIn, roleType, token } = useAuth();

//     console.log("Auth Details:", { isLoggedIn, roleType, token });
  
//     if (isLoggedIn && roleType === "admin" && token) {
//       return <Outlet />;
//     }else if(isLoggedIn && roleType === "franchise" && token){
//         return <Outlet />;
//     }
  
//     return <Navigate to="/home" />;
// }

// export default ProtectedRoute;



const ProtectedRoute = () => {
    const { isLoggedIn, roleType, token } = useAuth();
    const [authDetails, setAuthDetails] = useState({ isLoggedIn, roleType, token });
  
    useEffect(() => {
      const handleStorageChange = () => {
        setAuthDetails({
          isLoggedIn: localStorage.getItem("LogedIn") === "true",
          roleType: localStorage.getItem("LogedInRole") || "guest",
          token: localStorage.getItem("token") || "",
        });
      };
  
      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);
  
    if (authDetails.isLoggedIn && authDetails.roleType === "admin" && authDetails.token) {
      return <Outlet />;
    } else if(authDetails.isLoggedIn && authDetails.roleType === "franchise" && authDetails.token){
        return <Outlet />;
    }
  
    return <Navigate to="/home" />;
  };
  
export default ProtectedRoute;