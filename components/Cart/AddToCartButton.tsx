"use client";

import { Button } from "../Button";
import { useCartStore } from "./state";

export function AddToCartButton({ itemId }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return <Button onClick={() => addToCart(itemId)}>Add to cart</Button>;
}
