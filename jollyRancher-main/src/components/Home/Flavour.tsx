// import Cart from "../Common/Cart";

function Flavour() {
  return (
    <section className="min-h-[774px] h-fit w-full relative flex flex-col justify-evenly items-center py-20">
      {/* <img
        src="/flavourTop.png"
        alt="Wave"
        className="absolute top-0 w-full z-40"
      /> */}
      <img
        src="/designTop.png"
        alt="DesignRight"
        className="absolute top-0 right-0 w-[40%] z-10 "
      />
      {/* <img
        src="/flavourBottom.png"
        alt="Wave"
        className="absolute bottom-0 w-full z-40"
      /> */}
      <h3 className="title text-6xl">
        Our <span>Products</span>
      </h3>
      <section className="px-[5vw] w-full h-fit min-h-full flex justify-center flex-wrap items-center gap-10 pt-10">
        <div className="product rounded-2xl h-fit  p-4 flex flex-col gap-4">
          <div className="h-fit w-full relative">
            <img src="/Product/product1.png" alt="product1" />
            <div className="absolute top-2 flex justify-center items-center left-2 bg-[#B5964D24] rounded-full p-3 w-6 h-6">
              <i
                className="fa fa-heart-o bg-[#B5964D14] text-[#B5964D] scale-75"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="relative h-fit flex items-center">
            <h4 className="text-[#B5964D] text-[16px] font-bold">
              Assorted Chocolate <br />
              Dates
            </h4>
            <p className="absolute right-0 text-[14px] font-semibold">
              <span className="fa fa-star text-[#FBAB2A] "></span> 4.9/5
            </p>
          </div>
        </div>
        <div className="product rounded-2xl p-4 flex flex-col gap-4">
          <div className="h-fit w-full relative">
            <img src="/Product/product2.png" alt="product1" />
            <div className="absolute top-2 flex justify-center items-center left-2 bg-[#B5964D24] rounded-full p-3 w-6 h-6">
              <i
                className="fa fa-heart-o bg-[#B5964D14] text-[#B5964D] scale-75"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="relative h-fit flex items-center">
            <h4 className="text-[#B5964D] text-[16px] font-bold">
              Assorted Chocolate <br />
              Dates
            </h4>
            <p className="absolute right-0 text-[14px] font-semibold">
              <span className="fa fa-star text-[#FBAB2A] "></span> 4.9/5
            </p>
          </div>
        </div>
        <div className="product rounded-2xl p-4 flex flex-col gap-4">
          <div className="h-fit w-full relative">
            <img src="/Product/product3.png" alt="product1" />
            <div className="absolute top-2 flex justify-center items-center left-2 bg-[#B5964D24] rounded-full p-3 w-6 h-6">
              <i
                className="fa fa-heart-o bg-[#B5964D14] text-[#B5964D] scale-75"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="relative h-fit flex items-center">
            <h4 className="text-[#B5964D] text-[16px] font-bold">
              Assorted Chocolate <br />
              Dates
            </h4>
            <p className="absolute right-0 text-[14px] font-semibold">
              <span className="fa fa-star text-[#FBAB2A] "></span> 4.9/5
            </p>
          </div>
        </div>
        <div className="product rounded-2xl p-4 flex flex-col gap-4">
          <div className="h-fit w-full relative">
            <img src="/Product/product4.png" alt="product1" />
            <div className="absolute top-2 flex justify-center items-center left-2 bg-[#B5964D24] rounded-full p-3 w-6 h-6">
              <i
                className="fa fa-heart-o bg-[#B5964D14] text-[#B5964D] scale-75"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="relative h-fit flex items-center">
            <h4 className="text-[#B5964D] text-[16px] font-bold">
              Assorted Chocolate <br />
              Dates
            </h4>
            <p className="absolute right-0 text-[14px] font-semibold">
              <span className="fa fa-star text-[#FBAB2A] "></span> 4.9/5
            </p>
          </div>
        </div>
      </section>
      <img
        src="/ltrs.png"
        alt="Wave"
        className="absolute bottom-0 md:-bottom-6 lg:-bottom-10 xl:-bottom-[8%] xl:rotate-0 md:-rotate-2 -rotate-4 w-svw z-30"
      />
    </section>
  );
}

export default Flavour;
