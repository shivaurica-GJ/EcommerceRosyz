// import React, { useState } from 'react';

// const BlogPage = () => {
//   const [currentFeatured, setCurrentFeatured] = useState(0);

//   const nextFeatured = () => {
//     setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length);
//   };

//   const prevFeatured = () => {
//     setCurrentFeatured((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
//   };

//   return (
//     <div className="font-sans bg-white pt-2.5">
//       {/* ✅ Featured Blog Section (Image Right + Text Left + Slider) */}
//       <section className="relative py-12 px-5 bg-white flex items-center justify-center">
//         <button
//           className="bg-white shadow text-gray-700 w-10 h-10 rounded-full flex items-center justify-center absolute left-5 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-100"
//           onClick={prevFeatured}
//         >
//           &lt;
//         </button>

//         <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-5">
//           {/* Left: Text */}
//           <div className="p-8 md:p-12">
//             <p className="text-sm text-red-500 uppercase mb-3 tracking-widest font-medium">
//               {featuredPosts[currentFeatured].subtitle}
//             </p>
//             <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
//               {featuredPosts[currentFeatured].title}
//             </h2>
//             <div className="text-sm text-gray-500 mb-5">
//               {featuredPosts[currentFeatured].date} | {featuredPosts[currentFeatured].author} | {featuredPosts[currentFeatured].comments} Comments
//             </div>
//             <p className="text-base text-gray-700 leading-relaxed mb-6">
//               {featuredPosts[currentFeatured].description}
//             </p>
//             <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-800 text-gray-800 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all">
//               READ MORE <i className="fas fa-arrow-right"></i>
//             </button>
//           </div>

//           {/* Right: Image */}
//           <div className="w-full h-[450px] md:h-[500px] overflow-hidden rounded-md">
//             <img
//               src={featuredPosts[currentFeatured].image}
//               alt={featuredPosts[currentFeatured].title}
//               className="w-full h-full object-cover transition-transform duration-500"
//             />
//           </div>
//         </div>

//         <button
//           className="bg-white shadow text-gray-700 w-10 h-10 rounded-full flex items-center justify-center absolute right-5 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-100"
//           onClick={nextFeatured}
//         >
//           &gt;
//         </button>
//       </section>

//       {/* ✅ Regular Blog Posts Grid */}
//       <section className="py-14 px-5">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {regularPosts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white border border-gray-200 rounded-md overflow-hidden text-left shadow-sm hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="w-full h-64 overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-5">
//                 <p className="text-xs text-gray-500 mb-2">
//                   {post.date} | {post.comments} Comments
//                 </p>
//                 <h4 className="text-xl font-semibold text-gray-800 mb-3">
//                   {post.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 mb-4">{post.description}</p>
//                 <button className="inline-flex items-center gap-1.5 border border-gray-800 text-gray-800 text-sm px-5 py-2.5 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
//                   READ MORE <i className="fas fa-arrow-right"></i>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogPage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const featuredPosts = [
  {
    id: 1,
    image: 'images/blog_featured_1.png',
    subtitle: 'FEATURED POST',
    title: 'Fashion Forward Exploring Future Trends',
    date: 'November 06, 2023',
    author: 'Qodex Web',
    comments: 0,
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum..",
  },
  {
    id: 2,
    image: 'images/blog_featured_2.png',
    subtitle: 'FEATURED POST',
    title: 'Wardrobe Essentials Building a Timeless Collection',
    date: 'November 06, 2023',
    author: 'Qodex Web',
    comments: 0,
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum..",
  },
  {
    id: 3,
    image: 'images/blog_featured_3.png',
    subtitle: 'FEATURED POST',
    title: 'Runway to Reality: Adapting Fashion Week Trends',
    date: 'November 06, 2023',
    author: 'Qodex Web',
    comments: 0,
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum..",
  },
];

const regularPosts = [
  {
    id: 4,
    image: 'images/blog_post_regular_1.png',
    date: '11-06-2023',
    comments: 0,
    title: 'Fashion Forward Exploring Future Trends',
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
  },
  {
    id: 5,
    image: 'images/blog_post_regular_2.png',
    date: '11-06-2023',
    comments: 0,
    title: 'Wardrobe Essentials Building a Timeless Collection',
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
  },
  {
    id: 6,
    image: 'images/blog_post_regular_3.png',
    date: '11-06-2023',
    comments: 0,
    title: 'Runway To Reality: Adapting Fashion Week Trends',
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
  },
  {
    id: 7,
    image: 'images/blog_post_regular_4.png',
    date: '11-06-2023',
    comments: 0,
    title: 'Chic And Unique Creating Your Signature Style',
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
  },
  {
    id: 8,
    image: 'images/blog_post_regular_5.png',
    date: '11-06-2023',
    comments: 0,
    title: "Behind The Seams The Making Of Fashion's Favorites",
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
  },
  {
    id: 9,
    image: 'images/blog_post_regular_6.png',
    date: '11-06-2023',
    comments: 0,
    title: 'Style Spotlight Embracing The Latest Trends',
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
  },
];


const BlogPage = () => {
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [direction, setDirection] = useState(0); // for animation direction

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentFeatured((prev) =>
      (prev + newDirection + featuredPosts.length) % featuredPosts.length
    );
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="font-sans bg-white pt-2.5">
      {/* ✅ Featured Blog Slider */}
      <section className="relative py-12 px-5 bg-white flex items-center justify-center">
        <button
          className="bg-white shadow text-gray-700 w-10 h-10 rounded-full flex items-center justify-center absolute left-5 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-100"
          onClick={() => paginate(-1)}
        >
          &lt;
        </button>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-5 overflow-hidden">
          {/* Left: Text */}
          <motion.div
            key={featuredPosts[currentFeatured].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="p-8 md:p-12"
          >
            <p className="text-sm text-red-500 uppercase mb-3 tracking-widest font-medium">
              {featuredPosts[currentFeatured].subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
              {featuredPosts[currentFeatured].title}
            </h2>
            <div className="text-sm text-gray-500 mb-5">
              {featuredPosts[currentFeatured].date} | {featuredPosts[currentFeatured].author} | {featuredPosts[currentFeatured].comments} Comments
            </div>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              {featuredPosts[currentFeatured].description}
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-800 text-gray-800 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all">
              READ MORE <i className="fas fa-arrow-right"></i>
            </button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            key={featuredPosts[currentFeatured].image}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-[450px] md:h-[500px] overflow-hidden rounded-md"
          >
            <img
              src={featuredPosts[currentFeatured].image}
              alt={featuredPosts[currentFeatured].title}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </motion.div>
        </div>

        <button
          className="bg-white shadow text-gray-700 w-10 h-10 rounded-full flex items-center justify-center absolute right-5 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-100"
          onClick={() => paginate(1)}
        >
          &gt;
        </button>
      </section>

      {/* ✅ Regular Blog Posts Grid */}
      <section className="py-14 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-md overflow-hidden text-left shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">
                  {post.date} | {post.comments} Comments
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <button className="inline-flex items-center gap-1.5 border border-gray-800 text-gray-800 text-sm px-5 py-2.5 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
                  READ MORE <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
