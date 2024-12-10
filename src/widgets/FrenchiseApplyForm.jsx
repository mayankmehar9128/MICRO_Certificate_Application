import React, { useRef } from "react"
import FormTextField from "../reUsableComponents/FormTextField";
import FormTextArea from "../reUsableComponents/FormTextArea";

const FrenchiseApplyForm = () => {
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
    <div className="w-full p-12 bg-[#FFFFFF] drop-shadow-xl rounded-xl">
      <div className="p-1">
        <div className="text-2xl"><p>Apply Now</p></div>
      </div>
      <br />
      <hr />
      <br />
        <form ref={formRef} onSubmit={sendFormData}>
            <div className="grid grid-cols-3 gap-7">
                <div className="flex flex-col">
                    <label htmlFor="centerInput" className="pb-2 text-[#003F7D]">Name Of Center *</label>
                    <FormTextField type={"text"} id={"centerInput"} name={"center"} placeholder={"Enter Center name"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="centerOwnerInput" className="pb-2 text-[#003F7D]">Name Of Center Owner *</label>
                    <FormTextField type={"text"} id={"centerOwnerInput"} name={"centerowner"} placeholder={"Enter Center Owner"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">Email *</label>
                    <FormTextField type={"email"} id={"emailInput"} name={"email"} placeholder={"you@example.com"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Contact No. *</label>
                    <FormTextField type={"phone"} id={"contactInput"} name={"contact"} placeholder={"Enter Your Contact Number"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="workexperienceInput" className="pb-2 text-[#003F7D]">Work Experience *</label>
                    <FormTextField type={"text"} id={"workexperienceInput"} name={"workexperience"} placeholder={"3 years"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="areainterestInput" className="pb-2 text-[#003F7D]">Area Of Interest *.</label>
                    <FormTextField type={"text"} id={"areainterestInput"} name={"areainterest"} placeholder={"Technology"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="stateInput" className="pb-2 text-[#003F7D]">State *</label>
                    <FormTextField type={"text"} id={"stateInput"} name={"state"} placeholder={"Bihar"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cityInput" className="pb-2 text-[#003F7D]">City/District *</label>
                    <FormTextField type={"text"} id={"cityInput"} name={"city"} placeholder={"Patna"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="pincodeInput" className="pb-2 text-[#003F7D]">Pin Code *</label>
                    <FormTextField type={"number"} id={"pincodeInput"} name={"pincode"} placeholder={"800004"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="addressInput" className="pb-2 text-[#003F7D]">Address *</label>
                <FormTextArea id={"addressInput"} name={"address"} placeholder={"Type your address..."}/>
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