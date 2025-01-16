import React from 'react';
import './styles/App.css';
import ChatbotGuide from './components/ChatbotGuide';
import GoalTracker from './components/GoalTracker';
import RadarChart from './components/RadarChart';

// Define or import radarData
const radarData = {
  // example radar data; had to prompt again and tweak defaults to get something meaningful
  labels: ['Skill 1', 'Skill 2', 'Skill 3'],
  datasets: [
    // {
    //   label: 'Skill 1',
    //   data: [0, 80],
    //   backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //   borderColor: 'rgba(255, 99, 132, 1)',
    //   borderWidth: 1,
    // },
    // {
    //   label: 'Skill 2',
    //   data: [0, 60],
    //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //   borderColor: 'rgba(54, 162, 235, 1)',
    //   borderWidth: 1,
    // },
    // {
    //   label: 'Skill 3',
    //   data: [0,15],
    //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //   borderColor: 'rgba(0, 16, 235, 1)',
    //   borderWidth: 1,
    // },
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
      data: [83, 70, 95],
      backgroundColor: 'rgba(95, 110, 238, 0)',
      borderColor: 'rgb(70, 78, 145)',
      pointBackgroundColor: 'rgb(161, 37, 111)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(135, 106, 135)',
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
