import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hambutton from "./Hambutton";
import { IoSearchOutline } from "react-icons/io5";
import { useCartStore } from "../context/Cart";

const Navbar = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full navbar max-w-[100svw] z-50 fixed left-0 top-0 sm:pt-3 md:pt-2 px-[8vw] lg:px-[9vw] transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/70" : "bg-transparent"
      }`}
    >
      <div className="relative w-full flex justify-between items-center p-2">
        <Link
          to="/"
          className="flex items-center"
          // className="w-fit p-[1vw] pb-[1.7vw] md:p-[0.7vw] md:pb-[1.3vw] lg:pb-[0.8vw] bg-[#EC1D23] rounded-[0.7vw] md:rounded-[0.5vw]"
        >
          <img
            loading="lazy"
            src="/images/abaanNewLogo.webp"
            className=" max-w-[20vw] xs:w-[15vw] sm:w-[13vw] md:w-[7vw] lg:w-[6vw] "
            alt=""
          />
        </Link>
        <div className=" text-[7vw] flex justify-end w-full items-center cursor-pointer md:hidden">
          <Hambutton />
        </div>

        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-10">
          <Link
            to="/"
            className="flex items-center font-archivo gap-[2px] font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="flex items-center font-archivo gap-[2px] font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            Product
          </Link>

          <Link
            to="/about"
            className="flex items-center font-archivo gap-1 font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            About us
          </Link>

          <Link
            to="/contact"
            className="flex items-center font-archivo gap-1 font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            Contact us
          </Link>
          <Link
            target="blank"
            to="https://visionary-crostata-f06ab0.netlify.app/"
            className="flex items-center font-archivo gap-1 font-normal text-[1.4vw] lg:text-[1.1vw] text-[#B5964D]"
          >
            Jolly
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {/* <Link to="/cart" className="relative">
            <img
              loading="lazy"
              src="/images/shopping-cart.svg"
              className="w-[2vw] lgmd:w-[1.6vw]"
              alt=""
            />
            <h3 className="w-[2vw] h-[2vw] lgmd:w-[1.7vw] lgmd:h-[1.7vw] bg-[#683292] absolute font-archivo text-white right-[-0.8vw] bottom-[-0.8vw] rounded-full flex items-center justify-center text-[1vw] lgmd:text-[0.8vw]">
              {totalItems}
            </h3>
          </Link> */}

          <Link
            to="/contact"
            className="btn-primary px-4 min-h-8 py-4 flex items-center text-lg"
          >
            Contact us{" "}
            <img
              loading="lazy"
              src="/images/btnArrow.svg"
              className="w-[3vw] max-w-[20px]"
              alt=""
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
