import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const products = [
  {
    id: 1,
    image: 'images/product_1.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    image: 'images/product_2.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    image: 'images/product_1.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    image: 'images/product_1.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
  {
    id: 5,
    image: 'images/product_1.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
  {
    id: 6,
    image: 'images/product_1.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
  {
    id: 7,
    image: 'images/product_1.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
  {
    id: 8,
    image: 'images/product_1.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    pricenew: '$20.00',
    originalPrice: null,
    discount: null,
  },
];

const TrendingProducts = ({ onAddToCart }) => {
  const [liked, setLiked] = useState({});
  const [activeTab, setActiveTab] = useState('featured');
  const [quickshopProduct, setQuickshopProduct] = useState(null);
  const [quickshopQty, setQuickshopQty] = useState(1);
  const [quickshopSize, setQuickshopSize] = useState('M');

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = products;

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
        price: Number(quickshopProduct.pricenew.replace(/[^\d.]/g, '')),
        quantity: quickshopQty,
        image: quickshopProduct.image,
      });
    }
    closeQuickshop();
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const productCards = sectionRef.current.querySelectorAll('.product-card');
    productCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="text-center py-[50px] px-[20px] bg-white" ref={sectionRef}>
      <p className="text-[14px] text-[#e35353] mb-[10px] uppercase tracking-[2px]">STAY AHEAD OF THE FASHION CURVE</p>
      <h2 className="text-[50px] mb-[50px] font-normal text-[#333]">Trending Products</h2>

      <div className="flex justify-center mb-[40px]">
        <button
          className={`bg-transparent border-none text-[18px] font-medium text-[#555] cursor-pointer py-[10px] px-[20px] mx-[10px] relative ${activeTab === 'featured' ? 'text-black' : ''}`}
          onClick={() => setActiveTab('featured')}
        >
          Featured
          {activeTab === 'featured' && (
            <div className="mt-[5px] w-full h-[2px] bg-[#e35353]"></div>
          )}
        </button>
        <button
          className={`bg-transparent border-none text-[18px] font-medium text-[#555] cursor-pointer py-[10px] px-[20px] mx-[10px] relative ${activeTab === 'new-arrival' ? 'text-black' : ''}`}
          onClick={() => setActiveTab('new-arrival')}
        >
          New Arrival
          {activeTab === 'new-arrival' && (
            <div className="mt-[5px] w-full h-[2px] bg-[#e35353]"></div>
          )}
        </button>
        <button
          className={`bg-transparent border-none text-[18px] font-medium text-[#555] cursor-pointer py-[10px] px-[20px] mx-[10px] relative ${activeTab === 'best-seller' ? 'text-black' : ''}`}
          onClick={() => setActiveTab('best-seller')}
        >
          Best Seller
          {activeTab === 'best-seller' && (
            <div className="mt-[5px] w-full h-[2px] bg-[#e35353]"></div>
          )}
        </button>
      </div>

      <div className="flex justify-center flex-wrap gap-[30px]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group w-[270px] bg-white border border-[#eee] rounded-[5px] overflow-hidden text-left pb-[15px] relative product-card opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
          >

            <div className="w-full h-[300px] overflow-hidden relative mb-[15px] group">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.discount && (
                <span className="absolute top-[15px] left-[15px] bg-[#e35353] text-white py-[5px] px-[10px] text-[12px] rounded-[3px]">
                  {product.discount}
                </span>
              )}
              <div
                className="absolute top-[15px] right-[15px] bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
                onClick={() => toggleLike(product.id)}
              >
                <i className={liked[product.id] ? "fas fa-heart text-black" : "far fa-heart text-[#555] text-[16px]"}></i>
              </div>
              <button
                className="absolute bottom-0 left-0 w-full bg-white text-black rounded-[20px] py-[10px] text-[14px] uppercase cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hover:bg-[#e35353] hover:text-white"
                onClick={() => openQuickshop(product)}
              >
                + QUICKSHOP
              </button>

            </div>
            <p className="text-[14px] text-[#888] text-center mb-[5px]">{product.brand}</p>
            <h4 className="text-[18px] font-semibold text-[#333] text-center mb-[10px]">{product.name}</h4>
            <p className="text-[16px] text-[#333] font-bold text-center">
              {product.pricenew}
              {product.originalPrice && (
                <span className="line-through text-[#888] font-normal ml-[10px]">
                  {product.originalPrice}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      {quickshopProduct && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.4)] z-[2000] flex items-center justify-center p-[15px] box-border">
          <div className="bg-white rounded-[10px] p-[25px] max-w-[700px] w-full flex gap-[25px] relative flex-wrap shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <button
              onClick={closeQuickshop}
              className="absolute top-[10px] right-[20px] text-[2rem] bg-none border-none cursor-pointer"
            >
              &times;
            </button>
            <img
              src={quickshopProduct.image}
              alt={quickshopProduct.name}
              className="w-full max-w-[260px] object-cover rounded-[8px] flex-[1_1_260px]"
            />
            <div className="flex-[1_1_300px]">
              <h2>{quickshopProduct.name}</h2>
              <p className="font-bold text-[1.2em]">{quickshopProduct.pricenew}</p>
              <p className="text-[#555]">Brand: {quickshopProduct.brand}</p>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</div>
              <div>
                <span>Size: </span>
                {['S', 'M', 'L'].map(size => (
                  <button
                    key={size}
                    onClick={() => setQuickshopSize(size)}
                    className={`mr-[5px] py-[5px] px-[12px] border border-[#ccc] rounded-[5px] ${quickshopSize === size ? 'bg-[#e35353] text-white' : 'bg-white text-[#333]'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex items-center my-[10px]">
                <button onClick={() => setQuickshopQty(q => q > 1 ? q - 1 : 1)}>-</button>
                <span className="px-[15px]">{quickshopQty}</span>
                <button onClick={() => setQuickshopQty(q => q + 1)}>+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="py-[12px] px-[30px] bg-[#e35353] text-white border-none rounded-[20px] font-bold text-[1rem]"
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

export default TrendingProducts;