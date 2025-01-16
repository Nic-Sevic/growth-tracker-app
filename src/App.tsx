import React, { useState } from 'react';
import './styles/App.css';
import ChatbotGuide from './components/ChatbotGuide';
import GoalTracker from './components/GoalTracker';
import RadarChart from './components/RadarChart';

const App: React.FC = () => {
  const [goals, setGoals] = useState<{ name: string; startingValue: number; desiredValue: number }[]>([]);
  const [radarData, setRadarData] = useState({
    labels: ['Skill 1', 'Skill 2', 'Skill 3'],
    datasets: [
      {
        label: 'Starting Skills',
        data: [65, 59, 90],
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
      },
      {
        label: 'Desired Skills',
        data: [80, 70, 95],
        backgroundColor: 'rgba(95, 110, 238, 0)',
        borderColor: 'rgb(70, 78, 145)',
        pointBackgroundColor: 'rgb(161, 37, 111)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(186, 105, 120)',
      },
    ],
  });

  const handleAddGoal = (goal: { name: string; startingValue: number; desiredValue: number }) => {
    setGoals([...goals, goal]);
    setRadarData((prevData) => {
      const newLabels = [...prevData.labels, goal.name];
      const newStartingData = [...prevData.datasets[0].data, goal.startingValue];
      const newDesiredData = [...prevData.datasets[1].data, goal.desiredValue];
      const newDatasets = [
        { ...prevData.datasets[0], data: newStartingData },
        { ...prevData.datasets[1], data: newDesiredData },
      ];
      return { ...prevData, labels: newLabels, datasets: newDatasets };
    });
  };

  const handleRemoveGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index));
    setRadarData((prevData) => {
      const newLabels = prevData.labels.filter((_, i) => i !== index + 3); // Adjust index for initial skills
      const newStartingData = prevData.datasets[0].data.filter((_, i) => i !== index + 3);
      const newDesiredData = prevData.datasets[1].data.filter((_, i) => i !== index + 3);
      const newDatasets = [
        { ...prevData.datasets[0], data: newStartingData },
        { ...prevData.datasets[1], data: newDesiredData },
      ];
      return { ...prevData, labels: newLabels, datasets: newDatasets };
    });
  };

  return (
    <div className="App">
      <h1>Personal and Professional Growth Tracker</h1>
      <RadarChart data={radarData} />
      <GoalTracker goals={goals} onAddGoal={handleAddGoal} onRemoveGoal={handleRemoveGoal} />
      <ChatbotGuide />
    </div>
  );
};

export default App;
