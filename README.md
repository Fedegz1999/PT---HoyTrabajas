🛒 Carrito de Compras + Calculador de Presupuesto

Este proyecto es una aplicación construida con Next.js que ofrece:
• Un catálogo de productos.
• Un carrito de compras con cantidad y total.
• Un calculador de presupuesto que selecciona la mejor combinación de productos sin exceder un monto dado.

Tecnologías
• Next.js App Router
• TypeScript
• Tailwind CSS

Instalación:

1. Cloná el repositorio
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo

2. Instalá dependencias

```bash
npm install
# o
yarn install
```

3. Ejecutá el servidor local

```bash
npm run dev
# o
yarn dev
```

Lógica de Presupuesto:
El componente BudgetSolver implementa una función que, dado un presupuesto máximo, encuentra la combinación óptima de productos cuya suma no lo exceda.
Podés ingresar un JSON personalizado con productos y establecer el presupuesto desde la interfaz con el siguiente formato:
```
[
{ "id": 1, "name": "Producto 1", "price": 60 },
{ "id": 2, "name": "Producto 2", "price": 100 },
{ "id": 3, "name": "Producto 3", "price": 120 },
{ "id": 4, "name": "Producto 4", "price": 70 }
]
```

🚀 Desplegado en Vercel en el siguiente link:

```https://pt-hoy-trabajas.vercel.app/ ```
