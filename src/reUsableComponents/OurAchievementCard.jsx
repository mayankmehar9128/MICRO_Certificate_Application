function OurAchievementCard({ className1, className2, className3, src, text1, text2 }) {
  return (
    <div className={className1}>
      <p className={className2}>{text1}</p>
      <div className="flex align-middle justify-items-center gap-3 w-full pl-4">
        <img src={src} width={40} className={className3}/>
        <p className="text-sm pt-1">{text2}</p>
      </div>
      
    </div>
  );
}

export default OurAchievementCard;
