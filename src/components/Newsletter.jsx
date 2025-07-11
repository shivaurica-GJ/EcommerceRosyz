import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [flash, setFlash] = useState(false);

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setFlash(true);
      setTimeout(() => setFlash(false), 1500); // Remove flash after animation
      return;
    }

    // Continue with email subscription logic here
    alert('Subscribed with ' + email);
  };

  return (
    <section className="bg-gray-800 text-white py-5 text-center">
      <div className="mx-auto px-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-10 leading-snug">
          Fashion Forward: Stay In The Know<br />With Our Newsletter
        </h2>
        <div className={`flex flex-col md:flex-row justify-center gap-2 max-w-2xl mx-auto ${flash ? 'animate-[flash_0.5s_ease-in-out_3]' : ''}`}>
          <input
            type="email"
            placeholder="Your email"
            className={`flex-1 px-5 py-4 rounded text-base ${flash ? 'bg-red-100' : 'bg-white'} md:w-auto w-full`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className="bg-rose-500 hover:bg-pink-500 text-white py-4 px-8 rounded text-base transition-colors duration-300 w-full md:w-auto"
            onClick={handleSubscribe}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;