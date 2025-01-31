import React, { useRef, useState } from "react"
import FormTextField from "../reUsableComponents/FormTextField";
import FormTextArea from "../reUsableComponents/FormTextArea";
import { handleError, handleSuccess } from "@/Util";
import { useNavigate } from "react-router-dom";

const FrenchiseApplyForm = () => {

  const [applyInfo, setApplyInfo] = useState({
    centername: "",
    centerowner: "",
    email: "",
    contectno: "",
    workexp: "",
    areaofinterest: "",
    state:"",
    city: "",
    pincode: "",
    address: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplyInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validateInputs = () => {
    const { email, contectno, pincode } = applyInfo;

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      handleError("Invalid email format");
      return false;
    }

    // Contact Number Validation
    if (contectno.length < 10 || isNaN(contectno)) {
      handleError("Invalid contact number. It should be 10 digits.");
      return false;
    }

    // Pincode Validation
    if (pincode.length < 6 || isNaN(pincode)) {
      handleError("Invalid pincode. It should be 6 digits.");
      return false;
    }

    return true;
  };

    const handleApply = async (e) => {
        e.preventDefault();

        // Validation
        if (!validateInputs()) return;

        const {
        centername,
        centerowner,
        email,
        contectno,
        workexp,
        areaofinterest,
        state,
        city,
        pincode,
        address,
        } = applyInfo;

        if (
        !centername||
        !centerowner ||
        !email ||
        !contectno ||
        !workexp ||
        !areaofinterest ||
        !state ||
        !city ||
        !address ||
        !pincode
        ) {
        return handleError("All fields are required");
        }

        try {
        const url = "http://localhost:8080/auth/register";
        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(applyInfo),
        });

        const result = await response.json();
        const { success, message, error } = result;

        if (success) {
            handleSuccess(message);
            setTimeout(() => {
            navigate("/FrenchiseLogin");
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
     // bind formRef to our form element
    <div className="m-auto max-w-7xl w-[80vw] sm:w-[90vw] md:w-[70vw] lg:w-[74vw] z-0 p-12 bg-[#FFFFFF] drop-shadow-xl rounded-xl">
      <div className="p-1">
        <div className="text-2xl"><p>Apply Now</p></div>
      </div>
      <br />
      <hr />
      <br />
      {/* ref={formRef} onSubmit={sendFormData} */}
        <form onSubmit={handleApply}>
            <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-7">
                <div className="flex flex-col">
                    <label htmlFor="centerInput" className="pb-2 text-[#003F7D]">Name Of Center *</label>
                    <FormTextField type={"text"} id={"centerInput"} name={"centername"} value={applyInfo.centername} autofocus={"autofocus"} onChange={handleChange} placeholder={"Enter Center name"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="centerOwnerInput" className="pb-2 text-[#003F7D]">Name Of Center Owner *</label>
                    <FormTextField type={"text"} id={"centerOwnerInput"} name={"centerowner"} value={applyInfo.centerowner} onChange={handleChange} placeholder={"Enter Center Owner"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">Email *</label>
                    <FormTextField type={"email"} id={"emailInput"} name={"email"} value={applyInfo.email} onChange={handleChange} placeholder={"you@example.com"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Contact No. *</label>
                    <FormTextField type={"phone"} id={"contactInput"} name={"contectno"} value={applyInfo.contectno} onChange={handleChange} placeholder={"Enter Your Contact Number"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="workexperienceInput" className="pb-2 text-[#003F7D]">Work Experience *</label>
                    <FormTextField type={"text"} id={"workexperienceInput"} name={"workexp"} value={applyInfo.workexp} onChange={handleChange} placeholder={"3 years"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="areainterestInput" className="pb-2 text-[#003F7D]">Area Of Interest *.</label>
                    <FormTextField type={"text"} id={"areainterestInput"} name={"areaofinterest"} value={applyInfo.areaofinterest} onChange={handleChange} placeholder={"Technology"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="stateInput" className="pb-2 text-[#003F7D]">State *</label>
                    <FormTextField type={"text"} id={"stateInput"} name={"state"} value={applyInfo.state} onChange={handleChange} placeholder={"Bihar"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cityInput" className="pb-2 text-[#003F7D]">City/District *</label>
                    <FormTextField type={"text"} id={"cityInput"} name={"city"} value={applyInfo.city} onChange={handleChange} placeholder={"Patna"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="pincodeInput" className="pb-2 text-[#003F7D]">Pin Code *</label>
                    <FormTextField type={"text"} id={"pincodeInput"} name={"pincode"} value={applyInfo.pincode} onChange={handleChange} placeholder={"800004"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="addressInput" className="pb-2 text-[#003F7D]">Address *</label>
                <FormTextArea id={"addressInput"} name={"address"} value={applyInfo.address} onChange={handleChange} placeholder={"Type your address..."}/>
                {/* <textarea id="messageInput" name="message"></textarea> */}
            </div>

            <div className="mt-10 w-full">
                <div>
                    <button type="submit" className="bg-[#003F7D] p-3 text-white rounded-3xl w-full">Apply Now</button>
                </div>
            </div>
            {/* <label htmlFor="pictureInput">Picture</label>
            <input type="file" id="pictureInput" name="picture" /> */}
        </form>
    </div>
  )
}

export default FrenchiseApplyForm