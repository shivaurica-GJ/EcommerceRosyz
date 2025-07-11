import React, { useEffect, useRef } from 'react';

const categories = [
  { name: 'Men', image: 'images/category_men.png' },
  { name: 'Women', image: 'images/category_women.png' },
  { name: 'Accessories', image: 'images/category_accessories.png' },
  { name: 'Outerwear', image: 'images/category_outerwear.png' },
  { name: 'Shoes', image: 'images/category_shoes.png' },
];

const CategorySection = () => {
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

    const items = sectionRef.current.querySelectorAll('.category-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="text-center py-12 px-5 bg-gray-100" ref={sectionRef}>
      <p className="text-sm text-rose-600 mb-2 uppercase tracking-widest">
        OUR EXCLUSIVE COLLECTIONS
      </p>
      <h2 className="text-4xl md:text-5xl mb-12 font-semibold text-gray-800">
        Shop By Categories
      </h2>
      <div className="flex justify-center flex-wrap gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item opacity-0 translate-y-10 transition-all duration-1000 ease-in-out flex flex-col items-center"
          >
            <div className="w-44 h-44 md:w-36 md:h-36 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 shadow-lg flex justify-center items-center cursor-pointer hover:scale-[1.04] transition-transform duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-lg font-medium text-gray-700 sm:text-base">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
