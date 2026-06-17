import React from "react";
import { motion } from "framer-motion";
import ProductComponent from "../ProductComponent/ProductComponent";
import { productList3 } from "../../lib/ProductList";
import { useProductStore } from "../../context/Product";
import newProductData from "../../lib/NewProductlist.json";

export default function Arrival({ startAnimation }) {
  // const { products } = useProductStore();

  const arrivalProducts = newProductData.data.filter((p) =>
    p.collections?.includes("New Arrivals"),
  );

  // const fallbackProducts = productList3.filter(
  //   (fp) => !arrivalProducts.some((p) => p._id === fp._id)
  // );

  const finalList = [...arrivalProducts].map((p) => ({
    ...p,
    para: p.description || "Be the first to explore our freshest treats.",
  }));

  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-[100svh] bg-white relative w-[100svw]"
    >
      <div className="flex flex-col items-center gap-8 px-[10vw] py-16">
        <div className="flex flex-col gap-6 items-center">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            <span>New </span>Arrivals
          </h3>
          {/* <p className="text-[#646464]">
            Discover the favorites that keep our customers coming back for more.
          </p> */}
        </div>
        <ProductComponent productList={finalList} />
      </div>
    </motion.div>
  );
}
