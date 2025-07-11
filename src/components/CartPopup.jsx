import React from 'react';
import { FaTrash } from 'react-icons/fa';

const CartPopup = ({ cartItems, toggleCartPopup, onRemoveFromCart, onChangeQuantity }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-[1000]">
      <div className="bg-white w-[500px] max-w-[90%] h-full relative shadow-[-2px_0_8px_rgba(0,0,0,0.1)] flex flex-col">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="m-0 text-sm text-gray-500">
            Cart <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </h2>
          <button 
            className="bg-transparent border-none text-2xl cursor-pointer text-gray-800" 
            onClick={toggleCartPopup}
          >
            &times;
          </button>
        </div>
        
        {cartItems.length > 0 ? (
          <div className="flex-grow p-5 overflow-y-auto">
            {cartItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-gray-200"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="font-bold text-lg">{item.name}</div>
                  <div className="text-sm text-gray-500">Size: {item.size}</div>
                  <div className="text-sm text-gray-500">Price: ₹{item.price.toFixed(2)}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <button 
                      onClick={() => onChangeQuantity(idx, -1)} 
                      className="py-0.5 px-2.5 text-lg border border-gray-300 bg-gray-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="min-w-[24px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onChangeQuantity(idx, 1)} 
                      className="py-0.5 px-2.5 text-lg border border-gray-300 bg-gray-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => onRemoveFromCart(idx)} 
                  className="bg-transparent border-none cursor-pointer text-red-500 text-xl" 
                  title="Remove"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            
            <div className="text-center mt-8">
              <i className="fas fa-shopping-bag text-3xl text-gray-300 mb-5"></i>
              <p className="text-gray-500 mb-6">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
                product{cartItems.reduce((sum, item) => sum + item.quantity, 0) > 1 ? 's' : ''} in the cart.
              </p>
              <button className="px-8 py-3 bg-white text-black border border-black rounded-full text-xs cursor-pointer transition-colors duration-300 hover:bg-red-500 hover:text-white">
                CHECKOUT
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-grow flex flex-col justify-center items-center text-center p-5">
            <i className="fas fa-shopping-bag text-3xl text-gray-300 mb-5"></i>
            <p className="text-lg text-gray-500 mb-8">No products in the cart.</p>
            <button className="px-8 py-3 bg-white text-black border border-black rounded-full text-xs cursor-pointer transition-colors duration-300 hover:bg-red-500 hover:text-white">
              SHOP OUR PRODUCTS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;