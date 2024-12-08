import { useState } from "react";
import HomeCard from "../../components/HomeCards";
import { assets } from "../../assets/asset";
import CourseCard from "../../components/CourseCard";
import OurAchievementCard from "../../components/OurAchievementCard";

function Home() {
  return (
    <main className="p-5 m-auto max-w-7xl mt-16 animate-slidein">
      <div>
        <div className="flex flex-wrap align-middle justify-center gap-10 sm:gap-24">
          <div className="w-96 text-5xl font-bold animate-slidein">
            <p className="text-[#003F7D]">Best AI </p>
            <p className="text-[#003F7D]">Based Online &</p>
            <p className="text-[#FF8B36]">Offline Learning Platform</p>
          </div>
          <div className="">
            <HomeCard src1={assets.image6} text1={"AI Based"} text2={"Courses"} src2={assets.image1}/>
          </div>
        </div>
        <div className="pt-10">
          <img src={assets.image2} width={200}/>
        </div>
      </div>
      

      {/* second home sec start */}
        <div className="mt-10">
          <div className="flex flex-wrap align-middle justify-center gap-9 lg:gap-32">
            <div>
              <div className="text-5xl font-bold">
                <div className="pl-3 text-xl">
                  <p>WHO CAN JOIN</p>
                </div>
                <p>Skill Development</p>
                <p>Schemes For All</p>
              </div>
              <div className="w-96 flex align-middle justify-between pt-3">
                <div className="w-40 flex justify-center flex-col items-center align-middle">
                  <div className="flex ">
                    <p className="font-bold text-sm pr-3 text-[#003F7D]">01</p>
                    <br/>
                    <img src={assets.image3} width={50}/>
                  </div>
                  <div className="p-3 pl-6 text-center text-xs font-medium"><p>Colleges/Universities</p></div>
                  
                </div>
                <div className="w-40 flex justify-center flex-col items-center align-middle">
                  <div className="flex">
                    <p className="font-bold text-sm pr-3 text-[#003F7D]">02</p>
                    <br/>
                    <img src={assets.image4} width={50}/>
                  </div>
                  <div className="p-3 pl-6 text-center text-xs font-medium"><p>Individuals/Working Professionals</p></div>
                </div>
              </div>
              <div className="w-96 flex align-middle justify-between pt-9">
                <div className="w-40 flex justify-center flex-col items-center align-middle">
                  <div className="flex">
                    <p className="font-bold text-sm pr-3 text-[#003F7D]">03</p>
                    <br/>
                    <img src={assets.image5} width={50}/>
                  </div>
                  <div className="p-3 pl-6 text-xs font-medium"><p>Startups</p></div>
                </div>
                <div className="w-40 flex justify-center flex-col items-center align-middle">
                  <div className="flex">
                    <p className="font-bold text-sm pr-3 text-[#003F7D]">04</p>
                    <img src={assets.image9} width={50}/>
                  </div>
                  <div className="p-3 pl-6 text-xs font-medium"><p>Corporates</p></div>
                </div>
              </div>
            </div>
            <div className="">
              <img src={assets.image10} width={350} />
            </div>

          </div>
        </div>
      {/* second home sec end */}

      {/* Couse section start */}
      <div className="mt-10">
        <div className="flex align-middle justify-center gap-2 text-2xl font-bold">
          <p className="text-[#003F7D]">Popoular</p><p className="text-[#F98149]">Courses</p>
        </div>
        <div className="flex flex-wrap align-middle items-center justify-center gap-24 w-auto mt-4">
         <CourseCard src={assets.image11} width={70} text1={"Angular JS"} text2={"A JavaScript-based open-source front-end web framework for developing single-page applications." }/>
         <CourseCard src={assets.image12} width={75} text1={"Python"} text2={"Python is an interpreted high-level general-purpose programming language." }/>
         <CourseCard src={assets.image13} width={105} text1={"React"} text2={"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components." }/>
         <CourseCard src={assets.image13} width={105} text1={"React"} text2={"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components." }/>
         <CourseCard src={assets.image13} width={105} text1={"React"} text2={"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components." }/>
         <CourseCard src={assets.image13} width={105} text1={"React"} text2={"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components." }/>
         <CourseCard src={assets.image13} width={105} text1={"React"} text2={"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components." }/>
         <CourseCard src={assets.image13} width={105} text1={"React"} text2={"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components." }/>

        </div>
        <div className="mt-28 flex align-middle justify-center">
          <div className="cursor-pointer p-2 rounded-lg text-center text-xs text-white bg-[#003F7D] w-32"><p>View All Courses</p></div>
        </div>
      </div>
      {/* Couse section end */}

      {/* Our Achievement Start */}
      
      <div className="bg-[#F3F3F3] h-auto w-full mt-10">
        <div className="flex align-middle justify-center gap-2 font-bold text-xl">
          <p className="text-[#003F7D]">Our</p>
          <p className="text-[#F98149]">Achievements</p>
        </div>
        <div className="h-auto w-full flex flex-wrap align-middle justify-center items-center sm:gap-24 mt-3">
          <div>
            <img src={assets.image15} width={350}/>
          </div>
          <div className="flex flex-wrap align-middle justify-center gap-3 w-auto h-auto p-3 ">
            <OurAchievementCard className1={"w-40 h-36 bg-[#FFFFFF] drop-shadow-xl rounded-xl pt-3"} className2={"font-extrabold text-6xl text-center text-[#F98149]"} text1={"100"} text2={"Students Trained"} src={assets.image17}/>
            <OurAchievementCard className1={"w-40 h-36 bg-[#FFFFFF] drop-shadow-xl rounded-xl pt-3"} className2={"font-extrabold text-6xl text-center text-[#F98149]"} text1={"100"} text2={"Courses Available"} src={assets.image18}/>
            <OurAchievementCard className1={"flex align-middle justify-center w-80 h-24 bg-[#FFFFFF] drop-shadow-xl rounded-xl pt-4"} text1={"70%"} className2={"font-extrabold text-6xl pl-3 text-[#003F7D]"} className3={"hidden"} text2={"Students Secured Jobs in Level 1 Companies"} />
          </div>
        </div>
      </div>
      {/* Our Achievement End */}

      {/* Our Certificate Start */}
      <div className="mt-10">
        <div className="flex align-middle justify-center gap-2 font-bold text-3xl">
          <p className="text-[#003F7D]">Our</p>
          <p className="text-[#F98149]">Certidicate</p>
        </div>
        <div className="flex flex-wrap align-middle justify-center gap-8 mt-10">
          <div><img src={assets.image19} width={130}/></div>
          <div><img src={assets.image20} width={130}/></div>
          <div><img src={assets.image21} width={130}/></div>
          <div><img src={assets.image22} width={130}/></div>
        </div>
        <div className="pt-12">
          <img src={assets.image2} width={200}/>
        </div>
      </div>

    </main>
  );
}

export default Home;
