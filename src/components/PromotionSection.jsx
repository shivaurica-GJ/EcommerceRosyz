import React, { useEffect, useRef } from 'react';

const PromotionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.promotion-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col md:flex-row justify-center gap-5 md:gap-8 py-5 md:py-12 px-1 md:px-5 bg-gray-50">
      {/* Left Card */}
      <div className="promotion-card group relative opacity-0 translate-y-10 transition-all duration-1000 ease-in-out w-full md:flex-1 md:max-w-2xl h-48 md:h-96 flex items-center rounded-xl overflow-hidden">
  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
    style={{
      backgroundImage: "url('//qx-rosyz.myshopify.com/cdn/shop/files/offer-banner1_cd5ff0a4-83f8-4855-b0ca-254ffafee564.jpg?v=1699027044&width=1920')"
    }}
  ></div>

  {/* Text Layer */}
  <div className="relative z-10 p-4 md:p-10 text-left">
    <p className="text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2 text-black font-bold">SEASONAL STYLE SENSATIONS</p>
    <h3 className="text-xl md:text-4xl leading-tight mb-2 md:mb-5 font-normal text-black">Unwrap The Hottest<br />Trends Of The Year</h3>
    <p className="text-xs md:text-base mb-3 md:mb-8 leading-relaxed">Get ready for a wardrobe makeover like no other.</p>
    <button className="bg-transparent text-white border-0 py-1 md:py-3 px-3 md:px-6 text-xs md:text-sm cursor-pointer underline">VIEW MORE</button>
  </div>
</div>


      {/* Right Card */}
      <div className="promotion-card group relative opacity-0 translate-y-10 transition-all duration-1000 ease-in-out w-full md:flex-1 md:max-w-2xl h-48 md:h-96 flex items-center justify-end rounded-xl overflow-hidden">
  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
    style={{
      backgroundImage: "url('//qx-rosyz.myshopify.com/cdn/shop/files/offer-banner2_1e89c27a-54d6-49ae-ac26-6415cb2b5f64.jpg?v=1699026874&width=1920')"
    }}
  ></div>

  {/* Text Layer */}
  <div className="relative z-10 p-4 md:p-10 text-right flex flex-col items-end">
    <p className="text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2 text-black font-bold">ELEVATE YOUR STYLE GAME</p>
    <h3 className="text-xl md:text-4xl leading-tight mb-2 md:mb-5 font-normal text-black">Discover The Latest<br />In Fashion</h3>
    <p className="text-xs md:text-base mb-3 md:mb-8 leading-relaxed">Unleash your inner fashionista with Rosyz.</p>
    <button className="bg-transparent text-white border-0 py-1 md:py-3 px-3 md:px-6 text-xs md:text-sm cursor-pointer underline">VIEW MORE</button>
  </div>
</div>

    </section>
  );
};

export default PromotionSection;