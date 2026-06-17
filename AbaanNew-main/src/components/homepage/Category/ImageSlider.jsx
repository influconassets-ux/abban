import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "../../../customHooks/useMediaQuery";
import { useNavigate } from "react-router-dom";

const images = [
  { imgSrc: "dates.webp", title: "Choco Dates", to: "/shop" },
  { imgSrc: "kunafa.webp", title: "Kunafa", to: "/shop#kunafa" },
  { imgSrc: "baklava.webp", title: "Baklava", to: "/shop#baklava" },
  { imgSrc: "choco_Bar.webp", title: "Choco Bar", to: "/shop#choco-bar" },
];

export default function ImageSlider() {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);
  const isMedium = useMediaQuery("(min-width: 768px)");
  const controls = useAnimation();
  const [xOffset, setXOffset] = useState(0);
  const navigate = useNavigate();

  const cardWidth = isMedium ? 450 : 300; // adjust based on layout
  const gap = 32; // tailwind gap-8 = 2rem = 32px

  const updateWidth = () => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const offsetWidth = sliderRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  };

  useEffect(() => {
    const images = sliderRef.current?.querySelectorAll("img") || [];
    let loaded = 0;

    const handleLoad = () => {
      loaded += 1;
      if (loaded === images.length) {
        updateWidth();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
      }
    });

    return () => {
      images.forEach((img) => img.removeEventListener("load", handleLoad));
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setXOffset((prev) => {
        const next = prev - (cardWidth + gap);
        return Math.abs(next) > width ? 0 : next;
      });
    }, 2500); // every 3.5 seconds

    return () => clearInterval(interval);
  }, [width, isMedium]);

  useEffect(() => {
    controls.start({ x: xOffset, transition: { duration: 0.8, ease: "easeInOut" } });
  }, [xOffset]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="flex gap-8 cursor-grab active:cursor-grabbing"
        drag="x"
        animate={controls}
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={isMedium ? 0.05 : 0.1}
        dragTransition={{
          power: isMedium ? 0.1 : 0.2,
          timeConstant: isMedium ? 300 : 200,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="w-[80%] md:w-[47%] max-w-fit max-h-[400px] p-4 shadow-md rounded-2xl shrink-0 relative overflow-visible"
            style={{
              background: "linear-gradient(135deg,#F8EAE1 0%, #EFD7EF 100%)",
            }}
          >
            <img
              loading="lazy"
              src={`/images/${img.imgSrc}`}
              alt={img.title}
              className="rounded-2xl w-full max-w-[647px] max-h-[365px] object-cover object-center pointer-events-none"
            />
            <div
              onClick={() => navigate(img.to)}
              style={{
                background: "linear-gradient(135deg,#F8EAE1 0%, #EFD7EF 100%)",
              }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-2xl md:text-5xl globalHeaderFont whitespace-nowrap"
            >
              {img.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
