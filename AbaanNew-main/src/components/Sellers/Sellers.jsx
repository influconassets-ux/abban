import React from "react";
import { motion } from "framer-motion";
import ProductComponent from "../ProductComponent/ProductComponent";
import { productList2 } from "../../lib/ProductList";
import { useProductStore } from "../../context/Product";
import newProductData from "../../lib/NewProductlist.json";
export default function Sellers({ startAnimation }) {
  const products = newProductData.data;

  const kunafa = products.find(
    (p) =>
      p.collections?.some((col) => col.toLowerCase().includes("kunafa")) ||
      p.tags?.some((tag) => tag.toLowerCase().includes("kunafa")),
  );

  // const baklava = products.find(
  //   (p) =>
  //     p.collections?.some((col) => col.toLowerCase().includes("baklava")) ||
  //     p.tags?.some((tag) => tag.toLowerCase().includes("baklava"))
  // );

  const milk_eclair = products.find((p) =>
    p.name?.toLowerCase().includes("milk eclairs"),
  );

  const choco_eclair = products.find((p) =>
    p.name?.toLowerCase().includes("chocolate eclairs"),
  );

  let selected = [];
  if (kunafa) selected.push(kunafa);
  // if (baklava) selected.push(baklava);
  if (milk_eclair) selected.push(milk_eclair);
  if (choco_eclair) selected.push(choco_eclair);

  // Fallback to productList1 if not enough
  const fallbackProducts = productList2.filter(
    (fp) => !selected.some((p) => p && p._id === fp._id),
  );
  const finalList = [...selected, ...fallbackProducts].slice(0, 4).map((p) => ({
    ...p,
    para: p.description || "Indulge in our best-loved flavors.",
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
            Our <span>Best </span>Sellers
          </h3>
          <p className="text-[#646464]">
            Discover the favorites that keep our customers coming back for more.
          </p>
        </div>
        <ProductComponent productList={finalList} />
      </div>
    </motion.div>
  );
}
