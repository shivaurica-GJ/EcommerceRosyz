import React, { useRef, useEffect } from 'react';

const blogPosts = [
  {
    id: 1,
    image: 'images/blog_post_1.png',
    author: 'Qodex Web',
    date: 'November 06 2023',
    title: 'Fashion Forward Exploring Future Trends',
    description: 'ANY, MEANING - IT DOESN\'T MATTER WHAT COLOR OR PRINT IT IS. IT\'LL WORK. AUGUE...',
  },
  {
    id: 2,
    image: 'images/blog_post_2.png',
    author: 'Qodex Web',
    date: 'November 06 2023',
    title: 'Wardrobe Essentials Building a Timeless Collection',
    description: 'ANY, MEANING - IT DOESN\'T MATTER WHAT COLOR OR PRINT IT IS. IT\'LL WORK. AUGUE...',
  },
  {
    id: 3,
    image: 'images/blog_post_3.png',
    author: 'Qodex Web',
    date: 'November 06 2023',
    title: 'Runway to Reality: Adapting Fashion Week Trends',
    description: 'ANY, MEANING - IT DOESN\'T MATTER WHAT COLOR OR PRINT IT IS. IT\'LL WORK. AUGUE...',
  },
];

const BlogPosts = () => {
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
      <p className="text-sm text-red-500 mb-2 uppercase tracking-wider">
        Explore Our Latest Fashion Insights
      </p>
      <h2 className="text-5xl mb-12 font-normal text-gray-800">Blog Posts</h2>

      <div className="flex justify-center flex-wrap gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="w-[350px] bg-white rounded-lg overflow-hidden text-left shadow hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">
                By {post.author} | {post.date}
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {post.description}
              </p>
              <button className="bg-transparent text-gray-800 border border-gray-800 py-2 px-5 text-sm rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
