import React from 'react';
import { FaShareAlt, FaShoppingCart, FaEnvelope, FaCamera, FaComments } from 'react-icons/fa';

const footprintItems = [
  { icon: FaShareAlt, title: "Social Media", description: "Posts and interactions on social platforms" },
  { icon: FaShoppingCart, title: "Online Purchases", description: "Shopping history and browsing patterns" },
  { icon: FaEnvelope, title: "Email Communications", description: "Sent and received emails" },
  { icon: FaCamera, title: "Media Sharing", description: "Photos and videos shared online" },
  { icon: FaComments, title: "Online Comments", description: "Comments on websites and forums" },
];

const WhatIs: React.FC = () => {
  return (
    <section id="what-is" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">What is a Digital Footprint?</h2>
      <p className="text-xl mb-8 text-center">Digital footprints are the traces that social media users leave behind from their online activity in the digital age. These footprints are made up of the data that users create during their numerous online activities. It includes:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {footprintItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <item.icon className="text-3xl text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIs;