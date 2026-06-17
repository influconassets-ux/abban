import { useEffect, useState } from "react";
import NavigationIcon from "../components/NavigationIcon";
import { motion, AnimatePresence } from "framer-motion";
import ProductComponent from "../components/ProductComponent/ProductComponent";
import { useLocation } from "react-router-dom";
import { productList1, getProductById } from "../lib/ProductList";
import toast from "react-hot-toast";
import { useCountryStore, useProductStore } from "../context/Product";
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

let regionToastId;

const tabs = [
  "Description",
  //  "Additional Information", "Reviews"
];

export default function Product() {
  // const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [inView, setInView] = useState(0);
  const [inHeading, setInHeading] = useState("Description");
  const location = useLocation();
  const [product, setProduct] = useState(productList1[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const country = useCountryStore((state) => state.country);

  const resizeCloudinaryUrl = (url, width = 556, height = 502) => {
    if (!url.includes("/upload/")) return url; // skip if not a Cloudinary URL
    return url.replace("/upload/", `/upload/w_${width},h_${height},c_fill/`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const gottenId = location.pathname.replace("/shop/", "");
      if (!gottenId) return;
      const productGot = getProductById(gottenId);
      setProduct(productGot);
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://dashboardbackend-2jyt.onrender.com/api/v1/products/get-product/${gottenId}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();

        // Match user's country
        const matchedPrice = data.data.prices.find(
          (p) => p.country.toLowerCase() === country.toLowerCase(),
        );

        // Fallback to UAE price if user's country not found
        const fallbackPrice = data.data.prices.find(
          (p) => p.country.toLowerCase() === "uae",
        );

        const updatedProduct = {
          ...data.data,
          price: matchedPrice || fallbackPrice || data.data.prices[0],
          description:
            data.data.description ||
            "Premium handcrafted delight with irresistible taste.",
          primaryImage: resizeCloudinaryUrl(data.data.primaryImage),
          images: data.data.images.map((img) => resizeCloudinaryUrl(img)),
        };

        setProduct(updatedProduct);
      } catch (err) {
        if (!productGot) {
          setError(err.message);
        }
        console.error("Error fetching product:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [location.pathname, country]);

  // const showToast = () => {
  //   // Add a specific class to disable interactions for the whole page except the toast
  //   const overlay = document.createElement("div");
  //   overlay.id = "overlay";
  //   overlay.style.position = "fixed";
  //   overlay.style.top = "0";
  //   overlay.style.left = "0";
  //   overlay.style.width = "100%";
  //   overlay.style.height = "100%";
  //   overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  //   overlay.style.zIndex = "9998"; // Below the toast, but above other content
  //   document.body.appendChild(overlay);

  //   toast.custom(
  //     (t) => (
  //       <div
  //         className={`${
  //           t.visible ? "animate-enter" : "animate-leave"
  //         } fixed z-[9999] backdrop-blur-none bg-white shadow-xl px-6 py-4 rounded-xl`}
  //       >
  //         <p className="mb-3 text-center font-semibold text-black">
  //           ✅ Added to Cart!
  //         </p>
  //         <div className="flex justify-between gap-4">
  //           <button
  //             className="text-sm text-gray-600 hover:underline"
  //             onClick={() => {
  //               toast.dismiss(t.id);
  //               document.body.style.pointerEvents = "auto"; // Re-enable pointer events
  //               overlay.remove(); // Remove overlay
  //             }}
  //           >
  //             Continue Shopping
  //           </button>
  //           <button
  //             className="text-sm text-purple-600 font-medium hover:underline"
  //             onClick={() => {
  //               toast.dismiss(t.id);
  //               document.body.style.pointerEvents = "auto"; // Re-enable pointer events
  //               overlay.remove(); // Remove overlay
  //               navigate("/cart");
  //             }}
  //           >
  //             Go to Cart
  //           </button>
  //         </div>
  //       </div>
  //     ),
  //     {
  //       duration: Infinity, // Keep the toast visible indefinitely
  //       style: {
  //         pointerEvents: "auto", // Ensure toast can be interacted with
  //       },
  //     }
  //   );

  //   // Disable only page interactions, not the toast
  //   document.body.style.pointerEvents = "none";
  // };

  const handleCartAdd = () => {
    // let res = 0;
    // if (count > 0)
    //   res = addToCart({
    //     id: product._id,
    //     price: product.price,
    //     currency: product.currency || "AED",
    //     name: product.name,
    //     image: product.primaryImage,
    //     quantity: count,
    //   });
    // if (res == "success") {
    //   showToast();
    // } else {
    //   toast.custom(
    //     (t) => (
    //       <div
    //         className={`${
    //           t.visible ? "animate-enter" : "animate-leave"
    //         } bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-lg shadow-lg font-medium`}
    //       >
    //         ❌ Something went wrong!
    //       </div>
    //     ),
    //     {
    //       duration: 2500,
    //     }
    //   );
    // }
    if (regionToastId) {
      toast.dismiss(regionToastId); // dismiss the previous one
    }

    regionToastId = toast.custom(
      (t) => (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } bg-gradient-to-r from-red-100 via-red-50 to-red-100 border border-red-300 text-red-800 px-6 py-3 rounded-xl shadow-md font-semibold flex items-center gap-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
          <span>Oops! This service isn't available in your region yet.</span>
        </motion.div>
      ),
      { id: "region-toast" },
    );
  };

  const sortedTabs = [inHeading, ...tabs.filter((t) => t !== inHeading)];

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw]"
    >
      <section className="min-h-[30svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-8">
        <div className=" flex flex-col gap-8 h-fit pb-[5vh]">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Products
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">
                    <a href="/shop">Shop</a>
                  </h3>
                  <p className="">/</p>
                  <h3 className="">Product Detail</h3>
                </>
              }
            />
          </div>
        </div>
        <section className="bg-[#F8F4F1] relative w-fit px-4 py-10 rounded-2xl shadow-component h-fit md:bg-transparent mx-[6vw] lg:mx-0">
          <section className="w-full min-h-[60svh] flex justify-center h-fit items-center">
            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EC1D23] mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading product...</p>
              </div>
            ) : error ? (
              <div className="text-center text-red-600">
                <p>Error: {error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-[#EC1D23] text-white rounded-lg hover:bg-red-700"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="w-full md:w-[80%] h-fit flex flex-col lg:flex-row justify-center gap-6">
                <div className="md:hidden block">
                  <div className="w-full flex justify-start gap-1">
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="relative inline-block w-4 h-4">
                      <span className="fa fa-star absolute top-0 left-0 text-gray-600 w-full h-full"></span>
                      <span className="fa fa-star absolute top-0 left-0 text-[#FBAB2A] w-[80%] h-full overflow-hidden"></span>
                    </span>
                    <span className="font-archivo">(4.9/5)</span>
                  </div>
                  <p className="w-full text-[#212529] font-bold text-3xl pb-8">
                    {product.name}
                  </p>
                </div>
                <div className="flex justify-center gap-6 w-full lg:w-[60%]">
                  {/* Thumbnail column */}
                  <div className="w-[30%] lg:w-[20%] hidden md:flex flex-col items-center gap-6 my-auto">
                    {[1, 2, 3, 4].map((num, idx) => (
                      <img
                        loading="lazy"
                        onClick={() => setInView(idx)}
                        key={idx}
                        src={
                          product?.images?.[idx] || product?.primaryImage || ""
                        }
                        alt={`product-${num}`}
                        className={`w-[20%] mx-auto md:mx-0 md:w-[70%] h-[25%] rounded-lg cursor-pointer 
          ${
            idx === inView
              ? "border-2 border-red-400 bg-transparent"
              : "border border-transparent hover:border-blue-400 bg-[#FFFAF4]"
          } 
          transition-all duration-200`}
                      />
                    ))}
                  </div>

                  {/* Main preview */}
                  <div className="md:w-[70%] lg:w-[80%] rounded-xl flex justify-center items-center bg-[#FFFAF4] md:drop-shadow-md drop-shadow-xl">
                    <img
                      loading="lazy"
                      src={product?.primaryImage || ""}
                      alt="Main Product"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                {/* Thumbnail column */}
                <div className="w-full flex md:hidden drop-shadow-lg items-center gap-6 my-auto">
                  {[1, 2, 3, 4].map((num, idx) => (
                    <img
                      loading="lazy"
                      onClick={() => setInView(idx)}
                      key={idx}
                      src={
                        product?.images?.[idx] || product?.primaryImage || ""
                      }
                      alt={`product-${num}`}
                      className={`w-[20%] mx-auto md:mx-0 md:w-[70%] h-[25%] rounded-lg cursor-pointer 
          ${
            idx === inView
              ? "border-2 border-red-400 bg-transparent"
              : "border border-transparent hover:border-blue-400 bg-[#FFFAF4]"
          } 
          transition-all duration-200`}
                    />
                  ))}
                </div>
                <div className="lg:w-[40%] lg:flex-auto rounded-xl flex flex-col justify-start items-center p-6">
                  <div className="hidden md:flex w-full flex-col justify-start items-start">
                    <div className="w-full flex justify-start gap-1">
                      <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                      <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                      <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                      <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                      <span className="relative inline-block w-4 h-4">
                        <span className="fa fa-star absolute top-0 left-0 text-gray-600 w-full h-full"></span>
                        <span className="fa fa-star absolute top-0 left-0 text-[#FBAB2A] w-[80%] h-full overflow-hidden"></span>
                      </span>
                      <span className="font-archivo">(4.9/5)</span>
                    </div>
                    <p className="w-full text-[#212529] font-bold text-3xl pb-8">
                      {product.name}
                    </p>
                  </div>

                  <h4 className="text-[#646464] text-xl font-archivo">
                    {/* <p className="text-[#AAAAAA] text-[12px]">
                      {product.price?.currency || "AED"}{" "}
                      <span className="text-[#EC1D23] text-xl font-bold">
                        {product.price?.price || 0}
                      </span>
                    </p> */}
                    {product.description.length > 0
                      ? product.description
                      : "Discover the favorites that keep our customers coming back for more."}
                  </h4>
                  <div className="w-full h-[1px] bg-[#AAAAAA] my-8"></div>
                  <div className="w-full flex flex-col md:flex-row gap-3">
                    <div className="flex w-[50%] md:max-w-[300px] md:mx-0 mx-auto">
                      <button
                        onClick={() => {
                          if (count > 0) setCount((prev) => prev - 1);
                        }}
                        className="w-[35%] border border-[#AAAAAA] rounded-l-full px-4 min-h-8 py-3 flex items-center justify-center text-lg"
                      >
                        -
                      </button>
                      <button className="w-[35%] border-y-[1px] border-[#AAAAAA] px-4 min-h-8 py-3 flex items-center justify-center text-lg">
                        {count}
                      </button>
                      <button
                        onClick={() => setCount((prev) => prev + 1)}
                        className="w-[35%] border border-[#AAAAAA] rounded-r-full px-4 min-h-8 py-3 flex items-center justify-center text-lg"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex ">
                      <button
                        onClick={handleCartAdd}
                        className="btn-primary w-full justify-center px-4 min-h-8 py-3 flex items-center text-lg"
                      >
                        Add to Cart
                        <img
                          loading="lazy"
                          src="/images/btnArrow.svg"
                          className="w-[3vw] max-w-[20px]"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
          <section className="w-full min-h-[40svh] h-fit flex flex-col justify-center items-center">
            <div className="w-full md:w-[70%] flex flex-wrap md:flex-nowrap border-b-[1px] font-bold text-xl border-[#AAAAAA] relative">
              {sortedTabs.map((title, idx) => {
                const isActive = title === inHeading;
                return (
                  <motion.div
                    layout
                    key={title}
                    onClick={() => setInHeading(title)}
                    className={`relative pb-2 md:pb-4 pr-4 pl-1 cursor-pointer 
          ${idx === 0 ? "w-full md:w-auto" : "mt-2 md:mt-0"}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      layout: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  >
                    <motion.h3
                      className={`transition-colors duration-300 ${
                        isActive ? "text-[#EC1D23]" : "text-[#0F0200]"
                      }`}
                    >
                      {title}
                    </motion.h3>

                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-[50%] md:w-full h-[3px] bg-[#EC1D23] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={inHeading} // triggers animation on change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-[70%] flex flex-col gap-4 py-4 font-normal text-[16px] justify-between items-start leading-7"
              >
                <p className="text-[#787878]">
                  Discover the irresistible charm of Abaan&apos;s sweet
                  indulgences — crafted to delight every taste bud. Our
                  selection offers a fusion of rich flavors and premium
                  ingredients, made to satisfy cravings across all ages and
                  preferences. Each product is a joyful experience, wrapped in
                  quality and care.
                </p>
                <p className="text-[#787878]">
                  Whether it&apos;s creamy milk pops, fruity bursts, or tropical
                  treats, Abaan brings you moments of happiness in every bite.
                  Enjoy the goodness, share the delight, and make every occasion
                  memorable with our wide range of classic favorites and
                  exciting new arrivals.
                </p>
              </motion.div>
            </AnimatePresence>
          </section>
          <img
            loading="lazy"
            src="/images/topPattern.webp"
            alt="design top"
            className=" rotate-180 hidden md:block h-[10svh] -ml-4 absolute bottom-0 w-[100svw]"
          />
        </section>
      </section>
      <section className="bg-transparent md:bg-white w-full min-h-[60svh] h-fit">
        <MoreProducts />
      </section>
    </motion.main>
  );
}

function MoreProducts() {
  const products = newProductData.data;
  const [randomProducts, setRandomProducts] = useState([]);
  const [page, setPage] = useState(0); // 0-based page index
  const PRODUCTS_PER_PAGE = 4;
  const TOTAL_RANDOM = 12;

  useEffect(() => {
    if (products && products.length > 0) {
      // Shuffle and pick 12 random products
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, TOTAL_RANDOM));
      setPage(0); // Reset to first page on product change
    }
  }, [products]);

  // Calculate paginated products
  const paginatedProducts = randomProducts.slice(
    page * PRODUCTS_PER_PAGE,
    (page + 1) * PRODUCTS_PER_PAGE,
  );
  const totalPages = Math.ceil(randomProducts.length / PRODUCTS_PER_PAGE);

  const handleDotClick = (index) => {
    setPage(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full min-h-[60svh] relative h-fit flex flex-col gap-4 items-center justify-center"
    >
      <div className="flex flex-col w-[80%] min-h-[100vh] h-fit relative justify-center items-center gap-6 py-20">
        <div className="flex flex-col w-full h-fit gap-4 justify-center items-center">
          <h3 className="globalHeaderFont text-5xl text-center lg:text-6xl w-full">
            Realted <span>Products </span>
          </h3>
          <p className="text-[#646464]">Choose from some of related products</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="h-fit"
          >
            <ProductComponent productList={paginatedProducts} />
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <svg
              key={i}
              onClick={() => handleDotClick(i)}
              className={`${page === i ? "scale-150" : "cursor-pointer"} transition`}
              width="24"
              height="24"
              viewBox="0 0 24 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.5"
                width="17"
                height="17"
                rx="6.5"
                className="rounded-full"
                fill={page === i ? "#EC1D23" : "#E1E1E2"}
              />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
