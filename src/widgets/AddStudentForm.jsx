import React, { useRef } from "react"
import FormTextField from "../reUsableComponents/FormTextField";
import FormTextArea from "../reUsableComponents/FormTextArea";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import FormDropDownField from "@/reUsableComponents/FormDropDownField";

const AddStudent = () => {
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
    <div className="w-full p-7 bg-[#FFFFFF] drop-shadow-xl rounded-xl">
      <div className="p-1">
        <div className="text-2xl"><p>Add Student</p></div>
      </div>
      <br />
      <hr />
      <br />
        <form ref={formRef} onSubmit={sendFormData}>
            <div className="grid grid-cols-2 gap-7">
                <div className="flex flex-col">
                    <label htmlFor="centerInput" className="pb-2 text-[#003F7D]">Name *</label>
                    <FormTextField type={"text"} id={"centerInput"} name={"center"} placeholder={"Enter Center name"}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">Email *</label>
                    <FormTextField type={"email"} id={"emailInput"} name={"email"} placeholder={"you@example.com"}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="fatherInput" className="pb-2 text-[#003F7D]">Father Name</label>
                    <FormTextField type={"text"} id={"fatherInput"} name={"father"} placeholder={"Enter your father name"}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="motherInput" className="pb-2 text-[#003F7D]">Mother Name</label>
                    <FormTextField type={"text"} id={"motherInput"} name={"mother"} placeholder={"Enter your mother name"}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="contactInput" className="pb-2 text-[#003F7D]">Contact No. *</label>
                    <FormTextField type={"phone"} id={"contactInput"} name={"contact"} placeholder={"Enter Your Contact Number"}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sessionInput" className="pb-2 text-[#003F7D]">Session</label>
                    <FormTextField type={"text"} id={"sessionInput"} name={"session"} placeholder={"Enter Session"}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="regdateInput" className="pb-2 text-[#003F7D]">Registeration Date</label>
                    <FormTextField type={"date"} id={"regdateInput"} name={"RegDate"} placeholder={"Enter Registration Date"}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="workexperienceInput" className="pb-2 text-[#003F7D]">Gender *</label>
                    <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Other</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="dobInput" className="pb-2 text-[#003F7D]">Date of birth</label>
                    <FormTextField type={"date"} id={"dobInput"} name={"DOBDate"} placeholder={"Enter Date of birth"}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="courseInput" className="pb-2 text-[#003F7D]">Select Course</label>
                    <FormDropDownField name={"Course"} id={"courseInput"} />
                </div>
                
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="addressInput" className="pb-2 text-[#003F7D]">Address *</label>
                <FormTextArea id={"addressInput"} name={"address"} placeholder={"Type your address..."}/>
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="pictureInput" className="pb-2 text-[#003F7D]">Uplaod Image</label>
                <input type="file" id="pictureInput" name="picture" />
            </div>

            <div className="mt-10 w-full">
                <div>
                    <button type="submit" className="bg-[#003F7D] p-3 text-white rounded-3xl w-40">Add</button>
                </div>
            </div>
            {/* <label htmlFor="pictureInput">Picture</label>
            <input type="file" id="pictureInput" name="picture" /> */}
        </form>
    </div>
  )
}

export default AddStudent