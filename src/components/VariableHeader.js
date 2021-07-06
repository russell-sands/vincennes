import React from 'react';
import { VariableFullName } from './VariableFullName';
import { ScoreBar } from './ScoreBar';

export const VariableHeader = ({ variable, rating }) => {
  return (
    <>
      <div className="variable-header">
        <p>{rating}</p>
        <VariableFullName variable={variable} />
        <ScoreBar rating={rating} />
      </div>
    </>
  );
};
