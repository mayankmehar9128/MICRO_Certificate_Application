import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: localStorage.getItem("LogedIn") === "true",
    roleType: localStorage.getItem("LogedInRole") || "guest",
    token: localStorage.getItem("token") || "",
  });

  // Update authDetails when localStorage changes
  const updateAuthDetails = () => {
    setAuthDetails({
      isLoggedIn: localStorage.getItem("LogedIn") === "true",
      roleType: localStorage.getItem("LogedInRole") || "guest",
      token: localStorage.getItem("token") || "",
    });
  };

  useEffect(() => {
    window.addEventListener("storage", updateAuthDetails); // Listen for storage changes
    return () => {
      window.removeEventListener("storage", updateAuthDetails);
    };
  }, []);

  return (
    <AuthContext.Provider value={authDetails}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
