import React from 'react';
import { ScoreCell } from './ScoreCell';
import * as Constants from './Constants';

export const ScoreBar = ({ rating }) => {
  return (
    <div className="flex-container-row">
      {Constants.NRI_RATINGS.map((value) => {
        return <ScoreCell key={value} checkValue={value} rating={rating} />;
      })}
    </div>
  );
};
