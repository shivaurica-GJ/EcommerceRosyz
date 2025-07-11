import React, { useRef, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: `"I've Shopped At Many Online Fashion Stores, But Rosyz Is Truly Exceptional. Their Quality And Style Are Unmatched. I Keep Coming Back For More!"`,
    subquote: "I keep coming back for more!",
    author: 'Emily Johnson',
    title: 'Fashion Enthusiast',
    image: 'images/testimonial_emily.png',
  },
  {
    id: 2,
    rating: 5,
    quote: `"Rosyz Is My Go-To For The Latest Fashion Trends. Their Collection Is Always Up-To-Date, And The Shopping Experience Is A Breeze. I Recommend Them To All My Friends."`,
    subquote: "I recommend them to all my friends.",
    author: 'David Smith',
    title: 'Trendsetter',
    image: 'images/testimonial_david.png',
  },
  {
    id: 3,
    rating: 5,
    quote: `"I've Had The Pleasure Of Collaborating With Rosyz Multiple Times. Their Commitment To Style And Quality Is Evident In Every Piece They Offer."`,
    subquote: "It's the perfect fashion store",
    author: 'Sarah Anderson',
    title: 'Fashion Blogger',
    image: 'images/testimonial_sarah.png',
  },
];

const Testimonials = () => {
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
      ref={sectionRef}
      className="text-center py-12 px-5 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
    >
      <p className="text-sm text-rose-600 mb-2 uppercase tracking-wider">
        SUB TITLE TOP
      </p>
      <h2 className="text-5xl mb-12 font-normal text-gray-800">
        From The People
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full max-w-sm bg-white p-6 text-left relative rounded-xl shadow-md"
          >
            <div className="text-yellow-400 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fas fa-star mr-0.5"></i>
              ))}
            </div>
            <p className="text-base leading-relaxed text-gray-700 mb-3 italic">
              {testimonial.quote}
            </p>
            <p className="text-gray-600 mb-4">
              {testimonial.subquote}
            </p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 text-6xl text-gray-300 -z-10 rotate-12">
              “
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Testimonials;