import React, { useState, useRef, useEffect } from 'react';

const springProducts = [
  {
    id: 1,
    image: 'https://qx-rosyz.myshopify.com/cdn/shop/files/spring-4.jpg?v=1699268755&width=1920',
    name: 'Elegant Evening Gown',
    price: '$25.00',
    brand: 'Chic Couture',
  },
  {
    id: 2,
    image: 'https://qx-rosyz.myshopify.com/cdn/shop/files/spring-2.jpg?v=1699268755&width=1920',
    name: 'Cozy Knit Sweater',
    price: '$25.00',
    brand: 'Cozy Knits Co',
  },
  {
    id: 3,
    image: 'https://qx-rosyz.myshopify.com/cdn/shop/files/spring-3.jpg?v=1699268755&width=1920',
    name: 'Emerald Green Jumpsuit',
    price: '$25.00',
    brand: 'Velvet Touch',
  },
];

const SpringCollection = ({ onAddToCart }) => {
  const [quickshopProduct, setQuickshopProduct] = useState(null);
  const [quickshopQty, setQuickshopQty] = useState(1);
  const [quickshopSize, setQuickshopSize] = useState('M');

  const sectionRef = useRef(null);

  // Animate section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeQuickshop();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openQuickshop = (product) => {
    setQuickshopProduct(product);
    setQuickshopQty(1);
    setQuickshopSize('M');
  };

  const closeQuickshop = () => setQuickshopProduct(null);

  const handleAddToCart = () => {
    if (onAddToCart && quickshopProduct) {
      onAddToCart({
        name: quickshopProduct.name,
        size: quickshopSize,
        price: Number(quickshopProduct.price.replace(/[^\d.]/g, '')),
        quantity: quickshopQty,
        image: quickshopProduct.image,
      });
    }
    closeQuickshop();
  };

  return (
    <section
      ref={sectionRef}
      className="text-center py-12 px-5 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
    >
      <p className="text-sm text-rose-600 mb-2 uppercase tracking-wider">
        BLOSSOM INTO STYLE: OUR SPRING FASHION PICKS
      </p>
      <h2 className="text-5xl mb-12 font-normal text-gray-800">
        The Spring Collection
      </h2>

      <div className="flex justify-center flex-wrap gap-8">
        {springProducts.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white rounded overflow-hidden relative group shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-96 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-white text-gray-800 border-none w-12 h-12 rounded-full flex justify-center items-center text-2xl font-bold cursor-pointer hover:bg-rose-600 hover:text-white transition-colors duration-300"
                  onClick={() => openQuickshop(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {quickshopProduct && (
  <div
    className="fixed inset-0 z-[2000] flex items-center justify-center bg-white/30 backdrop-blur-sm"
    onClick={closeQuickshop}
  >
    <div
      className="bg-white rounded-xl p-8 max-w-3xl w-full flex gap-8 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeQuickshop}
        className="absolute top-3 right-5 text-3xl bg-transparent border-none cursor-pointer"
      >
        &times;
      </button>
      <img
        src={quickshopProduct.image}
        alt={quickshopProduct.name}
        className="w-64 h-80 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h2 className="text-2xl mb-2">{quickshopProduct.name}</h2>
        <p className="font-bold text-xl mb-2">{quickshopProduct.price}</p>
        <p className="text-gray-600 mb-4">Brand: {quickshopProduct.brand}</p>
        <p className="mb-4 text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>

        <div className="mb-4">
          <span className="mr-2">Size:</span>
          {['S', 'M', 'L'].map((size) => (
            <button
              key={size}
              onClick={() => setQuickshopSize(size)}
              className={`mr-2 px-3 py-1 border rounded ${
                quickshopSize === size
                  ? 'bg-rose-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center mb-5">
          <button
            onClick={() => setQuickshopQty((q) => (q > 1 ? q - 1 : 1))}
            className="px-3 py-1 border border-gray-300 bg-gray-100 text-lg"
          >
            -
          </button>
          <span className="px-4 font-bold">{quickshopQty}</span>
          <button
            onClick={() => setQuickshopQty((q) => q + 1)}
            className="px-3 py-1 border border-gray-300 bg-gray-100 text-lg"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="px-8 py-3 bg-rose-600 text-white border-none rounded-full font-bold text-base cursor-pointer hover:bg-rose-700 transition-colors"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default SpringCollection;
