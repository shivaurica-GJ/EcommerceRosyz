import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailPage = ({ onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [mainProductImage, setMainProductImage] = useState('images/product_page_1.png');
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(prev => (prev === section ? null : section));
  };

  const productThumbnails = [
    'images/product_page_1.png',
    'images/lookbook_chase_1.png',
    'images/lookbook_chase_2.png',
    'images/product_page_4.png',
  ];

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      {/* Breadcrumb */}
      <div className="py-1 text-sm text-gray-600">
        <Link to="/" className="hover:underline">Home</Link> / 
        <Link to="/products" className="underline ml-1">Boho Floral Maxi Dress</Link>
      </div>

      {/* Main Product Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-5">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          <div className="relative mb-4">
            <img 
              src={mainProductImage} 
              alt="Boho Floral Maxi Dress" 
              className="w-full h-auto rounded-lg"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800">
              &#8249;
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800">
              &#8250;
            </button>
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            {productThumbnails.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded border cursor-pointer hover:border-gray-800"
                onClick={() => setMainProductImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-medium text-gray-900 mb-2">Boho Floral Maxi Dress</h1>
          <p className="text-2xl font-bold text-gray-900 mb-4">$25.00</p>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Size Selector */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-3">Size:</span>
              <div className="flex gap-2">
                {['S', 'M', 'L'].map(size => (
                  <button
                    key={size}
                    className={`w-12 h-10 border rounded flex items-center justify-center ${
                      selectedSize === size 
                        ? 'border-gray-900 bg-gray-100' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-3">Color:</span>
              <div className="flex gap-2 flex-wrap">
                {['black', 'navy', 'brown', 'maroon', 'red', 'magenta', 'teal', 'gray', 'burgundy', 'purple', 'light-blue', 'orange', 'pink', 'dark-green', 'beige', 'olive'].map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color 
                        ? 'border-gray-900' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: getColorValue(color) }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <button className="text-sm underline mt-1">Size Guide</button>
          </div>

          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex border rounded">
              <button 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange('decrease')}
              >
                -
              </button>
              <span className="px-4 py-2 border-x flex items-center">{quantity}</span>
              <button 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
            <button 
              className="px-6 py-3 border border-black rounded-full hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors"
              onClick={() => onAddToCart({
                name: 'Boho Floral Maxi Dress',
                size: selectedSize,
                price: 25.00,
                quantity: quantity,
                image: mainProductImage
              })}
            >
              ADD TO CART
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-rose-500 transition-colors">
              BUY IT NOW
            </button>
          </div>

          {/* Wishlist/Compare */}
          <div className="flex gap-6 text-gray-600 mb-6">
            <button className="flex items-center hover:text-gray-900">
              <i className="far fa-heart mr-2"></i> Add To Wishlist
            </button>
            <button className="flex items-center hover:text-gray-900">
              <i className="fas fa-random mr-2"></i> Compare
            </button>
          </div>

          {/* Product Meta */}
          <div className="text-sm text-gray-600 mb-6">
            <p className="mb-1">Vendor: <span className="font-semibold">Bohemian Bliss</span></p>
            <p className="mb-1">Type: <span className="font-semibold">Dress</span></p>
            <p className="mb-1">Sku: <span className="font-semibold">null</span></p>
            <p className="mb-1">Available: <span className="font-semibold">Available</span></p>
          </div>

          {/* Sale Info */}
          <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 p-3 rounded flex items-center mb-6">
            <i className="fas fa-fire-alt mr-2"></i>
            <span>Sale ends in!</span>
            <button className="ml-auto bg-yellow-400 px-3 py-1 rounded text-sm font-medium">
              End Deal
            </button>
          </div>

          {/* Accordion */}
          <div className="border-y border-gray-200 py-4 mb-6">
            <div className="mb-4">
              <button 
                className="w-full flex justify-between items-center font-medium"
                onClick={() => toggleAccordion('shipping')}
              >
                <span className="flex items-center">
                  <i className="fas fa-truck mr-2"></i> Shipping information
                </span>
                <i className={`fas ${openAccordion === 'shipping' ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {openAccordion === 'shipping' && (
                <div className="mt-2 pl-8 text-gray-600">
                  <ul className="list-disc pl-4">
                    <li>No EU import duties.</li>
                    <li>Ships within 1-2 business days.</li>
                    <li>Eco-friendly packaging.</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <button 
                className="w-full flex justify-between items-center font-medium"
                onClick={() => toggleAccordion('care')}
              >
                <span className="flex items-center">
                  <i className="fas fa-tshirt mr-2"></i> Care Guide
                </span>
                <i className={`fas ${openAccordion === 'care' ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {openAccordion === 'care' && (
                <div className="mt-2 pl-8 text-gray-600">
                  <ul className="list-disc pl-4">
                    <li>55% Linen, 45% Rayon</li>
                    <li>Hand wash cold</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <p className="flex items-center">
              <i className="fas fa-lock mr-2"></i> Secure payment
            </p>
            <p className="flex items-center">
              <i className="fas fa-award mr-2"></i> 2 Year Warranty
            </p>
          </div>

          {/* Social Proof */}
          <div className="text-sm text-gray-600 mb-4">
            <p className="flex items-center mb-2">
              <i className="fas fa-users mr-2"></i> 19 customers are viewing this product
            </p>
            <p className="flex items-center">
              <i className="fas fa-chart-line mr-2"></i> 30 SOLD IN LAST 18 HOURS
            </p>
          </div>

          {/* Shipping Promo */}
          <div className="text-sm text-gray-600 mb-4 flex items-center">
            <i className="fas fa-shipping-fast mr-2"></i> 
            <span>Spend $1,000.00 for Free Shipping</span>
          </div>

          {/* Social Share */}
          <div className="flex gap-6 text-sm text-gray-600 border-t border-gray-200 pt-4 mb-6">
            <button className="flex items-center hover:text-gray-900">
              <i className="fab fa-facebook-f mr-2"></i> Share
            </button>
            <button className="flex items-center hover:text-gray-900">
              <i className="fab fa-twitter mr-2"></i> Tweet
            </button>
            <button className="flex items-center hover:text-gray-900">
              <i className="fab fa-pinterest-p mr-2"></i> Pin it
            </button>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="font-medium mb-4">Guarantee safe checkout</p>
            <div className="flex justify-center gap-2">
              <img src="images/payment_methods.png" alt="Payment Methods" className="h-8" />
              <img src="images/payment_methods1.png" alt="Payment Methods" className="h-8" />
              <img src="images/payment_methods2.png" alt="Payment Methods" className="h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="border-t border-gray-200 mt-12 pt-8">
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            className={`pb-2 px-4 font-medium ${
              activeTab === 'description' ? 'text-black border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`pb-2 px-4 font-medium ${
              activeTab === 'material' ? 'text-black border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('material')}
          >
            Material
          </button>
          <button 
            className={`pb-2 px-4 font-medium ${
              activeTab === 'reviews' ? 'text-black border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className="text-gray-600">
          {activeTab === 'description' && <p>This is the detailed description of the product...</p>}
          {activeTab === 'material' && <p>Material: 55% Linen, 45% Rayon</p>}
          {activeTab === 'reviews' && <p>Customer reviews will appear here.</p>}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-medium text-center mb-8">Related products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Classic Men's Oxford Shirt",
              price: 25.00,
              originalPrice: 32.60,
              image: "images/product_2.png"
            },
            {
              name: "Leather Biker Jacket",
              price: 25.00,
              image: "images/product_3.png"
            }
          ].map((product, index) => (
            <div key={index} className="border rounded-lg p-4 text-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="font-bold mb-3">
                ${product.price.toFixed(2)}
                {product.originalPrice && (
                  <span className="ml-2 text-gray-500 line-through font-normal">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <button 
                className="underline hover:text-gray-900"
                onClick={() => onAddToCart({
                  name: product.name,
                  size: selectedSize,
                  price: product.price,
                  quantity: 1,
                  image: product.image
                })}
              >
                + Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get color values
function getColorValue(color) {
  const colors = {
    black: '#000000',
    navy: '#000080',
    brown: '#A52A2A',
    maroon: '#800000',
    red: '#FF0000',
    magenta: '#FF00FF',
    teal: '#008080',
    gray: '#808080',
    burgundy: '#800020',
    purple: '#800080',
    'light-blue': '#ADD8E6',
    orange: '#FFA500',
    pink: '#FFC0CB',
    'dark-green': '#006400',
    beige: '#F5F5DC',
    olive: '#808000'
  };
  return colors[color] || '#CCCCCC';
}

export default ProductDetailPage;