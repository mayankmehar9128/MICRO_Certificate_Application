import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function FormDropDownField({id, name, selecLable, placeholder}) {
    return(
        // <input type={type} id={id} name={name} placeholder={placeholder} className= "min-w-28 sm:w-auto border-[1px] border-[#C3CAD9] bg-[#FFFFFF] p-2 pt-3 pb-3 rounded-md outline-none"/>
        // <select name={name} id={id} className= "min-w-28 sm:w-auto border-[1px] border-[#C3CAD9] bg-[#FFFFFF] p-2 pt-3 pb-3 rounded-md outline-none">
        //     <option value="ADCA">ADCA</option>
        //     <option value="DCA">DCA</option>
        //     <option value="Typing">Typing</option>
        //     <option value="Telly">Telly</option>
        // </select>

        <Select name={name}>
        <SelectTrigger className="min-w-28 h-12 sm:w-auto border-[1px] border-[#C3CAD9] bg-[#FFFFFF] p-2  rounded-md outline-none">
            <SelectValue placeholder={placeholder} id={id} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>{selecLable}</SelectLabel>
            <SelectItem value="ADCA">ADCA</SelectItem>
            <SelectItem value="DCA">DCA</SelectItem>
            <SelectItem value="Typing">Typing</SelectItem>
            <SelectItem value="Telly">Telly</SelectItem>
            <SelectItem value="Commerce">Commerce</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>
    )
    
}

export default FormDropDownField