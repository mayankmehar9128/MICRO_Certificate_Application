import React, { useContext, useRef, useState } from "react"
import LoginTextField from "../reUsableComponents/LoginTextField";
import { Navigate, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "@/Util";
import { useAuth } from "../../context/Authcontext";


const FrenchiseLoginForm = () => {

  const { login } = useAuth();
  const [frenchiseLoginInfo, setFrenchiseLoginInfo] = useState({
    email: '',
    password: ''
   })
 
   const navigate = useNavigate();
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFrenchiseLoginInfo((prev) => ({ ...prev, [name]: value }));
   };
 
   const validateInputs = () => {
     const { username, password} = frenchiseLoginInfo;
 
     // Email Validation
    //  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //  if (!emailRegex.test(email)) {
    //    handleError("Invalid email format");
    //    return false;
    //  }
 
    //  // Contact Number Validation
    //  if (contectno.length !== 10 || isNaN(contectno)) {
    //    handleError("Invalid contact number. It should be 10 digits.");
    //    return false;
    //  }
 
    //  // Pincode Validation
    //  if (pincode.length !== 6 || isNaN(pincode)) {
    //    handleError("Invalid pincode. It should be 6 digits.");
    //    return false;
    //  }
 
     return true;
   };
 
   const handleAdminLogin = async (e) => {
     e.preventDefault();
 
     // Validation
     if (!validateInputs()) return;
 
     const {
       email,
       password
     } = frenchiseLoginInfo;
 
     if ( !email || !password) {
       return handleError("All fields are required");
     }
 
     try {
       const url = "http://localhost:8080/auth/api/frenchiselogin";
       const response = await fetch(url, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
         },
         body: JSON.stringify(frenchiseLoginInfo),
       });
 
       const result = await response.json();
       const { success, message, token, email, centercode, centername, creditcoins, role,  error } = result;
 
       if (success) {
         handleSuccess(message);
         sessionStorage.setItem("token", token);
         sessionStorage.setItem("LogedInEmail", email);
         sessionStorage.setItem("LogedInFrenchiseCenterCode", centercode);
         sessionStorage.setItem("LogedInUsername", centername); 
         sessionStorage.setItem("LogedInFrenchiseCreditCoins", creditcoins);
         sessionStorage.setItem("LogedInRole", role);
         sessionStorage.setItem("LogedIn", true);

         login(role, token);

         window.dispatchEvent(new Event("storage"));

        if(result.role == "franchise"){
          setTimeout(() => {
            navigate("/frenchise/*");
          }, 1000);
        }else {
          navigate("/FrenchiseLogin");
        }
        //  setTimeout(() => {
        //    navigate("/frenchise/dashboard");
        //  }, 1000);
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
     // bind formRef to our form element
    <div className="w-80 sm:w-96 h-96 p-6 bg-[#FFFFFF] shadow-2xl rounded-xl flex flex-col items-center">
      <div className="p-1 w-full text-center">
        <div className="text-xl text-[#003F7D] font-semibold"><p>Center Log In</p></div>
      </div>
      <br />
        <form onSubmit={handleAdminLogin}>
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col">
                {/* <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">User Email</label> */}
                <LoginTextField type={"email"} id={"emailInput"} name={"email"} value={frenchiseLoginInfo.email} onChange={handleChange} placeholder={"User Email"}/>
                {/* <input type="text" id="nameInput" name="name" /> */}
              </div>
              <div className="flex flex-col">
                {/* <label htmlFor="passwordInput" className="pb-2 text-[#003F7D]">Password</label> */}
                <LoginTextField type={"password"} id={"passwordInput"} name={"password"} value={frenchiseLoginInfo.password} onChange={handleChange} placeholder={"Password"}/>
                {/* <input type="text" id="nameInput" name="name" /> */}
              </div>
            </div>

            <div className="mt-20 w-full flex justify-center">
              <div>
                <button type="submit" className="bg-[#003F7D] p-1 pl-12 pr-12 text-white rounded-md">Login</button>
              </div>
            </div>
        </form>
    </div>
  )
}

export default FrenchiseLoginForm