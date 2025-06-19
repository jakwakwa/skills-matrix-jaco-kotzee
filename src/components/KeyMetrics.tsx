import React from 'react';

const KeyMetrics: React.FC = () => {
  const metrics = [
    {
      value: '10+',
      title: 'Years HTML Experience',
      description: 'Building the web\'s foundation with semantic and accessible markup.',
      color: 'text-brand-teal'
    },
    {
      value: '8+',
      title: 'Years UI/UX Design',
      description: 'Crafting intuitive, user-centric interfaces from concept to code.',
      color: 'text-brand-brown'
    },
    {
      value: '6+',
      title: 'Years JavaScript Mastery',
      description: 'Developing dynamic and responsive web applications.',
      color: 'text-brand-peach'
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-brand-gold/20">
          <p className={`text-6xl font-extrabold ${metric.color}`}>
            {metric.value}
          </p>
          <p className="text-lg font-semibold text-brand-dark mt-2">
            {metric.title}
          </p>
          <p className="text-brand-brown mt-1">
            {metric.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default KeyMetrics;