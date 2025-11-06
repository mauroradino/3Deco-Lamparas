import React, { useState } from "react";

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
    image: "./assets/kora.webp",
    images: ["./assets/kora.webp", "./assets/kora2.webp", "./assets/kora3.webp", "./assets/kora4.webp"], // Array de imágenes para el carousel
    desc: "📏Dimensiones: 13 cm x 13 cm x 15 cm",
    price: "$27.000",
    tileBg: "#F2F4F7",
    fit: "cover"
  },
  {
    id: 2,
    title: "Lampara Velo",
    image: "./assets/velo.webp",
    images: ["./assets/velo.webp", "./assets/velo2.webp"],
    tileBg: "#2E6D6B",
    desc:"📏 Medidas: 19 cm × 17 cm x 15 cm",
    price: "$20.000",
    fit: "cover"
  },
  {
    id: 3,
    title: "Lámpara Halo",
    image: "./assets/halo.webp",
    images: ["./assets/halo.webp" , "./assets/halo2.webp", "./assets/halo3.webp"],
    fit: "contain",
    bg: "#FFFFFF",
    desc:"📏Dimensiones: 16 cm × 18 cm x 18 cm",
    price: "$20.000",
    tileBg: "#F2F4F7"
  },
  {
    id: 4,
    title: "Lámpara Helix",
    image: "./assets/helix.webp",
    images: ["./assets/helix.webp", "./assets/helix2.webp", "./assets/helix3.webp"],
    desc:"📏Dimensiones: 10 cm x 10 cm x 15 cm",
    price: "$30.500",
    tileBg: "#F2F4F7",
    fit: "cover"
  },
  {
    id: 5,
    title: "Lámpara Wave",
    image: "./assets/wave.webp",
    images: ["./assets/wave.webp", "./assets/wave2.webp", "./assets/wave3.webp"],
    desc:"📏Dimensiones: 9 cm x 9 cm x 13 cm",
    price: "$23.000",
    tileBg: "#F2F4F7",
    fit: "cover"
  },
  {
    id: 6,
    title: "Lámpara Shade",
    image: "./assets/shade.webp",
    images: ["./assets/shade.webp", "./assets/shade2.webp", "./assets/shade3.webp"],
    desc:"📏Dimensiones: 12 cm x 12 cm x 15 cm",
    price: "$25.000",
    tileBg: "#F2F4F7",
    fit: "cover"
  },
  {
    id: 7,
    title: "Lámpara Nébula",
    image: "./assets/nebula.webp",
    images: ["./assets/nebula.webp", "./assets/nebula2.webp"],
    desc: "📏Dimensiones: 9 cm x 9 cm x 15 cm",
    price: "$28.000",
    tileBg: "#F2F4F7",
    fit: "cover"
  },
  {
    id: 8,
    title: "Lámpara Eter",
    image: "./assets/eter.webp",
    images: ["./assets/eter.webp", "./assets/eter2.webp", "./assets/eter3.webp"],
    desc:"📏Dimensiones: 8 cm x 8 cm x 15 cm",
    price: "$25.000",
    tileBg: "#F2F4F7",
    fit: "cover"
  },
  {
    id: 9,
    title: "Lámpara Polaris",
    image: "./assets/polaris.webp",
    images: ["./assets/polaris.webp", "./assets/polaris2.webp"],
    desc: "📏Dimensiones: 12 cm x 12 cm x 18 cm",
    price: "$28.000",
    tileBg: "#F2F4F7",
    fit: "cover"
  },
  {
    id: 10,
    title: "Lámpara Axis",
    image: "./assets/axis.webp",
    images: ["./assets/axis.webp", "./assets/axis2.webp", "./assets/axis3.webp"],
    desc:"📏Dimensiones: 11 cm x 11 cm x 18 cm",
    price: "$30.000",
    tileBg: "#F2F4F7",
    fit: "cover"
  }
];

function ProductCard({ item, onImageClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden transition-transform hover:-translate-y-0.5">
      <div className="relative p-4">
        {/* Imagen */}
        <div
          className="h-64 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer"
          style={{ background: item.tileBg || "#F2F4F7" }}
          onClick={onImageClick}
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

function ImageCarousel({ product, images, currentIndex, onClose, onNext, onPrevious, onIndicatorClick }) {
  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Botón anterior */}
        {currentIndex > 0 && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
            aria-label="Imagen anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Imagen actual */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div
            className="flex items-center justify-center p-8"
            style={{ background: product.tileBg || "#F2F4F7", minHeight: "60vh" }}
          >
            <img
              src={currentImage}
              alt={`${product.title} - Imagen ${currentIndex + 1}`}
              className="max-h-[70vh] max-w-full object-contain"
              style={{ objectFit: product.fit || "cover", background: product.bg || "transparent" }}
            />
          </div>
          <div className="px-6 py-4 bg-white">
            <h3 className="text-2xl font-bold text-[#1F2937] mb-2">{product.title}</h3>
            <p className="text-[#D97706] font-semibold mb-2">{product.desc}</p>
            <p className="text-xl font-bold text-[#1F2937]">{product.price}</p>
            {images.length > 1 && (
              <p className="text-sm text-gray-500 mt-2">Imagen {currentIndex + 1} de {images.length}</p>
            )}
          </div>
        </div>

        {/* Botón siguiente */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
            aria-label="Imagen siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Indicadores - solo se muestran si hay más de una imagen */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  onIndicatorClick(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-8" : "bg-gray-500 w-2"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CraftyCreations() {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setCurrentImageIndex(0); // Empezar desde la primera imagen del producto
      setCarouselOpen(true);
    }
  };

  const handleClose = () => {
    setCarouselOpen(false);
    setSelectedProduct(null);
  };

  const handleNext = () => {
    if (selectedProduct && currentImageIndex < selectedProduct.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Manejar navegación con teclado
  React.useEffect(() => {
    if (!carouselOpen || !selectedProduct) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && currentImageIndex < selectedProduct.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (e.key === "Escape") {
        setCarouselOpen(false);
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [carouselOpen, currentImageIndex, selectedProduct]);

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
            <ProductCard 
              key={p.id} 
              item={p} 
              onImageClick={() => handleImageClick(p.id)}
            />
          ))}
        </section>
      </main>

      {/* Carousel Modal */}
      {carouselOpen && selectedProduct && (
        <ImageCarousel
          product={selectedProduct}
          images={selectedProduct.images}
          currentIndex={currentImageIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onIndicatorClick={handleIndicatorClick}
        />
      )}
    </div>
  );
}
