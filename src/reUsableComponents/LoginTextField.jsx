function LoginTextField({type, placeholder, id, name, value, onChange}) {
    return(
        <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} className= "w-64 sm:w-72 border-b-2 border-[#C3CAD9] bg-[#FFFFFF] p-2 pt-1 pb-1 outline-1 outline-none focus-visible:border-orange-400 transition ease-in-out delay-100 duration-300"/>
    )
    
}

export default LoginTextField