function OutlineButton({text1, onClick}) {
    return(
        <button onClick={onClick} className="w-28 border-2 h-9 text-center border-orange-400 rounded-md pt-0 text-sm cursor-pointer text-white">{text1}</button>
    )
    
}

export default OutlineButton