import React from 'react';
import Testimonialssecond from './Testimonialssecond';

const AboutUsPage = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* ✅ Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center py-16 px-6 md:px-12 bg-white">
        <div className="flex-1 max-w-xl">
          <p className="text-sm text-black uppercase tracking-widest mb-3">Fall Into Fashion</p>
          <h1 className="text-4xl md:text-5xl font-normal text-gray-800 mb-6 leading-tight">
            Upgrade Your Wardrobe for the Season
          </h1>
          <button className="bg-white text-black border border-black px-8 py-3 rounded-full transition-colors duration-300 hover:bg-red-500 hover:text-white">
            SHOP NOW →
          </button>
        </div>
        <div className="flex-1 mb-10 md:mb-0">
          <img src="images/about_hero.png" alt="Fashion Model" className="w-full h-auto rounded-md" />
        </div>
      </section>

      {/* ✅ Discover Section */}
      <section className="flex flex-col lg:flex-row items-center py-20 px-6 md:px-12 gap-10 bg-white">
        <div className="relative flex-1 max-w-[600px] w-full">
          <img 
            src="https://qx-rosyz.myshopify.com/cdn/shop/files/spring-5.jpg?v=1699268755&width=900image.png" 
            alt="Fashion Model" 
            className="w-full rounded shadow-md" 
          />
          <img 
            src="images/about_discover_small.png" 
            alt="Fashion Detail" 
            className="absolute bottom-[-30px] right-[-30px] w-[200px] rounded"
          />
        </div>
        <div className="flex-1 max-w-xl">
          <p className="text-sm text-red-500 uppercase tracking-widest mb-2">Luxe Comfort, Everyday Glam</p>
          <h2 className="text-3xl text-gray-800 font-light mb-5">Style that Speaks Comfort and Glamour</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-7">
            Experience the luxury of comfort without compromising on glamour. Our fashion pieces
            seamlessly blend style and ease, ensuring you feel confident every day. Enjoy special
            discounts on chic and comfy looks.
          </p>
          <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-full text-sm font-bold transition duration-300 hover:bg-red-500 hover:text-white hover:border-red-500">
            DISCOVER NOW
          </button>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="py-12 px-5 bg-gray-100 flex flex-wrap justify-around text-center gap-8">
        {[
          { icon: 'images/feature_free_shipping.png', title: 'Free Shipping', desc: 'from all orders over $100' },
          { icon: 'images/feature_quality_support.png', title: 'Quality Support', desc: '24/7 online feedback' },
          { icon: 'images/feature_return_refund.png', title: 'Return & Refund', desc: 'Return money within 30 days' },
          { icon: 'images/feature_gift_voucher.png', title: 'Gift Voucher', desc: '20% off when you shop online' }
        ].map((item, index) => (
          <div key={index} className="flex-1 min-w-[200px] max-w-[250px]">
            <img src={item.icon} alt={item.title} className="w-10 h-10 mx-auto mb-2" />
            <h3 className="text-lg text-gray-800 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

   {/* ✅ Timeless Elegance Section */}
<section className="flex flex-col-reverse lg:flex-row items-center py-20 px-6 md:px-12 gap-10 bg-white">
  {/* Text Section */}
  <div className="flex-1 max-w-xl text-center lg:text-left">
    <p className="text-sm text-red-500 uppercase tracking-widest mb-2">Unleash Your Unique Style</p>
    <h2 className="text-3xl font-semibold text-gray-800 mb-5">Timeless Elegance, Modern Flair</h2>
    <p className="text-base text-gray-600 leading-relaxed mb-7">
      Indulge in the fusion of timeless classics and modern flair. Our curated selection
      brings you sophistication with a contemporary twist. Shop now to redefine your style.
    </p>
  </div>

  {/* Responsive Images Section */}
  <div className="flex-1 w-full flex flex-col lg:relative items-center gap-6 lg:min-h-[500px]">
    {/* On mobile/tablet, stacked vertically */}
    <img
      src="images/timeless_elegance_1.png"
      alt="Fashion 1"
      className="w-[280px] h-[380px] object-cover rounded shadow-md lg:absolute lg:top-0 lg:left-0"
    />
    <img
      src="images/timeless_elegance_2.png"
      alt="Fashion 2"
      className="w-[300px] h-[420px] object-cover rounded shadow-md lg:absolute lg:bottom-0 lg:right-0"
    />
  </div>
</section>


      {/* ✅ Testimonials Section */}
      <Testimonialssecond />

      {/* ✅ Store Location Map */}
      <section className="py-12 relative min-h-[500px]">
        <div className="w-full h-full absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            title="Our Store Location"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 bg-white p-7 rounded shadow-md w-[300px] z-10">
          <h3 className="text-2xl text-gray-800 mb-4">Our store</h3>
          <p className="text-gray-600 mb-1">Copley, South Australia 5732</p>
          <p className="text-gray-600 mb-1">Mon - Fri, 10am - 9pm</p>
          <p className="text-gray-600 mb-1">Saturday, 11am - 8pm</p>
          <p className="text-gray-600 mb-1">Sunday, 11am - 5pm</p>
          <button className="mt-5 px-6 py-3 border border-black rounded-full text-sm transition hover:bg-red-500 hover:text-white">
            GET DIRECTIONS
          </button>
        </div>
      </section>

      {/* ✅ Contact Form */}
      <section className="py-12 px-5 bg-white text-center">
        <p className="text-sm text-red-500 uppercase tracking-widest mb-2">Questions?</p>
        <h2 className="text-5xl font-normal text-gray-800 mb-12">Send us an email</h2>
        <form className="max-w-[600px] mx-auto flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded" />
            <input type="email" placeholder="Email *" className="w-full px-4 py-3 border border-gray-300 rounded" />
          </div>
          <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded" />
          <textarea placeholder="Message" className="w-full px-4 py-3 border border-gray-300 rounded min-h-[120px] resize-y" />
          <button
            type="submit"
            className="self-start px-8 py-3 border border-black rounded-full transition hover:bg-gray-800 hover:text-white"
          >
            SEND →
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-5">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="text-red-500">Privacy Policy</a> and{" "}
          <a href="#" className="text-red-500">Terms of Service</a> apply.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
