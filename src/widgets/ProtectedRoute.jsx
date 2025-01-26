import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ allowedRoles } ) => {
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

  if (!authDetails.isLoggedIn || !authDetails.token) {
    return <Navigate to="/home" />;
  }

  if (allowedRoles && !allowedRoles.includes(roleType)) {
    // Redirect to home or a "not authorized" page if the role doesn't match
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;