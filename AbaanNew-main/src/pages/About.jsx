import { useState } from "react";
import NavigationIcon from "../components/NavigationIcon";
import { motion } from "framer-motion";
import NutsLeft from "../components/absoluteImages/NutsLeft";
import ChocolateLeft from "../components/absoluteImages/ChocolateLeft";
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

const statistics1 = [
  {
    number: 30,
    type: "Countries",
  },
  {
    number: 10,
    type: "Variants",
  },
  {
    number: 100,
    type: "Years of experience",
  },
  {
    number: 143,
    type: "Dedicated Employees",
  },
  {
    number: 30,
    type: "Channel Partners",
  },
];

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw]"
    >
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="min-h-[30svh] h-fit page_container pt-[20vh] md:pb-[8vw] flex flex-col justify-between relative gap-8"
      >
        <div className=" flex flex-col gap-8 h-fit">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            About Us
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">About Us</h3>
                </>
              }
            />
          </div>
        </div>

    
      </motion.section>
      <ImageSection />
      <Banner />
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-transparent md:page_container_reverse min-h-[40svh] h-fit w-[100svw] flex flex-col items-center gap-6"
      >
        <div className="flex flex-col gap-4 items-center max-h-fit relative py-[4vh]">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl text-center px-[2vw]">
            Our <span>Network and Growth</span>
          </h3>
          {/* <p className="text-[#646464] text-center px-[1vw]">
            What makes us special through our impressive statistics.
          </p> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 w-full  xl:px-[6vw] xl:gap-3 px-[10vw] pb-20 md:pb-2 gap-8">
          {statistics1.map((card, index) => {
            return (
              <div
                key={index}
                className="col-span-1 w-full flex justify-center h-fit pb-2 drop-shadow-lg"
              >
                <div className="w-[60%] sm:w-full">
                <Card1 number={card.number} type={card.type} />
                </div>
              </div>
            );
          })}
        </div>
        <section className="bg-transparent min-h-[30svh] h-fit w-[100svw] flex flex-col items-center gap-6">
          <div className="w-full h-fit">
            <div className="w-full flex items-center justify-center relative md:h-[70vh]">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                src="/images/staticsMap.webp"
                alt=""
                className="h-auto md:h-full drop-shadow-md"
              />
              <div className="absolute top-2/3 -translate-y-1/2 left-0 w-0 md:w-36 lg:w-60 z-[10]">
                <ChocolateLeft />
              </div>
            </div>
            <div className=" flex flex-col gap-4 items-center max-h-fit relative pt-[4vh]">
              <h3 className="globalHeaderFont text-3xl lg:text-4xl text-center px-[2vw]">
                Presence in<span> 30 </span>countries across{" "}
                <span>GCC, India,</span> and <span>Africa.</span>
              </h3>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row gap-4 justify-center items-center">
            <div className="flex gap-4 flex-wrap justify-center items-center px-1">
              <Countries country="Bahrain" />
              <Countries country="UAE" />
              <Countries country="India" />
              <Countries country="Singapore" />
            </div>
            <div className="flex gap-4 flex-wrap justify-center items-center">
              <Countries country="Thailand" />
              <Countries country="Kuwait" />
              <Countries country="Qatar" />
              <Countries country="Maldives" />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row gap-4 justify-center items-center px-1">
            <div className="flex flex-wrap gap-4 justify-center items-center ">
              <Countries country="Bangladesh" />
              <Countries country="KSA" />
              <Countries country="Oman" />
              <Countries country="China" />
            </div>
            <div className="flex gap-4 flex-wrap justify-center items-center">
              <Countries country="Iraq" />
              <Countries country="Hong Kong" />
              <Countries country="Nepal" />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row gap-4 justify-center px-1">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Countries country="Saudi Arabia" />
              <Countries country="Lebanon" />
              <Countries country="Seychelles" />
              <Countries country="Yemen" />
            </div>
            <div className="flex gap-4 flex-wrap justify-center items-center">
              <Countries country="Guyana" />
              <Countries country="Uganda" />
              <Countries country="Jordan" />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row gap-4 pb-6 justify-center px-1">
            <div className="flex gap-4 flex-wrap justify-center items-center">
              <Countries country="Australia" />
              <Countries country="Iran" />
              <Countries country="Vietnam" />
            </div>
            <div className="flex gap-4 flex-wrap justify-center items-center">
              <Countries country="Somalia" />
              <Countries country="Malaysia" />
              <Countries country="Israel" />
              <Countries country="Ivory Coast" />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-[7vh] items-center max-h-fit relative py-[4vh]">
            <h3 className="globalHeaderFont text-5xl lg:text-6xl text-center px-[2vw]">
              Our<span> Certifications</span>
            </h3>
          </div>
          <div className="grid justify-center md:grid-cols-2 pb-[7vh] h-fit w-full lg:grid-cols-6 gap-6 md:px-[6vw] lg:px-[4vw] px-[10vw] relative">
            <div className="lg:col-span-2">
            <Certification
              title="AGA Certification"
              para="Confirms compliance with recognized global food safety and quality standards.."
              titleColor="#EC1D23"
              image="/images/CertrificateLogo/AGAlogo.svg"
            />
            </div>

            <div className="lg:col-span-2">
            <Certification
              title="ISO Certification"
              para=" Demonstrates adherence to international standards of quality management"
              titleColor="#36196A"
              image="/images/CertrificateLogo/ISO.webp"
            />
            </div>

            <div className="lg:col-span-2">
            <Certification
              title="HACCP Certification"
              para="Guarantees rigorous food safety and quality standards across production processes"
              titleColor="#EC1D23"
              image="/images/CertrificateLogo/HACCP.webp"
            />
            </div> 
            <div className="lg:col-span-3 mx-auto lg:w-full flex justify-end">
             <Certification
                title="Eiac Certification"
                para="Certifies compliance with internationally recognized conformity and accreditation standards."
                titleColor="#EC1D23"
                image="/images/CertrificateLogo/Emirates.webp"
              /></div>
            
            <div className="md:col-span-2 lg:col-span-3 mx-auto lg:w-full flex justify-start">
               <Certification
                title="Halal Certification"
                para="Meets the dietary needs of diverse consumer segments, including Halal compliant markets."
                titleColor="#36196A"
                image="/images/CertrificateLogo/halal-logo.svg"
              />
              </div>
            
            <NutsLeft className="absolute w-0 md:w-28 lg:w-36 md:right-0 z-10 drop-shadow-lg top-[50%] -translate-y-1/2 right-[2%]" />
          </div>
        </section>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="page_container_reverse min-h-[80svh] h-fit w-[100svw] flex flex-col items-center pt-[4vh]"
      >
        <div className="flex flex-col gap-4 items-center max-h-fit relative py-[4vh]">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl text-center px-[2vw]">
            Major Outlets<span> You'll find us in</span>
          </h3>
        </div>
        <div className="w-full flex justify-center items-center h-fit py-[3vh]">
          <img
            loading="lazy"
            src="/images/Available.webp"
            alt=""
            className="w-[90%] md:w-[60%]"
          />
        </div>
        <div className="w-full grid grid-cols-2 md:flex gap-6 justify-center items-center h-fit py-[6vh] px-[10%] md:px-0">
          <img
            loading="lazy"
            src="/images/about_bottom1.webp"
            alt=""
            className="md:w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
          <img
            loading="lazy"
            src="/images/about_bottom2.webp"
            alt=""
            className="md:w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
          <img
            loading="lazy"
            src="/images/about_bottom3.webp"
            alt=""
            className="md:w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
          <img
            loading="lazy"
            src="/images/about_bottom4.webp"
            alt=""
            className="md:w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
        </div>
      </motion.section>
    </motion.div>
  );
}

function ImageSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-[50vh] h-fit w-[100svw] md:bg-white py-8 md:pt-20 relative"
    >
          <img
          loading="lazy"
          src="/images/sepLtoRwithCone.webp"
          alt="design top"
          className=" hidden md:block absolute -left-0.5 -top-[7vw] xl:-top-[6.5vw] mix-blend-multiply rotate-3 w-dvw"
        />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly w-full h-fit min-h-full">
        <div className="globalHeaderFont block lg:hidden text-4xl text-center md:text-5xl lg:pr-10 relative">
          Our <span>Journey </span>Began
          <br /> With a Simple Dream
        </div>
        <div className="relative block lg:hidden w-[80%] text-[#646464] mt-3">
          <p
            className={`relative transition-all duration-300 ${
              !expanded ? "line-clamp-4 lg:line-clamp-none" : ""
            }`}
          >
            A casual chat between two entrepreneurs over a bar of chocolate
            after an intense game of tennis, turned into a dream of sharing
            quality chocolates at affordable prices to the world. They named
            their dream project Abaan, which means “noble or virtuous” in
            Arabic.
            <br />
            <br />
            For over three years now, Abaan Chocolates has been dedicated to
            creating premium-quality chocolates that delight customers in over
            30 countries. From classic products to innovative recipes and
            trending flavours, Abaan has one for everyone. Be it celebrating a
            special occasion or simply indulging in your love for chocolate,
            Abaan promises an exceptional experience with every bite.
            <img
              loading="lazy"
              src="/images/triangle2.webp"
              alt="triangle"
              className="absolute bottom-2/3 translate-y-1/2 -right-20 w-10"
            />
            <img
              loading="lazy"
              src="/images/dot2.webp"
              alt="Dot Img"
              className="w-20 absolute -bottom-6 -right-6"
            />
          </p>

          {/* Show toggle only on small & medium screens (lg:hidden) */}
          <div className="mt-2 lg:hidden">
            <button
              className="text-[#B67352] font-semibold"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
        <div className="flex justify-center px-[5vw] relative w-full md:w-[80%] lg:w-[40%] py-4">
          <div className="relative">
            <div className=" shineback_About w-full h-full"></div>
            <img
              loading="lazy"
              src="/images/about1.webp"
              alt=""
              className="relative "
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pt-[10vh] gap-8 relative max-h-fit justify-center w-[80%] lg:w-[50%] md:pr-[12vw] py-4">
          <div className="globalHeaderFont lg:block hidden text-4xl text-center md:text-5xl lg:pr-10 relative">
            Our <span>Journey </span>Began
            <br /> With a Simple Dream
          </div>
          <div className="relative w-[80%] lg:block hidden text-[#646464]">
            <p
              className={`relative transition-all duration-300 ${
                !expanded ? "line-clamp-4 lg:line-clamp-none" : ""
              }`}
            >
              A casual chat between two entrepreneurs over a bar of chocolate
              after an intense game of tennis, turned into a dream of sharing
              quality chocolates at affordable prices to the world. They named
              their dream project Abaan, which means “noble or virtuous” in
              Arabic.
              <br />
              For over three years now, Abaan Chocolates has been dedicated to
              creating premium-quality chocolates that delight customers in over
              30 countries. From classic products to innovative recipes and
              trending flavours, Abaan has one for everyone. Be it celebrating a
              special occasion or simply indulging in your love for chocolate,
              Abaan promises an exceptional experience with every bite.
              <img
                loading="lazy"
                src="/images/triangle2.webp"
                alt="triangle"
                className="absolute bottom-2/3 translate-y-1/2 -right-20 w-10"
              />
              <img
                loading="lazy"
                src="/images/dot2.webp"
                alt="Dot Img"
                className="w-20 absolute -bottom-6 -right-6"
              />
            </p>

            {/* Show toggle only on small & medium screens (lg:hidden) */}
            <div className="mt-2 lg:hidden">
              <button
                className="text-[#B67352] font-semibold"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
          <div className="flex w-fit h-fit">
            <Link
              to="/shop"
              className="btn-primary px-4 min-h-8 py-4 flex items-center text-lg"
            >
              Explore Our Menu
              <img
                loading="lazy"
                src="/images/btnArrow.svg"
                className="w-[3vw] max-w-[20px]"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <NutsLeft className="absolute w-0 md:w-28 lg:w-40 z-10 drop-shadow-lg top-[50%] -translate-y-1/2 right-[4%]" />
    </motion.div>
  );
}

function Banner() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative hidden md:block w-full h-fit"
      >
        <img loading="lazy" src="/images/about_banner1.webp" alt="" />
        <img
          loading="lazy"
          src="/images/about_banner2.webp"
          alt=""
          className="absolute z-10 right-0 h-[100%] bottom-0"
        />
        <div className="flex w-fit h-fit absolute scale-75 lg:scale-100 top-[80%] left-[10%] lg:left-[18%] translate-x-1/2 -translate-y-1/2">
          {/* <Link
            to="/blog"
            className="btn-primary2 px-4 min-h-8 py-4 flex items-center text-lg"
          >
            Read More
            <img
              loading="lazy"
              src="/images/btnArrow.svg"
              className="w-[2vw] pl-1 max-w-[18px]"
              alt=""
            />
          </Link> */}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative block md:hidden w-full h-fit"
      >
        <img loading="lazy" src="/images/about_banner3.webp" alt="" />
        <div className="flex w-fit h-fit absolute scale-50 xs:scale-75 sm:scale-90 top-[60%] xs:left-[6%] -translate-y-1/2">
          {/* <Link
            to="/blog"
            className="btn-primary2 px-4 min-h-8 py-4 flex items-center text-lg"
          >
            Read More
            <img
              loading="lazy"
              src="/images/btnArrow.svg"
              className="w-[2vw] pl-1 max-w-[18px]"
              alt=""
            />
          </Link> */}
        </div>
      </motion.div>
    </>
  );
}

function Card1({ number, type }) {
  return (
    <div className="border-b-2  border-[#EC1D23] bg-white rounded-2xl min-w-full w-fit flex items-center justify-center sm:aspect-video ">
      <div className=" flex flex-col items-center max-h-fit h-full gap-3 md:gap-0 xl:gap-[12%] relative py-3 px-1 md:px-0 sm:py-[3vh] xl:py-[4%]">
        <h3 className="globalHeaderFont text-3xl sm:text-6xl lg:text-5xl xl:text-6xl">
          {number}
          <span>
            {" "}
            <sup>+</sup>
          </span>
        </h3>
        <p className="text-[#646464] lg:mt-2 xl:mt-0 text-xs sm:text-xl lg:text-lg ">
          {type}
        </p>
      </div>
    </div>
  );
}

function Countries({ country }) {
  return (
    <div className="flex gap-1 ">
      <img
        loading="lazy"
        src="/images/location_about.webp"
        alt=""
        className="drop-shadow-md w-8"
      />
      <p className="text-[#36196A] whitespace-nowrap text-2xl lg:text-xl font-bold drop-shadow-lg">
        {country}
      </p>
    </div>
  );
}

function Certification({ title, titleColor, para, image }) {
  return (
    <div className="flex gap-3 flex-col py-2 max-w-[400px] items-center">
      <img src={image} className="h-10 xl:h-14 object-contain" alt="" />
      <p className={`text-[${titleColor}] font-bold text-center text-3xl`}>
        {title}
      </p>
      <p className="text-[#646464] text-center text-[18px]">{para}</p>
    </div>
  );
}


