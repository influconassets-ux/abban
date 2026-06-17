import React, { useState } from "react";
import Hero from "../components/homepage/hero/Hero";
import VideoSection from "../components/homepage/videoSection/VideoSection";
import FemaleImage from "../components/homepage/FemaleImage/FemaleImage";
import Favorite from "../components/homepage/Favorite/Favorite";
import Banner from "../components/Banner/Banner";
import Range from "../components/Range/Range";
import Category from "../components/homepage/Category/Category";
import Sellers from "../components/Sellers/Sellers";
import HeartPeople from "../components/homepage/HeartPeople/HeartPeople";
import Arrival from "../components/Arrival/Arrival";
// import Instagram from "../components/Instagram/Instagram";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      onAnimationComplete={() => setStartAnimation(true)}
      className="w-full bg-inherit md:bg-white"
    >
      <Hero startAnimation={startAnimation} />
      <VideoSection startAnimation={startAnimation} />
      <FemaleImage startAnimation={startAnimation} />
      <Favorite startAnimation={startAnimation} />
      <div className="relative hidden md:block w-svw h-fit">
        <Banner imgSrc={"/images/banner.webp"} startAnimation={startAnimation} />
        {/* <div className="flex w-fit h-fit absolute top-[65%] translate-y-1/2 left-[12%] translate-x-1/2">
          <Link
            to="/shop"
            className="btn-primary px-4 min-h-8 py-4 flex items-center text-lg"
          >
            Get this deal
            <img
              loading="lazy"
              src="/images/btnArrow.svg"
              className="w-[2vw] pl-1 max-w-[18px]"
              alt=""
            />
          </Link>
        </div> */}
      </div>
      <Range startAnimation={startAnimation} />
      <Category startAnimation={startAnimation} />
      <div className="relative hidden md:block w-fit h-fit">
        <motion.div
          key={startAnimation ? "start" : "stop"}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full h-fit relative"
        >
          <img
            src={"/images/banner2.webp"}
            alt="Splash"
            loading="lazy"
            className={`w-full h-auto object-cover transition-opacity duration-500 `}
          />
          {/* <div className="flex w-fit h-fit absolute top-[65%] translate-y-1/2 left-[12%] translate-x-1/2">
            <Link
              to="/shop"
              className="btn-primary2 px-4 min-h-8 py-4 flex items-center text-lg"
            >
              Get this deal
              <img
                loading="lazy"
                src="/images/btnArrow.svg"
                className="w-[2vw] pl-1 max-w-[18px]"
                alt=""
              />
            </Link>
          </div> */}
        </motion.div>
      </div>
      <div className="relative block md:hidden w-fit h-fit">
        <motion.div
          key={startAnimation ? "start" : "stop"}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full h-fit relative"
        >
          <img
            src={"/images/mdBanner.webp"}
            alt="Splash"
            loading="lazy"
            className={`w-full h-auto object-cover transition-opacity duration-500 `}
          />
          {/* <div className="flex w-fit h-fit absolute top-[15%] translate-y-1/2 right-4 xs:-right-[3%] xs:-translate-x-1/2">
            <Link
              to="/shop"
              className="btn-primary2 scale-75 xs:scale-100 sm:px-4 min-h-8 py-4 flex items-center text-sm sm:text-lg"
            >
              Get this deal
              <img
                loading="lazy"
                src="/images/btnArrow.svg"
                className="w-[2vw] pl-1 max-w-[18px]"
                alt=""
              />
            </Link>
          </div> */}
        </motion.div>
      </div>
      <Sellers startAnimation={startAnimation} />
      <HeartPeople startAnimation={startAnimation} />
      <Arrival startAnimation={startAnimation} />
      {/* <Instagram startAnimation={startAnimation} /> */}
    </motion.div>
  );
};

export default Home;
