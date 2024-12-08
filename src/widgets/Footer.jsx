import { NavLink } from "react-router-dom";
// import FooterSocialCard from "./FooterSocialCards";
import { assets } from "../assets/asset";

function Footer() {
  return (
    <footer>
      <div className="p-2 h-auto bg-cover bg-[url('./assets/footerimage/Rectanglefooter.png')]">
        <div className="text-white text-sm m-auto max-w-7xl mt-2 flex flex-wrap gap-10 pl-2 justify-between">
          <div className="flex-col align-middle justify-center">
            <div className="text-left">
              <img src={assets.image6} width={90} className="text-white" />
            </div>
            <div className="w-80 h-auto mt-8">
              <p className="text-sm">
                Let Us build your career together Be the first person to
                transform yourself with our unique & world class corporate level
                trainings.
              </p>
            </div>
            <div className="w-96 h-auto mt-9">
              <p className="font-Poppins font-semibold text-3xl">
                Subscribe Our Newsletter
              </p>
            </div>
            <div className="mt-6 flex align-middle">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-72 p-2 bg-transparent border-b-2 border-gray-400 border-opacity-35 outline-none"
              />
              <div>
                <img src={assets.image7} width={50} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* right manu and imformatio start */}
          <div className="flex flex-wrap justify-start gap-6 mt-3">
            <div className="w-64 p-2">
              {/* Footer Navigation start */}
              <div className="flex gap-3 text-3xl font-semibold">
                <p className="text-white">Quick</p>
                <p className="text-orange-400">Links</p>
              </div>
              <div className="flex-col gap-y-2 mt-6 text-sm font-medium pl-1">
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Home
                  </NavLink>
                </div>

                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/AboutUs"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    About Us
                  </NavLink>
                </div>
                {/* <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/Mission"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Mission
                  </NavLink>
                </div>
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/Vision"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Vision
                  </NavLink>
                </div> */}

                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/Course"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Course
                  </NavLink>
                </div>
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/StudentEnq"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Student Enquiry
                  </NavLink>
                </div>
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/StudentLogin"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Student Login
                  </NavLink>
                </div>
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/StudentSearch"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Student Search
                  </NavLink>
                </div>
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/FrenchiseReg"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Frenchise Registeration
                  </NavLink>
                </div>
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/FrenchiseLogin"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Frenchise Login
                  </NavLink>
                </div>
                <div className="hover:text-blue-300 transition-all">
                  <NavLink
                    to="/ContactUs"
                    className={({ isActive }) =>
                      isActive ? "text-blue-300" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
              {/* Footer Navigation start */}
            </div>
            {/* Contect Us Start */}
            <div className="w-64 p-2">
              <div className="flex gap-5 text-3xl font-semibold">
                <p className="text-white">Contect</p>
                <p className="text-orange-400">Us</p>
              </div>
              <div className="flex mt-6 gap-3">
                <div>
                  <i class="fa-solid fa-location-dot fa-bounce"></i>
                </div>
                <div className="w-48">
                  <p className="text-sm">
                    MITHILESH COMMERCE, CMC CAMPUS, BHIKHANA PAHARI ROAD,
                    OPPOSITE DEVARUN APARTMENT, NEAR RIMJHIM HOTEL, PATNA -
                    800004, BIHAR
                  </p>
                </div>
              </div>
              <div className="flex mt-4 gap-3">
                <div>
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="w-48">
                  <p className="text-sm">micro75india@gmail.com</p>
                </div>
              </div>
              <div className="flex mt-4 gap-3">
                <div>
                  <i class="fa-solid fa-phone fa-shake"></i>
                </div>
                <div className="w-48">
                  <p className="text-sm">+91-6200491833</p>
                </div>
              </div>
              {/* Social Media Icons Start */}
              <div className="text-white text-2xl flex text-left align-middle justify-center gap-6 mt-9 h-16">
                <div className='flex items-center justify-center transition-all'>
                  <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                    <div className="bg-black rounded-full w-10 h-10 hover:bg-white hover:text-black transition duration-300 flex items-center justify-center cursor-pointer">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </NavLink>
                </div>
                <div className=' flex items-center justify-center transition-all'>
                  <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                    <div className="bg-black rounded-full w-10 h-10 hover:bg-white hover:text-black transition duration-300 flex items-center justify-center cursor-pointer">
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </NavLink>
                </div>
                <div className=' flex items-center justify-center transition-all'>
                  <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                    <div className="bg-black rounded-full w-10 h-10 hover:bg-white hover:text-black transition duration-300 flex items-center justify-center cursor-pointer">
                      <i className="fa-brands fa-facebook"></i>
                    </div>
                  </NavLink>
                </div>
                <div className=' flex items-center justify-center transition-all'>
                  <NavLink to='https://tailwindcss.com/docs/responsive-design#overview' target='blank'>
                    <div className="bg-black rounded-full w-10 h-10 hover:bg-white hover:text-black transition duration-300 flex items-center justify-center cursor-pointer">
                      <i className="fa-brands fa-x-twitter"></i>
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* Social Media Icons End */}
            </div>
            {/* Contect Us End */}
          </div>
          {/* right manu and imformatio end */}
        </div>
          <div className="text-xs font-semibold mt-5 text-white text-center">
              <p>Copyright © 2024 MIT by MayankMehar. All Rights Reserved.</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
