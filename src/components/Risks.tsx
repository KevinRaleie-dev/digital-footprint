import React from 'react';
import { FaUserSecret, FaUserTie, FaBullhorn, FaLock } from 'react-icons/fa';

const risks = [
  {
    icon: FaUserSecret,
    title: "Identity Theft and Fraud",
    description: "Cybercriminals can use your digital footprint to steal your identity or commit fraud in your name."
  },
  {
    icon: FaUserTie,
    title: "Damage to Personal and Professional Reputation",
    description: "Inappropriate content or comments can harm your reputation and affect job prospects or personal relationships."
  },
  {
    icon: FaBullhorn,
    title: "Cyberbullying and Online Harassment",
    description: "A large digital footprint can make you more vulnerable to online bullying and harassment."
  },
  {
    icon: FaLock,
    title: "Loss of Privacy and Personal Information",
    description: "Oversharing can lead to a loss of privacy and potential misuse of your personal information."
  }
];

const Risks: React.FC = () => {
  return (
    <section id="risks" className="py-16 bg-gradient-to-br from-red-500 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Risks of Ignoring Your Digital Footprint</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {risks.map((risk, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <risk.icon className="text-4xl mr-4" />
                <h3 className="text-xl font-semibold">{risk.title}</h3>
              </div>
              <p className="text-gray-100">{risk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Risks;