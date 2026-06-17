import { motion } from "framer-motion";
import SplashImage from "../../SplashImage/SplashImage";
import { Link } from "react-router-dom";

export default function FemaleImage({ startAnimation }) {
  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-[50vh] h-fit w-[100svw] md:bg-white py-8"
    >
      <div className="w-full flex justify-center relative">
        <img
          loading="lazy"
          src="/images/dot1.webp"
          alt="DOt Img"
          className="w-20"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between w-full h-fit min-h-full">
        <div className="flex flex-col gap-6 md:flex-row justify-center md:px-[10vw] relative w-full md:w-[50%] py-4">
          <div className="relative flex justify-center w-full">
            {/* Centered shineback container with 80% width */}
            <div className="shineback w-[80%] md:w-full aspect-square absolute mx-auto z-10" />

            {/* Woman image */}
            <SplashImage
              imgSrc="/images/cool-woman.webp"
              className="relative z-20 md:px-0"
            />

            {/* Full-width bottom pattern image */}
            <img
              loading="lazy"
              src="/images/topPattern2.webp"
              alt="design top"
              className="absolute bottom-0 rotate-180 w-[100vw] min-h-[60px] z-40 left-0"
            />
          </div>
          <img
            loading="lazy"
            src="/images/triangle1.webp"
            alt="triangle"
            className="block md:hidden absolute top-10 right-10 w-14"
          />
          <div className="flex md:hidden -mt-10 relative z-[60] mx-auto w-fit h-fit">
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
        <div className="flex flex-col items-center md:items-start pt-[5vh] md:pt-[10vh] gap-8 relative max-h-fit justify-center w-full md:w-[50%] px-[6vw] py-4">
          <div className="globalHeaderFont text-5xl lg:pr-10 relative">
            Indulge in the rich flavors <br /> of <span>Dubai chocolates</span>
            <img
              loading="lazy"
              src="/images/triangle1.webp"
              alt="triangle"
              className="hidden md:block absolute bottom-0 right-20 w-10"
            />
          </div>
          <p className="text-[#646464]">
            From decadent Kunafa pistachio truffles to smooth date-filled delights,
            <br /> explore our selection of traditional Middle Eastern chocolate
            treats.
          </p>
          <div className="hidden md:flex w-fit h-fit">
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
      <div className="hidden md:flex justify-end pr-10 -mt-16">
        <img
          loading="lazy"
          src="/images/halfCircle.webp"
          alt="img4"
          className="w-32"
        />
      </div>
    </motion.div>
  );
}
