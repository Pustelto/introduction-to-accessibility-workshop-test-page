"use client";

import { PRODUCTS } from "@/data/products";
import { Button } from "../Button";
import { useCartStore } from "./state";

export function CartContent({ content }) {
  const clearCart = useCartStore((state) => state.clearCart);
  const productDetails = Object.entries(content);
  const products = productDetails.map(([id, qty]) => {
    const prod = PRODUCTS.find((p) => p.id === parseInt(id, 10));
    prod.qty = qty;

    return prod;
  });
  const totalPrice = products.reduce((price, prod) => {
    price += prod.qty * prod?.price;
    return price;
  }, 0);

  return (
    <div className="flex flex-col gap-4">
      <ul>
        {products.map((product) => (
          <li className="py-4 border-b last:border-b-0 border-gray-200">
            <span className="flex gap-4 w-full">
              <span className="self-start">{product.name}</span>
              <span className="self-end ml-auto">{product.qty}&times;</span>
              <span className="self-end">${product.price * product.qty}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <div className=" font-bold text-lg">Total:</div>
        <span className="text-red-600 font-bold text-lg">${totalPrice}</span>
      </div>
      <Button onClick={clearCart}>Clear the cart</Button>
    </div>
  );
}
