import RightArrow from "./RightArrow";

function SideTab({
  setTabOpen,
}: {
  setTabOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section className="w-full fixed z-50 top-0 h-dvh right-0 flex">
      <section className="flex-1 h-full bg-transparent backdrop-blur-sm"></section>
      <section
        className="relative h-full flex flex-col
       justify-between pb-[10vh] items-center w-[80%] max-w-5xl bg-[#0c0c0c]"
      >
        <div className="w-full flex justify-end items-center p-4">
          <i
            onClick={() => setTabOpen(false)}
            className="fa fa-times relative right-0 top-0 text-amber-700 text-3xl"
            aria-hidden="true"
          ></i>
        </div>
        <a href="/" className="text-[#B5964D]">
          Home
        </a>
        <a href="/">Product Page</a>
        <a href="/">About us</a>
        <a href="/">Contact</a>
        <button
          style={{
            boxShadow: "0px 2.25px 16.5px 2.25px #FBAB2A4D",
          }}
          className="bg-[#B5964D] px-3 rounded-4xl h-[40px] text-[12px] font-semibold flex items-center gap-0.5"
        >
          Contact Us <RightArrow />
        </button>
      </section>
    </section>
  );
}

export default SideTab;
