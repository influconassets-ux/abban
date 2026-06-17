import React from "react";
import { motion } from "framer-motion";
import ProductComponent from "../../ProductComponent/ProductComponent";
import { productList1 } from "../../../lib/ProductList";
import ChocolateLeft from "../../absoluteImages/ChocolateLeft";
// import { useProductStore } from "../../../context/Product";
import newProductData from "../../../lib/NewProductlist.json";
export default function Favorite({ startAnimation }) {
  // const { products } = useProductStore();

  const favoriteProducts = newProductData.data.filter((p) =>
    p.collections?.includes("Classic Favorites"),
  );
  console.log(favoriteProducts);

  const finalList = [...favoriteProducts]
    .slice(0, 4)
    .map((p) => ({
      ...p,
      para: p.description || "Indulge in our best-loved flavors.",
    }))
    .filter((item) => item.name !== "Jolly Kunafa" && item.name !== "Baklava");

  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-[100svh] page_container_reverse relative w-[100svw]"
    >
      <div className="absolute top-0 left-0 w-0 md:w-36 lg:w-60 z-[10]">
        <ChocolateLeft />
      </div>
      <img
        loading="lazy"
        src="/images/topPattern.webp"
        alt="design top"
        className="hidden md:block w-dvw"
      />
      <div className="flex flex-col items-center gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            Our <span>Classic </span>Favorites
          </h3>
          {/* <p className="text-[#646464]">
            Check out the top products our customers love
          </p> */}
        </div>
        <ProductComponent productList={finalList} />
      </div>
    </motion.div>
  );
}
