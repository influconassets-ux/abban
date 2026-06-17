import { create } from "zustand";

type PriceInfo = {
  country: string;
  currency: string;
  price: number;
};

type Product = {
  _id: string;
  name: string;
  prices: PriceInfo[]; // original array of price options
  price: PriceInfo;    // selected price based on user's country or fallback
  categories: string[];
  primaryImage: string;
  images?: string[];
  tags: string[];
  collections?: string[];
  isFeatured: boolean;
  availability: string;
  variants: any[]; // you can replace `any` with a real variant type if needed
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};
  
type ProductState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
}; 

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
  }))


export const useCountryStore = create((set) => ({
  country: "India",
  setCountry: (country) => set({ country }),
}))