"use client";

import { Product } from "@/app/types";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/app/services/api";

interface Props {
  addToCart: (productId: number) => Promise<void>;
}

export default function ProductList({ addToCart }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="space-y-3 p-5 shadow-md rounded-xl md:w-[50%] border border-neutral-50">
      <h2 className="text-purple-500 mb-5 ">Productos</h2>
      {products.map((p) => (
        <div className="grid-cols-3 grid gap-5 place-items-center " key={p.id}>
          <h2>{p.name}</h2>
          <p>${p.price}</p>
          <button
            className="bg-purple-500 p-3 shadow text-white rounded-lg"
            onClick={() => addToCart(p.id)}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
}
