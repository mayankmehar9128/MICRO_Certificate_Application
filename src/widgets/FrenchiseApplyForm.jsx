import React, { useRef, useState } from "react"
import FormTextField from "../reUsableComponents/FormTextField";
import FormTextArea from "../reUsableComponents/FormTextArea";

const FrenchiseApplyForm = () => {

  const [User, setUser] = useState({
    center: "",
    centerowner: "",
    email: "",
    contact: "",
    workexperience: "",
    areainterest: "",
    state:"",
    city: "",
    pincode: "",
    address: ""
  })

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;


    setUser({
      ...User,
      [name]: value
    })

  };

  

  

  // create a Ref to access our form element
  const formRef = useRef(null)

  const sendFormData = async (event) => {
    // this will prevent your form to redirect to another page.
    event.preventDefault();

    if(!formRef.current){
      console.log('something wrong with form ref')
      return
    }

    // get our form data
    const formData = new FormData(formRef.current)

    // add some additional data if you want
    // formData.append('language', window.navigator.language)

    fetch('https://formcarry.com/s/{Your-Unique-Endpoint}', {
      method: 'POST',
      body: formData,
      headers: {
				// you don't have to set Content-Type
				// otherwise it won't work due to boundary!
        Accept: 'application/json'
      }
    })
    // convert response to json
    .then(r => r.json())
    .then(res => {
      console.log(res);
    });
  }

  return (
     // bind formRef to our form element
    <div className="m-auto max-w-7xl relative w-[80vw] sm:w-[90vw] md:w-[70vw] lg:w-[74vw] z-0 p-12 bg-[#FFFFFF] drop-shadow-xl rounded-xl">
      <div className="p-1">
        <div className="text-2xl"><p>Apply Now</p></div>
      </div>
      <br />
      <hr />
      <br />
      {/* ref={formRef} onSubmit={sendFormData} */}
        <form  ref={formRef} onSubmit={sendFormData}>
            <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-7">
                <div className="flex flex-col">
                    <label htmlFor="centerInput" className="pb-2 text-[#003F7D]">Name Of Center *</label>
                    <FormTextField type={"text"} id={"centerInput"} name={"center"} value={User.center_name} onChange={handleInput} placeholder={"Enter Center name"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="centerOwnerInput" className="pb-2 text-[#003F7D]">Name Of Center Owner *</label>
                    <FormTextField type={"text"} id={"centerOwnerInput"} name={"centerowner"} value={User.center_owner} onChange={handleInput} placeholder={"Enter Center Owner"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">Email *</label>
                    <FormTextField type={"email"} id={"emailInput"} name={"email"} value={User.email} onChange={handleInput} placeholder={"you@example.com"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Contact No. *</label>
                    <FormTextField type={"phone"} id={"contactInput"} name={"contact"} value={User.contact_no} onChange={handleInput} placeholder={"Enter Your Contact Number"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="workexperienceInput" className="pb-2 text-[#003F7D]">Work Experience *</label>
                    <FormTextField type={"text"} id={"workexperienceInput"} name={"workexperience"} value={User.work_experience} onChange={handleInput} placeholder={"3 years"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="areainterestInput" className="pb-2 text-[#003F7D]">Area Of Interest *.</label>
                    <FormTextField type={"text"} id={"areainterestInput"} name={"areainterest"} value={User.area_of_interest} onChange={handleInput} placeholder={"Technology"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="stateInput" className="pb-2 text-[#003F7D]">State *</label>
                    <FormTextField type={"text"} id={"stateInput"} name={"state"} value={User.state} onChange={handleInput} placeholder={"Bihar"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cityInput" className="pb-2 text-[#003F7D]">City/District *</label>
                    <FormTextField type={"text"} id={"cityInput"} name={"city"} value={User.city} onChange={handleInput} placeholder={"Patna"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="pincodeInput" className="pb-2 text-[#003F7D]">Pin Code *</label>
                    <FormTextField type={"number"} id={"pincodeInput"} name={"pincode"} value={User.pincode} onChange={handleInput} placeholder={"800004"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="addressInput" className="pb-2 text-[#003F7D]">Address *</label>
                <FormTextArea id={"addressInput"} name={"address"} value={User.address} onChange={handleInput} placeholder={"Type your address..."}/>
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