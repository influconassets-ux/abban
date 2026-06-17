import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  // const scrollToTop = () => {
  //   document.body.scrollTop = 0;
  // };
  return (
    <div className="relative bottom-0 h-fit min-h-[40vh] md:min-h-fit bg-[#36196A] w-[100svw] text-[#CFB6E2] font-archivo ">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 h-fit bg-[#36196A] justify-evenly min-h-full items-center">
        <div className="h-[60%] flex pt-10 md:pt-0 items-start">
          <Link
            to="/"

            // className="w-fit p-[1vw] pb-[1.7vw] md:p-[0.7vw] md:pb-[1.3vw] lg:pb-[0.8vw] bg-[#EC1D23] rounded-[0.7vw] md:rounded-[0.5vw]"
          >
            <img
              loading="lazy"
              src="/images/abaanNewLogo.webp"
              className=" max-w-[20vw] xs:w-[15vw] sm:w-[13vw] md:w-[7vw] lgmd:w-[6vw] "
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col xs:flex-row flex-1 md:flex-none gap-10 justify-between md:justify-center h-fit items-center">
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-lg font-semibold">Navigation</h3>
            <ul className="flex gap-x-6 list-disc marker:text-[#EC1D23]">
              <li className="list-none">
                <ul className="flex flex-col gap-3 list-disc marker:text-[#EC1D23] pl-4">
                  <li>
                    <NavLink to="/" link="Home" />
                  </li>
                  <li>
                    <NavLink to="/about" link="About" />
                  </li>
                  <li>
                    <NavLink to="/shop" link="Product" />
                  </li>
                </ul>
              </li>
              <li className="list-none">
                <ul className="flex flex-col gap-3 list-disc marker:text-[#EC1D23] pl-4">
                  <li>
                    <NavLink to="/blog" link="Blog" />
                  </li>
                  <li>
                    <NavLink to="/contact" link="Contact" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 my-4">
            <div className="flex gap-4 items-center">
              <img
                loading="lazy"
                src="/images/location.webp"
                alt="location"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-lg">Address:</h3>
                <p> 7CP6+7JC - Al Qusais Industrial </p>
                <p>Al Qusais Industrial Area 5</p>
                <p> Dubai - United Arab Emirates</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                loading="lazy"
                src="/images/email.webp"
                alt="location"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-lg">Email:</h3>
                <p>info@abaanchocolate.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row w-full md:w-auto justify-start md:flex-col pb-10 gap-10">
          <div className="flex gap-4 items-center w-full justify-start pl-[4vw] md:justify-center">
            <img
              loading="lazy"
              src="/images/phone.webp"
              alt="location"
              className="w-10 h-10"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg">+97143258925</h3>
              <p>Got Questions? Call us 24/7</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <img
              loading="lazy"
              src="/images/email.webp"
              alt="location"
              className="w-10 h-10"
            />
            <img
              loading="lazy"
              src="/images/email.webp"
              alt="location"
              className="w-10 h-10"
            />
            <img
              loading="lazy"
              src="/images/email.webp"
              alt="location"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
      {/* <img
        loading="lazy"
        onClick={scrollToTop}
        src="/images/footerTop.webp"
        alt=""
        className="w-12 absolute top-2/3 xs:top-1/3 md:top-2/3 -translate-y-1/2 right-[4vw] cursor-pointer hover:drop-shadow-lg z-[20]"
      /> */}
      <div className="flex flex-col items-center w-full min-h-[5vh] h-fit gap-4">
        <div className="bg-[#CFB6E2] h-[1px] w-[70%]"></div>
        <h3 className="pb-6 text-sm">Copyright © Abaan Industries</h3>
      </div>
    </div>
  );
}

function NavLink({ to, link }) {
  const location = useLocation();

  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`${isActive ? "underline" : " no-underline"}`}>
      {link}
    </Link>
  );
}
