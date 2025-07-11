import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: 'Orders',
    questions: [
      {
        id: 1,
        question: 'How do I make a purchase?',
        answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
      {
        id: 2,
        question: 'How do I know if my order is confirmed?',
        answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
      {
        id: 3,
        question: 'Can I change my shipping address after my order is placed?',
        answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
    ],
  },
  {
    category: 'Shipping & Returns',
    questions: [
      {
        id: 4,
        question: 'Do you ship internationally?',
        answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
      {
        id: 5,
        question: 'When will my order be shipped?',
        answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
      {
        id: 6,
        question: 'What is your return policy?',
        answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
      {
        id: 7,
        question: 'How long will it take until I receive my order?',
        answer: 'This is an example of a response that you might give. It\'s good to be as thorough as possible in responses as that has a tendency to improve trust overall.',
      },
    ],
  },
];

const FaqPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="font-sans bg-white pb-12">
      {/* Breadcrumb */}
      <div className="pt-6 bg-white text-sm text-gray-600 px-5">
        <Link to="/" className="no-underline text-inherit">Home</Link> /
        <Link to="/faqs" className="no-underline text-inherit underline"> Faqs</Link>
      </div>

      {/* FAQ Sections */}
      {faqData.map((categoryData, index) => (
        <section key={index} className="text-center px-5 py-2 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal mb-2 text-gray-800">
            {categoryData.category}
          </h2>
          <p className="text-base text-gray-500 mb-10 leading-relaxed">
            Below are some of our common questions about {categoryData.category.toLowerCase()}
          </p>

          <div className="border-t border-gray-200">
            {categoryData.questions.map((q) => (
              <div key={q.id} className="border-b border-gray-200">
                <div 
                  className="flex justify-between items-center py-5 cursor-pointer"
                  onClick={() => toggleQuestion(q.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 m-0">
                    {q.question}
                  </h3>
                  <span className="text-xl text-gray-600">
                    {openQuestion === q.id ? '-' : '+'}
                  </span>
                </div>
                {openQuestion === q.id && (
                  <p className="text-left pb-5 text-sm text-gray-600 leading-relaxed">
                    {q.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="text-center px-5 py-20 bg-gray-100">
        <p className="text-xs uppercase tracking-wider mb-2 text-black">
          ADVAND SUB
        </p>
        <h2 className="text-4xl md:text-5xl font-normal mb-5 text-gray-800">
          Have a project in mind? Let's talk.
        </h2>
        <p className="text-xl md:text-2xl text-black mb-1">
          Didn't find your answer?
        </p>
        <p className="text-base text-gray-600 mb-1">
          Don't hesitate to contact us
        </p>
        <button className="bg-white text-black px-8 py-4 text-base rounded-full border border-black cursor-pointer transition-colors duration-300 hover:bg-red-500 hover:text-white mt-8">
          CONTACT US
        </button>
      </section>
    </div>
  );
};

export default FaqPage;