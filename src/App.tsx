import React from 'react';
import './styles/App.css';
import ChatbotGuide from './components/ChatbotGuide';
import GoalTracker from './components/GoalTracker';
import RadarChart from './components/RadarChart';

// Define or import radarData
const radarData = {
  // example radar data; had to prompt again and tweak defaults to get something meaningful
  labels: ['Current Skills', 'Desired Skills'],
  datasets: [
    {
      label: 'Current Skills',
      data: [80, 50, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Desired Skills',
      data: [60, 70, 75],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ]
};

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
