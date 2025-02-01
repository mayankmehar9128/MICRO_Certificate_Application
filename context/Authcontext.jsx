import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();


export function AuthProvider({ children }) {
  const getToken = () => sessionStorage.getItem("token");
  
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
      return decoded.exp * 1000 < Date.now(); // Check if expired
    } catch (err) {
      return true;
    }
  };

  const [authDetails, setAuthDetails] = useState(() => {
    const token = getToken();
    return {
      isLoggedIn: token && !isTokenExpired(token),
      roleType: sessionStorage.getItem("LogedInRole") || "guest",
      token: token || "",
      LogedInUsername: sessionStorage.getItem("LogedInUsername"),
      LogedInEmail: sessionStorage.getItem("LogedInEmail"),
    };
  });

  useEffect(() => {
    if (isTokenExpired(getToken())) {
      logout();
    }
  }, []);

  const login = (role, token) => {
    // localStorage.setItem("LogedIn", "true");
    // localStorage.setItem("LogedInRole", role);
    // localStorage.setItem("token", token);
    sessionStorage.setItem("LogedIn", "true");
    sessionStorage.setItem("LogedInRole", role);
    sessionStorage.setItem("token", token);
    setAuthDetails({
      isLoggedIn: true,
      roleType: role,
      token: token,
    });
  };

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setAuthDetails({
      isLoggedIn: false,
      roleType: "guest",
      token: "",
      LogedInUsername: null,
      LogedInEmail: null,
    });
    // window.location.reload(); // Ensures complete cleanup
  };

  return (
    <AuthContext.Provider value={{ ...authDetails, login, logout }}>
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







// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [authDetails, setAuthDetails] = useState({
//     isLoggedIn: localStorage.getItem("LogedIn") === "true",
//     roleType: localStorage.getItem("LogedInRole") || "guest",
//     token: localStorage.getItem("token") || "",
//     LogedInUsername: localStorage.getItem("LogedInUsername"),
//     LogedInEmail: localStorage.getItem("LogedInEmail"),
    
//   });

//     // Update authDetails when localStorage changes
//   const updateAuthDetails = () => {
//     setAuthDetails({
//       isLoggedIn: localStorage.getItem("LogedIn") === "true",
//       roleType: localStorage.getItem("LogedInRole") || "guest",
//       token: localStorage.getItem("token") || "",
//       LogedInUsername: localStorage.getItem("LogedInUsername"),
//       LogedInEmail: localStorage.getItem("LogedInEmail"),
//     });
//   };

//   const login = (role, token) => {
//     localStorage.setItem("LogedIn", "true");
//     localStorage.setItem("LogedInRole", role);
//     localStorage.setItem("token", token);

//     setAuthDetails({
//       isLoggedIn: true,
//       roleType: role,
//       token: token,
//     });
//   };

//   const logout = () => {
//     localStorage.clear();
//     setAuthDetails({
//       isLoggedIn: false,
//       roleType: "guest",
//       token: "",
//       LogedInUsername: null,
//       LogedInEmail: null,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("storage", updateAuthDetails); // Listen for storage changes
//     return () => {
//       window.removeEventListener("storage", updateAuthDetails);
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ ...authDetails, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }