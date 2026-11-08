import React from "react";
import { motion } from "framer-motion";
import NavigationIcon from "../components/NavigationIcon";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const founders = [
  {
    id: 1,
    name: "DEBASHISH NEOGI",
    role: "CO-FOUNDER & MD",
    image: "/images/debashish.jpg",
    bullets: [
      "A CA cum ICMA, he has led growth, expansion, and turnaround initiatives across international FMCG and consumer businesses.",
      "Previously, he held leadership roles at Marico and Kaya, scaling businesses across the Middle East, North Africa, and Southeast Asia.",
      "An active investor and mentor, he supports founders on strategy, growth, and capital allocation.",
      "At Abaan, he combines strategy, disciplined execution and financial prudence to build a globally relevant, enduring brand.",
    ],
  },
  {
    id: 2,
    name: "SAJU VARGHESE",
    role: "CO-FOUNDER & CEO",
    image: "/images/saju.jpg",
    bullets: [
      "A product of Eveready, Kolkata, with majors in marketing.",
      "He has a wealth of sales & marketing experience in the FMCG sector and has spent substantial years with Multinationals like Colgate Palmolive, Marico International and Sweets of Oman to name a few.",
      "He has travelled extensively within India, the Middle East, the Far East and Russia, gathering knowledge and skills in new product development and market positioning.",
      "He has built an extensive network and close relationships with strong FMCG distributors in several continents.",
    ],
  },
];

const teamHeads = [
  {
    id: 3,
    name: "M THIRUMALAI",
    role: "HEAD – DIGITAL / e-Comm / Q-Comm",
    image: "/images/thirumalai.jpg",
    bullets: [
      "CPG leader with 20+ years experience. Built and scaled e-Commerce businesses across India and emerging markets in Latam, Europe, Asia & Pacific from the ground up.",
      "As Global Digital & eCommerce Lead, he has architected omnichannel strategies, capability frameworks, and digital playbooks that accelerated growth across developing markets worldwide.",
      "Early bets on Quick Commerce, Social Commerce, and Hyperlocal — backed by landmark partnerships with Amazon, Flipkart, and Walmart — reflect a consistent ability to spot and scale the next wave before it arrives.",
    ],
  },
  {
    id: 4,
    name: "SWATI DWIVEDI",
    role: "HEAD – HUMAN RESOURCES",
    image: "/images/swati.jpg",
    bullets: [
      "Graduate, BIT Mesra | Postgraduate in Personnel Management, TISS Mumbai.",
      "Certified Facilitator and Executive Coach.",
      "20+ years of HR leadership across FMCG, manufacturing, and organizational development.",
      "Held HR leadership roles at Wipro, Marico, and Bajaj Auto.",
      "Expertise in Talent Management, Leadership Development, Succession Planning, and Culture Building.",
      "Core capability to build high-performance cultures and fostering future-ready teams across organizations in India and the Middle East.",
    ],
  },
  {
    id: 5,
    name: "SANJAY KHEMKA",
    role: "CFO – INDIA & ME",
    image: "/images/sanjay.jpg",
    bullets: [
      "A Finance Professional with 16+ years of experience.",
      "He is a CA, CS, CFA (US – All Levels) with an All India Rank 28 in the CA Final examination.",
      "He has mentored more than 40,000 students in Finance and IT and has worked across diverse organizations in finance leadership roles, including Fortune 500 companies like ITC Limited.",
      "Having partnered with businesses from startups to ₹2000+ crore enterprises as a Virtual CFO, he brings deep expertise in building stronger financial systems, better decision-making and providing fertile ground for sustainable growth.",
    ],
  },
  {
    id: 6,
    name: "PRASHANTH E",
    role: "GLOBAL HEAD – MARKETING & COMMS",
    image: "/images/prashanth.jpg",
    bullets: [
      "Educated at XIC, Mumbai, he has also specialized in Digital Marketing from London Business School.",
      "He has helped build many brands as writer and creative director through multi-national agencies like Ogilvy, Dentsu, TBWA and DDB Mudra in the last 20 years.",
      "He does not believe in resting on past laurels and is always looking for ways to learn from people, colleagues, brands and the world around him.",
      "He is passionate about what he does, be it Marketing or Padel (A great GenZ mentor and Padel coach).",
      "His focus lies on building brands through a range of new and niche products supported by both conventional and innovative marketing ideas.",
    ],
  },
];

export default function People() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen w-[100svw] pb-20 pt-[15vh]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-l-4 border-[#EC1D23] pl-6"
        >
          <p className="text-[#EC1D23] font-bold tracking-widest text-sm uppercase mb-2">
            The Brands Behind The Brand
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#36196A]">
            A company is only as good as its products.<br/>
            <span className="text-[#B5964D]">And People.</span>
          </h2>
        </motion.div>

        {/* Founders Section (Horizontal Cards) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          {founders.map((person) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full md:w-5/12 shrink-0 h-72 md:h-auto">
                <img
                  src={person.image}
                  alt={person.name}
                  onError={(e) => e.target.src = "https://via.placeholder.com/400x600?text=Photo"}
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col justify-center w-full">
                <ul className="text-[#646464] text-[13px] md:text-[14px] leading-snug space-y-2 mb-4 list-disc pl-4">
                  {person.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-3 border-t border-gray-200">
                  <h3 className="text-[#EC1D23] text-xl font-bold uppercase">{person.name}</h3>
                  <p className="text-[#646464] text-sm font-medium">{person.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Heads Section (Vertical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamHeads.map((person) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full aspect-[4/5] sm:aspect-auto sm:h-80 lg:h-64 xl:h-72">
                <img
                  src={person.image}
                  alt={person.name}
                  onError={(e) => e.target.src = "https://via.placeholder.com/400x500?text=Photo"}
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-4 border-b border-gray-200 pb-3">
                  <h3 className="text-[#EC1D23] text-lg font-bold uppercase">{person.name}</h3>
                  <p className="text-[#646464] text-xs font-medium">{person.role}</p>
                </div>
                <ul className="text-[#646464] text-[13px] leading-snug space-y-2 list-disc pl-4 flex-grow">
                  {person.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
