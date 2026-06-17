function Hear() {
  return (
    <section className="min-h-dvh h-fit w-full relative flex flex-col justify-center items-center gap-6">
      {/* <img
        src="/HearTop.png"
        alt="Wave"
        className="absolute top-0 w-full z-40"
      />
      <img
        src="/HearBottom.png"
        alt="Wave"
        className="absolute -bottom-1 w-full z-40"
      /> */}
      <img
        src="/designTop.png"
        alt="DesignRight"
        className="absolute top-0 right-0 w-[40%] "
      />
      <img
        src="/designBottom.png"
        alt="DesignLeft"
        className="absolute bottom-0 left-0 w-[38%] "
      />
      <h3 className="text-3xl md:text-6xl title text-center">
        Hear from Our <span> Happy</span> <br />
        <span>Chocolate</span> Lovers
      </h3>
      <p className="max-w-[772px] mx-[5vw] md:text-[20px] font-bold text-center">
        I recently discovered Jolly Products, and I have to say, they are simply
        fantastic! Each item is a delightful mix of fun and quality that brings
        a smile to your face. Their range is impressive, It's evident that a lot
        of thought goes into creating these products. Perfect for gifting kids
        or just treating yourself, Jolly Products truly enhance the joy of
        everyday life!
      </p>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <p className="text-[#b5964d] md:text-[18px] font-bold">
          Dinesh Chaturvedi
        </p>
        <p className="text-[12px] md:text-[14px]">Happy Customer</p>
        <div className="w-full flex justify-center gap-1 pt-1 text-[10px] md:text-[12px]">
          <span className="fa fa-star text-[#FBAB2A] "></span>
          <span className="fa fa-star text-[#FBAB2A] "></span>
          <span className="fa fa-star text-[#FBAB2A] "></span>
          <span className="fa fa-star text-[#FBAB2A] "></span>
          <span className="fa fa-star text-[#FBAB2A] "></span>
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

export default Hear;
