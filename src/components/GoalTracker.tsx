import React, { useState } from 'react';

const GoalTracker: React.FC = () => {
    const [goal, setGoal] = useState('');
    const [goals, setGoals] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGoal(event.target.value);
    };

    const handleAddGoal = () => {
        if (goal) {
            setGoals([...goals, goal]);
            setGoal('');
        }
    };

    const handleRemoveGoal = (index: number) => {
        const newGoals = goals.filter((_, i) => i !== index);
        setGoals(newGoals);
    };

    return (
        <div className="goal-tracker">
            <h2>Goal Tracker</h2>
            <input 
                type="text" 
                value={goal} 
                onChange={handleInputChange} 
                placeholder="Enter your goal" 
            />
            <button onClick={handleAddGoal}>Add Goal</button>
            <ul>
                {goals.map((g, index) => (
                    <li key={index}>
                        {g} <button onClick={() => handleRemoveGoal(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoalTracker;