import React, { useRef, useState } from "react"
import FormTextField from "../reUsableComponents/FormTextField";
import FormTextArea from "../reUsableComponents/FormTextArea";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "@/Util";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AddCenter = () => {

    const [centerInfo, setCenterInfo] = useState({
        centername: "",
        email: "",
        contactno: "",
        altcontact: "",
        gender: "",
        state: "",
        pincode: "",
        address: "",
        password: "",
        creditcoins: "",
        picture: null,
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setCenterInfo((prev) => ({
          ...prev,
          [name]: type === "file" ? files[0] : value,
        }));
      };

      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setCenterInfo((prev) => ({ ...prev, [name]: files[0] }));
      };
    
      const validateInputs = () => {
        const { email, contactno, pincode } = centerInfo;
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          handleError("Invalid email format");
          return false;
        }

    
        if (contactno.length !== 10 || isNaN(contactno)) {
          handleError("Invalid contact number. It should be 10 digits.");
          return false;
        }
    
        if (pincode.length !== 6 || isNaN(pincode)) {
          handleError("Invalid pincode. It should be 6 digits.");
          return false;
        }
    
        return true;
      };

      const handleApply = async (e) => {
        e.preventDefault();
    
        if (!validateInputs()) return;
    
        const { picture, ...rest } = centerInfo; // Separate picture from text fields
    
        if (
          !centerInfo.centername ||
          !centerInfo.email ||
          !centerInfo.contactno ||
          !centerInfo.gender ||
          !centerInfo.state ||
          !centerInfo.pincode ||
          !centerInfo.address ||
          !centerInfo.creditcoins ||
          !centerInfo.password
        ) {
          return handleError("All required fields must be filled.");
        }

        console.log(centerInfo);
    
        try {

          console.log(centerInfo);
          const ApprovedFrenchise = new FormData();
          Object.keys(rest).forEach((key) => {
            ApprovedFrenchise.append(key, rest[key]);
          });
    
          if (picture) {
            ApprovedFrenchise.append("picture", picture);
          }
    
          const response = await fetch("http://localhost:8080/auth/aproved", {
            method: "POST",
            body: ApprovedFrenchise, // Do not set Content-Type; it will be set automatically
          });
    
          const result = await response.json();
          const { success, message, error } = result;
    
          if (success) {
            handleSuccess(message);
            setCenterInfo({
              centername: "",
              email: "",
              contactno: "",
              altcontact: "",
              gender: "",
              state: "",
              pincode: "",
              address: "",
              password: "",
              creditcoins: "",
              picture: null,
            });
    
            setTimeout(() => {
              navigate("/admin/frenchise-details");
            }, 1000);
          } else if (error) {
            handleError(error?.[0]?.message || "An error occurred");
          } else if (message) {
            handleError(message);
          }
        } catch (err) {
          handleError(err.message);
        }
    };
    
      // const handleApply = async (e) => {
      //   e.preventDefault();
    
      //   if (!validateInputs()) return;

      //   const { picture, ...rest } = centerInfo; // Separate picture from text fields

    
      //   const {
      //     centername,
      //     centerowner,
      //     email,
      //     contactno,
      //     gender,
      //     state,
      //     pincode,
      //     address,
      //     password,
      //     creditcoins,
      //   } = centerInfo;
    
      //   if (
      //     !centername ||
      //     !centerowner ||
      //     !email ||
      //     !contactno ||
      //     !gender ||
      //     !state ||
      //     !pincode ||
      //     !address ||
      //     !creditcoins ||
      //     !password
      //   ) {
      //     return handleError("All required fields must be filled.");
      //   }
    
      //   try {
      //     const formData = new FormData();
      //     Object.keys(rest).forEach((key) => {
      //       formData.append(key, rest[key]);
      //     });

      //     const url = "http://localhost:8080/auth/aproved"
      //     const response = await fetch(url, {
      //       method: "POST",
      //       headers: {
      //       "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(centerInfo),
      //     });
    
      //     const result = await response.json();
      //     const { success, message, error } = result;
    
      //     if (success) {
      //       handleSuccess(message);
      //       setCenterInfo({
      //         centername: "",
      //         centerowner: "",
      //         email: "",
      //         contactno: "",
      //         altcontact: "",
      //         gender: "",
      //         state: "",
      //         pincode: "",
      //         address: "",
      //         password: "",
      //         creditcoins: "",
      //         picture: null,
      //       });
      //       handleSuccess(message);
      //       setTimeout(() => {
      //         navigate("/admin/frenchise-details");
      //       }, 1000);
      //     } else if (error) {
      //       const details = error?.[0]?.message || "An error occurred";
      //       handleError(details);
      //     }else if(message) {
      //       handleError(message);
      //     }
      //   } catch (err) {
      //     handleError(err.message);
      //   }
      // };

  return (
     // bind formRef to our form element
    <div className="w-full p-7 bg-[#FFFFFF] drop-shadow-xl rounded-xl">
      <div className="p-1">
        <div className="text-2xl"><p>Add Center</p></div>
      </div>
      <br />
      <hr />
      <br />
        <form onSubmit={handleApply}>
            <div className="grid grid-cols-2 gap-7">
                <div className="flex flex-col">
                    <label htmlFor="centerInput" className="pb-2 text-[#003F7D]">Center Name *</label>
                    <FormTextField type={"text"} id={"centerInput"} name={"centername"} value={centerInfo.centername} onChange={handleChange} placeholder={"Enter Center name"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">Email *</label>
                    <FormTextField type={"email"} id={"emailInput"} name={"email"} value={centerInfo.email} onChange={handleChange} placeholder={"you@example.com"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Contact No. *</label>
                    <FormTextField type={"phone"} id={"contactInput"} name={"contactno"} value={centerInfo.contactno} onChange={handleChange} placeholder={"Enter Your Contact Number"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="altcontactInput" className="pb-2 text-[#003F7D]">Alternate Contact No. (optional)</label>
                    <FormTextField type={"phone"} id={"altcontactInput"} name={"altcontact"} value={centerInfo.altcontact} onChange={handleChange} placeholder={"Enter Your Contact Number"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
              
                <div className="flex flex-col">
                    <label htmlFor="stateInput" className="pb-2 text-[#003F7D]">State *</label>
                    <FormTextField type={"text"} id={"stateInput"} value={centerInfo.state} onChange={handleChange} name={"state"} placeholder={"Bihar"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Gender *</label>
                  <Select onValueChange={(value) => setCenterInfo({ ...centerInfo, gender: value })}>
                    <SelectTrigger className="sm:w-[180px]  min-w-44 pt-5 pb-5 border-[1px] border-[#C3CAD9] bg-[#FFFFFF]">
                      <SelectValue placeholder="Selct Gender" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="pincodeInput" className="pb-2 text-[#003F7D]">Pin Code *</label>
                    <FormTextField type={"text"} id={"pincodeInput"} value={centerInfo.pincode} onChange={handleChange} name={"pincode"} placeholder={"800004"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="addressInput" className="pb-2 text-[#003F7D]">Address *</label>
                <FormTextArea id={"addressInput"} name={"address"} value={centerInfo.address} onChange={handleChange} placeholder={"Type your address..."}/>
                {/* <textarea id="messageInput" name="message"></textarea> */}
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Password. *</label>
                <FormTextField type={"text"} id={"frenchisepassword"} name={"password"} value={centerInfo.password} onChange={handleChange} placeholder={"Enter Password for Frenchise"}/>
                {/* <input type="text" id="nameInput" name="name" /> */}
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Cradit Coins</label>
                <FormTextField type={"number"} id={"craditcoins"} name={"creditcoins"} value={centerInfo.creditcoins} onChange={handleChange} placeholder={"Enter Password for Frenchise"}/>
                {/* <input type="text" id="nameInput" name="name" /> */}
            </div>
            <div className="flex flex-col pt-4 w-64">
                <label htmlFor="pictureInput" className="pb-2 text-[#003F7D]">Uplaod Image</label>
                <input type="file" id="pictureInput" name="picture" onChange={handleFileChange} />
            </div>

            <div className="mt-10 w-full">
                <div>
                    <button type="submit" className="bg-[#003F7D] p-3 text-white rounded-3xl w-40">Submit</button>
                </div>
            </div>
            {/* <label htmlFor="pictureInput">Picture</label>
            <input type="file" id="pictureInput" name="picture" /> */}
        </form>
    </div>
  )
}

export default AddCenter