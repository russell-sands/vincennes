import React from 'react';
import { formatDecimal, formatNumber } from './utils/formaters';
import './styles.css';

export const ResultSummary = ({ data }) => {
  return (
    <div className="flex-container-row">
      <div className="flex-elem">
        <p>&nbsp;</p>
        <p>Total Population: {formatNumber(data.population)}</p>
        <p>Building Value: ${formatNumber(data.buildvalue)}</p>
        <p>Agricultural Value: ${formatNumber(data.agrivalue)}</p>
        <p>&nbsp;</p>
      </div>
      <div className="flex-elem">
        <p>&nbsp;</p>
        <p>
          Expected Annual Loss: <span>{data.eal_ratng}</span>
        </p>
        <p>
          Social Vulnerability: <span>{data.sovi_ratng}</span>
        </p>
        <p>
          Community Resilience: <span>{data.resl_ratng}</span>
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
};
