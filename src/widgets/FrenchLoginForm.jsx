import React, { useRef } from "react"
import LoginTextField from "../reUsableComponents/LoginTextField";

const FrenchiseLoginForm = () => {
  // create a Ref to access our form element
  const frenchiseLoginformRef = useRef(null)

  const sendFormData = async (event) => {
    // this will prevent your form to redirect to another page.
    event.preventDefault();

    if(!frenchiseLoginformRef.current){
      console.log('something wrong with form ref')
      return
    }

    // get our form data
    const frenchiseLoginformData = new FormData(frenchiseLoginformRef.current)

    // add some additional data if you want
    // formData.append('language', window.navigator.language)

    fetch('https://formcarry.com/s/{Your-Unique-Endpoint}', {
      method: 'POST',
      body: frenchiseLoginformData,
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
    <div className="w-80 sm:w-96 h-96 p-6 bg-[#FFFFFF] shadow-2xl rounded-xl flex flex-col items-center">
      <div className="p-1 w-full text-center">
        <div className="text-2xl text-[#003F7D] font-semibold"><p>Center Log In</p></div>
      </div>
      <br />
        <form ref={frenchiseLoginformRef} onSubmit={sendFormData}>
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col">
                {/* <label htmlFor="emailInput" className="pb-2 text-[#003F7D]">User Email</label> */}
                <LoginTextField type={"email"} id={"emailInput"} name={"email"} placeholder={"User Email"}/>
                {/* <input type="text" id="nameInput" name="name" /> */}
              </div>
              <div className="flex flex-col">
                {/* <label htmlFor="passwordInput" className="pb-2 text-[#003F7D]">Password</label> */}
                <LoginTextField type={"password"} id={"passwordInput"} name={"password"} placeholder={"Password"}/>
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