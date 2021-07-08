import React from 'react';
import { VariableFullName } from './VariableFullName';

export const VariableHeader = ({ variable, rating }) => {
  // Give the header a background color to match the "matched" cell
  const colorClass = 'cell-' + rating.replaceAll(' ', '-').toLowerCase();
  return (
    <>
      <div className={'variable-header ' + colorClass}>
        <VariableFullName variable={variable} />
      </div>
    </>
  );
};
