function FormTextField({type, placeholder, id, name}) {
    return(
        <input type={type} id={id} name={name} placeholder={placeholder} className= "min-w-28 sm:max-w-80 border-[1px] border-[#C3CAD9] bg-[#FFFFFF] p-2 pt-3 pb-3 rounded-md outline-none"/>
    )
    
}

export default FormTextField