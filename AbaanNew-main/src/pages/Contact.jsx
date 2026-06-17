import { useState } from "react";
import LiveMap from "../components/LiveMap/LiveMap";
import NavigationIcon from "../components/NavigationIcon";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.8,
  ease: "easeInOut",
};

const contactList = [
  {
    img: "/images/contact_s1.webp",
    title: "Our Location",
    para: "7CP6+7JC - Al Qusais Industrial Area - Al Qusais Industrial Area 5 - Dubai - United Arab Emirates",
  },
  {
    img: "/images/contact_s2.webp",
    title: "Phone Number",
    para: "+97143258925",
  },
  {
    img: "/images/contact_s3.webp",
    title: "Email Us At",
    para: "info@abaanchocolate.com",
  },
];

let regionToastId;

export default function Contact() {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const showToast = (para, error = false) => {
    return toast.custom(
      (t) => (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } bg-gradient-to-r from-red-100 via-red-50 to-red-100 border border-red-300 ${
            error ? "text-red-800" : "text-[#36196A]"
          } font-bold px-6 py-3 rounded-xl shadow-md  flex items-center gap-2`}
        >
          <span>{para}</span>
        </motion.div>
      ),
      { id: "region-toast" }
    );
  };

  const handleForm = async () => {
    if (
      formData.f_name &&
      formData.l_name &&
      (formData.email || formData.phone) &&
      formData.email
    ) {
      const formBody = new URLSearchParams();
      formBody.append("First_Name", formData.f_name);
      formBody.append("Last_Name", formData.l_name);
      formBody.append("email", formData.email);
      formBody.append("phone", formData.phone || "");
      formBody.append("message", formData.message || "");

      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzBSQl2EM-uWeZuqlD1stpPFevELkPrszR43J5zfSIMrc2ebHZ9BU6WF1pO1Tc80CK2/exec",
          {
            method: "POST",
            body: formBody,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const data = await res.text(); // response is plain text, not JSON
        if (data.toLowerCase() === "success") {
          if (regionToastId) {
            toast.dismiss(regionToastId); // dismiss the previous one
          }

          regionToastId = showToast("Thank You.");
        } else {
          if (regionToastId) {
            toast.dismiss(regionToastId); // dismiss the previous one
          }

          regionToastId = showToast(
            "Service Unavailable! Try After some time",
            true
          );
        }
      } catch (err) {
        if (regionToastId) {
          toast.dismiss(regionToastId); // dismiss the previous one
        }
        console.log(err);
        regionToastId = showToast(
          "Service Unavailable! Try After some time",
          true
        );
      } finally {
        setFormData({
          f_name: "",
          l_name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw]"
    >
      <section className="min-h-[40svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-8">
        <div className=" flex flex-col gap-8 h-fit">
          <h3 className="globalHeaderFont w-full text-7xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Contact Us
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">Contact Us</h3>
                </>
              }
            />
          </div>
        </div>

        <img
          loading="lazy"
          src="/images/topPattern.webp"
          alt="design top"
          className=" rotate-180 h-[10svh] hidden md:block w-dvw"
        />
      </section>
      <section className=" bg-inherit font-archivo md:bg-white min-h-screen h-fit flex flex-col items-center gap-8 px-[5vw] md:px-[10vw] md:pt-28 pb-2">
        <div className=" flex flex-col gap-7 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4 text-center">
            Get in <span>Touch </span>With Us
          </h3>
          <p className="text-[#646464] text-center">
            Reach out and connect with us today for any inquiries or assistance!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 w-full gap-y-8 h-fit pt-[10vh]">
          <div className="col-span-2 lg:col-span-1 flex w-full flex-col xs:flex-row md:flex-col items-center justify-center xs:justify-between md:justify-center min-h-full h-fit gap-4 md:gap-6">
            {contactList.map((card, index) => {
              return (
                <Card
                  key={index}
                  img={card.img}
                  title={card.title}
                  para={card.para}
                />
              );
            })}
          </div>
          <section className="col-span-2 flex flex-col justify-center w-full items-start min-h-full h-fit gap-6 lg:ml-[10%] mb-10">
            <form
              action="get"
              className="grid grid-cols-2 gap-6 w-full max-w-[600px]"
            >
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="f_name"
                >
                  First Name :
                </label>
                <input
                  type="text"
                  id="f_name"
                  name="f_name"
                  value={formData.f_name}
                  onChange={handleChange}
                  className="h-[40px] rounded-3xl px-3 border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="l_name"
                >
                  Last Name :
                </label>
                <input
                  type="text"
                  id="l_name"
                  name="l_name"
                  value={formData.l_name}
                  onChange={handleChange}
                  className="min-h-[40px] rounded-3xl px-3 h-fit border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="email"
                >
                  Email address :
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="min-h-[40px] rounded-3xl px-3 h-fit border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="phone"
                >
                  Phone :
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="min-h-[40px] rounded-3xl px-3 h-fit border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-full flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="message"
                >
                  Message :
                </label>
                <textarea
                  rows={1}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] rounded-3xl h-fit border-[#E3E4E5] border resize-none px-3 py-2 overflow-hidden"
                />
              </div>
            </form>
            <div className="flex w-full md:w-fit h-fit justify-center">
              <button
                onClick={handleForm}
                className="text-white min-h-[40px] rounded-[4vw] flex py-[0.4vw] px-4 bg-[#EC1D23] font-archivo font-semibold
                text-[1.6vw] gap-1 shadow-[0px_2px_18px_2px_rgba(251,171,42,0.3)] transition-shadow duration-300 ease-in-out md:text-[0.9rem] h-fit items-center group"
              >
                Submit Now
                <img
                  loading="lazy"
                  src="/images/btnArrow.svg"
                  className="w-[3vw] max-w-[20px] scale-75 group-hover:scale-100 transition"
                  alt=""
                />
              </button>
            </div>
          </section>
        </div>
      </section>
      <LiveMap />
    </motion.div>
  );
}

function Card({ img, title, para }) {
  return (
    <div
      style={{
        boxShadow: "0px 2px 73px 2px rgba(0, 0, 0, 0.05)",
      }}
      className="flex box-border gap-6 xs:gap-2 md:gap-6 px-[8%] xs:px-[1%] md:px-[5%] bg-white py-[3%] w-full min-h-full md:min-h-[13vh] h-fit xs:h-auto md:h-fit items-center border-white border-[1px] rounded-[20px] overflow-y-hidden"
    >
      <img
        loading="lazy"
        src={img}
        alt=""
        className="w-6 md:w-12 h-6 md:h-12 rounded-full drop-shadow-md"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-archivo font-bold text-lg xs:text-xs md:text-lg text-[#0F0200]">
          {title}
        </h3>
        <p className="text-[#646464] w-[70%] text-sm xs:text-[8px] md:text-sm">
          {para}
        </p>
      </div>
    </div>
  );
}
