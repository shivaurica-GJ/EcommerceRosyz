import React, { useState, useEffect, useRef } from 'react';

const springProducts = [
  {
    id: 1,
    image: 'images/product_1.png',
    name: 'Cozy Knit Sweater',
    price: '$25.00',
    brand: 'Cozy Knits Co',
  },
  {
    id: 2,
    image: 'images/product_2.png',
    name: 'Leather Biker Jacket',
    price: '$25.00',
    brand: 'Rebel Rider',
  },
  {
    id: 3,
    image: 'images/product_5.png',
    name: 'Cashmere Knit Cardigan',
    price: '$25.00',
    brand: 'Cashmere Cozy',
  },
];

const BestSelling = ({ onAddToCart }) => {
  const [quickshopProduct, setQuickshopProduct] = useState(null);
  const [quickshopQty, setQuickshopQty] = useState(1);
  const [quickshopSize, setQuickshopSize] = useState('M');
  const [liked, setLiked] = useState({});

  const contentRef = useRef(null);

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
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
        image: quickshopProduct.image
      });
    }
    closeQuickshop();
  };

  return (
    <section 
      ref={contentRef}
      className="text-center py-12 px-5 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
    >
      <p className="text-sm text-red-500 mb-2 uppercase tracking-widest">Top Picks for Fashion-Forward Shoppers</p>
      <h2 className="text-5xl mb-12 font-normal text-gray-800">Best Selling</h2>
      <div className="flex justify-center flex-wrap gap-8">
        {springProducts.map((product) => (
          <div 
            key={product.id} 
            className="w-72 bg-gray-100 rounded overflow-hidden text-left relative shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-96 overflow-hidden relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer shadow-sm"
                onClick={() => toggleLike(product.id)}
              >
                <i className={liked[product.id] ? "fas fa-heart" : "far fa-heart"} style={liked[product.id] ? {color: '#000'} : {}}></i>
              </div>
              <button 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-white text-black rounded-full py-2 text-sm uppercase cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                onClick={() => openQuickshop(product)}
              >
                + QUICKSHOP
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h4>
              <p className="text-gray-800 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quickshop Popup */}
      {quickshopProduct && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
    <div className="bg-white rounded-2xl p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row gap-6 md:gap-10 relative shadow-2xl">
      {/* ... baaki same code ... */}
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
              <div className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry....</div>
              <div className="mb-4">
                <span className="mr-3">Size:</span>
                {['S','M','L'].map(size => (
                  <button 
                    key={size} 
                    onClick={()=>setQuickshopSize(size)}
                    className={`mr-2 px-3 py-1 border rounded ${quickshopSize===size ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 bg-white text-gray-800'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex items-center mb-5">
                <button 
                  onClick={()=>setQuickshopQty(q=>q>1?q-1:1)}
                  className="px-3 py-1 border border-gray-300 bg-gray-100 text-lg cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 font-bold">{quickshopQty}</span>
                <button 
                  onClick={()=>setQuickshopQty(q=>q+1)}
                  className="px-3 py-1 border border-gray-300 bg-gray-100 text-lg cursor-pointer"
                >
                  +
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="px-8 py-3 bg-red-500 text-white border-none rounded-full font-bold text-base cursor-pointer hover:bg-red-600"
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

export default BestSelling;