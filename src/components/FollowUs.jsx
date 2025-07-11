import React, { useRef, useEffect } from 'react';

const instagramImages = [
  {
    id: 1,
    src: 'images/instagram_1.png',
    alt: 'Instagram Post 1',
  },
  {
    id: 2,
    src: 'images/instagram_2.png',
    alt: 'Instagram Post 2',
  },
  {
    id: 3,
    src: 'images/instagram_3.png',
    alt: 'Instagram Post 3',
  },
  {
    id: 4,
    src: 'images/instagram_4.png',
    alt: 'Instagram Post 4',
  },
  {
    id: 5,
    src: 'images/instagram_5.png',
    alt: 'Instagram Post 5',
  },
  {
    id: 6,
    src: 'images/instagram_6.png',
    alt: 'Instagram Post 6',
  },
];

const FollowUs = () => {
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
      className="text-center py-12 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
    >
      <h2 className="text-4xl md:text-5xl font-normal mb-2 text-gray-800">
        Follow Us
      </h2>
      <p className="text-lg text-red-500 mb-10">
        @Rosyz_Fashion_Store
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
        {instagramImages.map((image) => (
          <div key={image.id} className="h-48 overflow-hidden group">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-[98%] h-full object-cover block px-0.5 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FollowUs;