const productList1 = [
  {
    _id: "Assorted_Chocolate_Dates",
    name: "Assorted Chocolate Dates",
    primaryImage: "/images/choco1.webp",
    availability: "Out of Stock",
    isFeatured: false,
    stock: 0,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F7F2F7",
    price: 5.39,
  },
  {
    _id: "Chocolate_Dates",
    name: "Chocolate Dates",
    primaryImage: "/images/choco2.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 20,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#FFEEEE",
    price: 5.89,
  },
  {
    _id: "Kofy_Candy",
    name: "Coffee Candy",
    primaryImage: "/images/choco3.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 25,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 5.59,
  },
  {
    _id: "Strawberry_Candy",
    name: "Strawberry Candy",
    primaryImage: "/images/choco4.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 15,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 6.89,
  },
];

const idToList = [
  {
    _id: [
      "Strawberry_Candy",
      "Kofy_Candy",
      "Chocolate_Dates",
      "Assorted_Chocolate_Dates",
    ],
    list: "productList1",
  },
  {
    _id: [
      "Chocolate_Eclairs",
      "Coffee_Eclairs",
      "Honey_Eclairs",
      "Milk_Eclairs",
    ],
    list: "productList2",
  },
  {
    _id: ["Mint_candy", "Peanut_Eclairs", "Selection_Eclairs"],
    list: "productList3",
  },
];

const products = [
  {
    name: "Wafero Coconut Ball",
    imgSrc: "/images/newProductImages/waferoCoconut.webp",
  },
  {
    name: "Pistachio Kunafa Ball",
    imgSrc: "/images/newProductImages/kunafaBall.webp",
  },
  {
    name: "Chocolate Eclairs",
    imgSrc: "/images/newProductImages/eclairs/chocolate.webp",
  },
  {
    name: "Coffee Eclairs",
    imgSrc: "/images/newProductImages/eclairs/coffee.webp",
  },
  {
    name: "Honey Eclairs",
    imgSrc: "/images/newProductImages/eclairs/honey.webp",
  },

  {
    name: "Milk Eclairs",
    imgSrc: "/images/newProductImages/eclairs/milk.webp",
  },

  {
    name: "Peanut Eclairs",
    imgSrc: "/images/newProductImages/eclairs/peanut.webp",
  },
  {
    name: "Selection Eclairs",
    imgSrc: "/images/newProductImages/eclairs/selection.webp",
  },
  {
    name: "Dark coffee kunafa chocolate (100g)",
    imgSrc: "/images/new product.jpeg",
  },
  {
    name: "Abaan Selection Eclairs (24 x 300g)",
    imgSrc: "/images/ABAAN ECLAIRS Selection CREAM 300g.png",
  },
  {
    name: "Abaan Milk Eclairs (12 X550g)",
    imgSrc: "/images/milk eclairs_550g.jpg",
  },
  {
    name: "Abaan Chocolate Eclairs (12 X550g)",
    imgSrc: "/images/chocolate eclairs_550g.jpg",
  },
  {
    name: "Dubai Kunafa chocolate",
    imgSrc: "/images/kunafa_100 outer.jpg",
  },
  {
    name: "Dubai Kunafa dark chocolate",
    imgSrc: "/images/kunafa_100 outer_dark.jpg",
  },
  {
    name: "Dark coffee Kunafa chocolate",
    imgSrc: "/images/kunafa_24g.png",
  },
  {
    name: "Dubai kunafa dark chocolate",
    imgSrc: "/images/kunafa dark box 100.jpg",
  },
  {
    name: "Dubai Kunafa Chocolate",
    imgSrc: "/images/kunafa box 100.jpg",
  },
  {
    name: "Kofy candy - Coffee with cream",
    imgSrc: "/images/creamcofee.png",
    isNew: true,
  },
  {
    name: "Kofy candy - Black Coffee",
    imgSrc: "/images/Black Coffee.png",
    isNew: true,
  }
];

const productList2 = [
  {
    _id: "Chocolate_Eclairs",
    name: "Chocolate Eclairs",
    primaryImage: "/images/range1.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 18,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F7F2F7",
    price: 7.69,
  },
  {
    _id: "Coffee_Eclairs",
    name: "Coffee Eclairs",
    primaryImage: "/images/range2.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 22,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#FFEEEE",
    price: 6.99,
  },
  {
    _id: "Honey_Eclairs",
    name: "Honey Eclairs",
    primaryImage: "/images/range3.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 16,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 6.49,
  },
  {
    _id: "Milk_Eclairs",
    name: "Milk Eclairs",
    primaryImage: "/images/range5.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 30,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 4.39,
  },
];

const productList3 = [
  {
    ...productList1[0],
  },
  {
    _id: "Mint_candy",
    name: "Mint Candy",
    primaryImage: "/images/range6.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 24,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#FFEEEE",
    price: 5.99,
  },
  {
    _id: "Peanut_Eclairs",
    name: "Peanut Eclairs",
    primaryImage: "/images/range8.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 20,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 6.39,
  },
  {
    _id: "Selection_Eclairs",
    name: "Selection Eclairs",
    primaryImage: "/images/range9.webp",
    availability: "In Stock",
    isFeatured: false,
    stock: 14,
    description:
      "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 7.39,
  },
];

const allLists = {
  productList1,
  productList2,
  productList3,
};

function getProductById(product_Id) {
  const mapping = idToList.find((entry) => entry._id.includes(product_Id));
  if (!mapping) return null;

  const list = allLists[mapping.list];
  return list.find((product) => product._id === product_Id) || null;
}

export { productList1, productList2, productList3, products, getProductById };
