import React from 'react';

const SearchPopup = ({ toggleSearchPopup }) => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-2/5 h-full bg-white bg-opacity-95 flex justify-end items-start z-[1000] p-5 md:p-5 sm:p-2 xs:p-0">
      <div className="bg-white w-[500px] max-w-[90%] md:max-w-[90%] py-10 px-5 shadow-md relative flex flex-col items-center rounded-lg sm:w-[90vw] sm:max-w-[98vw] sm:py-7 sm:px-2 xs:w-[98vw] xs:max-w-[100vw] xs:py-5 xs:px-1">
        <button 
          className="absolute top-4 right-4 bg-transparent border-none text-2xl cursor-pointer text-gray-700"
          onClick={toggleSearchPopup}
        >
          &times;
        </button>
        <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">
          What are you looking for?
        </p>
        <div className="w-full flex items-center border-b border-gray-300 pb-1 mt-5">
          <input 
            type="text" 
            placeholder="Search Products..." 
            className="flex-grow border-none outline-none text-2xl py-1 px-0 text-black placeholder-gray-400 sm:text-xl xs:text-lg"
          />
          <i className="fas fa-search text-2xl text-gray-500 cursor-pointer ml-2 sm:text-xl xs:text-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;