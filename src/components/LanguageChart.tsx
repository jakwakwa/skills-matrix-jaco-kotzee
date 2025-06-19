import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

const LanguageChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    const chartColors = {
      darkTeal: '#1f3736',
      brown: '#a67244',
      gold: '#d8b08c',
      peach: '#f9b87f',
      teal: '#116964'
    };

    const wrapLabel = (label: string): string | string[] => {
      const maxLength = 16;
      if (label.length <= maxLength) {
        return label;
      }
      const words = label.split(' ');
      const lines: string[] = [];
      let currentLine = '';
      for (const word of words) {
        if ((currentLine + word).length > maxLength) {
          lines.push(currentLine.trim());
          currentLine = '';
        }
        currentLine += word + ' ';
      }
      lines.push(currentLine.trim());
      return lines.filter(line => line);
    };

    const labels = [
      'HTML 5', 
      'UI/UX Design', 
      'CSS / Sass', 
      'JavaScript', 
      'ReactJs', 
      'API (including RESTful)',
      'Styled Components / Emotion',
      'NextJs',
      'Typescript',
      'Redux',
      'Formik- form library',
      'Jest.js',
      'Angular',
      'AWS',
      'React Native'
    ].map(l => wrapLabel(l));

    const data = {
      labels,
      datasets: [{
        label: 'Years of Experience',
        data: [10, 8, 6, 6, 5, 5, 4, 4, 4, 3, 3, 1, 1, 1, 0.5],
        backgroundColor: [
          chartColors.teal, chartColors.brown, chartColors.darkTeal, chartColors.darkTeal, chartColors.darkTeal,
          chartColors.peach, chartColors.darkTeal, chartColors.darkTeal, chartColors.darkTeal, chartColors.darkTeal,
          chartColors.darkTeal, chartColors.gold, chartColors.gold, chartColors.gold, chartColors.gold
        ],
        borderColor: 'rgba(255, 255, 255, 0)',
        borderWidth: 1
      }]
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            title: { display: true, text: 'Years', color: '#a67244' },
            grid: { color: '#d8b08c40' },
            ticks: { color: '#a67244' }
          },
          y: {
            grid: { display: false },
            ticks: { color: '#a67244' }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => {
                const item = tooltipItems[0];
                let label = item.chart.data.labels?.[item.dataIndex];
                if (Array.isArray(label)) {
                  return label.join(' ');
                }
                return label || '';
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 border border-brand-gold/20">
      <h2 className="text-2xl font-bold text-center mb-4 text-brand-dark-teal">
        Language & Framework Proficiency
      </h2>
      <p className="text-center text-brand-brown mb-6 max-w-2xl mx-auto">
        This chart compares my years of hands-on experience across various essential programming languages and frameworks, highlighting a long-term focus on the React ecosystem and core web technologies.
      </p>
      <div className="relative w-full max-w-full mx-auto h-96 md:h-[500px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default LanguageChart;