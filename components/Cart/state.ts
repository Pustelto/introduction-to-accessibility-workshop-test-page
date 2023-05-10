import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductId = number;
type Quantity = number;

type State = {
  content: Record<ProductId, Quantity>;
};

type Actions = {
  addToCart: (id: ProductId) => void;
  clearCart: () => void;
};

export const useCartStore = create<State & Actions>(
  persist(
    (set) => ({
      content: {},
      addToCart: (id) =>
        set((state) => {
          const currentQty = state.content[id] || 0;
          state.content[id] = currentQty + 1;

          return {
            content: { ...state.content },
          };
        }),
      clearCart: () => set({ content: {} }),
    }),
    { name: "a11y-ws-cart" }
  )
);
