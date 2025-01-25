import React, { useContext, useRef, useState } from "react";
import LoginTextField from "../reUsableComponents/LoginTextField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleError, handleSuccess } from "@/Util";


const AdminLoginForm = () => {
  const [adminLoginInfo, setAdminLoginInfo] = useState({
     username: '',
     password: ''
  })

  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminLoginInfo((prev) => ({ ...prev, [name]: value }));
  };
  
  const validateInputs = () => {
    const { username, password } = adminLoginInfo;

    // if (username.length < 4) {
    //   handleError("Username must be at least 4 characters long");
    //   return false;
    // }
    // if (password.length < 6) {
    //   handleError("Password must be at least 6 characters long");
    //   return false;
    // }
    return true;
  };
  
    const handleAdminLogin = async (e) => {
      e.preventDefault();
  
      // Validation
      if (!validateInputs()) return;
  
      const {
        username,
        password
      } = adminLoginInfo;
  
      if (
        !username||
        !password
      ) {
        return handleError("All fields are required");
      }
  
      try {
        setIsLoading(true);
        const url = "http://localhost:8080/auth/admin/login";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminLoginInfo),
        });

        if (!response.ok) {
          handleError(`Error: ${response.statusText}`);
          setIsLoading(false);
          return;
        }
  
        const result = await response.json();
        const { success, message, token, username, role, error } = result;
  
        if (success) {
          handleSuccess(message);
          
          localStorage.setItem("token", token);
          localStorage.setItem("LogedInAdmin", username);
          localStorage.setItem("LogedInRole", role);
          localStorage.setItem("LogedIn", true);

          window.dispatchEvent(new Event("storage"));

          if(result.role == "admin"){
            setTimeout(() => {
              navigate("/admin/*");
            }, 1000);
          }else {
            navigate("/AdminLogin");
          }
          
        } else if (error) {
          const details = error?.[0]?.message || "An error occurred";
          handleError(details);
        }else if(message) {
          handleError(message);
        }
      } catch (err) {
        handleError(err.message);
      }finally {
        setIsLoading(false);
      }
    };

  return (
    <div className="w-80 sm:w-96 h-96 p-6 bg-[#FFFFFF] shadow-2xl rounded-xl flex flex-col items-center">
      <div className="p-1 w-full text-center">
        <div className="text-2xl text-[#003F7D] font-semibold">
          <p>Admin Log In</p>
        </div>
      </div>
      <br />
      <form onSubmit={handleAdminLogin}>
        <div className="grid grid-cols-1 gap-12">
          <div className="flex flex-col">
            <LoginTextField
              type="text"
              id="usernameInput"
              name="username"
              value={adminLoginInfo.username}
              placeholder="User name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <LoginTextField
              type="password"
              id="passwordInput"
              name="password"
              value={adminLoginInfo.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-20 w-full flex justify-center">
          <div>
            <button
              type="submit"
              className="bg-[#003F7D] p-1 pl-12 pr-12 text-white rounded-md"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginForm;