import React, { useEffect, useRef } from 'react';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, RadarController } from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, RadarController);

const ToolsChart: React.FC = () => {
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

    const levelToScore: Record<string, number> = {
      'Expert': 5,
      'Experienced': 4,
      'Sufficient': 3,
      'Basic': 2,
      'Junior': 1
    };

    const data = {
      labels: ['GIT version control', 'VSCode', 'Jira', 'Agile', 'Github', 'Bitbucket'],
      datasets: [{
        label: 'Proficiency Level',
        data: [
          levelToScore['Expert'],
          levelToScore['Expert'],
          levelToScore['Experienced'],
          levelToScore['Experienced'],
          levelToScore['Experienced'],
          levelToScore['Experienced']
        ],
        backgroundColor: 'rgba(17, 105, 100, 0.2)',
        borderColor: '#116964',
        pointBackgroundColor: '#116964',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#116964'
      }]
    };

    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          r: {
            angleLines: { color: '#d8b08c40' },
            grid: { color: '#d8b08c40' },
            pointLabels: { font: { size: 12 }, color: '#a67244' },
            ticks: {
              display: false,
              stepSize: 1
            },
            min: 0,
            max: 5
          }
        },
        plugins: {
          legend: { display: false }
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
    <div className="bg-white p-6 rounded-lg shadow-md border border-brand-gold/20">
      <h2 className="text-2xl font-bold text-center mb-4 text-brand-dark-teal">
        Development Tools & Methodologies
      </h2>
      <p className="text-center text-brand-brown mb-6">
        My proficiency across key development tools and methodologies demonstrates a commitment to efficient, collaborative, and structured software development life cycles. Expertise in these areas ensures high-quality outcomes and streamlined workflows.
      </p>
      <div className="relative w-full max-w-full mx-auto h-80 md:h-96">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ToolsChart;