import React from 'react';

const managementSteps = [
  {
    title: "Audit Your Online Presence",
    description: "Regularly search for yourself online and review your social media accounts.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Adjust Privacy Settings",
    description: "Review and update privacy settings on all your online accounts.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Think Before You Post",
    description: "Consider the long-term impact of your online activities before sharing.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Use Strong Passwords",
    description: "Create unique, strong passwords for each of your online accounts.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const ManageFootprint: React.FC = () => {
  return (
    <section id="manage" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">How to Manage Your Digital Footprint</h2>
        {managementSteps.map((step, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src={step.image} alt={step.title} className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
            <div className="md:w-1/2 md:px-8">
              <h3 className="text-2xl font-semibold mb-4">{index + 1}. {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageFootprint;