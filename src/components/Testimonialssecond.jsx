import React, { useRef, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: `"I've Shopped At Many Online Fashion Stores, But Rosyz Is Truly Exceptional. Their Quality And Style Are Unmatched. I Keep Coming Back For More!"`,
    subquote: "Perfect !",
    author: 'Emily Johnson',
    title: 'Fashion Enthusiast',
    image: 'images/testimonial_emily.png',
  },
  {
    id: 2,
    rating: 5,
    quote: `"Rosyz Is My Go-To For The Latest Fashion Trends. Their Collection Is Always Up-To-Date, And The Shopping Experience Is A Breeze. I Recommend Them To All My Friends."`,
    subquote: "Awesome !",
    author: 'David Smith',
    title: 'Trendsetter',
    image: 'images/testimonial_david.png',
  },
  {
    id: 3,
    rating: 5,
    quote: `"I've Had The Pleasure Of Collaborating With Rosyz Multiple Times. Their Commitment To Style And Quality Is Evident In Every Piece They Offer."`,
    subquote: "Amazing !",
    author: 'Sarah Anderson',
    title: 'Fashion Blogger',
    image: 'images/testimonial_sarah.png',
  },
];

const Testimonialssecond = () => {
  const sectionRef = useRef(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="opacity-0 translate-y-10 transition-all duration-1000 ease-in-out bg-white py-12 px-5 md:px-20 text-center"
      ref={sectionRef}
    >
      <div className="flex flex-wrap justify-center gap-5">
        {testimonialsData.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="w-72 bg-white p-8 pl-20 text-left relative"
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.author} 
                className="w-15 h-15 rounded-full object-cover mr-4" 
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
                <div className="text-black mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-xl mb-2">{testimonial.subquote}</p>
            <p className="text-gray-500 text-base leading-relaxed italic">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonialssecond;