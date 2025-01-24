function FormTextArea({id, name, placeholder, value, onChange}) {
    return(
        <textarea typeof="text" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} className= "w-full h-28 border-[1px] border-[#C3CAD9] bg-[#FFFFFF] p-2 rounded-md outline-none text-base"/>
    )
    
}

export default FormTextArea