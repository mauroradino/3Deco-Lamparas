import React from "react";

// Paleta de colores (del mockup)
// Fondo: #F6EFE7
// Cards: #FFFFFF
// Texto: #1F2937
// Acento naranja (botones): #D97706
// Acento teal (tiles/fondo img): #2E6D6B
// Borde suave: #E5E7EB

const products = [
  {
    id: 1,
    title: "Lámpara Kora",
    image:
      "./assets/kora.webp",
    desc: "📏Dimensiones: 13 cm x 13 cm x 15 cm",
    price: "$27.000"  
  },
  {
    id: 2,
    title: "Lampara Velo",
    image:
    "./assets/velo.webp",
    tileBg: "#2E6D6B",
    desc:"📏 Medidas: 19 cm × 17 cm x 15 cm",
    price: "$20.000"
  },
  {
    id: 3,
    title: "Lámpara Halo",
    image:
    "./assets/halo.webp",
    fit: "contain",
    bg: "#FFFFFF",
    desc:"📏Dimensiones: 16 cm × 18 cm x 18 cm",
    price: "$20.000"
  },
  {
    id: 4,
    title: "Lámpara Helix",
    image:
    "./assets/helix.webp",
    desc:"📏Dimensiones: 10 cm x 10 cm x 15 cm",
    price: "$30.500"
  },
  {
    id: 5,
    title: "Lámpara Wave",
    image:
    "./assets/wave.webp",
    desc:"📏Dimensiones: 9 cm x 9 cm x 13 cm",
    price: "$23.000"
  },
  {
    id: 6,
    title: "Lámpara Shade",
    image:
    "./assets/shade.webp",
    desc:"📏Dimensiones: 12 cm x 12 cm x 15 cm",
    price: "$25.000"
  },
  {
    id: 7,
    title: "Lámpara Nébula",
    image:
    "./assets/nebula.webp",
    desc: "📏Dimensiones: 9 cm x 9 cm x 15 cm",
    price: "$28.000"
  },
  {
    id: 8,
    title: "Lámpara Eter",
    image:
    "./assets/eter.webp",
    desc:"📏Dimensiones: 8 cm x 8 cm x 15 cm",
    price: "$25.000"
  },
  {
    id: 9,
    title: "Lámpara Polaris",
    image:
    "./assets/polaris.webp",
    desc: "📏Dimensiones: 12 cm x 12 cm x 18 cm",
    price: "$28.000"
  },
  {
    id: 10,
    title: "Lámpara Axis",
    image:
    "./assets/axis.webp",
    desc:"📏Dimensiones: 11 cm x 11 cm x 18 cm",
    price: "$30.000"
  }
];

function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden transition-transform hover:-translate-y-0.5">
      <div className="relative p-4">
        {/* Imagen */}
        <div
          className="h-64 rounded-xl overflow-hidden flex items-center justify-center"
          style={{ background: item.tileBg || "#F2F4F7" }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            style={{ objectFit: item.fit || "cover", background: item.bg || "transparent" }}
          />
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between mb-6">
        <h3 className="font-semibold text-[15px] text-[#1F2937] leading-tight">{item.title}</h3>
        <p className="font-bold text-[#1F2937]">{item.price}</p>
        </div>
        <p className="text-[#D97706] font-semibold mt-1">{item.desc}</p>
      </div>
    </div>
  );
}

export default function CraftyCreations() {
  return (
    <div className="min-h-screen" style={{ background: "#F6EFE7" }}>
      {/* Topbar */}
      <header className="sticky top-0 z-20 bg-[#f7f6f6] ">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-25 h-25 rounded-md bg-[#D97706]" src="./assets/logo.png" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F2937]">Nuestras Lamparas</h1>
        </div>

        {/* Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </section>
      </main>
    </div>
  );
}
