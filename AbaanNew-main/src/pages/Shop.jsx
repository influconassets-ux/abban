import NavigationIcon from "../components/NavigationIcon";
import ProductComponent from "../components/ProductComponent/ProductComponent";
import SearchInterface from "../components/Shop_Search";
import { motion } from "framer-motion";
import NutsRight from "../components/absoluteImages/NutsRight";
import NutsLeft from "../components/absoluteImages/NutsLeft";
import ChocolateRight from "../components/absoluteImages/ChocolateRight";
import ChocolateLeft from "../components/absoluteImages/ChocolateLeft";
import { useProductStore } from "../context/Product"; // <== import your product store
import { useEffect, useState } from "react";
import useHashTarget from "../lib/useHashTarget";
import newProductData from "../lib/NewProductlist.json";
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

export default function Shop() {
  const products = newProductData.data;
  const [searchTerm, setSearchTerm] = useState("");

  // Helper function (now always uses full products list)
  const getProductsByCollection = (collectionName) => {
    const lowerCaseCollectionName = collectionName.toLowerCase();
    const filtered = products.filter((p) =>
      p.collections?.some((col) =>
        col.toLowerCase().includes(lowerCaseCollectionName),
      ),
    );
    const merged = [...filtered].slice(0, 4);
    return merged.map((p) => ({
      ...p,
      para:
        p.description ||
        "Discover the favorites that keep our customers coming back for more.",
    }));
  };

  const Favourite = () => {
    const kunafa = products.filter((p) =>
      p.collections?.includes("Classic Favorites"),
    );

    const baklava = products.find(
      (p) =>
        p.collections?.some((col) => col.toLowerCase().includes("baklava")) ||
        p.tags?.some((tag) => tag.toLowerCase().includes("baklava")),
    );

    const eclair = products.find(
      (p) =>
        p.collections?.some((col) => col.toLowerCase().includes("eclair")) ||
        p.tags?.some((tag) => tag.toLowerCase().includes("eclair")),
    );

    let selected = [...kunafa];

    // Fallback to productList1 if not enough

    return [...selected].slice(0, 4).map((p) => ({
      ...p,
      para: p.description || "Indulge in our best-loved flavors.",
    }));
  };

  const Sellers = () => {
    const kunafa = products.find(
      (p) =>
        p.collections?.some((col) => col.toLowerCase().includes("kunafa")) ||
        p.tags?.some((tag) => tag.toLowerCase().includes("kunafa")),
    );

    const baklava = products.find(
      (p) =>
        p.collections?.some((col) => col.toLowerCase().includes("baklava")) ||
        p.tags?.some((tag) => tag.toLowerCase().includes("baklava")),
    );

    const milk_eclair = products.find((p) =>
      p.name?.toLowerCase().includes("milk eclairs"),
    );

    const choco_eclair = products.find((p) =>
      p.name?.toLowerCase().includes("chocolate eclairs"),
    );

    let selected = [];
    if (kunafa) selected.push(kunafa);
    if (baklava) selected.push(baklava);
    if (milk_eclair) selected.push(milk_eclair);
    if (choco_eclair) selected.push(choco_eclair);

    // Fallback to productList1 if not enough

    return [...selected, ...products].slice(0, 4).map((p) => ({
      ...p,
      para: p.description || "Indulge in our best-loved flavors.",
    }));
  };

  // Main_Section should always show Favorites
  const favoritesList = Favourite().filter(
    (item) => item.name !== "Jolly Kunafa" && item.name !== "Baklava",
  );

  const bestSellers = Sellers().filter(
    (item) => item.name !== "Jolly Kunafa" && item.name !== "Baklava",
  );

  // Define other product sections
  // const bestSellers = getProductsByCollection("Best Sellers");
  const newArrivals = getProductsByCollection("New Arrivals");

  // getProductsByTag stays the same (also uses restProducts)
  const getProductsByTag = (collectionName) => {
    const lowerCaseCollectionName = collectionName.toLowerCase();
    const filtered = products.filter((p) =>
      p.tags?.some((col) =>
        col.toLowerCase().includes(lowerCaseCollectionName),
      ),
    );
    const merged = [...filtered].slice(0, 4);
    return merged.map((p) => ({
      ...p,
      para:
        p.description?.length > 0
          ? p.description
          : "Discover the favorites that keep our customers coming back for more.",
    }));
  };

  const eclairsProducts = getProductsByTag("Eclairs");
  const toffeesProducts = getProductsByTag("Toffee");
  const lollipopProducts = getProductsByTag("pops");
  const candyProducts = getProductsByTag("Candy");
  const baklavaProducts = getProductsByTag("Baklava");
  const mouldChocolateProducts = getProductsByTag("Chocolate bar");
  const kunafaDubaiChocolatesProducts = getProductsByTag("Kunafa");

  const productList = [
    {
      titleStart: "Our ",
      titleRed: "Classic ",
      titleEnd: "Favorites",
      para: "Check out our top products that our customers love.",
      section: Main_Section,
      product: favoritesList,
    },
    {
      titleStart: "",
      titleRed: "Kunafa Dubai Chocolate",
      titleEnd: "",
      id: "kunafa",
      para: "An Arabian Classic in a chocolate form",
      section: Section2,
      product: kunafaDubaiChocolatesProducts,
    },
    // {
    //   titleStart: "",
    //   titleRed: "Baklava",
    //   id: "baklava",
    //   titleEnd: "",
    //   para: "Discover the favorites that keep our customers coming back for more.",
    //   section: Section,
    //   product: baklavaProducts,
    // },
    {
      titleStart: "",
      titleRed: "Eclairs",
      titleEnd: "",
      para: "Fast moving Eclairs range with rich creamy centers",
      section: Section,
      product: eclairsProducts,
    },
    {
      titleStart: "Our ",
      titleRed: "Best ",
      titleEnd: "Sellers",
      para: "",
      section: Section2,
      product: bestSellers,
    },
    {
      titleStart: "",
      titleRed: "New ",
      titleEnd: "Arrivals",
      para: "",
      section: Section2,
      product: newArrivals,
    },
    {
      titleStart: "",
      titleRed: "Toffees",
      titleEnd: "",
      para: "",
      section: Section3,
      product: toffeesProducts,
    },
    // {
    //   titleStart: "",
    //   titleRed: "Lollipop",
    //   titleEnd: "",
    //   para: "",
    //   section: Section2,
    //   product: lollipopProducts,
    // },
    {
      titleStart: "",
      titleRed: "Candies",
      titleEnd: "",
      para: "",
      section: Section3,
      product: candyProducts,
    },
    {
      titleStart: "",
      titleRed: "Chocolate bar",
      titleEnd: "",
      id: "choco-bar",
      para: "",
      section: Section3,
      product: mouldChocolateProducts,
    },
  ];

  // Sort productList so the section with a title matching the search term goes first, but do not filter or hide any sections
  let sortedProductList = productList;
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    const matchIndex = productList.findIndex(
      (list) =>
        (list.titleRed && list.titleRed.toLowerCase().includes(term)) ||
        (list.titleStart && list.titleStart.toLowerCase().includes(term)) ||
        (list.titleEnd && list.titleEnd.toLowerCase().includes(term)),
    );
    if (matchIndex > 0) {
      // Move the matched section to the top
      const matched = productList[matchIndex];
      sortedProductList = [
        matched,
        ...productList.slice(0, matchIndex),
        ...productList.slice(matchIndex + 1),
      ];
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw] scroll-mt-28"
    >
      <div className="min-h-[60svh] page_container pt-[20vh] flex flex-col gap-8">
        <h3 className="globalHeaderFont w-full text-6xl text-center">
          Our Products
        </h3>
        <div className="w-full flex justify-center">
          <NavigationIcon
            navigation={
              <>
                <h3>Products</h3>
              </>
            }
          />
        </div>
      </div>
      {/* <SearchInterface searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      {/* Show search results as a list if searching */}
      {sortedProductList.map((list) => (
        <list.section
          key={list.id}
          titleStart={list.titleStart}
          titleRed={list.titleRed}
          titleEnd={list.titleEnd}
          para={list.para}
          productList={list.product}
        />
      ))}
    </motion.div>
  );
}

function Main_Section({
  titleStart = "",
  titleRed = "",
  titleEnd = "",
  para,
  productList,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute top-0 left-0 w-0 md:w-36 lg:w-60 z-[3]">
        <ChocolateLeft />
      </div>
      <div className="w-[100svw] max-h-fit relative pt-[4vw] lg:pt-[7vw]">
        <img
          loading="lazy"
          src="/images/sepRtoLwithCone.webp"
          alt="design top"
          className="w-dvw mix-blend-multiply absolute -top-[7vw]"
        />
      </div>
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16 sm:-mt-4 lg:-mt-10 lgmd:mb-10">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList} />
      </div>
    </motion.div>
  );
}

function Section({
  titleStart = "",
  titleRed = "",
  titleEnd = "",
  id = "",
  para,
  productList,
}) {
  const hash = useHashTarget();
  useEffect(() => {
    if (hash === id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        }, 700);
      }
    }
  }, [hash, id]);

  const shouldRenderImmediately = hash === id;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      // only apply whileInView if NOT hash scroll
      {...(!shouldRenderImmediately && {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      })}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw] scroll-mt-32"
    >
      <div className="absolute -top-20 lg:-top-44 left-0 w-0 md:w-36 lg:w-60 ">
        <ChocolateLeft />
      </div>
      <img
        loading="lazy"
        src="/images/sepRtoLwithCone.webp"
        alt="design top"
        className="w-dvw mix-blend-multiply absolute -top-[8.5vw] -rotate-2 md:-top-[8vw] lg:-top-[6.5vw] "
      />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16 sm:-mt-4 lg:-mt-10 xl:pt-[2vw]">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList} />
      </div>
      <div className="absolute -top-20 right-0 w-0 md:w-28 lg:w-40 z-10">
        <NutsRight />
      </div>
    </motion.div>
  );
}

function Section2({
  titleStart = "",
  titleRed = "",
  titleEnd = "",
  id = "",
  para,
  productList,
}) {
  const hash = useHashTarget();
  useEffect(() => {
    if (hash === id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        }, 700);
      }
    }
  }, [hash, id]);

  const shouldRenderImmediately = hash === id;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      // only apply whileInView if NOT hash scroll
      {...(!shouldRenderImmediately && {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      })}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw] scroll-mt-32 "
    >
      <div className="absolute -top-20 left-0 w-0 md:w-28 lg:w-40 z-10">
        <NutsLeft />
      </div>
      {titleEnd !== "Arrivals" && (
        <img
          loading="lazy"
          src="/images/sepLtoRwithCone.webp"
          alt="design top"
          className="w-dvw mix-blend-multiply absolute -top-[7vw] md:-top-[5vw] -left-0.5 rotate-2"
        />
      )}

      {titleEnd === "Arrivals" && (
        <img
          loading="lazy"
          src="/images/sepRtoLwithCone.webp"
          alt="design top"
          className="w-dvw mix-blend-multiply absolute -top-[7vw] xl:-top-[5vw] "
        />
      )}
      <div className="flex flex-col items-center mb-10 h-fit gap-8 px-[10vw] pb-16 sm:-mt-4 lg:-mt-10 xl:pt-[6.5vw] md:pt-[5vw] lg:pt-[12vw] pt-[3vw]">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList} />
      </div>
      <div className="absolute -top-40 lg:-top-56 right-0 w-0 md:w-36 lg:w-60 z-10">
        <ChocolateRight />
      </div>
    </motion.div>
  );
}

function Section3({
  titleStart = "",
  titleRed = "",
  titleEnd = "",
  para,
  id = "",
  productList,
}) {
  const hash = useHashTarget();
  useEffect(() => {
    if (hash === id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        }, 700);
      }
    }
  }, [hash, id]);

  const shouldRenderImmediately = hash === id;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      // only apply whileInView if NOT hash scroll
      {...(!shouldRenderImmediately && {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      })}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw] scroll-mt-32"
    >
      {titleRed !== "Candies" && (
        <img
          loading="lazy"
          src="/images/sepLtoRwithCone.webp"
          alt="design top"
          className="w-dvw mix-blend-multiply absolute -top-[7vw] md:-top-[5vw] -left-0.5 rotate-2"
        />
      )}
      {titleRed === "Candies" && (
        <img
          loading="lazy"
          src="/images/sepRtoLwithCone.webp"
          alt="design top"
          className="w-dvw mix-blend-multiply absolute -top-[7vw] xl:-top-[5vw] "
        />
      )}
      <div className="absolute -top-20 lg:-top-44 left-0 w-0 md:w-36 lg:w-60  ">
        <ChocolateLeft />
      </div>
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16 pt-[2vw] lg:pt-[4vw]">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList} />
      </div>
      <div className="absolute -top-40 lg:-top-56 right-0 w-0 md:w-36 lg:w-60 z-10">
        <ChocolateRight />
      </div>
    </motion.div>
  );
}
