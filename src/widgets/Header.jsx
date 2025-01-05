import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/asset";
import OutlineButton from "../reUsableComponents/OutlineButton";
import FillButton from "../reUsableComponents/FillButton";
import HerosecFillBtn from "../reUsableComponents/Herosecfillbtn";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the current route is one where the hero section should be hidden
  const hideHeroSection = () => {
    const hiddenRoutes = [
      "/AboutUs",
      "/ContactUs",
      "/Course",
      "/FrenchiseReg",
      "/FrenchiseLogin",
      "/StudentEnq",
      "/StudentLogin",
      "/StudentSearch",
      "/AdminLogin",
    ];
    return hiddenRoutes.includes(location.pathname);
  };

  // Dynamically set the hero text based on the current route
  const getHeroText = () => {
    switch (location.pathname) {
      case "/AboutUs":
        return "About Us";
      case "/ContactUs":
        return "ContactUs";
      case "/Course":
        return "Course";
      case "/FrenchiseReg":
        return "FrenchiseReg";
      case "/StudentEnq":
        return "StudentEnq";
      case "/StudentLogin":
        return "StudentLogin";
      case "/StudentSearch":
        return "StudentSearch";
      default:
        return "";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate = useNavigate();

  return (
    <header className="">
      <nav className="">
        {/* Navigation Bar */}
        <div className={`w-full bg-[#003F7D] p-2 flex justify-end`}>
          <div className="flex gap-3">
            <OutlineButton text1={"Student Login"} onClick={() => navigate("/StudentLogin")} />
            <FillButton text2={"Frenchise Login"} onClick={() => navigate("/FrenchiseLogin")} />
          </div>
        </div>

        <div
          className={`flex items-center z-50 justify-between w-full h-20 md:h-20 p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ${
            isScrolled ? "fixed top-0 z-50 animate-slidein" : ""
          }`}
        >
          {/* Logo */}
          <div className="-mt-2">
            <img src={assets.image6} width={70} alt="Logo" />
          </div>

          {/* Hamburger Menu */}
          <div
            className="block text-xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <i
              className={`fa-solid ${
                isMenuOpen
                  ? ""
                  : "fa-bars text-3xl font-bold"
              }`}
            ></i>
          </div>

          {/* Sliding Menu */}
          <div
            className={`z-50 w-full h-screen fixed top-0 left-0 bg-[#003F7D] text-white md:hidden transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            {/* Close Menu */}
            <div
              className="absolute top-5 right-5 text-2xl cursor-pointer"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-xmark text-3xl"></i>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-10 items-center justify-center h-full text-white text-base font-bold">
              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  Home
                </NavLink>
              </div>

              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/AboutUs"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  About Us
                </NavLink>
              </div>

              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/StudentEnq"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  Student Enquiry
                </NavLink>
              </div>
              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/StudentLogin"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  Student Login
                </NavLink>
              </div>
              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/StudentSearch"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  Student Search
                </NavLink>
              </div>
              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/FrenchiseReg"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  Franchise Registration
                </NavLink>
              </div>
              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/FrenchiseLogin"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  Franchise Login
                </NavLink>
              </div>

              <div
                className="hover:text-blue-400 transition-all"
                onClick={toggleMenu}
              >
                <NavLink
                  to="/ContactUs"
                  className={({ isActive }) =>
                    isActive ? "text-[#F98149] text-lg" : ""
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>

          <div className="text-[#59605b] gap-1 hidden text-sm md:text-sm font-normal md:font-semibold md:flex">
            {/* Large Screen NavLinks */}
            <div className=" pt-1 pl-2 pr-2 pb-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:bg-orange-400 bg-orange-400 rounded-md hover:text-white transition-all pl-2 pr-2 pt-1 pb-1"
                    : ""
                }
              >
                Home
              </NavLink>
            </div>
            <div className="relative transition-all pt-1 pl-2 pr-2 pb-1 group">
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:bg-orange-400 bg-orange-400 rounded-md hover:text-white transition-all pl-2 pr-2 pt-1 pb-1"
                    : ""
                }
              >
                About Us
              </NavLink>

              {/* Dropdown Container
              <div className="text-[#8A948C] transition-all absolute right-0 hidden group-hover:block bg-[#FDFDFD] shadow-lg rounded-lg w-full mt-1">
                <NavLink
                  to="/Mission"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : " block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Mission
                </NavLink>
                <NavLink
                  to="/Vision"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : " block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Vision
                </NavLink>
              </div> */}
            </div>

            <div className=" transition-all pt-1 pl-2 pr-2 pb-1">
              <NavLink
                to="/ContactUs"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:bg-orange-400 bg-orange-400 rounded-md hover:text-white transition-all pl-2 pr-2 pt-1 pb-1"
                    : ""
                }
              >
                ContactUs
              </NavLink>
            </div>
            <div className="relative transition-all pt-1 pl-2 pr-2 pb-1 group">
              <NavLink
                to="/FrenchiseReg"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:bg-orange-400 bg-orange-400 rounded-md hover:text-white transition-all pl-2 pr-2 pt-1 pb-1"
                    : ""
                }
              >
                Frenchise Registration
              </NavLink>

              {/* Dropdown Container */}
              <div className="z-10 transition-all absolute right-0 hidden group-hover:block bg-[#FDFDFD] text-[#8A948C] shadow-lg rounded-lg w-full mt-1">
                <NavLink
                  to="/FrenchiseReg"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : "block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Become A Frenchise
                </NavLink>
                <NavLink
                  to="/FrenchiseLogin"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : "block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Frenchise Login
                </NavLink>
              </div>
            </div>
            <div className="relative transition-all pt-1 pl-2 pr-2 pb-1 group">
              <NavLink
                to="/StudentEnq"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:bg-orange-400 bg-orange-400 rounded-md hover:text-white transition-all pl-2 pr-2 pt-1 pb-1"
                    : ""
                }
              >
                Student Enquiry
              </NavLink>

              {/* Dropdown Container */}
              <div className="absolute right-0 z-10 hidden group-hover:block bg-[#FDFDFD] text-[#8A948C] shadow-lg rounded-lg w-full mt-1">
                <NavLink
                  to="/StudentEnq"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : "block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Student Enquiry
                </NavLink>
                <NavLink
                  to="/StudentLogin"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : "block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Student Login
                </NavLink>
                <NavLink
                  to="/StudentSearch"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : "block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Student Search
                </NavLink>
              </div>
            </div>
            <div className="relative transition-all pt-1 pl-2 pr-11 pb-1 group">
              <NavLink
                to="/Course"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:bg-orange-400 bg-orange-400 rounded-md hover:text-white transition-all pl-2 pr-2 pt-1 pb-1"
                    : ""
                }
              >
                Course
              </NavLink>

              {/* Dropdown Container */}
              <div className="transition-all absolute right-0 z-10 hidden group-hover:block bg-[#FDFDFD] text-[#8A948C] shadow-lg rounded-lg w-full mt-1">
                <NavLink
                  to="/Commerce"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : "block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Commerce
                </NavLink>
                <NavLink
                  to="/Computer"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 bg-orange-500 text-white"
                      : "block px-4 py-2 hover:bg-orange-500 hover:text-white"
                  }
                >
                  Computer
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Conditionally render the Hero section */}
      {/* bg-[url('./assets/headerimage/herosec.png')] */}
      {!hideHeroSection() && (
        <div className="m-auto max-w-7xl flex align-middle justify-center gap-10 w-auto h-auto bg-cover animate-slidein">
          <div className="mt-7 flex-1 p-5 ml-6">
            <div className="">
              <div className="w-full">
                <p className=" font-bold text-3xl md:text-5xl text-[#003F7D] tracking-wide">
                  Skill your wayup to success with us
                </p>
              </div>
              <div className="w-52">
                <p className="text-xs md:text-sm text-[#A1A1A1] pt-2">
                  Get the skills you need for the future of work.
                </p>
              </div>
            </div>
            <div className="flex mt-5 align-middle gap-2">
              <input
                type="text"
                placeholder="search the course you want"
                className="p-1 w-52 outline-none bg-[#e4e4e4ee] rounded-md placeholder:text-sm "
              />
              <div className="bg-[#003F7D] p-2 pl-3 pr-3 rounded-md">
                <i className="fa-solid fa-magnifying-glass text-white"></i>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <HerosecFillBtn text3={"Cloud Computing"} />
              <HerosecFillBtn text3={"Cyber Security"} />
              <HerosecFillBtn text3={"DevOps"} />
            </div>
            <div className="flex gap-3 mt-2">
              <HerosecFillBtn text3={"Data Science"} />
              <HerosecFillBtn text3={"Software Testing"} />
            </div>
          </div>
          <div className="basis-2/5 relative -z-50">
            <div className="absolute hidden sm:block">
              <DotLottieReact
                src="https://lottie.host/59e21d7a-15c3-488a-833b-2d8a64a2b0d3/TsPMAHquJB.lottie"
                loop
                autoplay
              />
              <div className="absolute top-20 hidden sm:block"><img src={assets.image8} className="w-[93%]" /></div>
              
            </div>
            
          </div>
        </div>
      )}

      {/* Hero section for specific routes */}
      {/* {hideHeroSection() && (
        <div className="flex flex-col align-middle justify-around w-full h-60 bg-cover bg-[url('./assets/headerimage/aboutpage.svg')]">
          <div className="w-full text-white font-bold p-5 m-auto max-w-7xl">
            <p className="text-4xl md:text-5xl">{getHeroText()}</p>
          </div>
        </div>
      )} */}
    </header>
  );
}

export default Header;
