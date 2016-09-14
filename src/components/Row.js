import React from 'react';
import Cell from './Cell';

const Row = (props) => {
  return (
    <div className="row">
      {props.row.map((cell, i) => <Cell enabled={cell} key={i} />)}
    </div>
  );
};

export default Row;
