import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NutsLeft from "../components/absoluteImages/NutsLeft";
import ChocolateLeft from "../components/absoluteImages/ChocolateLeft";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Media() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw] pb-20 flex flex-col justify-center items-center pt-[15vh] relative overflow-hidden bg-gradient-to-b from-white to-red-50/30"
    >
      {/* Decorative Floating Background Elements */}
      <motion.div 
        animate={floatAnimation} 
        className="absolute top-[20%] left-[5%] w-32 md:w-48 opacity-60 z-0"
      >
        <ChocolateLeft />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} 
        className="absolute bottom-[10%] right-[5%] w-24 md:w-40 opacity-70 z-0"
      >
        <NutsLeft />
      </motion.div>
      <img
        src="/images/dot2.webp"
        alt="Dots"
        className="absolute top-[30%] right-[15%] w-16 opacity-30 animate-pulse"
      />
      <img
        src="/images/triangle2.webp"
        alt="Triangle"
        className="absolute bottom-[20%] left-[20%] w-12 opacity-30 rotate-45"
      />

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-8 xl:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#EC1D23]/10 text-[#EC1D23] font-bold tracking-widest text-xs md:text-sm uppercase mb-4 border border-[#EC1D23]/20">
            Media & News
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#36196A] drop-shadow-sm">
            Exciting Updates <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC1D23] to-[#B5964D]">
              Are On The Way.
            </span>
          </h2>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-2xl p-10 md:p-16 max-w-2xl w-full relative overflow-hidden"
        >
          {/* Shine effect in background */}
          <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-[shine_4s_infinite]"></div>

          <div className="w-24 h-24 bg-gradient-to-br from-[#EC1D23] to-[#36196A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white animate-bounce" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          <h3 className="text-[#36196A] text-3xl md:text-4xl font-black mb-4 relative z-10">Cooking Up Content!</h3>
          <p className="text-[#646464] text-lg md:text-xl leading-relaxed mb-8 relative z-10">
            We're currently gathering the latest blogs, awards, and news. 
            Check back shortly to see what we've been up to!
          </p>
          <Link
            to="/"
            className="relative z-10 inline-flex items-center gap-2 bg-[#36196A] hover:bg-[#EC1D23] text-white px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_10px_20px_rgba(54,25,106,0.3)] hover:shadow-[0_10px_20px_rgba(236,29,35,0.4)]"
          >
            Return to Home
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
}
