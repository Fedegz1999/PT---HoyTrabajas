import { Product } from "@/app/types";

export function findBestCombination(
  products: Product[],
  budget: number
): Product[] {
  let best: Product[] = [];

  const helper = (current: Product[], rest: Product[]) => {
    const total = current.reduce((sum, p) => sum + p.price, 0);
    if (total > budget) return;

    const bestTotal = best.reduce((sum, p) => sum + p.price, 0);
    if (total > bestTotal) best = [...current];

    for (let i = 0; i < rest.length; i++) {
      helper([...current, rest[i]], rest.slice(i + 1));
    }
  };

  helper([], products);
  return best;
}
