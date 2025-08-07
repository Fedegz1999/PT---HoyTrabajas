import { NextRequest, NextResponse } from "next/server";
import { getCart, addToCart, removeFromCart } from "@/app/lib/cart";
import { CartItem } from "@/app/types";

export async function GET() {
  const cart: CartItem[] = getCart();
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  const { productId }: { productId: number } = await request.json();
  const cart: CartItem[] = addToCart(productId);
  return NextResponse.json(cart);
}

export async function DELETE(request: NextRequest) {
  const { productId }: { productId: number } = await request.json();
  const cart = removeFromCart(productId);
  return NextResponse.json(cart);
}
