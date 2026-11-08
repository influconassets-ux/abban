import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import likeAnimation from "./lottie/like.json";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import People from "./pages/People";
import Media from "./pages/Media";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";
import { useCountryStore, useProductStore } from "./context/Product";
import newProductData from "./lib/NewProductlist.json";

function AnimatedRoutes() {
  const location = useLocation();
  const [showLoader, setShowloader] = useState(true);
  const setCountry = useCountryStore((state) => state.setCountry);
  const { setProducts } = useProductStore();
  const country = useCountryStore((state) => state.country);

  const resizeCloudinaryUrl = (url, width = 556, height = 502) => {
    if (!url.includes("/upload/")) return url; // skip if not a Cloudinary URL
    return url.replace("/upload/", `/upload/w_${width},h_${height},c_fill/`);
  };

  useEffect(() => {
    if (!country) return;

    // ORIGINAL API FETCH - Uncomment to use API instead of local JSON
    // const fetchProducts = async () => {
    //   try {
    //     const response = await fetch(
    //       `${import.meta.env.VITE_BACKEND_URL}/api/v1/products/get-all-products`
    //     );
    //     const data = await response.json();
    //     const updatedProducts = data.data.map((product) => {
    //       const matchedPrice = product.prices.find(
    //         (p) => p.country.toLowerCase() === country.toLowerCase()
    //       );
    //       const fallbackPrice = product.prices.find(
    //         (p) => p.country.toLowerCase() === "uae"
    //       );
    //       return {
    //         ...product,
    //         price: matchedPrice || fallbackPrice || product.prices[0],
    //         description:
    //           product.description ||
    //           "Premium handcrafted delight with irresistible taste.",
    //         primaryImage: resizeCloudinaryUrl(product.primaryImage),
    //         images: product.images.map((img) => resizeCloudinaryUrl(img)),
    //       };
    //     });
    //     setProducts(updatedProducts);
    //   } catch (err) {
    //     console.error("Failed to fetch products", err);
    //   }
    // };
    // fetchProducts();

    // Using local JSON data instead of API fetch
    const loadProducts = () => {
      try {
        const updatedProducts = newProductData.data
          .map((product) => {
            // Match user's country
            const matchedPrice = product.prices.find(
              (p) => p.country.toLowerCase() === country.toLowerCase()
            );

            // Fallback to UAE price if user's country not found
            const fallbackPrice = product.prices.find(
              (p) => p.country.toLowerCase() === "uae"
            );

            return {
              ...product,
              price: matchedPrice || fallbackPrice || product.prices[0],
              description:
                product.description ||
                "Premium handcrafted delight with irresistible taste.",
              primaryImage: resizeCloudinaryUrl(product.primaryImage),
              images: product.images.map((img) => resizeCloudinaryUrl(img)),
            };
          })
          .filter(
            (p) => p.name !== "Jolly Kunafa" && p.name !== "Abaka Kunafa"
          );

        setProducts(updatedProducts);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };

    loadProducts();
  }, [country]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://api.ipinfo.io/lite/me?token=${
            import.meta.env.VITE_IPINFO_TOKEN
          }`
        );
        const data = await response.json();
        setCountry(data.country);
      } catch (error) {
        console.error("Error fetching country:", error);
        // Fallback to UAE if country detection fails
        setCountry("UAE");
      }
    };
    fetchCountry();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/*" element={<Product />} />
        <Route path="/people" element={<People />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen h-fit overflow-x-hidden">
      {/* Initial Loader Overlay */}
      {isLoading && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500"
          style={{ opacity: isLoading ? 1 : 0 }}
        >
          <Lottie
            animationData={likeAnimation}
            loop={true}
            className="w-32 h-32 xl:w-56 xl:h-56"
          />
        </div>
      )}
      
      <Toaster
        position="top-center" // for success/error
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              /* optional custom styles */
            },
          },
          error: {
            duration: 3000,
            style: {
              /* optional custom styles */
            },
          },
        }}
      />
      {!isLoading && (
        <Router>
          <ScrollToTop />
          <div className="realtive h-fit">
            <Navbar />
          </div>
          <AnimatedRoutes />
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
