import { useMemo } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Aero Oversized Tee',
    price: 38,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Cloud-Lite Hoodie',
    price: 76,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1562268860-f314f1973750?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbG91ZC1MaXRlJTIwSG9vZGllfGVufDB8MHx8fDE3NjI3NjQ1MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Sand',
  },
  {
    id: 3,
    name: 'Motion Cargo Pants',
    price: 92,
    image: 'https://images.unsplash.com/photo-1753381686374-47ebeb5771b4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3Rpb24lMjBDYXJnbyUyMFBhbnRzfGVufDB8MHx8fDE3NjI3NjQ1MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Olive',
  },
  {
    id: 4,
    name: 'Studio Rib Tank',
    price: 29,
    image: 'https://images.unsplash.com/photo-1604393587377-bbe4a437ec80?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW8lMjBSaWIlMjBUYW5rfGVufDB8MHx8fDE3NjI3NjQ1MzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Pearl',
  },
  {
    id: 5,
    name: 'AirFlex Joggers',
    price: 68,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop',
    color: 'Graphite',
  },
  {
    id: 6,
    name: 'Everyday Denim Jacket',
    price: 120,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    color: 'Indigo',
  },
];

function ProductCard({ product }) {
  return (
    <a href="#" className="group block">
      <div className="relative overflow-hidden rounded-xl">
        <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        {product.badge && (
          <span className="absolute top-3 left-3 text-xs font-semibold bg-white/90 backdrop-blur px-2.5 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium leading-tight">{product.name}</h3>
          <p className="text-xs text-neutral-500">{product.color}</p>
        </div>
        <p className="text-sm font-semibold">${product.price}</p>
      </div>
      <button className="mt-3 w-full rounded-md bg-neutral-900 text-white text-sm py-2 font-medium hover:opacity-90">Add to bag</button>
    </a>
  );
}

export default function ProductGrid() {
  const products = useMemo(() => productsData, []);

  return (
    <section id="new" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">New Arrivals</h2>
          <p className="text-neutral-600 text-sm">Fresh picks for the season</p>
        </div>
        <a href="#" className="hidden sm:inline-block text-sm font-medium underline underline-offset-4">View all</a>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
