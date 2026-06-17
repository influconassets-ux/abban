import ChocolateLeft from "../absoluteImages/ChocolateLeft";

export default function LiveMap() {
  return (
    <div className="w-full h-[500px] min-h-fit relative">
      <iframe
        className="w-full h-full border-0 rounded-xl shadow-lg"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.546056607328!2d55.40677648582301!3d25.285851570501812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f84ebb3fcc9%3A0xe4997952eb5c8ae2!2sAbaan%20Chocolate%20Manufacturing%20LLC!5e0!3m2!1sen!2sin!4v1744965332530!5m2!1sen!2sin"
      ></iframe>
      <div className="absolute -bottom-32 lg:-bottom-64 left-0 w-0 md:w-36 lg:w-60 z-[20]">
        <ChocolateLeft />
      </div>
    </div>
  );
}
