import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("🇸🇬 Singapore (USD $)");

    const options = [
      "🇸🇬 Singapore (USD $)",
      "🇮🇳 India (INR ₹)",
      "🇺🇸 United States (USD $)",
      "🇬🇧 United Kingdom (GBP £)"
    ];

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

    return (
      <footer className="bg-gray-900 text-white px-5 py-12">
        <div className="flex flex-wrap justify-between pb-8 border-b border-gray-800 max-w-7xl mx-auto">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-8 px-4">
            <h3 className="text-red-500 text-lg font-semibold mb-5">GET IN TOUCH</h3>
            <p className="text-gray-400 text-sm mb-2">T: +(08) 9055 0269</p>
            <p className="text-gray-400 text-sm mb-2">E: example@example.com</p>
            <p className="text-gray-400 text-sm">50 Parana Place, West. Casuarinas,<br />Western Australia, Australia.</p>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-8 px-4">
            <h3 className="text-red-500 text-lg font-semibold mb-5">CATEGORIES</h3>
            <ul className="space-y-2">
              {['Accessories', 'Bags', 'Glasses', 'Men', 'Outerwear'].map((item) => (
                <li key={item} className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-8 px-4">
            <h3 className="text-red-500 text-lg font-semibold mb-5">INFORMATION</h3>
            <ul className="space-y-2">
              {['About Us', 'Privacy Policy', 'Returns Policy', 'Shipping Policy', 'Terms & Conditions'].map((item) => (
                <li key={item} className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-8 px-4">
            <h3 className="text-red-500 text-lg font-semibold mb-5">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['My Account', 'My Cart', 'Size Chart', 'Wishlist', 'Gift Card'].map((item) => (
                <li key={item} className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 5 */}
          <div className="w-full md:w-1/5 mb-8 px-4">
            <h1 className="text-white text-5xl font-semibold mb-5">Rosyz.</h1>
            <p className="text-gray-400 text-sm mb-5">Rosyz Shopify is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-5 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-5 mb-4 md:mb-0">
            <div className="relative">
              <div 
                className="bg-gray-800 px-3 py-1 rounded cursor-pointer flex items-center"
                onClick={toggleDropdown}
              >
                <span className="text-sm mr-2">{selectedOption}</span>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </div>
              {isOpen && (
                <ul className="absolute bottom-full left-0 mb-2 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-[200px]">
                  {options.map((option, index) => (
                    <li 
                      key={index} 
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="text-gray-400 text-sm">
              Copyright © 2023 <span className="text-white font-semibold">Rosyz.</span> All rights reserved
            </p>
          </div>
          <div className="flex space-x-2">
            <img src="images/payment_methods.png" alt="Payment Methods" className="h-6" />
            <img src="images/payment_methods1.png" alt="Payment Methods" className="h-6" />
            <img src="images/payment_methods2.png" alt="Payment Methods" className="h-6" />
          </div>
        </div>
      </footer>
    );
};

export default Footer;