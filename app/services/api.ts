import { CartItem } from "@/app/types";

export async function fetchProducts(): Promise<CartItem[]> {
  const res = await fetch("/api/products");
  return res.json();
}

export async function fetchCart(): Promise<CartItem[]> {
  const res = await fetch("/api/cart");
  return res.json();
}

export async function addToCart(productId: number) {
  const res = await fetch("/api/cart", {
    method: "POST",
    body: JSON.stringify({ productId }),
  });
  return res.json();
}

export async function removeFromCart(productId: number) {
  const res = await fetch("/api/cart", {
    method: "DELETE",
    body: JSON.stringify({ productId }),
  });

  if (!res.ok) {
    throw new Error("Error al eliminar producto del carrito");
  }

  return res.json();
}
