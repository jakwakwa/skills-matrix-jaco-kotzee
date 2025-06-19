import React from 'react';

const SpecializedSkills: React.FC = () => {
  const skills = [
    {
      title: 'API Integration',
      value: '5+',
      description: 'Years of experience connecting to and managing RESTful APIs.',
      color: 'text-brand-teal'
    },
    {
      title: 'Cloud Services',
      value: 'AWS',
      description: '1 year of experience with foundational cloud infrastructure.',
      color: 'text-brand-brown'
    },
    {
      title: 'Mobile Development',
      value: 'React Native',
      description: 'Entry-level experience in cross-platform mobile app development.',
      color: 'text-brand-peach'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 border border-brand-gold/20">
      <h2 className="text-2xl font-bold text-center mb-6 text-brand-dark-teal">
        Specialized Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="border border-brand-gold/30 p-4 rounded-lg">
            <h3 className={`text-xl font-bold ${skill.color}`}>
              {skill.title}
            </h3>
            <p className="text-3xl font-extrabold my-2 text-brand-dark">
              {skill.value}
            </p>
            <p className="text-brand-brown">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializedSkills;