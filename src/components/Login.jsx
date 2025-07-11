import React, { useState } from 'react';

const Login = ({ toggleLoginPopup }) => {
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = (e) => {
    e.preventDefault();
    setShowRegister(true);
  };
  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowRegister(false);
  };

  return (
<div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-[1000]">
      <div className="bg-white p-10 rounded-lg w-[400px] max-w-[90%] relative text-center shadow-md
        md:w-[90vw] md:max-w-[98vw] md:p-[30px_10px]
        sm:w-[98vw] sm:max-w-[100vw] sm:p-[20px_2px]
        xs:w-[100vw] xs:max-w-[100vw] xs:p-[10px_1px]">
        
        <button 
          className="absolute top-[15px] right-[15px] bg-transparent border-none text-2xl cursor-pointer text-[#333]" 
          onClick={toggleLoginPopup}
        >
          &times;
        </button>
        
        {!showRegister ? (
          <>
            <h2 className="mb-2 text-2xl text-[#333]">Login</h2>
            <p className="mb-8 text-[#666] text-base">Please enter your e-mail and password:</p>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-[calc(100%-20px)] p-3 mb-5 border border-[#ddd] rounded text-base"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-[calc(100%-20px)] p-3 mb-5 border border-[#ddd] rounded text-base"
            />
            <div className="text-right mb-5 text-sm">
              <a href="#" className="text-blue-500 no-underline hover:underline">Forgot your password?</a>
            </div>
            <button className="w-full p-4 bg-white text-black border border-black rounded-full text-lg cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white">
              LOGIN
            </button>
            <div className="mt-6 text-base text-[#666]">
              New customer? <a href="#" onClick={handleShowRegister} className="text-blue-500 no-underline hover:underline">Register</a>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-2 text-2xl text-[#333]">Register</h2>
            <p className="mb-8 text-[#666] text-base">Please fill in the fields below</p>
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-[calc(100%-20px)] p-3 mb-5 border border-[#ddd] rounded text-base"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-[calc(100%-20px)] p-3 mb-5 border border-[#ddd] rounded text-base"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-[calc(100%-20px)] p-3 mb-5 border border-[#ddd] rounded text-base"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-[calc(100%-20px)] p-3 mb-5 border border-[#ddd] rounded text-base"
            />
            <button className="w-full p-4 bg-white text-black border border-black rounded-full text-lg cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white">
              CREATE
            </button>
            <div className="mt-6 text-base text-[#666]">
              Already a member? <a href="#" onClick={handleShowLogin} className="text-blue-500 no-underline hover:underline">Login</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
