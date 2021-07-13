import React from 'react';
import { getFullName } from './utils/parsing';

export const VariableFullName = ({ variable }) => {
  return <>{getFullName(variable)} Risk</>;
};
