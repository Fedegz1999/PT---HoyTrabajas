"use client";

import { CartItem } from "@/app/types";

interface Props {
  cart: CartItem[];
  removeFromCart: (productId: number) => Promise<void>;
}

export default function Cart({ cart, removeFromCart }: Props) {
  if (!cart.length)
    return (
      <p className="text-center md:min-w-[50%]  md:my-auto mt-5">
        El carrito está vacío.
      </p>
    );

  return (
    <div className="space-y-3 p-5 shadow-md rounded-xl md:w-[50%] border border-neutral-50 ">
      <h2 className="text-purple-500 mb-5">Carrito</h2>

      {cart.map((item) => (
        <div
          className="grid-cols-4 grid gap-5 place-items-center"
          key={item.id}
        >
          <h2>{item.name}</h2>
          <p>{item.quantity} </p>
          <p>${item.price * item.quantity}</p>
          <button
            className="bg-purple-500 p-3 shadow text-white rounded-lg"
            onClick={() => removeFromCart(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
