import { useEffect, useState } from "react";
import NavigationIcon from "../components/NavigationIcon";
import { useCartStore } from "../context/Cart";
import { useCountryStore } from "../context/Product";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

export default function Checkout() {
  const country = useCountryStore((state) => state.country);
  const [currency, setCurrency] = useState("د. إ");
  const [isChecked, setIsChecked] = useState(false);
  const items = useCartStore((state) => state.items);
  const [loading, setLoading] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();
  const [formData, setFormData] = useState([
    {
      fullName: "",
      isBillingSameAsShipping: false,
      shippingAddress: {
        fullName: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      billingAddress: {
        fullName: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      items: [],
    },
  ]);

  const getCurrencySymbol = (country) => {
    switch (country) {
      case "India":
        return "₹";
      case "Africa":
        return "R";
      default:
        return "د. إ";
    }
  };

  useEffect(() => {
    setCurrency(getCurrencySymbol(country));
  }, [country]);

  useEffect(() => {
    const savedShipping = JSON.parse(localStorage.getItem("shippingAddress"));
    const savedBilling = JSON.parse(localStorage.getItem("billingAddress"));
    
    if (savedBilling || savedShipping) {
      setFormData((prevData) => {
        const newData = [...prevData];
        if (savedBilling) {
          newData[0].billingAddress = savedBilling;
          newData[0].fullName = savedBilling.fullName;
        }
        if (savedShipping) {
          newData[0].shippingAddress = savedShipping;
        }
        return newData;
      });
    }
  }, []);

  useEffect(() => {
    setFormData((prev) =>
      prev.map((data) => ({
        ...data,
        items: items.map((item) => ({
          productId: item._id,
          country: "India", // replace with dynamic country if needed
          price: item.price,
          quantity: item.quantity,
        })),
      }))
    );
  }, [items]);

  const handleInputChange = (e, section, field) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      if (section === "shippingAddress" || section === "billingAddress") {
        newData[0][section] = {
          ...newData[0][section],
          [field]: e.target.value,
        };
      } else {
        newData[0][field] = e.target.value;
      }
      return newData;
    });
  };

  const handleSameAddressToggle = (e) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      const isChecked = e.target.checked;
      newData[0].isBillingSameAsShipping = isChecked;
      
      if (isChecked) {
        // When checking the box, copy shipping to billing
        // Only copy fields that have values in shipping address AND billing address is empty
        const shippingAddress = newData[0].shippingAddress;
        const billingAddress = { ...newData[0].billingAddress };
        
        // Copy each field only if it has a value in shipping address AND billing field is empty
        Object.keys(shippingAddress).forEach(key => {
          if (shippingAddress[key] && !billingAddress[key]) {
            billingAddress[key] = shippingAddress[key];
          }
        });
        
        newData[0].billingAddress = billingAddress;
      }
      // When unchecking, do nothing - keep the current billing address
      return newData;
    });
  };

  const placeOrder = async () => {
    if (!isChecked) {
      toast.error("Please agree to the Terms and Conditions.");
      return;
    }
    setLoading(true);

    let orderData = { ...formData[0] };

    // Inject country into billingAddress (always needed)
    orderData.billingAddress.country = country;
    orderData.fullName = orderData.billingAddress.fullName;

    // If user wants shipping = billing, clone billing to shipping
    if (orderData.isBillingSameAsShipping) {
      orderData.shippingAddress = { ...orderData.billingAddress };
    } else {
      orderData.shippingAddress.country = country;
    }

    // Inject country into each item
    orderData.items = orderData.items.map((item) => ({
      ...item,
      productId : item.productId,
      price: item.price.price,
      country,
    }));

    const isEmpty = (value) =>
      value === undefined ||
      value === null ||
      value === "" ||
      (typeof value === "number" && isNaN(value));

    const validateAddress = (address) => {
      return (
        !isEmpty(address.fullName) &&
        !isEmpty(address.phone) &&
        !isEmpty(address.addressLine1) &&
        !isEmpty(address.city) &&
        !isEmpty(address.state) &&
        !isEmpty(address.postalCode) &&
        !isEmpty(address.country)
      );
    };

    const isFormValid =
      !isEmpty(orderData.fullName) &&
      validateAddress(orderData.billingAddress) &&
      (orderData.isBillingSameAsShipping ||
        validateAddress(orderData.shippingAddress)) &&
      Array.isArray(orderData.items) &&
      orderData.items.length > 0;

    if (!isFormValid) {
      setLoading(false);
      toast.error(
        "Please fill in all required fields before placing the order."
      );
      return;
    }
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify(orderData.shippingAddress)
    );
    localStorage.setItem(
      "billingAddress",
      JSON.stringify(orderData.billingAddress)
    );
    console.log(orderData);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/order/place-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("❌ Order placement failed:", result.message || result);
        setLoading(false);
        toast.error("Failed to place order. Please try again.");
        return;
      }

      console.log("✅ Order placed:", result);
      setLoading(false);
      toast.success("🎉 Order placed successfully!");
      clearCart();
      toast.success("Redirecting you to the home page", {
        autoClose: 5000, // Toast will auto-close after 5 seconds
      });

      setTimeout(() => {
        navigate("/");
      }, 5000);
      // Optionally: clearCart(); navigate("/thank-you");
    } catch (error) {
      console.error("❌ Error placing order:", error);
      setLoading(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw]"
    >
      <section className="min-h-[30svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-5 md:gap-0">
        <div className=" flex flex-col gap-8 h-fit pb-[5vh]">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Checkout
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">
                    <a href="/shop">Cart</a>
                  </h3>
                  <p className="">/</p>
                  <h3 className="">Checkout</h3>
                </>
              }
            />
          </div>
        </div>
        <section className="bg-[#F8F4F1] pb-[15vh] w-[88svw] lg:w-full px-4 h-fit md:bg-transparent relative mx-[6vw] lg:mx-0">
          <section className="w-full min-h-[60svh] shadow-component flex pt-10 rounded-2xl justify-center h-fit items-center font-archivo">
            <div className="w-full lg:w-[85%] xl:w-[70%] h-fit flex flex-col lg:flex-row justify-center gap-10">
              <div className="w-full lg:w-[68%] flex flex-col px-[6vw] lg:px-0 h-fit gap-10 justify-start items-center pb-10">
                {/* Billing Address Form */}
                <div className="flex flex-col w-full h-fit justify-start items-center gap-6">
                  <div className="flex w-full flex-col justify-start items-center">
                    <h3 className="text-[#0F0200] font-bold w-full flex justify-start pb-2">
                      <p>Billing Address:</p>
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                    <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                      <label
                        htmlFor="billing_first_name"
                        className="ml-2 cursor-pointer"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Shivam"
                        id="billing_first_name"
                        name="billing_first_name"
                        value={
                          formData[0].billingAddress.fullName.split(" ")[0] ||
                          ""
                        }
                        onChange={(e) =>
                          handleInputChange(e, "billingAddress", "fullName")
                        }
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label
                        htmlFor="billing_last_name"
                        className="ml-2 cursor-pointer"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Gupta"
                        id="billing_last_name"
                        name="billing_last_name"
                        value={
                          formData[0].billingAddress.fullName.split(" ")[1] ||
                          ""
                        }
                        onChange={(e) => {
                          const firstName =
                            formData[0].billingAddress.fullName.split(" ")[0] ||
                            "";
                          handleInputChange(
                            {
                              target: {
                                value: `${firstName} ${e.target.value}`,
                              },
                            },
                            "billingAddress",
                            "fullName"
                          );
                        }}
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                    <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                      <label
                        htmlFor="billing_phone"
                        className="ml-2 cursor-pointer"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1234567890"
                        id="billing_phone"
                        name="billing_phone"
                        value={formData[0].billingAddress.phone || ""}
                        onChange={(e) =>
                          handleInputChange(e, "billingAddress", "phone")
                        }
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                    <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                      <label
                        htmlFor="billing_address1"
                        className="ml-2 cursor-pointer"
                      >
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        placeholder="Street Address"
                        id="billing_address1"
                        name="billing_address1"
                        value={formData[0].billingAddress.addressLine1 || ""}
                        onChange={(e) =>
                          handleInputChange(e, "billingAddress", "addressLine1")
                        }
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                    <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                      <label
                        htmlFor="billing_address2"
                        className="ml-2 cursor-pointer"
                      >
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        placeholder="Apartment, suite, unit, etc."
                        id="billing_address2"
                        name="billing_address2"
                        value={formData[0].billingAddress.addressLine2 || ""}
                        onChange={(e) =>
                          handleInputChange(e, "billingAddress", "addressLine2")
                        }
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                    <div className="relative flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label
                        htmlFor="billing_state"
                        className="ml-2 cursor-pointer"
                      >
                        State
                      </label>
                      <input
                        list="states"
                        id="billing_state"
                        name="billing_state"
                        placeholder="Select State"
                        value={formData[0].billingAddress.state || ""}
                        onChange={(e) =>
                          handleInputChange(e, "billingAddress", "state")
                        }
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                      <datalist id="states">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Rajasthan">Rajasthan</option>
                      </datalist>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                    <div className="relative flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label
                        htmlFor="billing_city"
                        className="ml-2 cursor-pointer"
                      >
                        City
                      </label>
                      <input
                        list="cities"
                        id="billing_city"
                        name="billing_city"
                        placeholder="Select City"
                        value={formData[0].billingAddress.city || ""}
                        onChange={(e) =>
                          handleInputChange(e, "billingAddress", "city")
                        }
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                      <datalist id="cities">
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Dehradun">Dehradun</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Guwahati">Guwahati</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Indore">Indore</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Kanpur">Kanpur</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Ludhiana">Ludhiana</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Noida">Noida</option>
                        <option value="Patna">Patna</option>
                        <option value="Pune">Pune</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Ranchi">Ranchi</option>
                        <option value="Surat">Surat</option>
                        <option value="Thane">Thane</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                      </datalist>
                    </div>
                    <div className="flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label
                        htmlFor="billing_postal"
                        className="ml-2 cursor-pointer"
                      >
                        Zip/ Postal Code
                      </label>
                      <input
                        type="text"
                        placeholder="110053"
                        id="billing_postal"
                        name="billing_postal"
                        value={formData[0].billingAddress.postalCode || ""}
                        onChange={(e) =>
                          handleInputChange(e, "billingAddress", "postalCode")
                        }
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="sameAddress"
                      checked={formData[0].isBillingSameAsShipping}
                      onChange={handleSameAddressToggle}
                      className="w-4 h-4"
                    />
                    <label htmlFor="sameAddress" className="text-[#646464]">
                      Is Shipping Address Same as Billing Address
                    </label>
                  </div>
                </div>

                {/* Shipping Address Form - Only show if not same as billing */}
                {!formData[0].isBillingSameAsShipping && (
                  <div className="flex flex-col w-full h-fit justify-start items-center gap-6">
                    <div className="flex w-full flex-col justify-start items-center">
                      <h3 className="text-[#0F0200] font-bold w-full flex justify-start pb-2">
                        <p>Shipping Address:</p>
                      </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                      <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_first_name"
                          className="ml-2 cursor-pointer"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="Shivam"
                          id="shipping_first_name"
                          name="shipping_first_name"
                          value={
                            formData[0].shippingAddress.fullName.split(
                              " "
                            )[0] || ""
                          }
                          onChange={(e) =>
                            handleInputChange(e, "shippingAddress", "fullName")
                          }
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                      <div className="flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_last_name"
                          className="ml-2 cursor-pointer"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Gupta"
                          id="shipping_last_name"
                          name="shipping_last_name"
                          value={
                            formData[0].shippingAddress.fullName.split(
                              " "
                            )[1] || ""
                          }
                          onChange={(e) => {
                            const firstName =
                              formData[0].shippingAddress.fullName.split(
                                " "
                              )[0] || "";
                            handleInputChange(
                              {
                                target: {
                                  value: `${firstName} ${e.target.value}`,
                                },
                              },
                              "shippingAddress",
                              "fullName"
                            );
                          }}
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                      <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_phone"
                          className="ml-2 cursor-pointer"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1234567890"
                          id="shipping_phone"
                          name="shipping_phone"
                          value={formData[0].shippingAddress.phone || ""}
                          onChange={(e) =>
                            handleInputChange(e, "shippingAddress", "phone")
                          }
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                      <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_address1"
                          className="ml-2 cursor-pointer"
                        >
                          Address Line 1
                        </label>
                        <input
                          type="text"
                          placeholder="Street Address"
                          id="shipping_address1"
                          name="shipping_address1"
                          value={formData[0].shippingAddress.addressLine1 || ""}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              "shippingAddress",
                              "addressLine1"
                            )
                          }
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                      <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_address2"
                          className="ml-2 cursor-pointer"
                        >
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit, etc."
                          id="shipping_address2"
                          name="shipping_address2"
                          value={formData[0].shippingAddress.addressLine2 || ""}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              "shippingAddress",
                              "addressLine2"
                            )
                          }
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                      <div className="relative flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_state"
                          className="ml-2 cursor-pointer"
                        >
                          State
                        </label>
                        <input
                          list="states"
                          id="shipping_state"
                          name="shipping_state"
                          placeholder="Select State"
                          value={formData[0].shippingAddress.state || ""}
                          onChange={(e) =>
                            handleInputChange(e, "shippingAddress", "state")
                          }
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                      <div className="relative flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_city"
                          className="ml-2 cursor-pointer"
                        >
                          City
                        </label>
                        <input
                          list="cities"
                          id="shipping_city"
                          name="shipping_city"
                          placeholder="Select City"
                          value={formData[0].shippingAddress.city || ""}
                          onChange={(e) =>
                            handleInputChange(e, "shippingAddress", "city")
                          }
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                      <div className="flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                        <label
                          htmlFor="shipping_postal"
                          className="ml-2 cursor-pointer"
                        >
                          Zip/ Postal Code
                        </label>
                        <input
                          type="text"
                          placeholder="110053"
                          id="shipping_postal"
                          name="shipping_postal"
                          value={formData[0].shippingAddress.postalCode || ""}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              "shippingAddress",
                              "postalCode"
                            )
                          }
                          className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-col w-full h-fit justify-start items-center gap-6">
                  <label className="relative cursor-pointer flex items-center w-full justify-center  text-[#646464] text-sm font-normal">
                    <input
                      type="checkbox"
                      className="peer hidden"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <div className="h-5 w-5 mr-2 border border-gray-300 rounded-sm peer-checked:bg-[#683292] peer-checked:text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <h3 className="text-sm">
                      By clicking the button, you agree to the{" "}
                      <a
                        href="/blog#termAndCondition"
                        className="text-[#EC1D23] leading-[100%]"
                      >
                        {" "}
                        Terms and Conditions
                      </a>
                    </h3>
                  </label>
                  <div className="flex w-full px-2 mr-[4vw]">
                    <button
                      onClick={placeOrder}
                      disabled={loading ? true : false}
                      className="btn-primary w-full justify-center px-4 gap-2 min-h-8 py-3 flex items-center text-lg "
                    >
                      {loading ? (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="#4F46E5"
                        >
                          <circle
                            cx="20"
                            cy="20"
                            r="18"
                            strokeOpacity="0.2"
                            strokeWidth="4"
                          />
                          <path d="M38 20a18 18 0 0 1-18 18" strokeWidth="4">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 20 20"
                              to="360 20 20"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </svg>
                      ) : (
                        <span>Place Order Now</span>
                      )}
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
              <ItemPreview currency={currency} />
            </div>
          </section>
          <img
            loading="lazy"
            src="/images/topPattern.webp"
            alt="design top"
            className=" rotate-180 hidden lg:block h-[10svh] -ml-4  absolute bottom-0 w-[100svw]"
          />
        </section>
      </section>
    </motion.main>
  );
}

function ItemPreview({ currency }) {
  const items = useCartStore((state) => state.items);

  const totalPrice = useCartStore((state) =>
    Number(
      state.items
        .reduce(
          (sum, item) =>
            sum +
            (typeof item.price === "object" ? item.price.price : item.price) *
              item.quantity,
          0
        )
        .toFixed(2)
    )
  );

  return (
    <section className="lg:w-[25%] lg:flex-auto rounded-2xl min-h-[15vh] max-h-fit border-t-[3px] border-[#683292] bg-white flex flex-col font-archivo justify-start items-center shadow-lg py-4">
      <div className="flex w-full flex-col justify-center items-center">
        <div className="flex items-center w-full py-4 text-sm justify-between px-7">
          <p className="text-[#0F0200] font-bold ">Items</p>
          <p className="text-[#0F0200] font-bold ">Price</p>
        </div>
        <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
      </div>
      <div className="flex w-full flex-col justify-center items-start">
        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col w-full items-start pt-5 px-6 text-sm gap-4"
            >
              <h3 className="text-[#0F0200] font-bold w-full flex justify-between">
                <p>
                  {item.quantity} X {item.name}
                </p>
                <p>
                  {currency}{" "}
                  {typeof item.price === "object"
                    ? item.price.price
                    : item.price}
                </p>
              </h3>
              <div className="flex gap-3 w-full">
                <h3 className="w-[20%] flex justify-start">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt=""
                    className="w-full"
                  />
                </h3>
                <h3 className="text-[#683292] font-bold text-[16px] w-[50%] flex justify-end items-center">
                  <p>Total Price: </p>
                </h3>
                <h3 className="text-[#0F0200] font-bold w-[30%] flex justify-end items-center">
                  <p>
                    {currency}{" "}
                    {(
                      (typeof item.price === "object"
                        ? item.price.price
                        : item.price) * item.quantity
                    ).toFixed(2)}
                  </p>
                </h3>
              </div>
              <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-col justify-center items-center">
        <div className="flex w-full flex-col items-center py-4 px-6 text-sm gap-6">
          <h3 className="text-[#0F0200] font-bold w-full flex justify-between">
            <p>Grand Total</p>
            <p className="text-[#EC1D23] font-semibold">
              {currency}
              {totalPrice}
            </p>
          </h3>
        </div>
      </div>
    </section>
  );
}
