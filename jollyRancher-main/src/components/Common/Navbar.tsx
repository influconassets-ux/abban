import { useEffect, useState } from "react";
import RightArrow from "./RightArrow";
import SideTab from "./SideTab";

function Navbar() {
  const [tabOpen, setTabOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (tabOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [tabOpen]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 flex justify-center py-4 px-4 transition-all duration-300`}
      >
        <nav
          style={{
            boxShadow: "0px 4px 36px 0px #B5964DD9",
          }}
          className={`rounded-4xl max-w-[1200px] w-full flex justify-between relative items-center px-[20px] h-[70px] navBg `}
        >
          <div className="h-full flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className=" object-contain xl:h-auto xl:w-20 h-[60%]"
            />
          </div>
          <div className="text-[16px] hidden md:flex items-center whitespace-nowrap font-normal gap-[10%] w-full max-w-[60%] justify-center">
            <a href="/" className="text-[#B5964D]">
              Home
            </a>
            <a href="/">Product Page</a>
            <a href="/">About us</a>
            <a href="/">Contact</a>
          </div>
          <div className="h-full hidden md:flex items-center justify-center">
            <button
              style={{
                boxShadow: "0px 2.25px 16.5px 2.25px #FBAB2A4D",
              }}
              className="bg-[#B5964D] px-3 rounded-4xl h-[60%] text-[12px] font-semibold flex items-center gap-0.5"
            >
              Contact Us <RightArrow />
            </button>
          </div>
          <div className="relative block md:hidden">
            <i
              onClick={() => setTabOpen(true)}
              className="fa fa-bars"
              aria-hidden="true"
            ></i>
          </div>
        </nav>
      </div>
      {tabOpen && <SideTab setTabOpen={setTabOpen} />}
    </>
  );
}

export default Navbar;
