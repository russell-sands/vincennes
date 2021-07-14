import React from 'react';
import { ScoreBar } from './ScoreBar';
import './styles.css';

export const ResultHeader = ({ data }) => {
  return (
    <>
      <h1>{`${data.matchAddr}`}</h1>
      <div>
        <p>{`Overall Risk Rating for Census Tract ${data.tract}`}</p>
        <ScoreBar rating={data.risk_ratng} />
      </div>
    </>
  );
};
