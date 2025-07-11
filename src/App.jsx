import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CategorySection from './components/CategorySection';
import PromotionSection from './components/PromotionSection';
import TrendingProducts from './components/TrendingProducts';
import PassportPromotion from './components/PassportPromotion';
import SpringCollection from './components/SpringCollection';
import BlogPosts from './components/BlogPosts';
import Testimonials from './components/Testimonials';
import FollowUs from './components/FollowUs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import BlogPage from './components/BlogPage';
import AboutUsPage from './components/AboutUsPage';
import FaqPage from './components/FaqPage';
import WishlistPage from './components/WishlistPage';
import ContactUsPage from './components/ContactUsPage';
import BestSelling from './components/BestSelling';
import Testimonialssecond from './components/Testimonialssecond';
import ProductDetailPage from './components/ProductDetailPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import CartPopup from './components/CartPopup';
import LookbookPages from './components/LookbookPages';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.name === product.name && item.size === product.size
      );
      if (existingIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        return [...prevItems, product];
      }
    });
    setShowCartPopup(true);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleChangeQuantity = (index, delta) => {
    setCartItems((prevItems) => {
      return prevItems.map((item, i) => {
        if (i === index) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 1 ? newQty : 1 };
        }
        return item;
      });
    });
  };

  const handleCartPopupClose = () => setShowCartPopup(false);

  return (
    <Router>
      <div className="text-center">
        <Navbar 
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
          showCartPopup={showCartPopup} 
          onCartPopupClose={handleCartPopupClose} 
          onCartIconClick={() => setShowCartPopup(true)} 
        />
        <div className="h-[60px] md:h-[56px] sm:h-[48px]"></div>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider />
              <CategorySection />
              <PromotionSection />
              <TrendingProducts onAddToCart={handleAddToCart} />
              <PassportPromotion />
              <BestSelling onAddToCart={handleAddToCart} />
              <SpringCollection onAddToCart={handleAddToCart} />
              <BlogPosts />
              <Testimonials />
              <FollowUs />
            </>
          } />
          <Route path="/shop" element={<ProductsPage onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/lookbook" element={<LookbookPages />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        {showCartPopup && (
          <CartPopup
            cartItems={cartItems}
            toggleCartPopup={handleCartPopupClose}
            onRemoveFromCart={handleRemoveFromCart}
            onChangeQuantity={handleChangeQuantity}
          />
        )}
        <Newsletter />
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;