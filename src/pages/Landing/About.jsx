import { useState } from "react";
import { assets } from "../../assets/asset";

function About() {
  return (
    <main className="p-1 m-auto max-w-7xl">
      {/* hero section start */}
      <div className="w-full h-[35vh] lg:h-screen bg-contain bg-no-repeat bg-[url('./assets/aboutimages/aboutpageimage.png')]">
        <div className="flex flex-wrap align-middle items-center justify-center sm:gap-16">
          <div className="w-72 sm:w-72 lg:w-96 sm:mt-10">
            <p className=" flex gap-3 text-base font-semibold text-orange-500 p-3">
              <p>A B O U T</p>
              <p>U S</p>
            </p>
            <div className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white p-2">
              <p>The Platform For The Next Billion Learners</p>
            </div>
            <div className="text-xs font-bold text-[#B0B6C3] p-3 w-72">
              <p>
                Transforming tech education for the next generation of students
                & employees
              </p>
            </div>
          </div>
          <div className="pt-10 w-72 sm:w-80 lg:w-[500px] relative bottom-10 sm:top-14">
            <img src={assets.image23} width={530} />
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* hero section second start */}
      <div className="mt-[45rem] lg:mt-40">
        <div className="flex flex-wrap-reverse align-middle items-center justify-center gap-3 lg:gap-40 h-80">
          <div className="">
            <img src={assets.image24} width={320} />
          </div>
          <div className="w-80">
            <div className="flex gap-4 font-semibold tracking-widest text-sm text-[#003F7D]">
              <p>O U R</p> <p> S T O R Y</p>
            </div>
            <div className="text-5xl font-bold text-[#F98149] pt-7">
              <p>Innovating new ways to train students</p>
            </div>
            <div className="text-xs font-normal text-[#575757] p-2 pt-7">
              <p>
                We see no limits to what we can achieve by harnessing our
                individual and collective strengths. We are changing the world
                with our ideas, insights, and unique perspectives.
              </p>
            </div>
            <div className="text-xs font-normal text-[#575757] p-2">
              <p>
                Our innovation is led by data, curiosity and the occasional
                happy accident. We create an uplifting environment where we
                learn from our failures and celebrate our success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* hero section second end */}

      {/* hero section third start */}
      <div className="mt-10 mb-10 bg-cover bg-[url('./assets/footerimage/Rectanglefooter.png')]">
        <div className="flex flex-wrap p-11 justify-center align-middle items-center gap-10 lg:gap-32">
          <div className="text-center w-96 p-3">
            <div className="flex justify-center">
              <img src={assets.image25} width={150} />
            </div>
            <div className="flex gap-2 justify-center font-extrabold text-4xl pt-6">
              <p className="text-white">Our</p>
              <p className="text-[#F98149]">Mission</p>
            </div>
            <div className="text-sm font-normal text-white pt-6">
              <p>
                Provide practice based skill trainings using an unique teaching
                methodologies & skill platform to enhance right skills required
                in an industry for working professionals, Non-Tech
                professionals, College students & Start-ups through new
                skilling, up skilling & re-skilling.
              </p>
            </div>
          </div>
          <div className="text-center w-96 p-3">
            <div className="flex justify-center">
              <img src={assets.image26} width={150} />
            </div>
            <div className="flex gap-2 justify-center font-extrabold text-4xl pt-6">
              <p className="text-white">Our</p>
              <p className="text-[#F98149]">Mission</p>
            </div>
            <div className="text-sm font-normal text-white pt-6">
              <p>
                Provide practice based skill trainings using an unique teaching
                methodologies & skill platform to enhance right skills required
                in an industry for working professionals, Non-Tech
                professionals, College students & Start-ups through new
                skilling, up skilling & re-skilling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
