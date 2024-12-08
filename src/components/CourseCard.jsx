function CourseCard({ src, text1, text2, width }) {
  return (
    <div className="w-52 h-44 bg-[#003F7D] rounded-lg text-xl font-bold">
      <div className="p-2 flex align-middle justify-center">
        <img src={src} width={width} className="" />
      </div>
      <div className="w-48 h-36 bg-[#FDFDFD] relative left-2 top-4 rounded-lg text-center shadow-xl">
        <p className="p-2 font-display">{text1}</p>
        <div className="w-auto text-xs font-light pt-1 font-display">
          <p>
            {text2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
