import React from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  return (
    <div className="font-[Arial,sans-serif] bg-white pb-[50px] min-h-[50vh] pt-[60px] md:pt-[60px] sm:pt-[50px]">
      <div className="py-[1px] px-[50px] bg-white text-[14px] text-black md:px-[30px] sm:px-[20px]">
        <Link to="/" className="no-underline text-inherit">Home</Link> /
        <Link to="/wishlist" className="underline text-inherit"> Wishlist</Link>
      </div>
      <div className="text-center py-[1px] px-[20px] sm:px-[10px]">
        <h2 className="text-[50px] font-normal mb-[40px] text-[#333] md:text-[40px] sm:text-[1.2em] xs:text-[1em]">
          Wishlist
        </h2>
        <div className="bg-[#fff3cd] border border-[#ffeeba] text-[#856404] py-[15px] mx-auto max-w-[500px] text-[16px] sm:text-[14px]">
          There are no products in your wishlist!
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;