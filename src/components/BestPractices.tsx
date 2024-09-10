import React, { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const bestPractices = [
  {
    title: "Be Mindful of What You Share",
    content: "Think twice before posting personal information or sensitive content online. Once something is on the internet, it can be difficult to completely remove it. Consider the potential long-term consequences of your posts."
  },
  {
    title: "Use Privacy Settings",
    content: "Regularly review and update privacy settings on all your social media accounts and online platforms. Understand what information is visible to whom and adjust accordingly to protect your privacy."
  },
  {
    title: "Google Yourself",
    content: "Periodically search for your name online to see what information is publicly available about you. This can help you identify and address any unwanted or outdated information that appears in search results."
  },
  {
    title: "Use Strong, Unique Passwords",
    content: "Create strong, unique passwords for each of your online accounts and consider using a password manager. This helps prevent unauthorized access to your accounts and protects your personal information."
  }
];

const Accordion: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className="transition-transform duration-300 ease-in-out transform">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className="py-4 px-6 bg-gray-50">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const BestPractices: React.FC = () => {
  return (
    <section id="best-practices" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Best Practices for Managing Your Digital Footprint</h2>
        <div className="max-w-3xl mx-auto">
          {bestPractices.map((practice, index) => (
            <Accordion key={index} title={practice.title} content={practice.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPractices;