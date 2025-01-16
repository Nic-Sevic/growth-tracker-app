import React, { useState } from 'react';

interface GoalTrackerProps {
  goals: { name: string; startingValue: number; desiredValue: number }[];
  onAddGoal: (goal: { name: string; startingValue: number; desiredValue: number }) => void;
  onRemoveGoal: (index: number) => void;
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ goals, onAddGoal, onRemoveGoal }) => {
  const [goalName, setGoalName] = useState('');
  const [startingValue, setStartingValue] = useState<number | ''>('');
  const [desiredValue, setDesiredValue] = useState<number | ''>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoalName(event.target.value);
  };

  const handleStartingValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartingValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleDesiredValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesiredValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleAddGoal = () => {
    if (goalName && startingValue !== '' && desiredValue !== '') {
      onAddGoal({ name: goalName, startingValue: startingValue, desiredValue: desiredValue });
      setGoalName('');
      setStartingValue('');
      setDesiredValue('');
    }
  };

  return (
    <div className="goal-tracker">
      <h2>Goal Tracker</h2>
      <input 
        type="text" 
        value={goalName} 
        onChange={handleNameChange} 
        placeholder="Enter your goal name" 
      />
      <input 
        type="number" 
        value={startingValue} 
        onChange={handleStartingValueChange} 
        placeholder="Enter your starting value" 
      />
      <input 
        type="number" 
        value={desiredValue} 
        onChange={handleDesiredValueChange} 
        placeholder="Enter your desired value" 
      />
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((g, index) => (
          <li key={index}>
            {g.name} (Starting: {g.startingValue}, Desired: {g.desiredValue}) <button onClick={() => onRemoveGoal(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalTracker;
