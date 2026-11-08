import Card from "./Card";
import { productList1 } from "../../lib/ProductList";

const bgColor = ["#F7F2F7", "#FFEEEE", "#F6F9E1", "#FFFAF4"];

export default function ProductComponent({ productList = productList1 }) {
  return (
    <div className="w-full flex flex-col">
      {/* Mobile Swipe Indicator */}
      {productList.length > 1 && (
        <div className="flex md:hidden items-center justify-end px-[4vw] pb-2 text-sm text-gray-500 animate-pulse">
          <span>Swipe for more &rarr;</span>
        </div>
      )}
      
      <div 
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth w-full items-stretch justify-start gap-4 md:gap-6 px-[4vw] py-[3vh] md:py-[8vh] bg-[#F8F4F1] rounded-3xl lg:bg-transparent"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {productList.map((card, idx) => (
          <div key={idx} className="shrink-0 snap-start w-[72vw] sm:w-[280px] md:w-[320px] h-full">
          <Card
            _id={card._id}
            imgSrc={card.primaryImage}
            bgColor={bgColor[idx % bgColor.length]}
            price={card.price}
            name={card.name}
            para={card.description}
            isNew={card.isNew}
          />
          </div>
        ))}
      </div>
    </div>
  );
}
