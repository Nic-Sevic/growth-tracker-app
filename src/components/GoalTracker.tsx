import React, { useState } from 'react';
import RadarChart from './RadarChart'; // Import your RadarChart component

type Goal = {
  name: string;
  startingValue: number;
  desiredValue: number;
};

type GoalTrackerProps = {
  goals: Goal[];
  setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
  onAddGoal: (goal: Goal) => void;
  onRemoveGoal: (index: number) => void;
};

const GoalTracker: React.FC<GoalTrackerProps> = ({ goals, setGoals, onAddGoal, onRemoveGoal }) => {
  const [goalName, setGoalName] = useState('');
  const [startingValue, setStartingValue] = useState<number | string>('');
  const [desiredValue, setDesiredValue] = useState<number | string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

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
      const newGoal = { name: goalName, startingValue: Number(startingValue), desiredValue: Number(desiredValue) };
      onAddGoal(newGoal);
      setGoalName('');
      setStartingValue('');
      setDesiredValue('');
    }
  };

  const handleEditGoal = (index: number) => {
    setEditingIndex(index);
    setGoalName(goals[index].name);
    setStartingValue(goals[index].startingValue);
    setDesiredValue(goals[index].desiredValue);
  };

  const handleUpdateGoal = () => {
    if (editingIndex !== null && goalName && startingValue !== '' && desiredValue !== '') {
      const updatedGoals = [...goals];
      updatedGoals[editingIndex] = { name: goalName, startingValue: Number(startingValue), desiredValue: Number(desiredValue) };
      setGoals(updatedGoals);
      setEditingIndex(null);
      setGoalName('');
      setStartingValue('');
      setDesiredValue('');
    }
  };

  const handleRemoveGoal = (index: number) => {
    onRemoveGoal(index);
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
      {editingIndex === null ? (
        <button onClick={handleAddGoal}>Add Goal</button>
      ) : (
        <button onClick={handleUpdateGoal}>Update Goal</button>
      )}
      <ul>
        {goals.map((g, index) => (
          <li key={index}>
            {g.name} (Starting: {g.startingValue}, Desired: {g.desiredValue}) 
            <button onClick={() => handleEditGoal(index)}>Edit</button>
            <button onClick={() => handleRemoveGoal(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <RadarChart goals={goals} /> {/* Pass the goals to the RadarChart component */}
    </div>
  );
};

export default GoalTracker;
