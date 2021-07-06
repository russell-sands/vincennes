import React from 'react';
import './styles.css';

export const ScoreCell = ({ checkValue, rating }) => {
  checkValue = checkValue || rating || '';
  //console.log(checkValue, rating);
  const cellClassType = 'cell-' + checkValue.replaceAll(' ', '-').toLowerCase();
  const cellClassMatch =
    checkValue === rating ? 'cell-is-match' : 'cell-no-match';
  const cellText = checkValue === rating ? rating : '\u00A0';
  const classNames = ['cell', cellClassType, cellClassMatch].join(' ');
  return <div className={classNames}>{cellText}</div>;
};
