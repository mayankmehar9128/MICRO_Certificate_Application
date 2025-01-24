function FormTextField({type, placeholder, id, name, value, onChange, autofocus}) {
    return(
        <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} autoFocus={autofocus} className= "min-w-28 sm:w-auto border-[1px] border-[#C3CAD9] bg-[#FFFFFF] p-2 pt-3 pb-3 rounded-md outline-none"/>
    )
    
}

export default FormTextField