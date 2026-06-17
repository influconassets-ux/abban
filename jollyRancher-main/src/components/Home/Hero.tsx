import RightArrow from "../Common/RightArrow";

function Hero() {
  return (
    <section className="w-full min-h-[100dvh] h-fit relative">
      <h3 className=" text-3xl md:text-6xl title text-center pt-[8vh]">
        Indulge in <span>Premium Chocolate</span> <br />
        Experience
      </h3>
      <div className="flex flex-col justify-center items-center py-[13vh] h-fit relative">
        <img
          src="/blue.png"
          alt="Hero"
          className="w-[50%] absolute left-[38%] top-[55%] -translate-y-1/2 -translate-x-1/2 max-w-[280px]"
        />
        <img
          src="/orange.png"
          alt="Hero"
          className="w-[50%] max-w-[330px] relative z-40"
        />
        <img
          src="/green.png"
          alt="Hero"
          className="w-[50%] absolute left-[62.3%] top-[55%] -translate-y-1/2 -translate-x-1/2 max-w-[260px]"
        />
        <img
          src="/star.png"
          alt="Star"
          className="absolute top-[24%] -translate-y-1/2 left-[34%] -translate-x-1/2 w-[80px] rotate-[-14deg]"
        />
        <img
          src="/star.png"
          alt="Star"
          className="absolute bottom-[24%] -translate-y-1/2 right-[29%] -translate-x-1/2 w-[50px] rotate-[-14deg]"
        />
        <img
          src="/star.png"
          alt="Star"
          className="absolute top-[18%] -translate-y-1/2 right-[29%] scale-110 -translate-x-1/2  rotate-[15deg]"
        />
        <svg
          width="1100"
          height="700"
          viewBox="0 0 1107 812"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[47%] max-w-[80vw] max-h-[70vh] -translate-y-1/2"
        >
          <g filter="url(#filter0_f_3_512)">
            <ellipse
              cx="536.125"
              cy="440.562"
              rx="230.344"
              ry="216.422"
              fill="#B5964D"
              fill-opacity="0.66"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_512"
              x="82.3984"
              y="0.757812"
              width="907.453"
              height="879.609"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="111.691"
                result="effect1_foregroundBlur_3_512"
              />
            </filter>
          </defs>
        </svg>
        <button
          style={{
            boxShadow: "0px 4px 36px 0px #B5964DD9",
          }}
          className="bg-[#B5964D] w-[120px] h-10 absolute bottom-0 md:bottom-18 translate-y-1/2 flex justify-center text-[12px] font-semibold rounded-4xl items-center gap-0.5"
        >
          Buy Now <RightArrow size="14px" />
        </button>
      </div>
      <img
        src="/ltrs.png"
        alt="Wave"
        className="absolute bottom-0 md:-bottom-6 lg:-bottom-10 xl:-bottom-[8%] xl:rotate-0 md:-rotate-2 -rotate-4 w-svw z-30"
      />
      <img
        src="/leafRight.png"
        alt="Wave"
        className="absolute bottom-0 right-0 max-w-[30%] max-h-[39%]"
      />
      <img
        src="/leafLeft.png"
        alt="Wave"
        className="absolute bottom-0 left-0 max-w-[30%] max-h-[39%]"
      />
    </section>
  );
}

export default Hero;
