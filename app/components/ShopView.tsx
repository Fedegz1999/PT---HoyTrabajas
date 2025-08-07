"use client";

import { useCart } from "../hooks/useCart";
import Cart from "./Cart";
import ProductList from "./ProductList";

export default function ShopView() {
  const cartState = useCart();

  return (
    <div className="px-[5%] h-max gap-5  md:flex w-full justify-around ">
      <ProductList addToCart={cartState.addToCart} />
      <Cart {...cartState} />
    </div>
  );
}
