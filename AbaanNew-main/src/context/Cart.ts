import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  currency:string;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: CartItem) => "success" | "failure";
  addMultipleToCart: (items: CartItem[]) => "success" | "failure";
  removeFromCart: (_id: string) => "success" | "failure";
  updateQuantity: (_id: string, quantity: number) => "success" | "failure";
  clearCart: () => "success";
};

export const useCartStore =
  typeof window !== "undefined"
    ? create<CartState>()(
        persist(
          (set, get) => {
            const updateTotals = (items: CartItem[]) => {
              const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
              const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
              set({ items, totalItems, totalPrice });
            };

            return {
              items: [],
              totalItems: 0,
              totalPrice: 0,

              addToCart: (item) => {
                try {
                  const currentItems = get().items;
                  const existing = currentItems.find((i) => i._id === item._id);
                  const newItems = existing
                    ? currentItems.map((i) =>
                        i._id === item._id
                          ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                          : i
                      )
                    : [...currentItems, { ...item, quantity: item.quantity || 1 }];
                  updateTotals(newItems);
                  return "success";
                } catch {
                  return "failure";
                }
              },

              addMultipleToCart: (newItems) => {
                try {
                  const currentItems = [...get().items];
                  newItems.forEach((newItem) => {
                    const existing = currentItems.find((i) => i._id === newItem._id);
                    if (existing) {
                      existing.quantity += newItem.quantity;
                    } else {
                      currentItems.push({ ...newItem, quantity: newItem.quantity || 1 });
                    }
                  });
                  updateTotals(currentItems);
                  return "success";
                } catch {
                  return "failure";
                }
              },

              removeFromCart: (_id) => {
                try {
                  const updatedItems = get().items.filter((item) => item._id !== _id);
                  updateTotals(updatedItems);
                  return "success";
                } catch {
                  return "failure";
                }
              },

              updateQuantity: (_id, quantity) => {
                try {
                  if (quantity <= 0) {
                    const updatedItems = get().items.filter((item) => item._id !== _id);
                    updateTotals(updatedItems);
                  } else {
                    const updatedItems = get().items.map((item) =>
                      item._id === _id ? { ...item, quantity } : item
                    );
                    updateTotals(updatedItems);
                  }
                  return "success";
                } catch {
                  return "failure";
                }
              },

              clearCart: () => {
                updateTotals([]);
                return "success";
              },
            };
          },
          {
            name: "cart-storage",
            onRehydrateStorage: () => (state, error) => {
              if (error) {
                console.error("❌ Error during rehydration:", error);
              } else if (state?.items) {
                const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
                const totalPrice = state.items.reduce((sum, i) => sum + i.quantity * i.price, 0);
                state.totalItems = totalItems;
                state.totalPrice = totalPrice;
              }
            },
          }
        )
      )
    : () =>
        ({
          items: [],
          totalItems: 0,
          totalPrice: 0,
          addToCart: () => "failure",
          addMultipleToCart: () => "failure",
          removeFromCart: () => "failure",
          updateQuantity: () => "failure",
          clearCart: () => "success",
        } as CartState);
