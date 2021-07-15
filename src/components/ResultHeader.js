import React from 'react';
import { ScoreBar } from './ScoreBar';
import { KeyFact } from './KeyFact';
import './styles.css';

export const ResultHeaderRated = ({ data }) => {
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

export const ResultHeaderUnrated = ({ data }) => {
  const rating = data.risk_rating ? data.risk_rating : 'not defined';
  return (
    <div className="result-header centered">
      <div>
        <span className="result-header-address">
          Risk Ratings are not available for {data.matchAddr}
        </span>
        <br />
        <br />
        <span className="result-header-content">
          {' '}
          {data.matchAddr} is in Census Tract {data.tract}, where the rating is{' '}
          <KeyFact fact={rating} />.
        </span>
      </div>
    </div>
  );
};
