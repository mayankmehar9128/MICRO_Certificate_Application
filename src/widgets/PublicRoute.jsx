import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";

const PublicRoute = () => {
  const { isLoggedIn, roleType, token } = useAuth();

  if (isLoggedIn && roleType === "admin" && token) {
    return <Navigate to="/admin" />;
  } else if (isLoggedIn && roleType === "franchise" && token) {
    return <Navigate to="/frenchise" />;
  }

  return <Outlet />;
};

export default PublicRoute;