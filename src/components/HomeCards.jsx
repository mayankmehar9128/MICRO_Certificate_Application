function HomeCard({src1, src2, text1, text2, text3}) {
    return(
        <div className="md:w-96 w-80 md:h-64 h-52 bg-[#FFF2EA] rounded-md text-xl font-bold">
           <div className="p-3">
                <img src={src1} width={60} className=""/>
           </div>
            <div className="flex items-start justify-center">
                <div className="text-3xl font-extrabold pt-1 sm:pt-4">
                    <p className="text-[#303030] font-normal">{text1}</p>
                    <p className="text-[#FF8B36] text-3xl">{text2}</p>
                    <p className="text-[#FF8B36] text-3xl">{text3}</p>
                </div>
                <div className="relative bottom-9 sm:bottom-12">
                    <img src={src2} width={250} className="" />
                </div>
                
            </div>
        </div>
    )
    
}

export default HomeCard