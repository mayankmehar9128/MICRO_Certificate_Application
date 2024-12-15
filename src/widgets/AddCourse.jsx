import React, { useRef } from "react"
import FormTextField from "../reUsableComponents/FormTextField";
import FormTextArea from "../reUsableComponents/FormTextArea";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const AddCourse = () => {
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
        <div className="text-2xl"><p>Add Course</p></div>
      </div>
      <br />
      <hr />
      <br />
        <form ref={formRef} onSubmit={sendFormData}>
            <div className="grid grid-cols-2 gap-7">
                <div className="flex flex-col">
                    <label htmlFor="centerInput" className="pb-2 text-[#003F7D]">Add Course *</label>
                    <FormTextField type={"text"} id={"centerInput"} name={"center"} placeholder={"Enter Course name"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">Course Discription *</label>
                    <FormTextField type={"email"} id={"emailInput"} name={"email"} placeholder={"Short Description"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="feesInput" className="pb-2 text-[#003F7D]">Fees per certificate *</label>
                    <FormTextField type={"Number"} id={"feesInput"} name={"fees"} placeholder={"Enter per certificate"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="pictureInput" className="pb-2 text-[#003F7D]">Uplaod Image</label>
                <input type="file" id="pictureInput" name="picture" />
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

export default AddCourse