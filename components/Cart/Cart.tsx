"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "./state";
import { CartContent } from "./CartContent";

export function Cart({ }) {
  const content = useCartStore((state) => state.content);
  const [totalQty, setTotalQty] = useState(0);
  useEffect(() => {
    setTotalQty(Object.values(content).reduce((qty, total) => total + qty, 0));
  }, [content]);
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
          className="absolute shadow-gray-400 shadow-md py-4 px-4 bg-white w-[400px] right-0 z-10 rounded-s"
        >
          {totalQty > 0 ? (
            <CartContent content={content} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-5xl text-gray-300 font-bold">:-(</div>
              <div className="text-gray-400 text-lg">Cart is empty</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
