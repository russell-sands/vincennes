import React from 'react';
import { ScoreCell } from './ScoreCell';

/* TODO: 
- handle the no rating / null / not applicable type scores
 */

export const ScoreBar = ({ rating }) => {
  const checkValues = [
    'Very Low',
    'Relatively Low',
    'Relatively Moderate',
    'Relatively High',
    'Very High',
  ];
  return (
    <div className="flex-container-row">
      {checkValues.map((value) => {
        return <ScoreCell key={value} checkValue={value} rating={rating} />;
      })}
    </div>
  );
};
