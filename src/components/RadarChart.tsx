import React from 'react';

type Goal = {
  name: string;
  startingValue: number;
  desiredValue: number;
};

type RadarChartProps = {
  goals: Goal[];
};

const RadarChart: React.FC<RadarChartProps> = ({ goals }) => {
  // Use the goals prop to render the radar chart
  if (goals.length === 0) {
    return <div>No goals to display</div>;
  }

  return (
    <div>
      {/* Radar chart implementation */}
      {/* Example: Render goal names */}
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RadarChart;
