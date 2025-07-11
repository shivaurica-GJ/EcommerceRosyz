import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: 'FAQs',
    questions: [
      {
        id: 1,
        question: 'How long will shipping take?',
        answer: 'All orders are shipped within 12-36 hours from our warehouse in Bellingham WA. Delivery times will depend on your shipping option but all orders are tracked from our facility to your door.',
      },
      {
        id: 2,
        question: 'How do I know if my order is confirmed?',
        answer: 'This is an example of a response that you might give. Its good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
      {
        id: 3,
        question: 'Can I change my shipping address after my order is placed?',
        answer: 'This is an example of a response that you might give. Its good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
    ],
  },
];

const ContactUsPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="pt-16 bg-white font-sans">
      {/* Hero Section */}
      <section className="text-center">
        <div className="py-1 text-sm text-gray-600">
          <Link to="/" className="hover:underline">Home</Link> /
          <Link to="/contact-us" className="hover:underline ml-1">Contact</Link>
        </div>

        <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-gray-100">
          <img
            src="/images/contact_hero.png"
            alt="Friends smiling"
            className="w-full md:w-1/2 h-[500px] object-cover"
          />
          <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10 text-left">
            <p className="uppercase tracking-widest text-sm text-[#e35353] mb-2">
              Timeless Elegance, Modern Charm
            </p>
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
              Indulge in Timeless Classics with a Modern Twist
            </h1>
            <p className="text-gray-600 leading-relaxed text-base">
              Embrace the allure of timeless fashion with our collection of modern classics. From essential<br />
              basics to statement pieces, redefine elegance with a contemporary touch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="flex flex-wrap justify-center px-5 py-10 gap-8">
        {[
          { icon: 'fa-map-marker-alt', title: 'Address', lines: ['Copley, South Australia 5732,', 'Australia.'] },
          { icon: 'fa-phone-alt', title: 'Call Us', lines: ['+ (02) 8771 3859', '+ (07) 4088 1324'] },
          { icon: 'fa-check-circle', title: 'Open', lines: ['Mon - Fri: 8am - 4pm', 'Sat - Sun: 9am - 5pm'] },
          { icon: 'fa-envelope', title: 'Emails', lines: ['example@example.com', 'example@example.com'] },
        ].map((info, idx) => (
          <div key={idx} className="text-center p-5 flex-1 min-w-[200px] max-w-[280px]">
            <i className={`fas ${info.icon} text-gray-600 text-xl`} />
            <h4 className="text-xl font-semibold text-gray-800 my-2">{info.title}</h4>
            {info.lines.map((line, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">{line}</p>
            ))}
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Got Any Questions?</h2>
        <p className="text-gray-600 text-base mb-10">
          Use the form below to get in touch with the sales<br />team
        </p>
        <form className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Name" className="w-full p-4 border border-gray-300 text-sm rounded" />
            <input type="email" placeholder="Email *" className="w-full p-4 border border-gray-300 text-sm rounded" />
          </div>
          <input type="text" placeholder="Phone Number" className="w-full p-4 border border-gray-300 text-sm rounded" />
          <textarea placeholder="Message" className="w-full p-4 border border-gray-300 text-sm rounded h-40 resize-y" />
          <button type="submit" className="bg-white text-black border border-black py-3 px-8 text-base rounded-full hover:bg-[#e35353] hover:text-white transition mx-auto">
            SEND →
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6">
          This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
        </p>
      </section>

      {/* Map Section */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11340174.654378125!2d126.85848796853664!3d-27.241315579899026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b069d668c22d735%3A0x6b772960f2efcd1c!2sCopley%20SA%205732%2C%20Australia!5e0!3m2!1sen!2sus!4v1700688640700!5m2!1sen!2sus"
          width="100%"
          height="500"
          className="border-0 w-full"
          allowFullScreen=""
          loading="lazy"
          title="Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* FAQs */}
      {faqData.map((categoryData, index) => (
        <section key={index} className="max-w-3xl mx-auto py-16 px-4">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">{categoryData.category}</h2>
          <p className="text-base text-gray-500 mb-10">Below are some of our common questions</p>
          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {categoryData.questions.map((q) => (
              <div key={q.id} className="py-5">
                <div
                  onClick={() => toggleQuestion(q.id)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{q.question}</h3>
                  <span className="text-xl text-gray-600">{openQuestion === q.id ? '-' : '+'}</span>
                </div>
                {openQuestion === q.id && (
                  <p className="text-left text-sm text-gray-600 mt-2">{q.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ContactUsPage;
