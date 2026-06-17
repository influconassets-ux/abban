import React from "react";
import styles from "./Hero.module.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ startAnimation }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`${styles.container} globalPadding`}
    >
      <div className={styles.left}>
        <h1 className={`${styles.header} globalHeaderFont`}>
          Discover <span className={styles.highlight}>Sweet</span> Delights!
        </h1>
        <p className={styles.para}>
          Savor the exquisite flavor of artisanal Middle Eastern chocolates,
          crafted with love and the highest quality ingredients.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className={`${styles.btn} ${styles.btnD}`}
        >
          Browse Our Classic Flavors
          <img
            loading="lazy"
            src="/images/btnArrow.svg"
            className={styles.btnArw}
            alt=""
          />
        </button>
      </div>

      <div className={styles.right}>
        <img
          loading="lazy"
          src="/images/homepage/bgChoco.svg"
          className={styles.rtLayout}
          alt=""
        />

        <img
          fetchPriority="high"
          src="/images/main_Img1.webp"
          className={`${styles.heroImage} rounded-full`}
          alt=""
        />
      </div>

      <div className={styles.btnWrapper}>
        <Link to="/shop" className={`${styles.btn} ${styles.btnM}`}>
          Browse Our Classic Flavors{" "}
          <img
            loading="lazy"
            src="/images/btnArrow.svg"
            className={styles.btnArw}
            alt=""
          />
        </Link>
      </div>
      <img
        loading="lazy"
        src="/images/homepage/heroLayout.webp"
        className={styles.leftLayImage}
        alt=""
      />
    </motion.div>
  );
};

export default Hero;
