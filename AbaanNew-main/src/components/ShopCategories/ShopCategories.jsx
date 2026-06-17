import React from "react";

const categories = [
  {
    title: "Kunafa",
    description:
      "A classic Middle Eastern dessert made with shredded pastry, sweet cheese, and syrup, offering a unique and delightful taste experience.",
  },
  {
    title: "Baklava",
    description:
      "Traditional Middle Eastern sweets like baklava, kunafa, and more, made with authentic recipes and premium ingredients.",
  },
  {
    title: "Eclairs",
    description:
      "Delicate pastry filled with rich cream and topped with chocolate glaze, perfect for those who love classic French desserts.",
  },
  {
    title: "Candy",
    description:
      "Indulge in our premium chocolates, featuring bars, pralines, and chocolate-covered delights, all made with the finest ingredients.",
  },
  {
    title: "Dates",
    description:
      "Fresh and delicious dates sourced from the best farms, available in multiple varieties and perfect for healthy snacking.",
  },
  {
    title: "Lollipop",
    description:
      "A variety of lollipops in different flavors and colors, perfect for a sweet treat.",
  },
  {
    title: "Toffees",
    description:
      "Indulge in our rich and creamy toffees, crafted with love and care to satisfy your sweet tooth.",
  },
  {
    title: "Chocolate Bar",
    description:
      "Delicious chocolate bars available in a variety of flavors and fillings, crafted for chocolate lovers of all ages.",
  },
  {
    title: "Truffles",
    description:
      "Indulge in our rich and creamy truffles, crafted with love and care to satisfy your sweet tooth.",
  },
];

const ShopCategories = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mb-20">
      <h2 className="globalHeaderFont text-3xl md:text-5xl lg:text-6xl mb-8 text-center">
        Categories We <span>Sell</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-[#F8F6F4] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-bold text-[#36196A] mb-2 globalHeaderFont">
              {cat.title}
            </h3>
            <p className="text-[#646464] text-base">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopCategories;
