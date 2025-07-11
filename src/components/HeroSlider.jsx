import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      text: {
        title: 'Elevate Your Style With<br/>Our New Collection',
        subtitle: 'DISCOVER THE LATEST TRENDS',
        description: 'Get ready to turn heads with our exclusive fashion line. Explore the season\'s hottest trends.',
      },
      image: 'images/hero_image_2.png',
      bgColor: 'bg-[#e6dace]',
      imageLeft: false,
    },
    {
      id: 2,
      text: {
        title: 'Unleash The Latest Trends With Rosyz.',
        subtitle: 'DISCOVER YOUR STYLE',
        description: 'Step into the world of fashion and redefine your wardrobe with our exclusive collection.',
      },
      image: 'images/new.png',
      bgColor: 'bg-[#a276b1]',
      imageLeft: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
<section className={`w-full h-[520px] relative overflow-hidden pt-0 transition-colors duration-500 ${slide.bgColor}`}>
  <div className={`flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] w-full mx-auto px-[20px] py-[10px] h-full
    ${slide.imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-[#333] md:px-[30px]">
          <p className="text-[14px] text-[#e35353] mb-[10px] uppercase tracking-[2px] text-center md:text-left">
            {slide.text.subtitle}
          </p>
          <h2
            className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] leading-[1.1] mb-[20px] font-normal text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: slide.text.title }}
          />
          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] mb-[30px] text-center md:text-left">
            {slide.text.description}
          </p>
          <div className="text-center md:text-left">
            <button className="bg-black text-white py-[15px] px-[30px] text-[16px] rounded-[30px] hover:bg-[#e35353] transition duration-300">
              SHOP NOW →
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={slide.image}
            alt="Fashion"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-[280px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-contain"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 flex">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-[10px] w-[10px] rounded-full mx-[5px] cursor-pointer transition-colors duration-300 ${currentSlide === index ? 'bg-[#ff69b4]' : 'bg-[rgba(0,0,0,0.3)]'
              }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
