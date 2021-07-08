import React from 'react';
import { ScoreBar } from './ScoreBar';
import './styles.css';

export const ResultHeader = ({ data }) => {
  return (
    <>
      <h1>{`${data.county}, ${data.state}`}</h1>
      <p>{`Census Tract ${data.tract}`}</p>
      <ScoreBar rating={data.risk_ratng} />
    </>
  );
};
