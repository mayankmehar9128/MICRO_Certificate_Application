import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Redirect logged-in users to their dashboard
  if (user.isAuthenticated) {
    if (user.role === "admin") return <Navigate to="/admin/*" />;
    if (user.role === "frenchise") return <Navigate to="/frenchise/*" />;
  }

  // Allow access to login pages if not authenticated
  return children;
};

export default AuthGuard;
