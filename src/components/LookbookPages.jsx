import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LookbookPages = ({ onAddToCart }) => {
  const [liked, setLiked] = useState({});
  const [quickshopProduct, setQuickshopProduct] = useState(null);
  const [quickshopQty, setQuickshopQty] = useState(1);
  const [quickshopSize, setQuickshopSize] = useState('M');

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

  // Helper to get product info for each card
  const getProductInfo = (id) => {
    if (id === 1) return { image: 'images/lookbook_product_1.png', name: 'Quilted Puffer Jacket', price: '$20.00', brand: 'WinterWonder Co' };
    if (id === 2) return { image: 'images/lookbook_product_2.png', name: 'Classic Men\'s Oxford Shirt', price: '$25.00', brand: 'The Gentleman\'s Choice' };
    if (id === 3) return { image: 'images/lookbook_product_3.png', name: 'Leather Biker Jacket', price: '$25.00', brand: 'Rebel Rider' };
    if (id === 4) return { image: 'images/lookbook_product_4.png', name: 'Boho Floral Maxi Dress', price: '$25.00', brand: 'Bohemian Bliss' };
    if (id === 5) return { image: 'images/lookbook_bestseller_1.png', name: 'Denim Skinny Jeans', price: '$21.00', brand: 'Denim Delight' };
    if (id === 6) return { image: 'images/lookbook_bestseller_2.png', name: 'Fringe Boho Bag', price: '$15.00', brand: 'Boho Chic Boutique' };
    if (id === 7) return { image: 'images/lookbook_bestseller_3.png', name: 'Luxury Silk Scarf', price: '$21.00', brand: 'Silk Elegance' };
    if (id === 8) return { image: 'images/lookbook_bestseller_4.png', name: 'Men\'s Classic Chino Pants', price: '$15.00', brand: 'Modern Man' };
    return { image: '', name: '', price: '', brand: '' };
  };

  return (
    <div className="bg-white pt-1 font-sans">
      {/* Breadcrumb */}
      <div className="w-full py-2 text-center text-sm">
        <Link to="/" className="no-underline text-inherit">Home</Link> /
        <Link to="/lookbook" className="underline text-inherit"> Lookbook</Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] max-w-[1160px] mx-auto flex flex-col justify-between items-center text-center text-white bg-[url('images/lookbook_hero_bg.jpg')] bg-cover bg-top bg-no-repeat p-[30px_20px]">
        <div className="relative z-10 max-w-[800px] px-5 text-shadow">
          <p className="text-sm tracking-[2px] mb-2 uppercase">STEP ONTO THE RUNWAY OF LIFE</p>
          <h1 className="text-[60px] font-normal mb-5 leading-snug">Your Everyday Fashion, Runway Ready</h1>
          <p className="text-lg leading-relaxed">
            Transform your daily look into a runway-worthy ensemble.<br />Our curated collection brings the glamour of the catwalk to your everyday life.
          </p>
        </div>
      </section>

      {/* Chase the Seasons Section */}
      <section className="py-5 text-center bg-white">
        <h2 className="text-[50px] font-normal mb-4 text-gray-800">Chase the Seasons in Style</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-10">
          Update your wardrobe with the latest seasonal<br />trends. From cozy knits to stylish layers.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {[1, 2].map((i) => (
            <div key={i} className="w-[450px] text-left">
              <img
                src={`images/lookbook_chase_${i}.png`}
                alt={i === 1 ? "Express Your Authenticity" : "Seasonal Chic Arrivals"}
                className="w-full h-[500px] object-cover mb-5"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {i === 1 ? "Express Your Authenticity" : "Seasonal Chic Arrivals"}
              </h3>
              <p className="text-sm text-gray-600">
                {i === 1 ? "Fashion that Speaks Your Unique Style" : "Step into the Latest Fashion Trends"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Style Meets Comfort Section */}
      <section className="py-5 text-center bg-[#f6e8e8]">
        <p className="text-sm text-[#e35353] tracking-[2px] uppercase mb-2">CHIC AND COMFORTABLE</p>
        <h2 className="text-[50px] font-normal mb-5 text-gray-800">Style Meets Comfort In Every Outfit</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Chic doesn't have to compromise comfort.<br />Embrace style that feels as good as it looks. Our collection prioritizes.
        </p>
      </section>

      {/* Timeless Elegance Modern Twist Section */}
      <section className="py-1 px-12 text-center bg-white">
        <h2 className="text-[50px] font-normal mb-4 text-gray-800">Timeless Elegance, Modern Twist</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-10">
          Experience the perfect blend of timeless<br />elegance and modern flair.
        </p>
        <div className="mb-10">
          {['Bag', 'Glasses', 'Trending'].map((tab, i) => (
            <button
              key={tab}
              className={`mx-4 pb-1 relative text-base ${i === 0 ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}
            >
              {tab}
              {i === 0 && <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800"></span>}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {[1, 2, 3, 4].map((id) => {
            const product = getProductInfo(id);
            return (
              <div key={id} className="relative text-left flex flex-col">
                <div className="relative w-full pb-[120%] mb-4 overflow-hidden group">
                  <img src={product.image} alt="Product" className="absolute top-0 left-0 w-full h-full object-cover" />
                  <button
                    onClick={() => openQuickshop(product)}
                    className="absolute left-0 w-full bg-white text-black rounded-full py-2 text-sm uppercase cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#e35353] hover:text-white bottom-10"
                  >
                    + QUICKSHOP
                  </button>
                  <div
                    onClick={() => toggleLike(id)}
                    className="absolute top-2 right-2 bg-white/80 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer text-sm"
                  >
                    <i className={liked[id] ? "fas fa-heart text-black" : "far fa-heart"}></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center">{product.brand}</p>
                <h4 className="text-base font-semibold text-gray-800 text-center">{product.name}</h4>
                <p className="text-base font-bold text-gray-800 text-center">{product.price}</p>
                {id === 4 && (
                  <div className="flex gap-1 mt-2 justify-center">
                    {['#808080', '#dcdcdc', '#add8e6'].map(color => (
                      <span key={color} className="w-4 h-4 rounded-full border border-gray-200 cursor-pointer" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Fashion Forward Fitness Section */}
      <section className="flex bg-[#f6e8e8] mt-20">
        <div className="flex-1 relative min-h-[500px]">
          <div className="absolute top-0 left-0 w-[70%] h-full bg-[#e35353] z-10"></div>
          <img
            src="images/lookbook_fashion_fitness.png"
            alt="Fashion Model"
            className="absolute bottom-0 right-0 w-[90%] h-[80%] object-cover z-20 pb-12"
          />
        </div>
        <div className="flex-1 py-20 px-12 flex flex-col justify-center text-center">
          <p className="text-sm text-[#e35353] tracking-[2px] uppercase mb-2">FASHION FORWARD FITNESS</p>
          <h2 className="text-[50px] font-normal mb-5 text-gray-800 leading-snug">Timeless Pieces For Every Occasion</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Build a wardrobe that speaks volumes. Explore our collection of timeless
            essentials, perfect for every occasion. From casual chic to formal elegance.
          </p>
          <button className="border border-black bg-transparent text-black py-3 px-8 text-base rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#e35353] hover:text-white mx-auto">
            DISCOVER NOW
          </button>

        </div>
      </section>

      {/* Our Collections Section */}
      <section className="py-10 px-5 text-center bg-white">
        <p className="text-sm text-[#e35353] tracking-[2px] uppercase mb-2">EXPLORE</p>
        <h2 className="text-[50px] font-normal mb-10 text-gray-800">Our Collections</h2>
        <div className="grid grid-cols-2 gap-8 max-w-[1200px] mx-auto h-[300px]">
          {[
            { img: "https://qx-rosyz.myshopify.com/cdn/shop/collections/accessories-women-cat_b32d178e-9588-487d-875b-7598f3a7bcb7.jpg?v=1699068549&width=900", title: "Accessories" },
            { img: "https://qx-rosyz.myshopify.com/cdn/shop/collections/accessories-women-cat_d0fab59b-0073-48f8-9096-fab3046ee59d.jpg?v=1699068605&width=900", title: "Bags" }
          ].map((item, i) => (
            <div key={i} className="relative overflow-hidden group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold uppercase bg-black/40 px-5 py-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="py-1 px-12 text-center bg-white">
        <h2 className="text-[50px] font-normal mb-4 text-gray-800">Best Seller</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-10">
          Discover Wellness in a Tropical Yoga Paradise
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {[5, 6, 7, 8].map((id) => {
            const product = getProductInfo(id);
            return (
              <div key={id} className="relative text-left flex flex-col">
                <div className="relative w-full pb-[120%] mb-4 overflow-hidden group">
                  <img src={product.image} alt="Product" className="absolute top-0 left-0 w-full h-full object-cover" />
                  <div
                    onClick={() => toggleLike(id)}
                    className="absolute top-2 right-2 bg-white/80 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer text-sm"
                  >
                    <i className={liked[id] ? "fas fa-heart text-black" : "far fa-heart"}></i>
                  </div>
                  <button
                    onClick={() => openQuickshop(product)}
                    className="absolute left-0 w-full bg-white text-black rounded-full py-2 text-sm uppercase cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#e35353] hover:text-white bottom-10"
                  >
                    + QUICKSHOP
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">{product.brand}</p>
                <h4 className="text-base font-semibold text-gray-800 text-center">{product.name}</h4>
                <p className="text-base font-bold text-gray-800 text-center">{product.price}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Picks of the Week Section */}
      <section className="py-5 px-5 text-center bg-[#f8f8f8]">
        <h2 className="text-[50px] font-normal mb-4 text-gray-800">Featured Picks of the Week</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-10">
          Indulge in our carefully curated selection of the<br />week's finest.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-[350px] text-left">
              <img
                src={`images/lookbook_featured_pick_${i}.png`}
                alt={[
                  "Wardrobe Essentials",
                  "Fashion Forward Fitness",
                  "Seasonal Splendor"
                ][i - 1]}
                className="w-full h-[350px] object-cover mb-5"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {[
                  "Wardrobe Essentials",
                  "Fashion Forward Fitness",
                  "Seasonal Splendor"
                ][i - 1]}
              </h3>
              <p className="text-sm text-gray-600">
                {[
                  "Timeless Pieces for Every Occasion",
                  "Activewear that Moves with You",
                  "Fall in Love with Autumn Fashion"
                ][i - 1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quickshop Popup */}
      {quickshopProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[2000] flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-[700px] w-full flex gap-8 relative">
            <button
              onClick={closeQuickshop}
              className="absolute top-2 right-5 text-3xl bg-transparent border-none cursor-pointer"
            >
              &times;
            </button>
            <img
              src={quickshopProduct.image}
              alt={quickshopProduct.name}
              className="w-[260px] h-[340px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="mb-2">{quickshopProduct.name}</h2>
              <p className="font-bold text-lg mb-2">{quickshopProduct.price}</p>
              <p className="text-gray-600 mb-4">Brand: {quickshopProduct.brand}</p>
              <div className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry....</div>
              <div className="mb-4">
                <span className="mr-2">Size:</span>
                {['S', 'M', 'L'].map(size => (
                  <button
                    key={size}
                    onClick={() => setQuickshopSize(size)}
                    className={`mr-1 px-3 py-1 border border-gray-300 rounded ${quickshopSize === size ? 'bg-[#e35353] text-white' : 'bg-white text-gray-800'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex items-center mb-5">
                <button
                  onClick={() => setQuickshopQty(q => q > 1 ? q - 1 : 1)}
                  className="px-3 py-1 border border-gray-300 bg-gray-100 text-lg"
                >
                  -
                </button>
                <span className="px-4 font-bold">{quickshopQty}</span>
                <button
                  onClick={() => setQuickshopQty(q => q + 1)}
                  className="px-3 py-1 border border-gray-300 bg-gray-100 text-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-8 py-3 bg-[#e35353] text-white border-none rounded-full font-bold text-base cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LookbookPages;