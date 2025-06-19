import React from 'react';
import Header from './components/Header';
import KeyMetrics from './components/KeyMetrics';
import LanguageChart from './components/LanguageChart';
import ToolsChart from './components/ToolsChart';
import ApplicationsChart from './components/ApplicationsChart';
import SpecializedSkills from './components/SpecializedSkills';

function App() {
  return (
    <div className="bg-brand-cream text-brand-dark min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <Header />
        <KeyMetrics />
        
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LanguageChart />
          <ToolsChart />
          <ApplicationsChart />
          <SpecializedSkills />
        </main>
      </div>
    </div>
  );
}

export default App;