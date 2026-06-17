import RightArrow from "../Common/RightArrow";

function Special() {
  return (
    <section className=" h-fit w-full relative flex flex-col justify-center items-center bg-white">
      <img
        src="/specialTop.png"
        alt="DesignRight"
        className="absolute top-0 right-0 w-[40%] z-10 "
      />
      <img src="/Offer.png" alt="Offer" className="h-full" />
      <div className="absolute min-h-fit h-[10%] max-h-[60px] left-1/6 top-[72%] -translate-y-1/2 -translate-x-1/2 max-w-[184px] w-fit flex items-center justify-center">
        <button
          style={{
            boxShadow: "0px 2.25px 16.5px 2.25px #FBAB2A4D",
          }}
          className="bg-[#B5964D] px-3 h-full w-full rounded-4xl text-[16px] font-semibold flex items-center justify-center gap-0.5"
        >
          Get this deal <RightArrow />
        </button>
      </div>
    </section>
  );
}

export default Special;
