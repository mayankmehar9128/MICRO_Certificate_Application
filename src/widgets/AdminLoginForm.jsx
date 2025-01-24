import React, { useRef, useState } from "react";
import LoginTextField from "../reUsableComponents/LoginTextField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleError, handleSuccess } from "@/Util";


const AdminLoginForm = () => {
  const [adminLoginInfo, setAdminLoginInfo] = useState({
     username: '',
     password: ''
    })
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAdminLoginInfo((prev) => ({ ...prev, [name]: value }));
    };
  
    const validateInputs = () => {
      const { username, password} = adminLoginInfo;
  
      // // Email Validation
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if (!emailRegex.test(email)) {
      //   handleError("Invalid email format");
      //   return false;
      // }
  
      // // Contact Number Validation
      // if (contectno.length !== 10 || isNaN(contectno)) {
      //   handleError("Invalid contact number. It should be 10 digits.");
      //   return false;
      // }
  
      // // Pincode Validation
      // if (pincode.length !== 6 || isNaN(pincode)) {
      //   handleError("Invalid pincode. It should be 6 digits.");
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
        const url = "http://localhost:8080/auth/admin/login";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminLoginInfo),
        });
  
        const result = await response.json();
        const { success, message, jwtToken, username, error } = result;
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("LogedInAdminEmail", username);
  
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/admin/*");
          }, 1000);
        } else if (error) {
          const details = error?.[0]?.message || "An error occurred";
          handleError(details);
        }else if(message) {
          handleError(message);
        }
      } catch (err) {
        handleError(err.message);
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
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginForm;