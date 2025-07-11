

// const ProductsPage = ({ onAddToCart }) => {
//   const [openGroups, setOpenGroups] = useState(filterGroups.map(() => true));
//   const [quickshopProduct, setQuickshopProduct] = useState(null);
//   const [quickshopQty, setQuickshopQty] = useState(1);
//   const [quickshopSize, setQuickshopSize] = useState('M');
//   const [liked, setLiked] = useState({});
  
//   const toggleGroup = idx => {
//     setOpenGroups(groups => groups.map((open, i) => i === idx ? !open : open));
//   };

//   const toggleLike = (id) => {
//     setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const openQuickshop = (product) => {
//     setQuickshopProduct(product);
//     setQuickshopQty(1);
//     setQuickshopSize('M');
//   };
//   const closeQuickshop = () => setQuickshopProduct(null);

//   const handleAddToCart = () => {
//     if (onAddToCart && quickshopProduct) {
//       onAddToCart({
//         name: quickshopProduct.name,
//         size: quickshopSize,
//         price: Number(quickshopProduct.price.replace(/[^\d.]/g, '')),
//         quantity: quickshopQty,
//         image: quickshopProduct.image
//       });
//     }
//     closeQuickshop();
//   };
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productCategories = [
  { name: 'Accessories', count: 10, image: 'https://qx-rosyz.myshopify.com/cdn/shop/collections/accessories-women-cat_b32d178e-9588-487d-875b-7598f3a7bcb7.jpg?v=1699068549&width=360' },
  { name: 'Bags', count: 10, image: 'https://qx-rosyz.myshopify.com/cdn/shop/collections/accessories-women-cat_d0fab59b-0073-48f8-9096-fab3046ee59d.jpg?v=1699068605&width=360' },
  { name: 'Glasses', count: 10, image: 'https://qx-rosyz.myshopify.com/cdn/shop/collections/accessories-women-cat_0123eb06-f3c4-4eba-b38f-cf2b5da1837c.jpg?v=1699068594&width=360' },
  { name: 'Men', count: 10, image: 'https://qx-rosyz.myshopify.com/cdn/shop/collections/accessories-women-cat_fb81dd86-f6b4-4211-8f06-255335b6623f.jpg?v=1699068635&width=360' },
  { name: 'Outerwear', count: 10, image: 'https://qx-rosyz.myshopify.com/cdn/shop/collections/product-22.jpg?v=1699069511&width=360' },
];

const productsData = [
  {
    id: 1,
    image: 'images/product_page_1.png',
    brand: 'Denim Delight',
    name: 'Denim Skinny Jeans',
    price: '$21.00',
    originalPrice: null,
    discount: null,
    soldOut: false,
  },
  {
    id: 2,
    image: 'images/product_page_2.png',
    brand: 'Boho Chic Boutique',
    name: 'Fringe Boho Bag',
    price: '$15.00',
    originalPrice: null,
    discount: null,
    soldOut: false,
  },
  {
    id: 3,
    image: 'images/product_page_3.png',
    brand: 'Silk Elegance',
    name: 'Luxury Silk Scarf',
    price: '$21.00',
    originalPrice: null,
    discount: null,
    soldOut: false,
  },
  {
    id: 4,
    image: 'images/product_page_4.png',
    brand: 'Modern Man',
    name: 'Men\'s Classic Chino Pants',
    price: '$15.00',
    originalPrice: null,
    discount: null,
    soldOut: false,
  },
  {
    id: 5,
    image: 'images/product_page_5.png',
    brand: 'Urban Rugged',
    name: 'Men\'s Leather Chelsea Boots',
    price: '$0.00',
    originalPrice: null,
    discount: null,
    soldOut: true,
  },
  {
    id: 6,
    image: 'images/product_page_6.png',
    brand: 'WinterWonder Co',
    name: 'Quilted Puffer Jacket',
    price: '$20.00',
    originalPrice: null,
    discount: null,
    soldOut: false,
  },
];


const filterGroups = [
  { label: 'Availability', content: (
    <>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> In stock (5)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Out of stock (4)</label>
    </>
  ) },
  { label: 'Price', content: (
    <div className="flex items-center gap-2">
      <span>$</span><input type="number" defaultValue="0.00" className="w-20 p-1 border border-gray-300 rounded" />
      <span>$</span><input type="number" defaultValue="21.00" className="w-20 p-1 border border-gray-300 rounded" />
    </div>
  ) },
  { label: 'Size', content: (
    <div className="flex gap-2">
      <span className="size-box">S</span>
      <span className="size-box">M</span>
      <span className="size-box">L</span>
    </div>
  ) },
  { label: 'Product type', content: (
    <>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Blouse (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Boots (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Cardigan (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Dress (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Handbag (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Jacket (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Jeans (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Pants (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Scarf (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Shirt (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Shorts (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Suit (0)</label>
      <button className="text-red-500 text-xs mt-2">+ Show more</button>
    </>
  ) },
  { label: 'Brand', content: (
    <>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> ActiveLife Gear (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Beach Paradise (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Black Tie Affairs (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Bohemian Bliss (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Boho Chic Boutique (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Cashmere Cozy (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Chic Couture (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Coastal Trends (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Cozy Knits Co (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Dapper Styles (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Denim Delight (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Modern Man (1)</label>
      <button className="text-red-500 text-xs mt-2">+ Show more</button>
    </>
  ) },
  { label: 'Color', content: (
    <div className="flex flex-wrap gap-2">
      <span className="w-6 h-6 rounded-full bg-gray-500 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-gray-300 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-blue-200 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-pink-200 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-purple-300 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-silver border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-blue-100 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-gray-300 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-pink-200 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-wheat border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-red-300 border border-gray-200"></span>
      <span className="w-6 h-6 rounded-full bg-gray-400 border border-gray-200"></span>
    </div>
  ) },
  { label: 'More filters', content: (
    <>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Accessory (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Beach (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Beachy (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Bohemian (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Boho (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Boots (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Business Casual (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Button-down (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Cashmere (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Casual (2)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Chelsea (1)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Chinos (1)</label>
      <button className="text-red-500 text-xs mt-2">+ Show more</button>
    </>
  ) },
  { label: 'Material', content: (
    <>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Cotton (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Linen (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Satin (0)</label>
      <label className="flex items-center mb-2"><input type="checkbox" className="mr-2" /> Silk (0)</label>
    </>
  ) },
];
const ProductsPage = ({ onAddToCart }) => {
  const [openGroups, setOpenGroups] = useState(filterGroups.map(() => true));
  const [quickshopProduct, setQuickshopProduct] = useState(null);
  const [quickshopQty, setQuickshopQty] = useState(1);
  const [quickshopSize, setQuickshopSize] = useState('M');
  const [liked, setLiked] = useState({});

  const toggleGroup = (idx) => {
    setOpenGroups((groups) =>
      groups.map((open, i) => (i === idx ? !open : open))
    );
  };

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
        image: quickshopProduct.image,
      });
    }
    closeQuickshop();
  };
   return (
    <div className="font-arial pt-[30px]">
      {/* Hero Banner */}
      <div
        className="bg-cover bg-center h-[200px] md:h-[300px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage:
            "url('https://qx-rosyz.myshopify.com/cdn/shop/files/product-bg.jpg?v=1699639955&width=2048')",
        }}
      >
        <div className="absolute top-[20px] md:top-[1px] text-sm text-black text-center">
          <Link to="/" className="no-underline text-inherit">
            Home
          </Link>{' '}
          /{' '}
          <Link to="/products" className="underline text-inherit">
            Products
          </Link>
        </div>
        <h1 className="text-4xl md:text-[60px] font-bold mt-[30px] md:mt-[50px]">
          Products
        </h1>
      </div>

      {/* Categories */}
      <div className="px-4 md:px-[50px] py-5 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 py-[30px] border-b border-gray-200">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="text-center transition-transform duration-300 cursor-pointer group"
            >
              <div className="w-full aspect-square rounded overflow-hidden mx-auto mb-2 shadow-sm group-hover:scale-110 transition-transform">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-600">
                {category.name} ({category.count})
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 pt-6">
          {/* Sidebar Filters */}
          <aside className="md:w-[250px] bg-white p-5 rounded shadow-sm">
            <p className="text-base font-bold mb-5 text-left">Filter:</p>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs inline-flex items-center mb-2">
              $0.00 - $21.00 <i className="fas fa-times ml-1"></i>
            </span>
            <button className="text-red-500 text-xs underline ml-2 mb-4">
              Clear all
            </button>

            {filterGroups.map((group, idx) => (
              <div
                className="border-t border-gray-200 py-4 first:border-t-0"
                key={group.label}
              >
                <div className="flex justify-between items-center mb-3">
                  <span>{group.label}</span>
                  <i
                    className={`fas ${openGroups[idx] ? 'fa-chevron-up' : 'fa-chevron-down'} cursor-pointer`}
                    onClick={() => toggleGroup(idx)}
                  ></i>
                </div>
                {openGroups[idx] && group.content}
              </div>
            ))}
          </aside>

          {/* Product List */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center mb-6 bg-white p-4 rounded shadow-sm">
              <div className="flex gap-3 mb-3 md:mb-0">
                <i className="fas fa-th-large text-gray-800 text-xl cursor-pointer" />
                <i className="fas fa-bars text-gray-300 text-xl cursor-pointer" />
                <i className="fas fa-th text-gray-300 text-xl cursor-pointer" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort By:</span>
                <select className="p-2 border border-gray-300 text-sm">
                  <option>Alphabetically, A-Z</option>
                  <option>Featured</option>
                  <option>Best Selling</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                </select>
              </div>
              <p className="text-sm mt-3 md:mt-0">6 of 17 Products</p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded overflow-hidden relative shadow-sm"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.discount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs rounded">
                        {product.discount}
                      </span>
                    )}
                    {product.soldOut && (
                      <span className="absolute top-3 left-3 bg-gray-500 text-white px-2 py-1 text-xs rounded">
                        Sold Out
                      </span>
                    )}
                    <div
                      className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex justify-center items-center shadow-sm"
                      onClick={() => toggleLike(product.id)}
                    >
                      <i
                        className={`${
                          liked[product.id] ? 'fas' : 'far'
                        } fa-heart text-base ${
                          liked[product.id] ? 'text-black' : 'text-gray-600'
                        }`}
                      ></i>
                    </div>
                    <button
                      className="absolute bottom-0 left-0 w-full bg-black/70 text-white py-2 text-sm uppercase cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                      onClick={() => openQuickshop(product)}
                    >
                      + QUICKSHOP
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{product.brand}</p>
                    <h4 className="text-base font-semibold text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-sm font-bold">
                      {product.price}
                      {product.originalPrice && (
                        <span className="line-through text-gray-500 font-normal ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Quickshop Modal */}
      {quickshopProduct && (
        <div className="fixed inset-0 bg-black/40 z-[2000] flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl flex flex-col md:flex-row gap-6 relative">
            <button
              onClick={closeQuickshop}
              className="absolute top-3 right-5 text-2xl"
            >
              &times;
            </button>
            <img
              src={quickshopProduct.image}
              alt={quickshopProduct.name}
              className="w-full md:w-[260px] h-[340px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                {quickshopProduct.name}
              </h2>
              <p className="font-bold text-lg mb-2">{quickshopProduct.price}</p>
              <p className="text-gray-600 mb-3">
                Brand: {quickshopProduct.brand}
              </p>
              <div className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry....
              </div>
              <div className="mb-3">
                <span className="mr-2">Size:</span>
                {['S', 'M', 'L'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setQuickshopSize(size)}
                    className={`mr-2 px-3 py-1 border border-gray-300 rounded ${
                      quickshopSize === size
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex items-center mb-5">
                <button
                  onClick={() => setQuickshopQty((q) => (q > 1 ? q - 1 : 1))}
                  className="px-3 py-1 border border-gray-300 bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 font-bold">{quickshopQty}</span>
                <button
                  onClick={() => setQuickshopQty((q) => q + 1)}
                  className="px-3 py-1 border border-gray-300 bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-8 py-3 bg-red-500 text-white rounded-full font-bold text-base"
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

export default ProductsPage;