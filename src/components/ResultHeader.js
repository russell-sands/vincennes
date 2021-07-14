import React from 'react';
import { ScoreBar } from './ScoreBar';
import './styles.css';

export const ResultHeader = ({ data }) => {
  return (
    <div className="result-header centered">
      <div>
        <span className="result-header-address">{`${data.matchAddr}`}</span>
        <br />
        <span className="result-header-content">
          {`Overall Risk Rating for Census Tract ${data.tract}`}
          <span className="rating-bar-overall">
            <ScoreBar rating={data.risk_ratng} />
          </span>
        </span>
      </div>
    </div>
  );
};
