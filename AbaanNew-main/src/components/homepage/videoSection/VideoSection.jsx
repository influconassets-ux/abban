import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function VideoSection({ startAnimation }) {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-[30svh] md:bg-white flex justify-start py-[10vh] gap-8 md:gap-16 flex-col items-center"
    >
      <div className="flex justify-start flex-col items-center gap-6">
        <h2 className="globalHeaderFont text-4xl sm:text-5xl md:text-6xl text-center">
          <span>Kunafa </span>Chocolates!
        </h2>
        <p className="text-[#646464] text-center px-[10vw] md:px-[20vw]">
          Kunafa Chocolates by Abaan Chocolates Dubai combine crispy Middle
          Eastern kunafa layers with smooth premium chocolate, offering a
          luxurious, irresistible treat that balances crunch and velvety
          richness in every bite. Perfect for dessert lovers!
        </p>
      </div>
      <div className="relative h-fit w-full flex justify-center py-10">
        <div className="absolute inset-0 w-[76vw] left-1/2 -translate-x-1/2 h-full hidden md:flex justify-center items-center">
          <img
            loading="lazy"
            className="w-[100%] h-[110%]"
            src="/images/videoBack.webp"
          />
          <div className="absolute z-10 w-[95%] h-full">
            {/* Splashes */}
            <img
              loading="lazy"
              src="/images/splashLeft.webp"
              className="absolute -left-10 md:-left-28 lg:-left-32 top-1/2 -translate-y-1/2 w-32 sm:w-52 z-10"
            />
            <img
              loading="lazy"
              src="/images/splashRight.webp"
              className="absolute -right-10 md:-right-24 lg:-right-32 top-2/3 -translate-y-1/2 w-32 sm:w-52 z-10"
            />
          </div>
        </div>
        <div className="w-[80%] md:w-[72vw] box-border rounded-2xl h-fit relative z-20 overflow-hidden">
          {!videoReady && (
            <img
              src="/images/videodefault.webp"
              alt="Video Placeholder"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            />
          )}
          <video
            src="/video/AbaanNewVideo.mp4"
            className={`w-full rounded-2xl transition-opacity duration-700  ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoReady(true)}
          ></video>
        </div>
      </div>
      <div className="flex ">
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
    </motion.div>
  );
}
