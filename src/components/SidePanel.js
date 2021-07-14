import React from 'react';
import { DisplayInitial } from './DisplayInitial';
import { DisplayResult } from './DisplayResult';
import { DisplayNoData } from './DisplayNoData';

// TODO: Break what is returned out into components

export const SidePanel = ({ data }) => {
  //console.log(typeof data, data);
  return (
    <div className="sidebar-container">
      {(() => {
        console.log(data);
        if (data?.nri_id) {
          return <DisplayResult data={data} />;
        } else if (Object.keys(data).length) {
          return <DisplayNoData address={data.matchAddr} />;
        } else {
          return <DisplayInitial />;
        }
      })()}
    </div>
  );
};
