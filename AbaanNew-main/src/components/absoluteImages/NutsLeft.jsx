import React from "react";
import { motion } from "framer-motion";

export default function NutsLeft({ className = "drop-shadow-lg" }) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.3,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 24,
        },
      }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
      viewport={{ once: true }}
      src="/images/nuts.webp"
      alt="side_Chocolate"
      className={` ${className}`}
    />
  );
}
