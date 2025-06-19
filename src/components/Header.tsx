import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-black text-brand-dark-teal mb-2">
        Jaco Kotzee Skill Matrix
      </h1>
       <h2 className="text-lg md:text-6xl font-black text-brand-dark-teal mb-2">
       Senior Frontend Developer
      </h2>
      <p className="text-lg md:text-xl text-brand-brown max-w-3xl mx-auto">
        A visual summary of my technical expertise, showcasing a deep proficiency in modern web development technologies and methodologies.
      </p>
    </header>
  );
};

export default Header;