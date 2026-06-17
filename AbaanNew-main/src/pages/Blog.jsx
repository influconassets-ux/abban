import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import TermsAndCondition from "../components/TermAndCondition/TermAndCondition";
import ShopCategories from "../components/ShopCategories/ShopCategories";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

export default function Blog() {
  return (
    <div className="min-h-screen page_container ">
      <BlogPage />
    </div>
  );
}

const BlogPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen text-[#0F0200] px-4 sm:px-8 py-12 font-archivo"
    >

      <section className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        
      </section>

      {/* Terms and Conditions Section */}
      <section
        id="termAndCondition"
        className="max-w-6xl mx-auto border-t border-[#E0DDEA] pt-12 mt-20"
      >
        <h2 className="text-5xl text-[#ec1d23] font-bold mb-6 text-center">
          Abaan Terms and Conditions
        </h2>
        <TermsAndCondition />
      </section>
    </motion.main>
  );
};
