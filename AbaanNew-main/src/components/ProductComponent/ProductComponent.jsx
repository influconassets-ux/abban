import Card from "./Card";
import { productList1 } from "../../lib/ProductList";

const bgColor = ["#F7F2F7", "#FFEEEE", "#F6F9E1", "#FFFAF4"];

export default function ProductComponent({ productList = productList1 }) {
  return (
    <div className="flex flex-wrap xl:items-stretch xl:flex-nowrap xl:px-0 lg:flex-nowrap justify-center gap-6 px-[4vw] py-[3vh] md:py-[8vh] bg-[#F8F4F1] rounded-3xl lg:bg-transparent">
      {productList.map((card, idx) => (
        <div className="flex-1  h-full">
        <Card
          key={idx}
          _id={card._id}
          imgSrc={card.primaryImage}
          bgColor={bgColor[idx % bgColor.length]}
          price={card.price}
          name={card.name}
          para={card.description}
        />
        </div>
      ))}
    </div>
  );
}
