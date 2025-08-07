"use client";

import { useState } from "react";
import { Product } from "@/app/types";
import { findBestCombination } from "@/app/lib/solver";

export default function BudgetSolver() {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [budget, setBudget] = useState<number>(0);
  const [result, setResult] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const parsed: Product[] = JSON.parse(jsonInput);
      const best = findBestCombination(parsed, budget);
      setResult(best);
      setError(null);
    } catch (e) {
      setError(`El formato del JSON es inválido. Se espera algo como:

[
  { "id": 1, "name": "Producto 1", "price": 60 },
  { "id": 2, "name": "Producto 2", "price": 100 }...
]`);
      setResult([]);
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md max-w-md w-full mt-8">
      <h2 className="text-xl font-bold mb-4">Calculador de Presupuesto</h2>

      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder="Pega aquí tu lista de productos en JSON"
        className="border p-2 rounded w-full h-40 mb-4 font-mono text-sm"
      />

      <input
        type="number"
        placeholder="Presupuesto máximo"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="border p-2 rounded w-full mb-4"
      />

      <button
        onClick={handleCalculate}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition w-full"
      >
        Calcular
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {result.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Mejor combinación:</h3>
          <ul className="mt-2 space-y-1">
            {result.map((p) => (
              <li key={p.id} className="flex justify-between">
                <span>{p.name}</span>
                <span>${p.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">
            Total: ${result.reduce((acc, p) => acc + p.price, 0)}
          </p>
        </div>
      )}
    </div>
  );
}
