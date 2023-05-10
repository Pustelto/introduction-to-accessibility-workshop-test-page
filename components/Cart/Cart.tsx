"use client";

import { useState } from "react";
import { useCartStore } from "./state";
import { CartContent } from "./CartContent";

export function Cart({ }) {
  const content = useCartStore((state) => state.content);
  const totalQty = Object.values(content).reduce(
    (qty, total) => total + qty,
    0
  );
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setOpen((state) => !state)}
      >
        <img
          src="/images/icons/shopping_bag.svg"
          className="inline-block w-[24px]"
        />
        Cart
        {totalQty > 0 ? (
          <span
            id="cartCount"
            className="flex rounded-full bg-blue-700 text-white font-medium text-xs w-4 h-4 justify-center items-center"
          >
            {totalQty}
          </span>
        ) : (
          <span />
        )}
      </div>
      {isOpen && (
        <div
          id="cart-content"
          className="absolute shadow-gray-600 shadow-md py-8 px-6 bg-white w-[400px] right-0 z-10"
        >
          {totalQty > 0 ? (
            <CartContent content={content} />
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
      )}
    </div>
  );
}
