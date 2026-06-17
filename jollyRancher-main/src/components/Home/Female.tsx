import RightArrow from "../Common/RightArrow";

function Female() {
  return (
    <section className="min-h-[90vh] h-fit w-full relative flex justify-center items-center">
      {/* <img
        src="/waveDown.png"
        alt="Wave"
        className="absolute top-0 w-full z-40"
      /> */}
      {/* <img
        src="/femaleBottom.png"
        alt="Wave"
        className="absolute bottom-0 w-full z-40"
      /> */}
      <img
        src="/designTop.png"
        alt="DesignRight"
        className="absolute top-0 right-0 w-[40%] "
      />
      <div className="flex flex-col md:flex-row px-[3vw] w-full items-center h-full py-[40px]">
        <img
          src="/femaleImg.png"
          alt="femaleImg"
          className="w-[512px] min-w-[40%]"
        />
        <div className="flex flex-col items-center md:items-start gap-6">
          <h3 className="title text-3xl md:text-6xl font-normal tracking-[0.02em] relative">
            Indulge in the Exotic flavors of Dubai <span>Lollipops</span>
            <img
              src="/star.png"
              alt="Star"
              className="absolute -top-6 right-[17%] translate-x-1/2 w-[70px]"
            />
          </h3>
          <p className="md:text-[20px]">
            From decadent pistachio truffles to smooth date-filled delights,{" "}
            <br /> explore our selection of traditional Middle Eastern chocolate{" "}
            <br /> treats.
          </p>
          <button
            style={{
              boxShadow: "0px 2.25px 16.5px 2.25px #FBAB2A4D",
            }}
            className="bg-[#B5964D] px-3 rounded-4xl h-10 w-[131px] text-[12px] font-semibold flex justify-center items-center gap-0.5 relative"
          >
            Contact Us <RightArrow />
            <img
              src="/star.png"
              alt="Star"
              className="absolute bottom-[20%] translate-y-1/2 -right-3 translate-x-1/2 w-[30px]"
            />
            <img
              src="/star.png"
              alt="Star"
              className="absolute top-[20%] -translate-y-1/2 -left-3 -translate-x-1/2 w-[50px]"
            />
          </button>
        </div>
      </div>

      <img
        src="/rtls.png"
        alt="Wave"
        className="absolute bottom-0 md:-bottom-6 lg:-bottom-10 xl:-bottom-[9%] xl:-rotate-1 md:-rotate-2 -rotate-4 w-svw z-30"
      />
    </section>
  );
}

export default Female;
