import { products } from "./products";
import { CartItem } from "@/app/types";

let cart: CartItem[] = [];

export function getCart(): CartItem[] {
  return cart;
}

export function addToCart(productId: number): CartItem[] {
  const product = products.find((p) => p.id === productId);

  if (!product) return cart;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newItem: CartItem = { ...product, quantity: 1 };
    cart.push(newItem);
  }

  return cart;
}

export function removeFromCart(productId: number): CartItem[] {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    const item = cart[index];
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
  }
  return cart;
}
