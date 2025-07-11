import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingBag, FaAngleDown } from 'react-icons/fa';
import Login from './login';
import SearchPopup from './SearchPopup';
import CartPopup from './CartPopup';

const Navbar = ({ cartCount, onCartPopupClose }) => {
  const location = useLocation();
  const [selectedCurrency, setSelectedCurrency] = useState('INR ₹');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);
  const toggleSearchPopup = () => setShowSearchPopup(!showSearchPopup);
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyDropdown(false);
  };
  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { name: 'Home', path: '/', badge: 'New' },
    { name: 'Shop', path: '/shop' },
    { name: 'Product', path: '/products' },
    { name: 'Blog', path: '/blog' },
  ];

  const pageLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Faqs', path: '/faqs' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[999] bg-white shadow-md py-2.5 px-12 flex justify-between items-center transition-top duration-300 ${visible ? 'top-0' : '-top-[100px]'}`}>
        <div className="flex items-center">
          <span className="md:hidden text-3xl cursor-pointer text-gray-800 mr-4" onClick={handleMobileMenuToggle}>
            <FaBars />
          </span>
          <h1 className="text-2xl font-bold text-gray-800">Rosyz.</h1>
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ name, path, badge }) => (
            <li key={name}>
              <Link to={path} className={`font-bold ${location.pathname === path ? 'text-[#e35353]' : 'text-gray-600'} hover:text-black`}>
                {name}
                {badge && <span className="bg-[#ff69b4] text-white text-xs px-1.5 py-0.5 rounded ml-1 align-super">{badge}</span>}
              </Link>
            </li>
          ))}
          <li className="relative group">
            <span className="font-bold text-gray-600 cursor-pointer group-hover:text-black">Pages</span>
            <div className="absolute hidden group-hover:block top-full left-0 min-w-[160px] bg-gray-50 shadow-lg z-10 py-2">
              {pageLinks.map(({ name, path }) => (
                <Link key={name} to={path} className="block px-4 py-2 text-black hover:bg-gray-100">
                  {name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <a href="#" className="font-bold text-gray-600 hover:text-black">
              Buy Now <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded ml-1">Sale</span>
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div
            className="relative"
            onMouseEnter={() => setShowCurrencyDropdown(true)}
            onMouseLeave={() => setShowCurrencyDropdown(false)}
          >
            <span className="font-bold text-gray-600 cursor-pointer flex items-center gap-1">
              {selectedCurrency} <FaAngleDown />
            </span>
            {showCurrencyDropdown && (
              <ul className="absolute top-6 left-0 bg-white shadow-md rounded w-[100px] z-10">
                {['INR ₹', 'USD ₹', 'EUR €', 'SGD S$'].map((currency) => (
                  <li key={currency} className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleCurrencySelect(currency)}>
                    {currency}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FaSearch className="text-gray-600 cursor-pointer" onClick={toggleSearchPopup} />
          <FaUser className="text-gray-600 cursor-pointer" onClick={toggleLoginPopup} />
          <div className="relative cursor-pointer">
            <FaShoppingBag className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-[#ff69b4] text-white text-xs rounded-full px-1.5 py-0.5">{cartCount}</span>
          </div>

        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[2000]" onClick={handleMobileMenuClose}>
          <div className="bg-white w-[80vw] max-w-[320px] h-full shadow-lg p-6 relative" onClick={e => e.stopPropagation()}>
            <FaTimes className="absolute top-4 right-4 text-2xl cursor-pointer" onClick={handleMobileMenuClose} />
            <ul className="pt-10 space-y-5">
              {navLinks.map(({ name, path, badge }) => (
                <li key={name}>
                  <Link to={path} onClick={handleMobileMenuClose} className="text-lg text-gray-800 font-medium">
                    {name}
                    {badge && <span className="bg-[#ff69b4] text-white text-xs px-1.5 py-0.5 rounded ml-1">{badge}</span>}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-lg font-medium text-gray-800">Pages</span>
                <ul className="mt-2 pl-4 space-y-2">
                  {pageLinks.map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path} onClick={handleMobileMenuClose} className="text-lg text-gray-800 font-medium">{name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="#" className="text-lg text-gray-800 font-medium" onClick={handleMobileMenuClose}>
                  Buy Now <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded ml-1">Sale</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showLoginPopup && <Login toggleLoginPopup={toggleLoginPopup} />}
      {showSearchPopup && <SearchPopup toggleSearchPopup={toggleSearchPopup} />}

      {/* <div className="h-[60px] md:h-[1px] sm:h-[48px]"></div> */}
    </>
  );
};

export default Navbar;
