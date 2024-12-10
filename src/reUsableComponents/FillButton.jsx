function FillButton({text2, onClick}) {
    return(
        <button onClick={onClick} className="w-32 h-9 text-center bg-orange-400 rounded-md pt-0 text-white text-sm cursor-pointer">{text2}</button>
    )
}

export default FillButton


// import { Button } from "@/components/ui/button"
 
// export function FillButton() {
//   return <Button>Button</Button>
// }

// export default FillButton