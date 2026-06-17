import React from "react";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";

export default function Category({ startAnimation }) {
  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-[60svh] h-fit md:bg-white page_container_reverse relative w-[100svw]"
    >
      <div className="flex flex-col items-center h-fit gap-6 px-[10vw] py-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            Explore Our <span>Categories </span>
          </h3>
        </div>
        <ImageSlider />
      </div>
    </motion.div>
  );
}
