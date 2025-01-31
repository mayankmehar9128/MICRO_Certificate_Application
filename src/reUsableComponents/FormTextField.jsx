function FormTextField({type, placeholder, id, name, value, onChange, autofocus}) {
    return(
        <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} autoFocus={autofocus} className= "min-w-24 sm:w-auto border-[1px] border-[#C3CAD9] bg-[#FFFFFF] p-2 rounded-md outline-none"/>
    )
    
}

export default FormTextField