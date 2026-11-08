import React from "react";
import { motion } from "framer-motion";
import { products } from "../../lib/ProductList";
import NutsLeft from "../absoluteImages/NutsLeft";
import ChocolateRight from "../absoluteImages/ChocolateRight";
import ChocolateLeft from "../absoluteImages/ChocolateLeft";
import SplashImage from "../SplashImage/SplashImage";

export default function Range({ startAnimation }) {
  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-full overflow-hidden"
    >
      <div className="absolute -top-20 lg:-top-36 left-0 w-0 md:w-36 lg:w-60 z-[10]">
        <ChocolateLeft />
      </div>
      {/* <img
          loading="lazy"
          src="/images/sepLtoRwithCone.webp"
          alt="design top"
          className="w-dvw mix-blend-multiply absolute rotate-[1deg] -top-[4vw]"
        /> */}
      {/* <img
        loading="lazy"
        src="/images/topPattern.webp"
        alt="design top"
        className="w-dvw"
      /> */}
      <div className="pt-10 flex flex-col items-center h-fit gap-8 px-4 md:px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-4xl md:text-5xl lg:text-6xl pt-4 text-center">
            Our Different range of <span>Products</span>
          </h3>
          <p className="text-[#646464] text-center text-sm md:text-base">
            Browse through our different categories to find your favorite
            chocolate treats.
          </p>
        </div>
        <NutsLeft className="absolute w-0 md:w-28 lg:w-40 z-10 drop-shadow-lg top-[25%] -translate-y-1/2 right-[10%]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full xl:px-[13vw] md:px-[16vw] px-4 py-[8vh]">
          {products.map((card, index) => {
            return (
              <div key={index}>
                <Card imgSrc={card.imgSrc} title={card.name} isNew={card.isNew} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute -bottom-36 lg:-bottom-52 right-0 w-0 md:w-36 lg:w-60 z-10">
        <ChocolateRight />
      </div>
    </motion.div>
  );
}

function Card({ title, imgSrc, isNew }) {
  return (
    <div className="flex flex-col gap-5 w-full col-span-1 ">
      <div className="w-full relative">
        {isNew && (
          <motion.div 
            initial={{ scale: 0.8, rotate: -12 }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute -top-3 -left-3 z-10 bg-gradient-to-br from-[#EC1D23] to-[#8c1014] text-white text-xs font-black uppercase tracking-widest py-3 px-3 rounded-full shadow-[0_4px_12px_rgba(236,29,35,0.4)] flex items-center justify-center border-[3px] border-white"
            style={{ 
              width: '60px',
              height: '60px',
            }}
          >
            New!
          </motion.div>
        )}
        <SplashImage
          imgSrc={imgSrc}
          className="py-4 px-5 w-full aspect-square shadow-lg rounded-xl RangeCard"
        />
      </div>
      <h3
        style={{
          background: `linear-gradient(135deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)`,
        }}
        className="globalHeaderFont px-4 py-2 shadow-lg rounded-xl text-center text-xl"
      >
        <span>{title}</span>
      </h3>
    </div>
  );
}
