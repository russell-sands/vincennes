import React from 'react';
import { getFullName } from './utils/resultParsing';

export const VariableFullName = ({ variable }) => {
  return <>{getFullName(variable)} Risk</>;
};
