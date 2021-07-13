import React from 'react';
import { KeyFact } from './KeyFact';
import { formatNumber } from './utils/formaters';
import './styles.css';

export const ResultSummary = ({ data }) => {
  return (
    <div>
      <h4>Overview</h4>
      <p>
        As of {data.nri_ver}, the total population of tract {data.tract} was{' '}
        <KeyFact fact={formatNumber(data.population)} />. Within this cencus
        tract, the total building value was{' '}
        <KeyFact fact={`${formatNumber(data.buildvalue, '$')}`} />, and the
        total agricultural value was{' '}
        <KeyFact fact={`${formatNumber(data.agrivalue, '$')}`} />.
      </p>
      <p>
        Contributing factors to the overall risk score for this tract included
        were the <KeyFact fact={data.eal_ratng} /> expected annual loss rating
        and a <KeyFact fact={data.sovi_ratng} /> social vulnerability rating.
        The community resiliance in this tract was rated as{' '}
        <KeyFact fact={data.resl_ratng} />.
      </p>
      <p>&nbsp;</p>
    </div>
  );
};
