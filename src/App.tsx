import React from 'react';
import './styles/App.css';
import ChatbotGuide from './components/ChatbotGuide';
import GoalTracker from './components/GoalTracker';
import RadarChart from './components/RadarChart';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Personal and Professional Growth Tracker</h1>
      <RadarChart data={radarData} />
      <GoalTracker />
      <ChatbotGuide />
    </div>
  );
};

export default App;
