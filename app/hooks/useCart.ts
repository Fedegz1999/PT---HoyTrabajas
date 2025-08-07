"use client";

import { useEffect, useState } from "react";
import { CartItem } from "@/app/types";
import {
  fetchCart as apiFetchCart,
  addToCart as apiAddToCart,
  removeFromCart as apiRemoveFromCart,
} from "@/app/services/api";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const fetchCart = async () => {
    const data = await apiFetchCart();
    setCart(data);
  };

  const addToCart = async (productId: number) => {
    await apiAddToCart(productId);
    await fetchCart();
  };

  const removeFromCart = async (productId: number) => {
    await apiRemoveFromCart(productId);
    await fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    refreshCart: fetchCart,
  };
}
