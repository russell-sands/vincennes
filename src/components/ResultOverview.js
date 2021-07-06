import React from 'react';
import { ResultHeader } from './ResultHeader';
import { ResultSummary } from './ResultSummary';

export const ResultOverview = ({ data }) => {
  return (
    <>
      <ResultHeader data={data} />
      <ResultSummary data={data} />
    </>
  );
};
