import React, { useRef } from "react"
import FormTextField from "../reUsableComponents/FormTextField";
import FormTextArea from "../reUsableComponents/FormTextArea";

const ContectForm = () => {
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
    <div className="w-[93vw] sm:w-[90vw] md:w-[70vw] lg:w-[60vw] p-4 sm:p-10 bg-[#FFFFFF] drop-shadow-xl rounded-xl">
        <form ref={formRef} onSubmit={sendFormData}>
            <div className="grid grid-cols-2 gap-7">
                <div className="flex flex-col">
                    <label htmlFor="nameInput" className="pb-2 text-[#003F7D]">Name *</label>
                    <FormTextField type={"text"} id={"nameInput"} name={"name"} placeholder={"your name"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phonenumberInput" className="pb-2 text-[#003F7D]">Phone Number *</label>
                    <FormTextField type={"phone"} id={"phonenumberInput"} name={"phonenum"} placeholder={"your number"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">Email *</label>
                    <FormTextField type={"email"} id={"emailInput"} name={"email"} placeholder={"you@example.com"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="courseInput" className="pb-2 text-[#003F7D]">Course</label>
                    <FormTextField type={"text"} id={"courseInput"} name={"course"} placeholder={"type course"}/>
                    {/* <input type="text" id="nameInput" name="name" /> */}
                </div>

                
            </div>
            <div className="flex flex-col pt-4">
                <label htmlFor="messageInput" className="pb-2 text-[#003F7D]">Message *</label>
                <FormTextArea id={"messageInput"} name={"message"} placeholder={"Type your message..."}/>
                {/* <textarea id="messageInput" name="message"></textarea> */}
            </div>

            <div className="mt-10">
                <div>
                    <button type="submit" className="bg-[#003F7D] p-3 pl-14 pr-14 text-white rounded-md">Send</button>
                </div>
            </div>
            {/* <label htmlFor="pictureInput">Picture</label>
            <input type="file" id="pictureInput" name="picture" /> */}
        </form>
    </div>
  )
}

export default ContectForm