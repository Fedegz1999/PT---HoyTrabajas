import BudgetSolver from "@/app/components/BudgetSolver";
import ShopView from "./components/ShopView";

export default function Home() {
  return (
    <main className="font-sans flex flex-col justify-center space-y-10 py-5 items-center">
      <h1 className="text-3xl font-bold text-purple-800 mb-10 px-[5%] text-center">
        Prueba Técnica: API y Carrito de Compras
      </h1>
      <ShopView />
      <BudgetSolver />
    </main>
  );
}
