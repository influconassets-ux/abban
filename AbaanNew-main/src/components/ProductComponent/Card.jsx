import React, { useState } from "react";
// import { useCartStore } from "../../context/Cart";
import SplashImage from "../SplashImage/SplashImage";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

let regionToastId;

function Card({ bgColor = "#F7F2F7", name, para, price, imgSrc, _id, isNew }) {
  const [like, setLike] = useState(false);
  // const addToCart = useCartStore((state) => state.addToCart);
  // const navigate = useNavigate();

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
    // res = addToCart({
    //   _id: _id,
    //   price: price,
    //   name: name,
    //   image: imgSrc,
    //   quantity: 1,
    // });
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
          } bg-gradient-to-r from-red-100  via-red-50 to-red-100 border border-red-300 text-red-800 px-6 py-3 rounded-xl shadow-md font-semibold flex items-center gap-2`}
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
      { id: "region-toast" } // fixed custom ID
    );
  };

  return (
    <div
      style={{ fontFamily: "'Archivo', sans-serif" }}
      className="flex h-full flex-col gap-4 bg-white p-5 itemCard rounded-xl drop-shadow-md max-w-[400px]"
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="flex justify-center items-center relative"
      >
        {isNew && (
          <motion.div 
            initial={{ scale: 0.8, rotate: -12 }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute -top-2 -left-2 z-10 bg-gradient-to-br from-[#EC1D23] to-[#8c1014] text-white text-[11px] font-black uppercase tracking-widest py-3 px-3 rounded-full shadow-[0_4px_12px_rgba(236,29,35,0.4)] flex items-center justify-center border-[2px] border-white"
            style={{ 
              width: '50px',
              height: '50px',
            }}
          >
            New!
          </motion.div>
        )}
        <SplashImage
          bgColor={bgColor}
          imgSrc={imgSrc}
          className="rounded-xl w-56 h-56"
        />
        <button
          onClick={() => setLike((prev) => !prev)}
          className={`absolute w-8 h-8 rounded-full top-3 p-[6px] left-3 ${
            like ? "bg-yellow-500" : "bg-white"
          }`}
        >
          <img
            loading="lazy"
            src="/images/heart.webp"
            alt="heart"
            className="bg-transparent"
          />
        </button>
      </div>
      <div className="w-full flex justify-between font-bold text-[#0F0200] px-2 h-auto min-h-[2.5rem] pb-2 items-start gap-2">
        <h3 className="flex-1 font-archivo leading-tight">{name}</h3>
        <div className="shrink-0 flex items-center justify-end font-semibold font-archivo">
          <span className="fa fa-star text-[#FBAB2A] pr-1"></span>4.9/5
        </div>
      </div>
      {/* <p className="text-[#646464] font-normal px-2">
        Discover the favorites that keep our customers coming back for more.
      </p> */}
      {/* <div className="flex items-center font-semibold justify-between px-2">
        <h3 className="text-[#EC1D23] font-archivo">
          <a href={`/shop/${_id}`}>Get Inquiry</a>
        </h3>
        <button
          onClick={handleCartAdd}
          className="bg-[#683292] group p-[10px] rounded-full w-10"
        >
          <img
            loading="lazy"
            src="/images/cartBox.webp"
            alt="cart"
            className="origin-center group-hover:scale-x-[-1] transition hover:drop-shadow-md"
          />
        </button>
      </div> */}
    </div>
  );
}

export default React.memo(Card);
