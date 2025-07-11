import React, { useEffect, useRef } from 'react';

const PassportPromotion = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex justify-center items-center py-12 bg-rose-50 bg-cover bg-top bg-no-repeat pl-15 md:pl-16">
      <div
        ref={contentRef}
        className="opacity-0 translate-y-10 transition-all duration-1000 ease-in-out flex-1 max-w-md lg:max-w-lg px-12 md:px-14 py-8 text-left border border-rose-100 bg-white"
      >
        <p className="text-xs md:text-sm text-black uppercase tracking-widest mb-2 md:mb-3">
          STYLE REDEFINED
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-5 font-normal text-gray-800">
          Your Passport To Fashion<br />Elegance
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 text-gray-600">
          Indulge in the art of fashion with Rosyz. Discover a world of
          sophistication and timeless elegance.
        </p>
        <button className="bg-transparent text-black border border-gray-800 px-6 py-3 text-xs rounded-full hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors">
          DISCOVER NOW
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src="images/hero_image_2.png"
          alt="Fashion Model"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
};

export default PassportPromotion;