import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Digital Footprint Awareness</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#what-is" onClick={scrollToSection('what-is')} className="hover:underline font-medium">What is it?</a></li>
            <li><a href="#manage" onClick={scrollToSection('manage')} className="hover:underline font-medium">How to Manage</a></li>
            <li><a href="#risks" onClick={scrollToSection('risks')} className="hover:underline font-medium">Risks</a></li>
            <li><a href="#best-practices" onClick={scrollToSection('best-practices')} className="hover:underline font-medium">Best Practices</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;